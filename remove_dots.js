const fs = require('fs');
const path = require('path');

const files = [
  'src/data/serviceCategories.ts',
  'src/data/packages.ts',
  'src/data/destinations.ts'
];

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, 'utf8');

  // Replace trailing full stops in title, subtitle, description, short_description
  // Look for: key: 'something.', or key: "something.",
  // We want to remove the . before the quote
  content = content.replace(/(title|subtitle|description|short_description):\s*(['"])(.*?)\.\2/g, '$1: $2$3$2');
  
  // also handle the case where it ends with ... (ellipses)
  // the user said "delete all full stops in titles (if any) and subtitles".
  // wait, if it ends with "...", should it become ""?
  // Let's just remove all full stops at the end of the string before the quote.
  content = content.replace(/(title|subtitle|description|short_description):\s*(['"])(.*?)\.+(?=\2)/g, '$1: $2$3');

  fs.writeFileSync(fullPath, content);
  console.log(`Processed ${file}`);
});
