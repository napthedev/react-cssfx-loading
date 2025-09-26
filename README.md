# React CSSFx Loading

## React wrapper for the CSSFx collection (loading animation only)

Original Design and Code: [https://cssfx.netlify.app/](https://cssfx.netlify.app/)

## Preview

![Preview](https://res.cloudinary.com/naptest/image/upload/v1634719726/cssfx_ecuj37.gif)

## Live demo

Demo: [https://react-cssfx.surge.sh/](https://react-cssfx.surge.sh/)  
Storybook: [https://cssfx-storybook.vercel.app/](https://cssfx-storybook.vercel.app/)

## Installation

```bash
npm install react-cssfx-loading
# or
yarn add react-cssfx-loading
# or
pnpm add react-cssfx-loading
```

## Usage

```typescript
// Import Components (Tree shakable)
import { BarWave } from "react-cssfx-loading";

// Basic usage
<BarWave />

// With props
<BarWave 
  color="#FF0000" 
  width="100px" 
  height="100px" 
  duration="3s" 
/>

// Supports all HTML div element props
<BarWave 
  onClick={() => alert("Clicked")} 
  className="my-custom-class"
  style={{ margin: "20px" }}
/>
```

## Available Components

All components support the following common props:
- `color` - Animation color (default: `#0d6efd`)
- `width` - Component width (default varies per component)
- `height` - Component height (default varies per component)
- `duration` - Animation duration (default: `1s`)
- `className` - Additional CSS class
- `style` - Inline styles
- All standard HTML div attributes

### Component List
- `BarWave`
- `BouncingBalls`
- `CircularProgress`
- `Coin`
- `FadingBalls`
- `FadingDots`
- `FillingBottle`
- `FlippingSquare`
- `Hypnosis`
- `Messaging`
- `Ring`
- `Spin`
- `SpinStretch`
- `TwinSpin`
