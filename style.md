# Google DeepMind 网页设计风格指南 (Style Guide)

本设计系统基于 Google DeepMind 官网（Gemini 发布页）的视觉风格进行复刻与总结。该风格体现了现代科技、极简主义与人文关怀的融合，主要特征为**大圆角卡片**、**通透的留白**、**几何无衬线字体**以及**Google 标志性的四色渐变**。

---

## 1. 布局 (Layout)

网页采用流式响应布局，强调中心内容的聚焦与边缘的留白呼吸感。

### 网格与容器
*   **最大容器宽度 (Max Width):** `1440px`
*   **基础间距 (Base Spacing):** `8px` 为基数 (8px, 16px, 24px, 32px, 48px, 64px)。
*   **侧边距 (Padding):** 移动端 `24px`，桌面端依据网格自适应。
*   **头部高度 (Header Height):** `64px` (固定吸顶)。

### 结构特征
*   **卡片式布局 (Card-based):** 核心内容承载于独立的白色卡片中，与背景形成微妙的层次分离。
*   **视觉深度 (Depth):** 通过“轮播图”两侧露出的卡片边缘，构建 2.5D 的空间层次感。

```css
:root {
    --max-width: 1440px;
    --header-height: 64px;
    --spacing-unit: 8px;
}
```

---

## 2. 色彩 (Color)

色彩系统以中性色为主，强调高对比度的阅读体验，品牌色仅用于关键操作与视觉焦点。

### 基础色板 (Palette)
| 类别 | 变量名 | 色值 (Hex) | 用途 |
| :--- | :--- | :--- | :--- |
| **背景** | `--color-surface` | `#ffffff` | 页面背景、主卡片背景 |
| **容器** | `--color-surface-container` | `#f0f4f8` | 辅助背景、浅色按钮 |
| **文本 (主)** | `--color-on-surface` | `#1f1f1f` | 标题、正文、深色按钮背景 |
| **文本 (次)** | `--color-on-surface-variant` | `#444746` | 副标题、导航项、图标 |
| **轮廓** | `--color-outline` | `#e0e3e1` | 边框、分割线 |

### 品牌色 (Brand Colors)
*   **Google Blue:** `#1a73e8` (链接、强调)
*   **Gemini Gradient:** 线性渐变 (135deg)，包含：
    *   Blue (`#4285f4`)
    *   Purple (`#9b72cb`)
    *   Red (`#ea4335`)
    *   Yellow (`#fbbc04`)

---

## 3. 字体排印 (Typography)

采用几何感强的无衬线字体，传递现代、理性且亲和的科技感。

### 字体家族
*   **首选:** `Google Sans` (Google 专用品牌字体)
*   **后备:** `Roboto`, `Helvetica Neue`, `sans-serif`

### 排版层级
| 层级 | 字号 (Size) | 字重 (Weight) | 间距 (Letter Spacing) | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `80px` (Desktop) / `56px` (Mobile) | 500 (Medium) | `-2px` | 极其紧凑，用于主视觉标题 |
| **Headline** | `20px` - `24px` | 400 (Regular) | Normal | 用于副标题描述 |
| **Logo Text** | `22px` | 500 (Medium) | `-0.5px` | 导航栏 Logo |
| **Body** | `16px` | 400 (Regular) | Normal | 正文、导航链接 |
| **Button** | `16px` | 500 (Medium) | Normal | 按钮文字 |

---

## 4. UI 元素 (UI Elements)

UI 元素的设计语言非常统一，强调“圆润”与“柔和”。

### 圆角 (Border Radius)
设计采用了两套极端的圆角系统：
1.  **大圆角 (Large):** `48px` - 用于大型内容卡片（Hero Card）。
2.  **胶囊圆角 (Pill):** `999px` (Full Height) - 用于按钮、标签、导航项。
3.  **小圆角 (Small):** `12px` - 用于小型徽标 (Badge)。

