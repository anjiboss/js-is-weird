#!/usr/bin/env node
import inquirer from "inquirer";
import { createExecuteableFunc } from "./lib.js";
import fs from "fs";

async function askString() {
  const answer = await inquirer.prompt([
    {
      type: "input",
      name: "stringToConvert",
      message: "String to convert to",
      default: "hello",
    },
    {
      type: "input",
      name: "outputFileName",
      message: "Enter output file name",
      default: "output.js",
    },
  ]);
  console.log(answer.stringToConvert);
  return [answer.stringToConvert, answer.outputFileName];
}

const [stringToEncode, outputFileName] = await askString();
const result = createExecuteableFunc(stringToEncode);

// write to file
fs.writeFileSync(`./${outputFileName}`, `console.log(${result})`);
