//npm - globaL command, comes with node
//npm --version

//local dependency - use it only in this particulr project
//npm i <packageName>

// global dependency - use it in any project
//npm install -g <packageNmaw>
// sudo npm install -g <packageNme> (mac)

// package.json - manifest file (stores important info about project/packages)
// manuel approach (createpackage.json in the root, create properties etc)
// npm init (step by step, pres enter to skip)
// npm init -y (everythinhg default)

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);