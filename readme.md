# 🌍 i18n Demo - React Translation System

A simple translation system (i18n = internationalization) for React applications.

This project allows you to switch between English and Chinese with a single click!

---

## 📦 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open your browser
# Go to http://localhost:5173
```

---

## 📁 Project Structure

```
i18n-demo/
├── index.html                 # HTML entry point
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
│
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Main component
    │
    ├── components/
    │   └── Home.jsx           # Example page using translations
    │
    └── i18n/                  # Translation system
        ├── index.js           # Exports everything
        ├── TranslationProvider.jsx  # Context (stores current language)
        ├── useTranslate.js    # Hook (to use translations)
        ├── LanguageSelector.jsx     # Dropdown to change language
        │
        ├── en/                # English translations
        │   ├── home.json
        │   └── common.json
        │
        └── zh/                # Chinese translations
            ├── home.json
            └── common.json
```

---

## 🧠 How It Works

### The 3 Key Concepts

#### 1. Context (TranslationProvider.jsx)

The **Context** is like a "global variable" that stores the current language.
It wraps your entire application so all components can access it.

```jsx
// In App.jsx
<TranslationProvider>
  <YourApp /> {/* All components inside can use translations */}
</TranslationProvider>
```

#### 2. Hook (useTranslate.js)

The **Hook** is a function that gives you access to:

- `t()` → function to get a translation
- `language` → current language ("en" or "zh")
- `setLanguage()` → function to change language

```jsx
const { t, language, setLanguage } = useTranslate();
```

#### 3. Translation Files (JSON)

Translations are stored in simple JSON files:

```json
// en/home.json
{
  "title": "Welcome to our website",
  "subtitle": "Learn React with translations"
}
```

```json
// zh/home.json
{
  "title": "欢迎来到我们的网站",
  "subtitle": "通过翻译学习 React"
}
```

---

## 🎯 How to Use in Your Components

### Step 1: Import the hook

```jsx
import { useTranslate } from "../i18n";
```

### Step 2: Call the hook inside your component

```jsx
function MyComponent() {
  const { t } = useTranslate();

  // ...
}
```

### Step 3: Use t() to get translations

```jsx
function MyComponent() {
  const { t } = useTranslate();

  return (
    <div>
      <h1>{t("home.title")}</h1>
      <p>{t("home.subtitle")}</p>
      <button>{t("common.save")}</button>
    </div>
  );
}
```

The format is: `t("fileName.key")`

- `home.title` → looks in `home.json` for the key `title`
- `common.save` → looks in `common.json` for the key `save`

---

## ➕ How to Add New Translations

### Adding a new key to existing files

1. Add the key in **both** language files:

```json
// en/home.json
{
  "title": "Welcome",
  "newKey": "This is new!" // ← add this
}
```

```json
// zh/home.json
{
  "title": "欢迎",
  "newKey": "这是新的！" // ← add this
}
```

2. Use it in your component:

```jsx
<p>{t("home.newKey")}</p>
```

### Adding a new translation file (new page)

1. Create the JSON files:

```json
// en/contact.json
{
  "title": "Contact Us",
  "email": "Email",
  "send": "Send Message"
}
```

```json
// zh/contact.json
{
  "title": "联系我们",
  "email": "电子邮件",
  "send": "发送消息"
}
```

2. Import them in `TranslationProvider.jsx`:

```jsx
// Add these imports at the top
import enContact from "./en/contact.json";
import zhContact from "./zh/contact.json";

