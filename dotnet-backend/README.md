# .NET Backend API for Translation System

This is a .NET 8.0 Web API backend that provides translation data for the React frontend.

## 📋 Prerequisites

- .NET 8.0 SDK or later
- Visual Studio 2022, VS Code, or Rider

## 🚀 Quick Start

### 1. Navigate to the backend directory

```bash
cd dotnet-backend
```

### 2. Restore dependencies

```bash
dotnet restore
```

### 3. Run the API

```bash
dotnet run
```

The API will be available at:
- HTTP: `http://localhost:5000`
- HTTPS: `https://localhost:5001`
- Swagger UI: `https://localhost:5001/swagger`

## 📡 API Endpoints

### Get Translations for a Language
```
GET /api/translation/{language}
```

**Example:**
```bash
curl http://localhost:5000/api/translation/en
```

**Response:**
```json
{
  "language": "en",
  "translations": {
    "home": {
      "title": "Welcome to our website",
      "subtitle": "Learn React with translations",
      "description": "This is a simple demo to show how internationalization works."
    },
    "common": {
      "save": "Save",
      "cancel": "Cancel",
      "language": "Language"
    }
  }
}
```

### Get Available Languages
```
GET /api/translation/languages
```

**Response:**
```json
["en", "zh"]
```

### Update User Language Preference
```
POST /api/user/language
Content-Type: application/json

{
  "language": "zh",
  "userId": "optional-user-id"
}
```

## 🔧 Configuration

### CORS Configuration

The API is configured to allow requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Create React App)

To add more origins, edit `Program.cs`:

```csharp
policy.WithOrigins("http://localhost:5173", "http://yourdomain.com")
```

### Database Integration (Optional)

Currently, translations are stored in-memory. To use a database:

1. Install Entity Framework Core:
```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

2. Create a `Translation` model and DbContext
3. Update `TranslationController` to use the database

## 🏗️ Project Structure

```
dotnet-backend/
├── TranslationController.cs    # API endpoints
├── Program.cs                   # Application startup
├── TranslationApi.csproj       # Project file
├── appsettings.json            # Configuration
└── README.md                   # This file
```

## 🔐 Authentication (Optional)

To add authentication:

1. Install authentication packages:
```bash
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
```

2. Configure JWT in `Program.cs`
3. Add `[Authorize]` attributes to controllers

## 📝 Notes

- This is a minimal implementation for demonstration
- In production, consider:
  - Using a database for translations
  - Implementing caching
  - Adding authentication/authorization
  - Error handling and logging
  - Rate limiting