### 按钮 (Buttons)
*   **实心黑钮 (Filled Black):**
    *   背景: `#1f1f1f`
    *   文字: `#ffffff`
    *   交互: 悬停时加深至 `#000000`，轻微阴影。
*   **轮廓/浅色钮 (Tonal/Outline):**
    *   背景: `#f0f4f8`
    *   文字: `#1f1f1f`
    *   交互: 悬停时背景变深至 `#dce3eb`。

### 图标 (Icons)
*   风格: 单色、线性 (Stroke)、圆头端点 (Round cap/join)。
*   粗细: `2px` Stroke width。
*   尺寸: 通常为 `20px` 或 `24px`。

---

## 5. 交互与动效 (Interaction)

交互设计追求细腻、低延迟的反馈，避免过度夸张的动画。

### 状态反馈 (Feedback)
*   **Hover (悬停):**
    *   背景色变暗约 5-10% (对于浅色按钮)。
    *   纯色背景增加轻微的 `box-shadow`。
    *   链接增加下划线或颜色变化。
*   **Transition (过渡):**
    *   通用时长: `0.2s`
    *   曲线: `ease-out` (线性减速)

### 视觉特效
*   **渐变填充文字:** 用于强调 "Gemini 3" 等核心品牌词，模拟流动的光彩。
*   **粒子/光照背景:** 使用径向渐变 (`radial-gradient`) 在白色背景上叠加极淡的红蓝色晕，营造高科技的洁净氛围。

```css
/* 示例：光照背景模拟 */
.background-effect {
    background: 
        radial-gradient(circle at 70% 30%, rgba(66, 133, 244, 0.05) 0%, transparent 40%),
        radial-gradient(circle at 30% 70%, rgba(234, 67, 53, 0.05) 0%, transparent 40%);
}
```

---

## 6. 演示文稿特有规范 (Presentation Specifics)

针对幻灯片演示场景，在原有网页风格基础上进行了动效与可视化的扩展，强调“非线性”与“物理感”。

### 6.1 动效曲线 (Animation Curves)
为了实现“极速启动、优雅刹车”的非线性丝滑感，不再使用默认 ease。

*   **核心曲线 (Silky Expo):** `cubic-bezier(0.075, 0.82, 0.165, 1)`
    *   **用途:** 页面切换、元素进入、图表绘制。
    *   **特点:** 初速度极快，瞬间抓住注意力，随后进入长尾的减速缓冲，模拟高质量机械阻尼感。
*   **平滑过渡 (Smooth):** `cubic-bezier(0.4, 0.0, 0.2, 1)`
    *   **用途:** 透明度渐变、背景色过渡、非位移类属性。

### 6.2 数据可视化 (Data Visualization)
图表与科学示意图需遵循 Google Material 配色与极简线条风格。

*   **图表线条 (Charts):**
    *   **宽度:** `3px`
    *   **动画:** 使用 SVG `stroke-dasharray` 实现描边生长动画，配合 Silky Expo 曲线。
    *   **辅助线:** 极淡灰色 (`#e0e3e1`)，仅保留关键刻度。
*   **科学示意图 (Scientific Diagrams):**
    *   **实体 (Entities):** 圆角矩形 (`border-radius: 8px`) 或圆形，使用淡色背景 + 品牌色边框。
    *   **潜在空间 (Latent Space):** 使用虚线边框 (`border: 2px dashed #4285f4`) 表示抽象概念。
    *   **流向 (Flow):** 灰色箭头 (`#999`)，避免喧宾夺主，箭头尺寸适中。

### 6.3 幻灯片切换 (Transitions)
*   **进入动画:** `transform: scale(1.05) -> scale(1)` + `opacity: 0 -> 1`。
    *   这种轻微的缩放（Zoom-out）配合透明度，能营造出“浮现”的高级感。
*   **时序 (Timing):**
    *   页面切换耗时 `0.8s`。
    *   **Stagger Animation:** 页面内部元素（标题 -> 图表 -> 文字）依次延迟 `0.1s` - `0.2s` 触发，避免视觉拥挤。