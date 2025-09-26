# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2025-09-26

### Changed
- **BREAKING**: Migrated from TSDX to tsup for faster builds
- **BREAKING**: Now ESM-only package (no CommonJS support)
- **BREAKING**: Minimum Node.js version is now 18+
- **BREAKING**: Updated React peer dependency to 18+
- Updated TypeScript to v5.6.2
- Updated Storybook to v8.3.5 with Vite integration
- Migrated from Jest to Vitest for testing
- Updated ESLint configuration to modern standards
- Updated all dependencies to latest stable versions

### Added
- Modern tsup build configuration with tree-shaking support
- Vitest for faster test execution with native ESM support
- Development guide (`DEVELOPMENT.md`)
- Modern `.gitignore` with comprehensive patterns
- `.nvmrc` for Node.js version management
- `.npmrc` for npm configuration
- Enhanced TypeScript configuration with stricter type checking
- Support for `isolatedModules` compilation

### Fixed
- Fixed duration prop usage in Spin component
- Removed invalid `crossOrigin` attributes from SVG elements
- Fixed TypeScript type re-exports with proper `export type` syntax

### Removed
- TSDX dependency and configuration
- CommonJS build output
- Legacy Babel configuration
- Husky pre-commit hooks (can be re-added if needed)
- Jest configuration

## [2.1.0] - Previous versions

Previous versions used TSDX for building and Jest for testing. See git history for details.