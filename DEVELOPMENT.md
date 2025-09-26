# Development Guide

This project uses modern tooling for React component library development.

## Prerequisites

- Node.js >= 18
- npm >= 9

## Project Structure

```
src/                    # Source code
├── *.tsx              # React components
├── index.tsx          # Main exports
├── index.test.tsx     # Tests
└── test/setup.ts      # Test setup

stories/               # Storybook stories
dist/                  # Built output (generated)
.storybook/           # Storybook configuration
```

## Development Tools

- **tsup** - Fast TypeScript bundler for building the library
- **Vitest** - Modern test runner for unit tests
- **Storybook 8** - Component development and documentation
- **ESLint + Prettier** - Code linting and formatting
- **TypeScript 5** - Type checking

## Available Scripts

### Development
```bash
npm run dev          # Watch mode build with tsup
npm run storybook    # Start Storybook development server
```

### Building
```bash
npm run build        # Production build
npm run build-storybook  # Build Storybook for deployment
```

### Testing & Quality
```bash
npm test             # Run tests with Vitest
npm run test:watch   # Run tests in watch mode
npm run lint         # Lint and fix code with ESLint
npm run type-check   # TypeScript type checking
```

## Adding New Components

1. Create component file in `src/ComponentName.tsx`
2. Export from `src/index.tsx`
3. Create story in `stories/ComponentName.stories.tsx`
4. Add to test in `src/index.test.tsx`

### Component Template

```typescript
import { css, keyframes } from "goober";
import React from "react";

const animation = keyframes`
  // keyframes here
`;

export interface ComponentNameProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const ComponentName: React.FC<ComponentNameProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "2rem",
  height = "2rem",
  style = {},
  duration = "1s",
  ...others
}) => {
  const resolvedWidth = typeof width === "number" ? `${width}px` : width;
  const resolvedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      {...others}
      style={style}
      className={
        css`
          // styles here
          animation: ${animation} ${duration} ease-in-out infinite;
        ` + ` ${className}`
      }
    >
      {/* content */}
    </div>
  );
};

export default ComponentName;
```

## CI/CD

The project uses GitHub Actions for continuous integration:

- **`.github/workflows/main.yml`** - Runs on push and PR, tests on Node 18 & 20
- **`.github/workflows/size.yml`** - Checks bundle size on pull requests

The CI pipeline runs:
1. Type checking with TypeScript
2. Code linting with ESLint
3. Unit tests with Vitest 
4. Production build with tsup

## Publishing

The package uses modern ESM-only build with proper TypeScript declarations.

```bash
npm run build
npm publish
```

## Migration Notes

This project was migrated from TSDX to modern tooling:

- **Build**: TSDX → tsup (faster, simpler)
- **Tests**: Jest → Vitest (faster, native ESM)
- **Storybook**: v6 → v8 (latest features)
- **Output**: CJS/ESM → ESM only (modern standard)
- **Dependencies**: Updated to latest stable versions

The build output is now ESM-only, which is the modern standard for npm packages. The package supports tree-shaking and is optimized for modern bundlers.