# 项目概览 (Project Overview)

本项目是一个 **Google DeepMind / Gemini 官网风格** 的前端复刻项目。它旨在通过 HTML 和 CSS 精确还原 Gemini 发布页面的视觉语言，包括大圆角卡片、Google Sans 字体排印、四色渐变以及现代化的布局结构。

主要目的是建立一套高保真的 UI 风格指南和模板，供后续开发或设计参考使用。

## 技术栈 (Tech Stack)

*   **核心**: HTML5, CSS3
*   **特性**: CSS Variables (自定义属性), Flexbox, CSS Grid
*   **字体**: Google Sans (通过 `@font-face` 引入本地或远程资源)
*   **环境**: 静态网页，无需复杂的构建工具（虽然存在 `package-lock.json`，但当前未发现 `package.json`，主要依赖原生浏览器渲染）。

## 关键文件 (Key Files)

*   **`index.html`**: 项目的主入口文件，包含头部导航、Hero 区域（轮播图风格）、以及底部网格布局的 HTML 结构。
*   **`styles.css`**: 核心样式表。定义了全局 CSS 变量（颜色、间距、圆角），并实现了所有组件的视觉样式。
*   **`style.md`**: **设计规范文档 (核心参考)**。详细记录了布局、色彩系统、排印、UI 元素（圆角、按钮）以及交互动效的具体参数。
*   **`register.html`**: （推测）注册页面的 HTML 结构，可能包含表单样式。

## 启动与运行 (Build & Run)

由于是静态网页项目，无需编译：

1.  **直接预览**: 使用浏览器打开 `index.html` 文件即可查看效果。
2.  **本地服务**: 如果安装了 VS Code，推荐使用 "Live Server" 插件启动，或在终端使用 Python 启动简单服务：
    ```bash
    # Python 3
    python3 -m http.server 8000
    ```
    访问: `http://localhost:8000`

## 开发规范 (Development Conventions)

### 1. 样式系统 (Design Tokens)
遵循 `style.md` 中的定义，主要 CSS 变量如下：
*   **布局**: 最大宽度 `--max-width: 1440px`，头部高度 `--header-height: 64px`。
*   **圆角**: 卡片 `--border-radius-card: 48px`，按钮/胶囊 `--border-radius-pill: 999px`。
*   **色彩**:
    *   背景: `--color-surface` (#ffffff)
    *   文本: `--color-on-surface` (#1f1f1f)
    *   强调色: Google Blue (#1a73e8) 及 Gemini Gradient。

### 2. 布局策略
*   **流式响应**: 页面使用百分比宽度配合 `max-width` 限制内容区域。
*   **卡片层级**: 使用 `box-shadow` 和 `z-index` 营造 2.5D 的深度感（如 Hero 区域的堆叠卡片）。

### 3. 注意事项
*   `package.json` 缺失：当前目录下存在 `package-lock.json` 但缺失 `package.json`，如果需要管理 npm 依赖，建议重新初始化 (`npm init`)。
