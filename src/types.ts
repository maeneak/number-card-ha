export type FillDirection = "left" | "right" | "top" | "bottom";
export type CardActionType =
  | "more-info"
  | "toggle"
  | "navigate"
  | "url"
  | "assist"
  | "perform-action"
  | "fire-dom-event"
  | "none";

export interface CardActionConfirmation {
  text?: string;
  exemptions?: Array<{ user: string }>;
}

export interface CardActionConfig {
  [key: string]: unknown;
  action: CardActionType;
  entity?: string;
  navigation_path?: string;
  url_path?: string;
  perform_action?: string;
  target?: Record<string, unknown>;
  data?: Record<string, unknown>;
  confirmation?: boolean | CardActionConfirmation;
}

export interface SeverityConfig {
  min?: number;
  max?: number;
  progress_color?: string;
  text_color?: string;
  background_color?: string;
}

export interface NumberSensorCardConfig {
  type: "custom:number-sensor-card";
  entity: string;
  name?: string;
  attribute?: string;
  show_unit?: boolean;
  unit?: string;
  decimals?: number;
  base_size?: string;
  value_font_size?: string;
  title_font_size?: string;
  card_padding?: string;
  legacy_sizing?: boolean;
  unit_opacity?: number;
  min?: number;
  max?: number;
  fill_direction?: FillDirection;
  text_color?: string;
  fill_color?: string;
  background_color?: string;
  none_text?: string;
  none_card_class?: string;
  none_value_class?: string;
  severity?: SeverityConfig[];
  tap_action?: CardActionConfig;
  hold_action?: CardActionConfig;
  double_tap_action?: CardActionConfig;
}

export interface NormalizedNumberSensorCardConfig extends NumberSensorCardConfig {
  show_unit: boolean;
  base_size: string;
  legacy_sizing: boolean;
  fill_direction: FillDirection;
  unit_opacity: number;
  severity: SeverityConfig[];
  tap_action: CardActionConfig;
  hold_action: CardActionConfig;
  double_tap_action: CardActionConfig;
}
