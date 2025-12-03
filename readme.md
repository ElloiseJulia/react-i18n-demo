# 🌍 网页语种切换技术方案 Demo

基于 React + TypeScript + Ant Design 的语种切换系统演示项目。

本项目展示如何实现网页的语种切换功能，支持在英文和中文之间实时切换，所有页面内容和 UI 组件都会自动更新。

---

## 📦 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 打开浏览器
# 访问 http://localhost:5173
```

---

## 🛠️ 技术栈

- **React 18** + **TypeScript** - 前端框架
- **React Router** - 多页面路由
- **Ant Design** - UI 组件库
- **Vite** - 构建工具
- **.NET 8.0** - 后端 API（可选）

---

## 📁 项目结构

```
translation-react/
├── index.html                 # HTML 入口文件
├── package.json               # 项目依赖
├── vite.config.ts             # Vite 配置
├── tsconfig.json              # TypeScript 配置
│
├── src/
│   ├── main.tsx               # React 入口
│   ├── App.tsx                # 主应用组件
│   │
│   ├── pages/                  # 页面组件
│   │   ├── Overview.tsx       # 概览页面
│   │   ├── DataReport.tsx     # 数据报告页面
│   │   └── Campaign.tsx       # 活动管理页面
│   │
│   ├── components/             # 通用组件
│   │   ├── Layout.tsx         # 布局组件（侧边栏+顶部导航）
│   │   └── LanguageSelector.tsx # 语言选择器
│   │
│   ├── i18n/                   # 翻译系统核心
│   │   ├── TranslationProvider.tsx    # Context Provider
│   │   ├── TranslationProviderWithApi.tsx # 支持 API 的 Provider
│   │   ├── TranslationContext.tsx     # Context 定义
│   │   ├── useTranslate.ts            # 翻译 Hook
│   │   ├── types.ts                   # TypeScript 类型定义
│   │   ├── index.ts                   # 导出文件
│   │   │
│   │   ├── en/                        # 英文翻译
│   │   │   ├── home.json
│   │   │   ├── common.json
│   │   │   ├── overview.json
│   │   │   ├── report.json
│   │   │   ├── campaign.json
│   │   │   └── nav.json
│   │   │
│   │   └── zh/                        # 中文翻译
│   │       ├── home.json
│   │       ├── common.json
│   │       ├── overview.json
│   │       ├── report.json
│   │       ├── campaign.json
│   │       └── nav.json
│   │
│   └── services/               # API 服务
│       └── translationApi.ts   # 翻译 API 调用
│
└── dotnet-backend/              # .NET 后端（可选）
    ├── TranslationController.cs
    ├── Program.cs
    └── TranslationApi.csproj
```

---

## 🧠 核心实现原理

### 1. Context Provider（TranslationProvider.tsx）

使用 React Context API 管理全局语言状态，包裹整个应用。

```tsx
// 在 App.tsx 中
<TranslationProvider>
  <YourApp /> {/* 所有子组件都可以使用翻译 */}
</TranslationProvider>
```

### 2. Custom Hook（useTranslate.ts）

提供翻译函数和语言切换功能。

```tsx
const { t, language, setLanguage } = useTranslate();
```

- `t()` - 翻译函数，获取翻译文本
- `language` - 当前语言代码（"en" 或 "zh"）
- `setLanguage()` - 切换语言函数

### 3. 翻译文件（JSON）

翻译内容存储在 JSON 文件中，按功能模块组织。

```json
// en/overview.json
{
  "title": "Overview",
  "totalCampaigns": "Total Campaigns"
}
```

```json
// zh/overview.json
{
  "title": "概览",
  "totalCampaigns": "总活动数"
}
```

---

## 🎯 在组件中使用

### 基本用法

```tsx
import { useTranslate } from "../i18n";
import { Button } from "antd";

function MyComponent() {
  const { t } = useTranslate();

  return (
    <div>
      <h1>{t("overview.title")}</h1>
      <Button>{t("common.save")}</Button>
    </div>
  );
}
```

### 翻译键格式

使用 `t("文件名.键名")` 格式：

- `overview.title` → 在 `overview.json` 中查找 `title` 键
- `common.save` → 在 `common.json` 中查找 `save` 键
- `campaign.card1.title` → 支持嵌套键

---

## 🚀 功能演示

### 多页面路由

项目包含 3 个演示页面：

1. **Overview** (`/overview`) - 概览页面，展示统计数据
2. **Data Report** (`/report`) - 数据报告页面，展示表格数据
3. **Campaign** (`/campaign`) - 活动管理页面，展示卡片布局

### 语种切换

- 点击右上角的语言选择器
- 在 "English" 和 "中文" 之间切换
- 所有页面内容、导航菜单、Ant Design 组件都会实时更新

### Ant Design 集成

- 使用 Ant Design 的 Layout、Menu、Card、Table 等组件
- Ant Design 的国际化与翻译系统完美结合
- DatePicker、Table 等组件会自动切换语言

---

## ➕ 添加新翻译

### 在现有文件中添加新键

1. 在两种语言的 JSON 文件中添加键值对：

```json
// en/common.json
{
  "save": "Save",
  "newKey": "New Text"  // ← 添加这个
}
```

```json
// zh/common.json
{
  "save": "保存",
  "newKey": "新文本"  // ← 添加这个
}
```

2. 在组件中使用：

```tsx
<p>{t("common.newKey")}</p>
```

### 添加新的翻译文件

1. 创建 JSON 文件：

```json
// en/contact.json
{
  "title": "Contact Us",
  "email": "Email"
}
```

```json
// zh/contact.json
{
  "title": "联系我们",
  "email": "电子邮件"
}
```

2. 在 `TranslationProvider.tsx` 中导入并添加：

```tsx
import enContact from "./en/contact.json";
import zhContact from "./zh/contact.json";

