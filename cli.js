#!/usr/bin/env node
import inquirer from "inquirer";
import fs from 'fs-extra'
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

inquirer.prompt([
  {
    type: 'list',
    name: 'language',
    message: 'Which language do you want to use?',
    choices: ['JavaScript', 'TypeScript'],
  },
  {
    type: 'confirm',
    name: 'includeTests',
    message: 'Do you want to include tests?',
  },
]).then(answers => {
  const { language, includeTests } = answers;
  const templatePath = path.join(__dirname, 'templates', language.toLowerCase());
  const destinationPath = path.join(__dirname, 'generatedProject');

  fs.copy(templatePath, destinationPath, err => {
    if (err) return console.error(err);
    console.log('Project generated successfully!');
    if (includeTests) {
      const testTemplatePath = path.join(templatePath, 'tests');
      fs.copy(testTemplatePath, path.join(destinationPath, 'tests'), err => {
        if (err) return console.error(err);
        console.log('Tests included!');
      });
    }
  });
});
