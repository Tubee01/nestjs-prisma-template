// Read files from ./templates and generate default repository files
//
// Usage:
// yarn generate-default-repository
//
// Example:
// yarn generate-default-repository
//
// Output:
// src\app\repository\template\template.module.ts
// src\app\repository\template\template.repository.ts
// src\app\repository\template\template-type.class.ts
// src\app\repository\template\template-type.interface.ts

const fs = require('fs');
const path = require('path');
const name = process.argv.slice(2)?.[0];
if (!name) {
  console.error('Please provide a name');
  process.exit(1);
}

const templatesDir = path.join(__dirname, 'templates/repository');
const templates = fs.readdirSync(templatesDir);
const repositoryDir = path.join(__dirname, '..', 'src', 'app', 'repository');

// replace all instances of template with the name provided
const nameRegex = /template/g;
const nameRegex2 = /Template/g;
const nameRegex3 = /TEMPLATE/g;

//  replace in files
templates.forEach((template) => {
  const templatePath = path.join(templatesDir, template);
  const templateContent = fs.readFileSync(templatePath, 'utf8');
  // replace all instances of template with the name provided in the file, uppercase to uppercase and lowercase to lowercase
  const newContent = templateContent
    .replace(nameRegex, name)
    .replace(nameRegex2, name.charAt(0).toUpperCase() + name.slice(1))
    .replace(nameRegex3, name.toUpperCase());

  const newTemplatePath = path.join(repositoryDir, name, template);
  // get only the filename
  const newTemplateFileName = newTemplatePath.split('\\').pop();
  // get the directory path
  const newFilename = newTemplateFileName.replace(nameRegex, name);
  const newDir = path.join(repositoryDir, name);
  const newFilefullpath = path.join(newDir, newFilename);
  if (!fs.existsSync(newDir)) {
    fs.mkdirSync(newDir, { recursive: true });
  }
  fs.writeFileSync(newFilefullpath, newContent);
});
