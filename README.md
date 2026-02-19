# Number Sensor Card

A refactor of the Big Number Card to a modern Home Assistant Lovelace custom card for large numeric sensor values with:

- severity-based color ranges
- progress fill direction with min/max
- tap, hold, and double-tap actions
- visual editor with severity management

## Installation (HACS)

1. Add this repository as a custom HACS frontend repository.
2. Install **Number Sensor Card**.
3. Add resource:

```yaml
url: /hacsfiles/number-card-ha/dist/number-sensor-card.js
type: module
```

## Card Type

Use:

```yaml
type: custom:number-sensor-card
```

## Example

```yaml
type: custom:number-sensor-card
entity: sensor.power_usage
title: Power
decimals: 1
show_unit: true
legacy_sizing: false
min: 0
max: 5000
fill_direction: left
severity:
  - min: 0
    max: 999.9
    fill_color: "#2e7d32"
    text_color: "#ffffff"
  - min: 1000
    max: 2999.9
    fill_color: "#f9a825"
    text_color: "#000000"
  - min: 3000
    max: 5000
    fill_color: "#c62828"
    text_color: "#ffffff"
tap_action:
  action: more-info
hold_action:
  action: perform-action
  perform_action: light.turn_on
  target:
    entity_id: light.office
```

## Build from Source

```bash
npm install
npm run check
npm run build
```

Build output is generated at `dist/number-sensor-card.js`.

## Migration From v1

Breaking changes in v2:

1. Card type changed from `custom:number-card` to `custom:number-sensor-card`.
2. Legacy option names were removed (`scale`, `hideunit`, `round`, `from`, `noneString`, `bnStyle`, `color`, and similar).
3. Use these replacements:
   - `name` -> `title`
   - `scale` -> `base_size`
   - `hideunit` -> `show_unit` (inverted)
   - `round` -> `decimals`
   - `from` -> `fill_direction`
   - `opacity` -> `unit_opacity`
   - `noneString` -> `none_text`
   - `noneCardClass` -> `none_card_class`
   - `noneValueClass` -> `none_value_class`
4. HACS file now points to `dist/number-sensor-card.js`.

Severity ranges:

- Use `min` and/or `max` per row.
- Ranges are inclusive (`value >= min` and `value <= max`).
- Decimal/float range bounds are supported.

Legacy sizing mode:

- Set `legacy_sizing: true` to disable `getGridOptions()` and use old size-driven behavior.
- In this mode, `base_size`, `value_font_size`, `title_font_size`, and `card_padding` control visual sizing without section grid constraints.
- `card_padding` defaults to `8px`.
