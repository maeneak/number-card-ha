import type {
  NormalizedNumberSensorCardConfig,
  NumberSensorCardConfig,
  SeverityConfig
} from "./types";

const DEFAULT_TEXT_COLOR = "var(--primary-text-color)";
const DEFAULT_FILL_COLOR = "var(--label-badge-blue)";
const DEFAULT_BACKGROUND_COLOR = "var(--card-background-color)";

const DEFAULT_CONFIG: Omit<
  NormalizedNumberSensorCardConfig,
  "entity" | "type"
> = {
  show_unit: true,
  base_size: "50px",
  legacy_sizing: false,
  fill_direction: "left",
  unit_opacity: 0.5,
  severity: [],
  tap_action: { action: "more-info" },
  hold_action: { action: "none" },
  double_tap_action: { action: "none" }
};

export const ACTION_OPTIONS = [
  { value: "more-info", label: "More Info" },
  { value: "toggle", label: "Toggle" },
  { value: "navigate", label: "Navigate" },
  { value: "url", label: "Open URL" },
  { value: "assist", label: "Assist" },
  { value: "perform-action", label: "Perform Action" },
  { value: "none", label: "None" }
];

export function normalizeConfig(
  config: NumberSensorCardConfig
): NormalizedNumberSensorCardConfig {
  if (!config.entity?.trim()) {
    throw new Error("Entity is required");
  }

  const severity = (config.severity ?? [])
    .filter(
      (item) =>
        Number.isFinite(item.min) ||
        Number.isFinite(item.max)
    )
    .map((item) => ({
      min: toRangeBound(item.min),
      max: toRangeBound(item.max),
      progress_color: item.progress_color?.trim() || undefined,
      text_color: item.text_color?.trim() || undefined,
      background_color: item.background_color?.trim() || undefined
    }))
    .sort((a, b) => {
      const aMin = a.min ?? Number.NEGATIVE_INFINITY;
      const bMin = b.min ?? Number.NEGATIVE_INFINITY;
      if (aMin !== bMin) {
        return aMin - bMin;
      }
      const aMax = a.max ?? Number.POSITIVE_INFINITY;
      const bMax = b.max ?? Number.POSITIVE_INFINITY;
      return aMax - bMax;
    });

  return {
    ...DEFAULT_CONFIG,
    ...config,
    type: "custom:number-sensor-card",
    entity: config.entity.trim(),
    fill_direction: config.fill_direction ?? DEFAULT_CONFIG.fill_direction,
    base_size: config.base_size?.trim() || DEFAULT_CONFIG.base_size,
    legacy_sizing: config.legacy_sizing ?? DEFAULT_CONFIG.legacy_sizing,
    show_unit: config.show_unit ?? DEFAULT_CONFIG.show_unit,
    unit_opacity: clamp(config.unit_opacity ?? DEFAULT_CONFIG.unit_opacity, 0, 1),
    tap_action: config.tap_action ?? DEFAULT_CONFIG.tap_action,
    hold_action: config.hold_action ?? DEFAULT_CONFIG.hold_action,
    double_tap_action:
      config.double_tap_action ?? DEFAULT_CONFIG.double_tap_action,
    severity
  };
}

export function toFiniteNumber(value: unknown): number | null {
  if (value === null || value === undefined) {
    return null;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function formatValue(
  value: unknown,
  decimals: number | undefined,
  language?: string
): string {
  const numeric = toFiniteNumber(value);
  if (numeric === null) {
    return String(value ?? "");
  }

  const options: Intl.NumberFormatOptions = {};
  if (Number.isInteger(decimals) && decimals !== undefined) {
    options.minimumFractionDigits = decimals;
    options.maximumFractionDigits = decimals;
  }

  return new Intl.NumberFormat(language, options).format(numeric);
}

export function toPercent(
  value: number,
  min: number | undefined,
  max: number | undefined
): number | null {
  if (min === undefined || max === undefined || min === max) {
    return null;
  }
  const percent = 100 - (100 * (value - min)) / (max - min);
  return clamp(percent, 0, 100);
}

function matchSeverity(
  value: number,
  severity: SeverityConfig[]
): SeverityConfig | null {
  for (const section of severity) {
    const min = section.min ?? Number.NEGATIVE_INFINITY;
    const max = section.max ?? Number.POSITIVE_INFINITY;
    if (value >= min && value <= max) {
      return section;
    }
  }
  return null;
}

export function resolveColors(
  config: NormalizedNumberSensorCardConfig,
  value: number | null
): { text: string; valueText: string; fill: string; background: string } {
  const matched = value === null ? null : matchSeverity(value, config.severity);
  const cardText = config.text_color ?? DEFAULT_TEXT_COLOR;
  return {
    text: cardText,
    valueText: matched?.text_color ?? cardText,
    fill: matched?.progress_color ?? config.fill_color ?? DEFAULT_FILL_COLOR,
    background:
      matched?.background_color ??
      config.background_color ??
      DEFAULT_BACKGROUND_COLOR
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function toRangeBound(value: unknown): number | undefined {
  return Number.isFinite(value) ? Number(value) : undefined;
}

export function pruneEmpty<T extends Record<string, unknown>>(obj: T): T {
  const output: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null) {
      continue;
    }
    if (typeof value === "string" && value.trim() === "") {
      continue;
    }
    output[key] = value;
  }
  return output as T;
}
