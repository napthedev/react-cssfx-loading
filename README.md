# 🎨 React CSSFx Loading

**Beautiful, lightweight loading animations for React - because users deserve delightful waiting experiences! ✨**

Transform your loading states from boring to brilliant with this carefully curated collection of CSS-powered animations. Built as a React wrapper for the stunning [CSSFx collection](https://cssfx.netlify.app/), this package brings you 14 gorgeous loading components that are both performant and pixel-perfect.

## ✨ Why Choose React CSSFx Loading?

- 🚀 **Lightweight & Fast** - Pure CSS animations with zero JavaScript overhead
- 🎯 **Tree-shakable** - Import only what you need to keep bundles small  
- 🎨 **Highly Customizable** - Colors, sizes, timing - make it yours!
- 📱 **Responsive Ready** - Looks great on every device
- ♿ **Accessible** - Respects user preferences for reduced motion
- 🔧 **TypeScript Support** - Full type safety out of the box

## 🎬 See It In Action

![Preview](https://res.cloudinary.com/naptest/image/upload/v1634719726/cssfx_ecuj37.gif)

**👀 Live Examples**
- 🌐 [Interactive Demo](https://react-cssfx.surge.sh/) - Try all components live!
- 📚 [Storybook Documentation](https://cssfx-storybook.vercel.app/) - Explore every prop and variation

## 🚀 Quick Start

Get up and running in seconds! Install with your favorite package manager:

```bash
# npm
npm install react-cssfx-loading

# yarn  
yarn add react-cssfx-loading

# pnpm
pnpm add react-cssfx-loading

# bun
bun add react-cssfx-loading
```

## 💫 Usage

It's as simple as import and drop! Here's how to get started:

```typescript
import { BarWave } from "react-cssfx-loading";

// 🎯 Simple and clean
<BarWave />

// 🎨 Make it your own
<BarWave 
  color="#6366f1" 
  width="80px" 
  height="60px" 
  duration="2s" 
/>

// 🔧 Full HTML support - it's just a div with superpowers!
<BarWave 
  onClick={() => console.log("Loading animation clicked!")} 
  className="my-spinner"
  style={{ margin: "auto" }}
  aria-label="Loading content..."
/>
```

## 🎛️ Props & Customization

Every component is built with flexibility in mind. Here's what you can customize:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `#0d6efd` | 🎨 Animation color - any valid CSS color |
| `width` | `string` | varies | 📏 Component width (e.g., "50px", "3rem") |
| `height` | `string` | varies | 📐 Component height (e.g., "50px", "3rem") |
| `duration` | `string` | `1s` | ⏱️ Animation speed (e.g., "2s", "500ms") |
| `className` | `string` | - | 🏷️ Additional CSS classes |
| `style` | `CSSProperties` | - | 💅 Inline styles object |
| ...rest | `HTMLDivElement` | - | 🔧 All standard HTML div attributes |

## 🎨 Component Gallery

Choose from 14 beautifully crafted loading animations:

### 🌊 Motion & Flow
- `BarWave` - Elegant wave motion
- `BouncingBalls` - Playful bouncing spheres  
- `FadingBalls` - Smooth fade transitions
- `FadingDots` - Subtle dot sequence

### 🔄 Rotational
- `CircularProgress` - Classic progress circle
- `Coin` - Charming coin flip effect
- `Hypnosis` - Mesmerizing spiral
- `Ring` - Clean rotating ring
- `Spin` - Simple rotation
- `TwinSpin` - Dual rotation magic

### 📦 Geometric  
- `FlippingSquare` - Dynamic square flip
- `SpinStretch` - Stretching rotation
- `FillingBottle` - Liquid fill animation
- `Messaging` - Chat bubble effect

---

## 🤝 Contributing

We love contributions! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new animations  
- 🔧 Submit pull requests
- ⭐ Star the repo if you find it helpful!

## 📄 License

MIT © [napthedev](https://github.com/napthedev)

---

<div align="center">
  
**Made with ❤️ for the React community**

*Making loading states delightful, one animation at a time* ✨

</div>
