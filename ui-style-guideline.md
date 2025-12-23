# Gemini UI Style Guideline (High-Fidelity)

这份文档详细定义了复刻 Google DeepMind / Gemini 官网风格的设计规范。任何参与开发的 Agent 或工程师应严格遵循此文档中的 CSS 变量和组件模式，以确保视觉一致性。

---

## 1. 核心设计原则 (Core Principles)

1.  **极度圆润 (Super Rounded)**: 几乎所有容器和按钮都使用极大的圆角（48px 或 全圆角）。
2.  **清晰的留白 (Airy Layout)**: 避免密集排版，使用宽敞的间距强调层级。
3.  **微光与渐变 (Sheen & Gradient)**: 使用特定的四色渐变作为品牌识别，配合细微的噪点或光效。
4.  **以人为本的排印 (Human Typography)**: 字体清晰、现代，标题与正文对比度高。

---

## 2. CSS 变量定义 (Design Tokens)

将以下代码块直接复制到项目的 `:root` 样式定义中。

### 2.1 颜色系统 (Color System)

```css
:root {
  /* 基础背景色 */
  --color-surface-primary: #FFFFFF;
  --color-surface-secondary: #F0F4F9; /* 浅灰背景，用于输入框或次级区块 */
  --color-surface-tertiary: #E7EBF0;

  /* 文本颜色 */
  --color-text-primary: #1F1F1F;
  --color-text-secondary: #444746;
  --color-text-tertiary: #5E5E5E;
  --color-text-invert: #FFFFFF;

  /* 品牌色 */
  --color-brand-blue: #1A73E8; /* Google Blue */
  --color-brand-blue-hover: #1557B0;
  --color-accent-light: #D2E3FC;

  /* Gemini 核心渐变 (用于文字蒙版或背景) */
  /* 这是一个近似 DeepMind 的蓝-紫-红橙渐变 */
  --gradient-gemini: linear-gradient(90deg, #4285F4 0%, #9B72CB 50%, #D96570 100%);
  --gradient-gemini-bg: linear-gradient(135deg, #F5F7FF 0%, #FFFFFF 50%, #FFF5F5 100%);

  /* 边框与分割线 */
  --color-border: #E0E3E7;
  --color-border-hover: #1A73E8;
}
```

### 2.2 排版规范 (Typography)

*首选字体*: `Google Sans` (如果不可用，回退至 system-ui 或 Roboto)。

```css
:root {
  --font-family-base: 'Google Sans', 'Roboto', sans-serif;
  
  /* 字体大小 Scale */
  --font-size-display: 64px; /* Hero 标题 */
  --font-size-h1: 48px;
  --font-size-h2: 32px;
  --font-size-h3: 24px;
  --font-size-body: 16px;
  --font-size-small: 14px;
  --font-size-caption: 12px;

  /* 字重 */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* 行高 */
  --line-height-tight: 1.1;
  --line-height-normal: 1.5;
  --line-height-loose: 1.7;
}
```

### 2.3 形状与圆角 (Shapes & Radius)

这是 Gemini 风格最显著的特征。

```css
:root {
  /* 胶囊形状 (按钮、标签) */
  --radius-pill: 999px;

  /* 卡片圆角 - 核心特征 */
  /* 用于大的内容区块，如 Hero Section 的卡片 */
  --radius-card-lg: 48px; 
  /* 用于次级卡片 */
  --radius-card-md: 24px;
  /* 用于极小的元素 */
  --radius-sm: 12px;
}
```

### 2.4 间距体系 (Spacing)

基于 8px 网格系统。

```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  --spacing-layout: 120px; /* 区块间的大间距 */
}
```

---

## 3. 组件样式规范 (Component Specs)

### 3.1 按钮 (Buttons)

*   **形状**: 必须是 `--radius-pill`。
*   **字重**: 必须是 `--font-weight-medium`。
*   **交互**: 悬停时背景加深或出现细微阴影，点击时有涟漪效果。

**样式变体**:
1.  **Primary**: 深色背景 (`--color-text-primary` 或 `--color-brand-blue`)，白色文字。
2.  **Outlined**: 透明背景，1px 边框 (`--color-border`)，深色文字。
3.  **Gradient**: 使用 `--gradient-gemini` 作为背景或边框颜色。

### 3.2 卡片 (Cards)

*   **容器**: 白色背景，圆角 `--radius-card-lg` (48px)。
*   **边框**: 通常无边框，或极细的 `--color-border`。
*   **阴影**: 极其克制。Gemini 风格偏向于“平面层叠”而非“浮动投影”。
    *   *Default*: `box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);`
    *   *Hover*: `box-shadow: 0 4px 12px 0 rgba(0,0,0,0.08);`

### 3.3 输入框 (Input Fields) - 尤其是 AI 对话框

*   **背景**: `--color-surface-secondary` (#F0F4F9)。
*   **形状**: 类似于按钮的胶囊形或极大的圆角矩形 (`24px+`)。
*   **状态**: 聚焦时出现 `--color-brand-blue` 的边框或光晕。

### 3.4 导航栏 (Navbar)

*   **高度**: 64px。
*   **布局**: 左右两侧对齐，中间留白。
*   **背景**: 滚动时应用 `backdrop-filter: blur(10px)` 和半透明白色背景。

---

## 4. 图标规范 (Iconography)

*   **库**: 推荐使用 Google Material Symbols (Rounded 风格)。
*   **粗细**: Weight 400 (Regular)。
*   **特殊图标**: "Sparkle" (✨) 图标是 AI 的象征，通常使用 `--gradient-gemini` 进行填充。

---

## 5. 动效原则 (Animation Principles)

动效应当感觉“智能”且“平滑”。

*   **缓动函数 (Easing)**: 使用 Material Design 标准缓动 `cubic-bezier(0.2, 0.0, 0, 1.0)`。
*   **持续时间**:
    *   微交互 (Hover): 200ms。
    *   展开/入场: 400ms - 600ms。
*   **主要效果**:
    *   **Fade Up**: 元素上浮并渐显。
    *   **Reveal**: 文字像打字机一样出现，或通过蒙版渐变出现。

---

## 6. 开发速查 (Quick Checklist)

在实现新组件时，请自问：
- [ ] 圆角是否足够大 (48px/Pill)？
- [ ] 是否使用了 Google Sans？
- [ ] 颜色是否主要为黑白灰，仅在关键处使用蓝色或渐变？
- [ ] 间距是否足够宽敞？
- [ ] 阴影是否克制？

---
