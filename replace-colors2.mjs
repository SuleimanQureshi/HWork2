import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';

const replacements = [
  { search: /bg-yellow-400/g, replace: 'bg-brand-primary' },
  { search: /hover:bg-yellow-500/g, replace: 'hover:bg-brand-deep' },
  { search: /bg-yellow-100/g, replace: 'bg-brand-primary/10' },
  { search: /text-yellow-800/g, replace: 'text-brand-deep' },
  { search: /border-amber-400/g, replace: 'border-brand-primary' },
  { search: /bg-amber-400/g, replace: 'bg-brand-primary' },
  { search: /hover:bg-amber-300/g, replace: 'hover:bg-brand-primary' },
  { search: /bg-amber-500\/80/g, replace: 'bg-brand-deep/80' },
  { search: /hover:bg-amber-50/g, replace: 'hover:bg-brand-cream' },
  { search: /hover:bg-amber-400/g, replace: 'hover:bg-brand-primary' },
  { search: /text-\[#7D1F3E\]/g, replace: 'text-brand-deep' }
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
console.log('Amber/Yellow color replacement complete.');
