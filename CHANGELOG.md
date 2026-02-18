# Changelog

## 2.0.0

### Breaking

- Migrated card type to `custom:number-sensor-card`.
- Removed backward compatibility for legacy config keys.
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
