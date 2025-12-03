using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace TranslationApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TranslationController : ControllerBase
    {
        // In-memory storage (replace with database in production)
        private static readonly Dictionary<string, Dictionary<string, Dictionary<string, string>>> _translations = new()
        {
            ["en"] = new Dictionary<string, Dictionary<string, string>>
            {
                ["home"] = new Dictionary<string, string>
                {
                    ["title"] = "Welcome to our website",
                    ["subtitle"] = "Learn React with translations",
                    ["description"] = "This is a simple demo to show how internationalization works."
                },
                ["common"] = new Dictionary<string, string>
                {
                    ["save"] = "Save",
                    ["cancel"] = "Cancel",
                    ["language"] = "Language"
                }
            },
            ["zh"] = new Dictionary<string, Dictionary<string, string>>
            {
                ["home"] = new Dictionary<string, string>
                {
                    ["title"] = "欢迎访问我们的网站",
                    ["subtitle"] = "学习带翻译的 React",
                    ["description"] = "这是一个简单的演示，展示国际化是如何工作的。"
                },
                ["common"] = new Dictionary<string, string>
                {
                    ["save"] = "保存",
                    ["cancel"] = "取消",
                    ["language"] = "语言"
                }
            }
        };

        /// <summary>
        /// Get translations for a specific language
        /// GET /api/translation/{language}
        /// </summary>
        [HttpGet("{language}")]
        public IActionResult GetTranslations(string language)
        {
            if (!_translations.ContainsKey(language))
            {
                return NotFound(new { message = $"Language '{language}' not found" });
            }

            var response = new
            {
                language = language,
                translations = _translations[language]
            };

            return Ok(response);
        }

        /// <summary>
        /// Get all available languages
        /// GET /api/translation/languages
        /// </summary>
        [HttpGet("languages")]
        public IActionResult GetAvailableLanguages()
        {
            var languages = _translations.Keys.ToList();
            return Ok(languages);
        }

        /// <summary>
        /// Update user's language preference
        /// POST /api/user/language
        /// </summary>
        [HttpPost("user/language")]
        public IActionResult UpdateUserLanguage([FromBody] UpdateLanguageRequest request)
        {
            // TODO: Save to database for authenticated users
            // For now, just return success
            
            return Ok(new { message = "Language preference updated", language = request.Language });
        }
    }

    public class UpdateLanguageRequest
    {
        public string Language { get; set; } = string.Empty;
        public string? UserId { get; set; }
    }
}