const ALL_TRANSLATIONS = {
  en: {
    // ... 其他翻译
    contact: enContact,  // ← 添加这个
  },
  zh: {
    // ... 其他翻译
    contact: zhContact,  // ← 添加这个
  },
};
```

3. 在组件中使用：

```tsx
<h1>{t("contact.title")}</h1>
```

---

## 🌐 添加新语言

示例：添加法语

### 步骤 1：创建翻译文件

```
src/i18n/fr/
├── home.json
├── common.json
└── overview.json
```

### 步骤 2：更新 TranslationProvider.tsx

```tsx
import frHome from "./fr/home.json";
import frCommon from "./fr/common.json";
// ... 导入其他文件

const ALL_TRANSLATIONS = {
  en: { /* ... */ },
  zh: { /* ... */ },
  fr: {  // ← 添加这个
    home: frHome,
    common: frCommon,
    // ... 其他文件
  },
};
```

### 步骤 3：更新语言选择器

在 `components/LanguageSelector.tsx` 中添加：

```tsx
const LANGUAGES = [
  { code: "en", label: "🇬🇧 English" },
  { code: "zh", label: "🇨🇳 中文" },
  { code: "fr", label: "🇫🇷 Français" },  // ← 添加这个
];
```

---

## 🔌 .NET 后端集成（可选）

### 使用 API 模式

项目支持从 .NET 后端 API 获取翻译数据。

1. **启动后端**：

```bash
cd dotnet-backend
dotnet restore
dotnet run
```

2. **配置前端使用 API**：

在 `App.tsx` 中使用 `TranslationProviderWithApi`：

```tsx
import { TranslationProviderWithApi } from "./i18n/TranslationProviderWithApi";

<TranslationProviderWithApi useApi={true}>
  <YourApp />
</TranslationProviderWithApi>
```

3. **配置 API 地址**：

创建 `.env.local` 文件：

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_USE_API=true
```

### 后端 API 端点

- `GET /api/translation/{language}` - 获取指定语言的翻译
- `GET /api/translation/languages` - 获取所有可用语言
- `POST /api/user/language` - 更新用户语言偏好

---

## 📊 数据流

```
用户点击语言选择器
    ↓
调用 setLanguage("zh")
    ↓
TranslationProvider 更新状态
    ↓
所有使用 useTranslate() 的组件重新渲染
    ↓
t("overview.title") 返回中文翻译
```

---

## 🔑 核心技术

| 技术 | 用途 |
|------|------|
| `createContext` | 创建翻译上下文 |
| `useState` | 管理当前语言状态 |
| `useContext` | 在组件中访问翻译数据 |
| `React Router` | 多页面路由管理 |
| `Ant Design` | UI 组件库 |
| `TypeScript` | 类型安全 |

---

## ❓ 常见问题

### "useTranslate must be used inside a TranslationProvider"

组件没有被 `TranslationProvider` 包裹。确保 `App.tsx` 中：

```tsx
<TranslationProvider>
  <YourComponent />
</TranslationProvider>
```

### 翻译显示键名而不是文本（如 "overview.title"）

- 检查 JSON 文件中是否存在该键
- 检查键名拼写是否正确
- 确保在 `TranslationProvider.tsx` 中导入了对应的 JSON 文件

### 页面空白或报错

- 打开浏览器控制台（F12）查看错误信息
- 检查所有导入路径是否正确
- 确保 JSON 文件语法正确（没有多余的逗号）

---

## 📦 构建部署

### 构建生产版本

```bash
npm run build
```

构建完成后，`dist/` 文件夹包含可部署的静态文件。

### IIS 部署

1. 构建项目：`npm run build`
2. 将 `dist` 文件夹部署到 IIS
3. 配置 URL Rewrite（支持 React Router）

---

## 📚 相关文档

- [语言切换技术方案报告.md](./语言切换技术方案报告.md) - 详细的技术方案说明
- [React Context 文档](https://react.dev/learn/passing-data-deeply-with-context)
- [React Router 文档](https://reactrouter.com/)
- [Ant Design 文档](https://ant.design/)

---

## 🎯 项目特点

- ✅ **轻量级**：使用 React 原生功能，无需第三方 i18n 库
- ✅ **类型安全**：完整的 TypeScript 类型定义
- ✅ **易于集成**：代码结构清晰，可直接集成到现有项目
- ✅ **灵活的数据源**：支持本地 JSON 文件和 API 两种模式
- ✅ **技术栈匹配**：完全匹配 React + React Router + Ant Design + .NET 技术栈

---

Happy coding! 🚀
