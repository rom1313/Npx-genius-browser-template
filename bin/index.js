#! /usr/bin/env node
console.log("C'est parti pour la génération d'un projet Genius !");
const { execSync } = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: 'inherit' });
    } catch (e) {
        console.error('La commande a échoué', e);
        return false
    }
    return true;



}
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/rom1313/Genius-Template-Project ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Le répertoire ${repoName} est en train d'être cloné`)
const checkedOut = runCommand(gitCheckoutCommand)
if (!checkedOut) process.exit(-1);
console.log(`Installation des dépendances pour ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1)

console.log('Bravo ! Le projet est prêt :)')
