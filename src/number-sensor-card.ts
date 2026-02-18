import { LitElement, css, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import type { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import "./number-sensor-card-editor";
import type {
  NormalizedNumberSensorCardConfig,
  NumberSensorCardConfig
} from "./types";
import {
  formatValue,
  normalizeConfig,
  resolveColors,
  toFiniteNumber,
  toPercent
} from "./utils";
import { hasAction, runAction } from "./actions";

interface NumberSensorCardEditorElement extends LovelaceCardEditor, HTMLElement {
  setConfig(config: NumberSensorCardConfig): void;
}

declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      preview: boolean;
      description: string;
      documentationURL?: string;
    }>;
  }
}

@customElement("number-sensor-card")
export class NumberSensorCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: NormalizedNumberSensorCardConfig;
  private _holdTimeout?: number;
  private _singleTapTimeout?: number;
  private _holdTriggered = false;

  public static getConfigElement(): NumberSensorCardEditorElement {
    return document.createElement(
      "number-sensor-card-editor"
    ) as NumberSensorCardEditorElement;
  }

  public static getStubConfig(hass?: HomeAssistant): NumberSensorCardConfig {
    const fallbackEntity =
      hass &&
      Object.keys(hass.states).find((entityId) => entityId.startsWith("sensor."));
    return {
      type: "custom:number-sensor-card",
      entity: fallbackEntity ?? ""
    };
  }

  public setConfig(config: NumberSensorCardConfig): void {
    this._config = normalizeConfig(config);
  }

  public getCardSize(): number {
    return 1;
  }

  public getGridOptions() {
    return {
      columns: 4,
      rows: 2,
      min_rows: 1
    };
  }

  private async _triggerAction(action: "tap" | "hold" | "double_tap") {
    if (!this.hass || !this._config) {
      return;
    }
    await runAction(this, this.hass, this._config, action);
  }

  private _onPointerDown = () => {
    if (!this._config || !hasAction(this._config.hold_action)) {
      return;
    }
    window.clearTimeout(this._holdTimeout);
    this._holdTriggered = false;
    this._holdTimeout = window.setTimeout(() => {
      this._holdTriggered = true;
      void this._triggerAction("hold");
    }, 500);
  };

  private _onPointerUp = () => {
    window.clearTimeout(this._holdTimeout);
  };

  private _onClick = () => {
    if (!this._config) {
      return;
    }
    if (this._holdTriggered) {
      this._holdTriggered = false;
      return;
    }
    if (hasAction(this._config.double_tap_action)) {
      window.clearTimeout(this._singleTapTimeout);
      this._singleTapTimeout = window.setTimeout(() => {
        void this._triggerAction("tap");
      }, 250);
      return;
    }
    void this._triggerAction("tap");
  };

  private _onDoubleClick = () => {
    if (!this._config || !hasAction(this._config.double_tap_action)) {
      return;
    }
    window.clearTimeout(this._singleTapTimeout);
    void this._triggerAction("double_tap");
  };

  private _onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    void this._triggerAction("tap");
  }

  protected render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    const entity = this.hass.states[this._config.entity];
    if (!entity) {
      return html`
        <ha-card>
          <div class="missing">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;
    }

    const rawValue = this._config.attribute
      ? entity.attributes[this._config.attribute]
      : entity.state;
    const numericValue = toFiniteNumber(rawValue);
    const unavailable = numericValue === null;

    const title =
      this._config.name || entity.attributes.friendly_name || this._config.entity;
    const displayText = unavailable
      ? this._config.none_text ?? String(rawValue ?? "")
      : formatValue(rawValue, this._config.decimals, this.hass.locale.language);
    const unit = this._config.unit ?? entity.attributes.unit_of_measurement ?? "";
    const showUnit =
      this._config.show_unit && !unavailable && typeof unit === "string" && unit !== "";

    const percent =
      numericValue === null
        ? null
        : toPercent(numericValue, this._config.min, this._config.max);
    const colors = resolveColors(this._config, numericValue);

    const cssVars: Record<string, string> = {
      "--number-card-text-color": colors.text,
      "--number-card-fill-color": colors.fill,
      "--number-card-background-color": colors.background,
      "--number-card-direction": this._config.fill_direction,
      "--number-card-base-size": this._config.base_size,
      "--number-card-value-font-size":
        this._config.value_font_size ?? "calc(var(--number-card-base-size) * 1.3)",
      "--number-card-title-font-size":
        this._config.title_font_size ?? "calc(var(--number-card-base-size) * 0.5)",
      "--number-card-padding":
        this._config.card_padding ??
        "calc(var(--number-card-base-size) * 0.6) calc(var(--number-card-base-size) * 0.3)",
      "--number-card-unit-opacity": String(this._config.unit_opacity),
      "--number-card-percent": `${percent ?? 100}%`
    };

    const hasAnyAction =
      hasAction(this._config.tap_action) ||
      hasAction(this._config.hold_action) ||
      hasAction(this._config.double_tap_action);
    const cardClasses = {
      unavailable:
        unavailable &&
        !this._config.none_card_class &&
        !this._config.none_value_class
    };
    const valueClass = classMap({
      unavailable,
      [this._config.none_value_class ?? ""]: unavailable && !!this._config.none_value_class
    });
    const cardClass = classMap({
      ...cardClasses,
      [this._config.none_card_class ?? ""]: unavailable && !!this._config.none_card_class
    });

    return html`
      <ha-card
        class=${cardClass}
        style=${styleMap(cssVars)}
        tabindex=${hasAnyAction ? "0" : "-1"}
        role=${hasAnyAction ? "button" : "presentation"}
        @pointerdown=${this._onPointerDown}
        @pointerup=${this._onPointerUp}
        @pointercancel=${this._onPointerUp}
        @pointerleave=${this._onPointerUp}
        @click=${this._onClick}
        @dblclick=${this._onDoubleClick}
        @keydown=${this._onKeyDown}
      >
        <div class="value ${valueClass}">
          <span>${displayText}</span>
          ${showUnit ? html`<small>${unit}</small>` : nothing}
        </div>
        <div class="title">${title}</div>
      </ha-card>
    `;
  }

  static styles = css`
    ha-card {
      text-align: center;
      color: var(--number-card-text-color);
      padding: var(--number-card-padding);
      background: linear-gradient(
        to var(--number-card-direction),
        var(--number-card-background-color) var(--number-card-percent),
        var(--number-card-fill-color) var(--number-card-percent)
      );
      transition: background 180ms ease, color 180ms ease;
    }

    .value {
      font-size: var(--number-card-value-font-size);
      line-height: 1.1;
      font-weight: 600;
    }

    .value small {
      margin-left: 0.25em;
      opacity: var(--number-card-unit-opacity);
      font-size: 0.45em;
      font-weight: 500;
    }

    .title {
      margin-top: 0.35em;
      font-size: var(--number-card-title-font-size);
      line-height: 1.1;
    }

    .missing {
      padding: 16px;
      color: var(--error-color);
    }
  `;
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "number-sensor-card",
  name: "Number Sensor Card",
  preview: true,
  description: "Displays a large number with optional severity colors and actions."
});
