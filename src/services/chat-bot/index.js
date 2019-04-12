import {textToCommand, availableCommand} from '../model'

export const processText = function(text) {
  let { command, params } = commandFactory(text);
  let commandResult = runAction(command, params);
  return responseFactory(command, commandResult);
};


const runAction = function(command, params) {
  console.log(`hello im sanaz and doing ${command} for you!`);
  return availableCommand[command].func(...params);
};

const responseFactory = (command, commandResult) => {
  return {message:commandResult, messageType: availableCommand[command].returnType};
};

const commandFactory = (text) => {
  if (textToCommand.hasOwnProperty(text)) {
    return textToCommand[text];
  }
  return {
    command: 'failed',
    params: [],
  };
};


