# React CSSFx Loading

## React wrapper for the CSSFx collection (loading animation only)

Original Design and Code: [https://cssfx.netlify.app/](https://cssfx.netlify.app/)

## Preview

![Preview](https://res.cloudinary.com/naptest/image/upload/v1634719726/cssfx_ecuj37.gif)

## Live demo

[https://react-cssfx.surge.sh/](https://react-cssfx.surge.sh/)

## Usage

```javascript
// Import Components

// Tree shakable
import { BarWave } from "react-cssfx-loading";

// Render
<BarWave />

// Available Props
<BarWave color="#FF0000" width="100px" height="100px" duration="3s" />

// It also supports all props of an HTML element (or JSX)
<BarWave onClick={() => alert("Clicked")} key="key" />
```
