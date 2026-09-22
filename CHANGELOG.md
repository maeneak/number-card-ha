# Changelog

## 2.1.0

### Added

- `binary_sensor` entity support: state text is localized via the entity's device class, with severity/progress handling skipped for non-numeric states.

### Fixed

- Severity levels added from the visual editor showed no input boxes. Each level is now rendered with `ha-form` (number selectors for min/max, text selectors for the colors) inside its own bordered row, instead of bare `ha-textfield` elements in a fixed six-column grid that overflowed the editor panel.
- Decimal handling for formatted values.

## 2.0.0

### Breaking

- Migrated card type to `custom:number-sensor-card`.
- Removed backward compatibility for legacy config keys.
- Renamed config property `name` to `title`.
- Changed HACS artifact to `dist/number-sensor-card.js`.
- Rebuilt implementation as Lit + TypeScript with modern action handling.

### Added

- Rollup-based build pipeline and local quality scripts (`lint`, `typecheck`, `check`).
- Visual editor rewritten in Lit with severity row editing.
- Support for tap/hold/double-tap actions using Home Assistant action helpers.
- Section-grid sizing support via `getGridOptions()`.

### Changed

- Safe rendering path for value/unit (no `innerHTML`).
- Unified and normalized v2 schema naming.
- Severity model uses `min`/`max` ranges (inclusive) with decimal support.
- Added `legacy_sizing` option to disable `getGridOptions()` and use old sizing behavior.
