const { exec } = require("child_process");
const { readdirSync } = require("fs");
const fs = require("fs");

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const getNoHiddenDirectories = (directories) => {
  return directories.filter( directory => directory[0] != '.' );
};

const directories = getNoHiddenDirectories(getDirectories("."));
const readFile = path => fs.readFileSync(path, 'utf8');
const writeFile = (path, content) => fs.writeFileSync(path, content)

let data = "";
data += readFile("HEAD.md");
data += "\n";
for (let i in directories){
  if(directories[i] == "node_modules") continue;
  data += "- "+directories[i]+"\n";
}
data += readFile("SPLIT.md");
regexImageMarkdown = /\!\[.*\]\((.*)\)/;
for (let i in directories){
  if(directories[i] == "node_modules") continue;

  data += "\n\n`"+directories[i]+"`\n";
  tmp = readFile(`${directories[i]}/README.md`);
  tmp = tmp.replace(regexImageMarkdown, `![${directories[i]} preview](${directories[i]}/$1)`);
  tmps = tmp.split("<!-- more -->");
  data += tmps[0];
  data += readFile("SPLIT.md");
}

// regex = "\!\[.*\]\((.*)\)";
// regexImageMarkdown = /\!\[.*\]\((.*)\)/;
// data += readFile("counter-redux-toolkit-typescript/README.md");
// data = data.replace(regexImageMarkdown, "*** $1 ***");
data += readFile("TAIL.md");
writeFile("README.md", data);

// let command = "pandoc -s HEAD.md";
// for (let i in directories){
//   if(directories[i] == "node_modules") continue;
//   command += `${directories[i]}/README.md SPLIT.md`;
// }
// command += "-o README.md";

// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });


