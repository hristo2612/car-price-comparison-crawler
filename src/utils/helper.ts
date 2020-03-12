import { ICommand } from './../interfaces/commands';

export const parse = (fileContent) => {
  return JSON.parse(fileContent);
}

export const parseCommandPath = (command: ICommand) => {
  const functionName = Object.keys(command)[0];
  let newFunctionName;
  let args = Object.values(command[functionName]);
  if (functionName === 'mouse' || functionName === 'keyboard') {
    newFunctionName = Object.keys(command[functionName])[0];
    args = Object.values(command[functionName][newFunctionName]);
  }
  return {
    functionName: newFunctionName ? newFunctionName : functionName,
    args
  }
}