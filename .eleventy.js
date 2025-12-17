const sass = require('sass');
const path = require('path');
const fs = require('fs');

module.exports = function(eleventyConfig) {
  // Pass through assets
  eleventyConfig.addPassthroughCopy('src/assets');

  // Watch SCSS files
  eleventyConfig.addWatchTarget('src/scss/');

  // Watch i18n files
  eleventyConfig.addWatchTarget('src/_data/');

  // Load translations
  const enTranslations = JSON.parse(fs.readFileSync('src/_data/i18n/en.json', 'utf-8'));
  const ptTranslations = JSON.parse(fs.readFileSync('src/_data/i18n/pt.json', 'utf-8'));
  
  const translations = {
    en: enTranslations,
    pt: ptTranslations
  };

  // Add filter to get translation by key path (e.g., "nav.home")
  eleventyConfig.addFilter('t', function(key, lang) {
    const keys = key.split('.');
    let value = translations[lang || 'en'];
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    return value;
  });

  // Add filter to get all translations for a language
  eleventyConfig.addFilter('i18n', function(lang) {
    return translations[lang || 'en'];
  });

  // Compile SCSS to CSS
  eleventyConfig.on('eleventy.before', async () => {
    const result = sass.compile('src/scss/main.scss', {
      style: 'compressed',
      sourceMap: false
    });

    const outputDir = '_site/css';
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(path.join(outputDir, 'main.css'), result.css);
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
    }
  };
};