// Add to ALL_TRANSLATIONS
const ALL_TRANSLATIONS = {
  en: {
    home: enHome,
    common: enCommon,
    contact: enContact, // ← add this
  },
  zh: {
    home: zhHome,
    common: zhCommon,
    contact: zhContact, // ← add this
  },
};
```

3. Use in your component:

```jsx
<h1>{t("contact.title")}</h1>
<label>{t("contact.email")}</label>
<button>{t("contact.send")}</button>
```

---

## 🌐 How to Add a New Language

Example: Adding French

### Step 1: Create the folder and files

```
src/i18n/fr/
├── home.json
└── common.json
```

```json
// fr/home.json
{
  "title": "Bienvenue sur notre site",
  "subtitle": "Apprendre React avec les traductions",
  "description": "Ceci est une démo simple."
}
```

```json
// fr/common.json
{
  "save": "Sauvegarder",
  "cancel": "Annuler",
  "language": "Langue"
}
```

### Step 2: Update TranslationProvider.jsx

```jsx
// Add imports
import frHome from "./fr/home.json";
import frCommon from "./fr/common.json";

// Add to ALL_TRANSLATIONS
const ALL_TRANSLATIONS = {
  en: { home: enHome, common: enCommon },
  zh: { home: zhHome, common: zhCommon },
  fr: { home: frHome, common: frCommon }, // ← add this
};
```

### Step 3: Update LanguageSelector.jsx

```jsx
const LANGUAGES = [
  { code: "en", label: "🇬🇧 English" },
  { code: "zh", label: "🇨🇳 中文" },
  { code: "fr", label: "🇫🇷 Français" }, // ← add this
];
```

---

## 📊 Data Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│                         App.jsx                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │              TranslationProvider                   │  │
│  │                                                    │  │
│  │   ┌─────────────────────────────────────────────┐ │  │
│  │   │  State:                                     │ │  │
│  │   │  - language: "en"                           │ │  │
│  │   │  - translations: { home: {...}, common: {...} } │ │
│  │   └─────────────────────────────────────────────┘ │  │
│  │                        │                          │  │
│  │                        ▼                          │  │
│  │   ┌─────────────────────────────────────────────┐ │  │
│  │   │              Context.Provider               │ │  │
│  │   │  (shares state with all children)           │ │  │
│  │   └─────────────────────────────────────────────┘ │  │
│  │                        │                          │  │
│  └────────────────────────┼──────────────────────────┘  │
│                           │                             │
│           ┌───────────────┴───────────────┐             │
│           ▼                               ▼             │
│  ┌─────────────────┐             ┌─────────────────┐    │
│  │ LanguageSelector│             │      Home       │    │
│  │                 │             │                 │    │
│  │ useTranslate()  │             │ useTranslate()  │    │
│  │      ↓          │             │      ↓          │    │
│  │ setLanguage()   │             │    t("...")     │    │
│  └─────────────────┘             └─────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

**When user changes language:**

1. `LanguageSelector` calls `setLanguage("zh")`
2. `TranslationProvider` updates its state
3. All components using `useTranslate()` automatically re-render
4. `t("home.title")` now returns the Chinese translation

---

## 🔑 Key React Concepts Used

| Concept         | File                    | Purpose                        |
| --------------- | ----------------------- | ------------------------------ |
| `createContext` | TranslationProvider.jsx | Create a shared data container |
| `useState`      | TranslationProvider.jsx | Store the current language     |
| `useContext`    | useTranslate.js         | Read data from Context         |
| `export/import` | All files               | Share code between files       |

---

## ❓ Common Errors

### "useTranslate must be used inside a TranslationProvider"

Your component is not wrapped by `TranslationProvider`. Make sure `App.jsx` looks like:

```jsx
<TranslationProvider>
  <YourComponent />
</TranslationProvider>
```

### Translation shows the key instead of text (e.g., "home.title")

- Check if the key exists in your JSON file
- Check for typos in the key name
- Make sure you imported the JSON file in `TranslationProvider.jsx`

### Nothing displays / blank page

- Open browser console (F12) to see errors
- Check that all imports are correct
- Make sure JSON files have valid syntax (no trailing commas!)

---

## 📚 Learn More

- [React Context Documentation](https://react.dev/learn/passing-data-deeply-with-context)
- [React Hooks Documentation](https://react.dev/reference/react)
- [Vite Documentation](https://vitejs.dev/)

---

Happy coding! 🚀
