import { LitElement, css, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import type {
  CardActionConfig,
  NumberSensorCardConfig,
  SeverityConfig
} from "./types";
import { ACTION_OPTIONS, pruneEmpty } from "./utils";

type ActionKey = "tap_action" | "hold_action" | "double_tap_action";

interface ValueChangedEvent<T> extends Event {
  detail: {
    value: T;
  };
}

const DEFAULT_EDITOR_CONFIG: NumberSensorCardConfig = {
  type: "custom:number-sensor-card",
  entity: "",
  show_unit: true,
  base_size: "50px",
  legacy_sizing: false,
  unit_opacity: 0.5,
  fill_direction: "left",
  tap_action: { action: "more-info" },
  hold_action: { action: "none" },
  double_tap_action: { action: "none" },
  severity: []
};

@customElement("number-sensor-card-editor")
export class NumberSensorCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config: NumberSensorCardConfig = { ...DEFAULT_EDITOR_CONFIG };

  private get _value(): NumberSensorCardConfig {
    return { ...DEFAULT_EDITOR_CONFIG, ...this._config };
  }

  public setConfig(config: NumberSensorCardConfig): void {
    this._config = {
      ...DEFAULT_EDITOR_CONFIG,
      ...config,
      type: "custom:number-sensor-card",
      severity: config.severity ?? []
    };
  }

  protected render() {
    if (!this.hass) {
      return nothing;
    }

    const config = this._value;
    return html`
      <div class="editor">
        ${this._renderForm("Basic", this._basicSchema, config)}
        ${this._renderForm("Display", this._displaySchema, config)}
        ${this._renderForm("Sizing", this._sizingSchema, config)}
        ${this._renderForm("Progress", this._progressSchema, config)}
        ${this._renderForm("Colors", this._colorSchema, config)}
        ${this._renderForm("Unavailable State", this._noneSchema, config)}
        ${this._renderActions()}
        ${this._renderSeverity()}
      </div>
    `;
  }

  private _renderForm(
    title: string,
    schema: Array<Record<string, unknown>>,
    data: NumberSensorCardConfig
  ) {
    return html`
      <ha-expansion-panel .header=${title} .outlined=${true}>
        <ha-form
          .hass=${this.hass}
          .schema=${schema}
          .data=${data}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._handleFormValueChanged}
        ></ha-form>
      </ha-expansion-panel>
    `;
  }

  private _renderActions() {
    return html`
      <ha-expansion-panel .header=${"Actions"} .outlined=${true}>
        <div class="section">
          ${this._renderActionEditor("Tap Action", "tap_action")}
          ${this._renderActionEditor("Hold Action", "hold_action")}
          ${this._renderActionEditor("Double Tap Action", "double_tap_action")}
        </div>
      </ha-expansion-panel>
    `;
  }

  private _renderActionEditor(title: string, key: ActionKey) {
    const actionConfig = this._getActionConfig(key);
    const action = actionConfig.action ?? "none";
    const hasConfirmation = Boolean(actionConfig.confirmation);
    const confirmationText =
      typeof actionConfig.confirmation === "object" &&
      actionConfig.confirmation !== null
        ? String((actionConfig.confirmation as Record<string, unknown>).text ?? "")
        : "";

    return html`
      <div class="action-editor">
        <h4>${title}</h4>
        <label>
          Action
          <select
            .value=${action}
            @change=${(event: Event) =>
              this._setActionType(
                key,
                (event.target as HTMLSelectElement).value
              )}
          >
            ${ACTION_OPTIONS.map(
              (option) =>
                html`<option value=${option.value}>${option.label}</option>`
            )}
          </select>
        </label>

        ${action === "navigate"
          ? this._renderTextField(
              "Navigation Path",
              String(actionConfig.navigation_path ?? ""),
              (value) => this._setActionField(key, "navigation_path", value)
            )
          : nothing}

        ${action === "url"
          ? this._renderTextField("URL", String(actionConfig.url_path ?? ""), (value) =>
              this._setActionField(key, "url_path", value)
            )
          : nothing}

        ${action === "perform-action"
          ? html`
              ${this._renderTextField(
                "Perform Action",
                String(actionConfig.perform_action ?? ""),
                (value) => this._setActionField(key, "perform_action", value)
              )}
              <ha-selector
                .hass=${this.hass}
                .selector=${{ object: {} }}
                .value=${(actionConfig.target as Record<string, unknown>) ?? {}}
                .label=${"Target"}
                @value-changed=${(event: ValueChangedEvent<Record<string, unknown>>) =>
                  this._setActionField(key, "target", event.detail.value)}
              ></ha-selector>
              <ha-selector
                .hass=${this.hass}
                .selector=${{ object: {} }}
                .value=${(actionConfig.data as Record<string, unknown>) ?? {}}
                .label=${"Data"}
                @value-changed=${(event: ValueChangedEvent<Record<string, unknown>>) =>
                  this._setActionField(key, "data", event.detail.value)}
              ></ha-selector>
            `
          : nothing}

        <div class="confirmation-row">
          <span>Require confirmation</span>
          <ha-switch
            .checked=${hasConfirmation}
            @change=${(event: Event) =>
              this._setConfirmationEnabled(
                key,
                (event.target as HTMLInputElement).checked
              )}
          ></ha-switch>
        </div>

        ${hasConfirmation
          ? this._renderTextField("Confirmation Text", confirmationText, (value) =>
              this._setConfirmationText(key, value)
            )
          : nothing}
      </div>
    `;
  }

  private _renderSeverity() {
    const severity = this._value.severity ?? [];
    return html`
      <ha-expansion-panel .header=${"Severity"} .outlined=${true}>
        <div class="section">
          ${severity.map(
            (item, index) => html`
              <div class="severity-row">
                <ha-textfield
                  .label=${"Min"}
                  .type=${"number"}
                  .value=${item.min !== undefined ? String(item.min) : ""}
                  @input=${(event: Event) =>
                    this._updateSeverityField(
                      index,
                      "min",
                      (event.target as HTMLInputElement).value
                    )}
                ></ha-textfield>
                <ha-textfield
                  .label=${"Max"}
                  .type=${"number"}
                  .value=${item.max !== undefined ? String(item.max) : ""}
                  @input=${(event: Event) =>
                    this._updateSeverityField(
                      index,
                      "max",
                      (event.target as HTMLInputElement).value
                    )}
                ></ha-textfield>
                <ha-textfield
                  .label=${"Fill Color"}
                  .value=${item.fill_color ?? ""}
                  @input=${(event: Event) =>
                    this._updateSeverityField(
                      index,
                      "fill_color",
                      (event.target as HTMLInputElement).value
                    )}
                ></ha-textfield>
                <ha-textfield
                  .label=${"Text Color"}
                  .value=${item.text_color ?? ""}
                  @input=${(event: Event) =>
                    this._updateSeverityField(
                      index,
                      "text_color",
                      (event.target as HTMLInputElement).value
                    )}
                ></ha-textfield>
                <ha-textfield
                  .label=${"Background Color"}
                  .value=${item.background_color ?? ""}
                  @input=${(event: Event) =>
                    this._updateSeverityField(
                      index,
                      "background_color",
                      (event.target as HTMLInputElement).value
                    )}
                ></ha-textfield>
                <button
                  type="button"
                  class="remove"
                  @click=${() => this._removeSeverity(index)}
                >
                  Remove
                </button>
              </div>
            `
          )}
          <button type="button" class="add" @click=${this._addSeverity}>
            Add Severity Level
          </button>
        </div>
      </ha-expansion-panel>
    `;
  }

  private _renderTextField(
    label: string,
    value: string,
    onInput: (value: string) => void
  ) {
    return html`
      <ha-textfield
        .label=${label}
        .value=${value}
        @input=${(event: Event) => onInput((event.target as HTMLInputElement).value)}
      ></ha-textfield>
    `;
  }

  private _setActionType(key: ActionKey, action: string) {
    this._setConfigValue(key, { action } as CardActionConfig);
  }

  private _setActionField(key: ActionKey, field: string, value: unknown) {
    const actionConfig = { ...this._getActionConfig(key), [field]: value };
    this._setConfigValue(key, pruneEmpty(actionConfig) as CardActionConfig);
  }

  private _setConfirmationEnabled(key: ActionKey, enabled: boolean) {
    const actionConfig = { ...this._getActionConfig(key) } as CardActionConfig;
    if (!enabled) {
      delete actionConfig.confirmation;
    } else if (!actionConfig.confirmation) {
      actionConfig.confirmation = true;
    }
    this._setConfigValue(key, actionConfig);
  }

  private _setConfirmationText(key: ActionKey, text: string) {
    const actionConfig = { ...this._getActionConfig(key) } as CardActionConfig;
    const trimmed = text.trim();
    actionConfig.confirmation = trimmed ? { text: trimmed } : true;
    this._setConfigValue(key, actionConfig);
  }

  private _getActionConfig(key: ActionKey): CardActionConfig {
    const fallback: CardActionConfig =
      key === "tap_action" ? { action: "more-info" } : { action: "none" };
    return {
      ...fallback,
      ...((this._value[key] as CardActionConfig | undefined) ?? {})
    };
  }

  private _addSeverity = () => {
    const severity = [...(this._value.severity ?? [])];
    severity.push({ min: 0, max: 0 });
    this._setConfigValue("severity", severity);
  };

  private _removeSeverity(index: number) {
    const severity = [...(this._value.severity ?? [])];
    severity.splice(index, 1);
    this._setConfigValue("severity", severity);
  }

  private _updateSeverityField(
    index: number,
    field: keyof SeverityConfig,
    value: number | string
  ) {
    const severity = [...(this._value.severity ?? [])];
    const current = { ...severity[index] };
    if (field === "min" || field === "max") {
      current[field] = this._parseOptionalNumber(value);
    } else {
      const trimmed = String(value).trim();
      current[field] = trimmed || undefined;
    }
    severity[index] = current;
    this._setConfigValue("severity", severity);
  }

  private _parseOptionalNumber(value: number | string): number | undefined {
    if (typeof value === "string" && value.trim() === "") {
      return undefined;
    }
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  }

  private _handleFormValueChanged = (
    event: ValueChangedEvent<Partial<NumberSensorCardConfig>>
  ) => {
    this._setConfigValueObject(event.detail.value);
  };

  private _setConfigValueObject(patch: Partial<NumberSensorCardConfig>) {
    this._setConfigValue(null, patch);
  }

  private _setConfigValue(
    key: keyof NumberSensorCardConfig | null,
    value: unknown
  ) {
    const nextConfig = { ...this._value };
    if (key === null) {
      Object.assign(nextConfig, value);
    } else {
      (nextConfig as Record<string, unknown>)[key] = value;
    }

    const cleaned = pruneEmpty(nextConfig);
    cleaned.type = "custom:number-sensor-card";
    if (!("show_unit" in cleaned)) {
      cleaned.show_unit = true;
    }
    if (!("severity" in cleaned)) {
      cleaned.severity = [];
    }
    this._config = cleaned as NumberSensorCardConfig;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true
      })
    );
  }

  private _computeLabel = (schema: { name: string }) => {
    const labels: Record<string, string> = {
      entity: "Entity",
      name: "Name",
      attribute: "Attribute",
      show_unit: "Show Unit",
      unit: "Unit Override",
      decimals: "Decimals",
      base_size: "Base Size",
      legacy_sizing: "Legacy Sizing (Ignore HA Grid Options)",
      value_font_size: "Value Font Size",
      title_font_size: "Title Font Size",
      card_padding: "Card Padding",
      unit_opacity: "Unit Opacity",
      min: "Minimum",
      max: "Maximum",
      fill_direction: "Fill Direction",
      text_color: "Text Color",
      fill_color: "Fill Color",
      background_color: "Background Color",
      none_text: "Unavailable Text",
      none_card_class: "Unavailable Card Class",
      none_value_class: "Unavailable Value Class"
    };
    return labels[schema.name] ?? schema.name;
  };

  private readonly _basicSchema = [
    { name: "entity", required: true, selector: { entity: {} } },
    { name: "name", selector: { text: {} } },
    { name: "attribute", selector: { text: {} } }
  ];

  private readonly _displaySchema = [
    { name: "show_unit", selector: { boolean: {} } },
    { name: "unit", selector: { text: {} } },
    { name: "decimals", selector: { number: { mode: "box", min: 0, max: 10 } } }
  ];

  private readonly _sizingSchema = [
    { name: "base_size", selector: { text: {} } },
    { name: "legacy_sizing", selector: { boolean: {} } },
    { name: "value_font_size", selector: { text: {} } },
    { name: "title_font_size", selector: { text: {} } },
    { name: "card_padding", selector: { text: {} } },
    {
      name: "unit_opacity",
      selector: { number: { mode: "box", min: 0, max: 1, step: 0.05 } }
    }
  ];

  private readonly _progressSchema = [
    { name: "min", selector: { number: { mode: "box" } } },
    { name: "max", selector: { number: { mode: "box" } } },
    {
      name: "fill_direction",
      selector: {
        select: {
          mode: "dropdown",
          options: [
            { value: "left", label: "Left to Right" },
            { value: "right", label: "Right to Left" },
            { value: "top", label: "Top to Bottom" },
            { value: "bottom", label: "Bottom to Top" }
          ]
        }
      }
    }
  ];

  private readonly _colorSchema = [
    { name: "text_color", selector: { text: {} } },
    { name: "fill_color", selector: { text: {} } },
    { name: "background_color", selector: { text: {} } }
  ];

  private readonly _noneSchema = [
    { name: "none_text", selector: { text: {} } },
    { name: "none_card_class", selector: { text: {} } },
    { name: "none_value_class", selector: { text: {} } }
  ];

  static styles = css`
    :host {
      display: block;
      padding: 8px 0;
    }

    .editor {
      display: grid;
      gap: 8px;
    }

    ha-form {
      display: block;
      padding: 12px;
    }

    .section {
      padding: 12px;
      display: grid;
      gap: 12px;
    }

    .action-editor {
      display: grid;
      gap: 8px;
      padding: 10px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
    }

    .action-editor h4 {
      margin: 0;
      font-size: 14px;
    }

    label {
      display: grid;
      gap: 6px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }

    select {
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      padding: 8px;
      font-size: 14px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
    }

    .confirmation-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
    }

    .severity-row {
      display: grid;
      grid-template-columns: repeat(5, minmax(120px, 1fr)) auto;
      gap: 8px;
      align-items: end;
    }

    button {
      border: none;
      border-radius: 6px;
      padding: 8px 10px;
      cursor: pointer;
      font-size: 13px;
    }

    button.add {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      justify-self: start;
    }

    button.remove {
      background: var(--error-color);
      color: #fff;
    }
  `;
}
