const fs = require('fs');
const path = require('path');

module.exports = function() {
  const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'i18n/en.json'), 'utf-8'));
  const pt = JSON.parse(fs.readFileSync(path.join(__dirname, 'i18n/pt.json'), 'utf-8'));
  
  return {
    en,
    pt
  };
};
