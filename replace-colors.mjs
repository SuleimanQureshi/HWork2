import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';

const replacements = [
  { search: /bg-\[#8B1538\]/g, replace: 'bg-brand-primary' },
  { search: /text-\[#8B1538\]/g, replace: 'text-brand-primary' },
  { search: /border-\[#8B1538\]/g, replace: 'border-brand-primary' },
  { search: /bg-\[#8B2346\]/g, replace: 'bg-brand-deep' },
  { search: /text-\[#8B2346\]/g, replace: 'text-brand-deep' },
  { search: /border-\[#8B2346\]/g, replace: 'border-brand-deep' },
  { search: /bg-\[#FDF6F0\]/g, replace: 'bg-brand-cream' },
  { search: /text-\[#2D2D2D\]/g, replace: 'text-brand-text' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      for (const { search, replace } of replacements) {
        content = content.replace(search, replace);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(SRC_DIR);
console.log('Color replacement complete.');
