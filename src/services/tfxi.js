import { testConnection, discover } from './discovery';

export const textToCommand = {
  'format A1:A3 date': {
    command: 'formatCells',
    params: ['A1:A3', 'date'],
  },
  'A1:A2': {
    command: 'getCells',
    params: ['A1:A2'],
  },
};

export const availableCommand = {
  // 'formatCells': {
  //   id:'text',
  //   command: '',
  //   args: [''],
  //   hint: 'format [cells] as [formatType]',
  //   sample: 'format A1:A3 date',
  //   voiceContext: [],
  // },
  'getCells': {
    sample: 'A1:A2',
    func: (cells) => {
      console.log(`getting ${cells} !`);
      return {
        fields: ['A'],
        items: [{ 'A': '2019-04-01' }, { 'A': '2019-04-02' }],
      };
    },
    returnType: 'table',
    hint: 'print [cells]',
  },
  'failed': {
    func: () => {
      console.log(`cant understand what u saying !`);
      return `cant understand what u saying !`;
    },
    hint: '',
    returnType: 'text',
    sample: '',
  },
};


export const inputSuggestions = Object.keys(availableCommand).reduce(function(result, key) {
  return result.concat([...availableCommand[key].sample.split(' '), ...availableCommand[key].hint.split(' ')]);
}, []);


export const commandSuggestions = [
  'format X to date',
  'format X to date',
  'format column X to date',
  'format column X to text',
  'format row x to date',
  'format row x to text',
  'sort column B ascending',
  'sort column D descending',
  'delete row X',
  'delete row X',
  'delete column X',
  'insert column before X',
  'inset row before X',
  'select XX:XX',
  'select X',
];

export const badOfWord = [
  'format', 'date', 'to', 'as', 'date', 'text', 'A', 'B', 'C', 'D', 'E', '1', '2', '3', '4', '5', '6', '7', '8', 'inset', 'delete', 'before',
  'after', 'sort', 'column', 'row', 'ascending', 'descending',
];

export const getCommandSuggetions = (input) => {
  return commandSuggestions.filter((hint) => hint.includes(input));
};

export const getSample = (hint) => {
  let item = commandSuggestions.find((value) => value === hint);
  return item;
};

export const getInputSuggetions = (input) => {
  let searchString = input.split(' ').slice(-1)[0];
  if (searchString && searchString.length > 0 && input.length > 0)
    return badOfWord.filter((item) => String(item).startsWith(String(searchString)));
  return [];
};

export const processInput = function(input, tfx) {
  let address = 'http://localhost:5000';
  return new Promise((resolve, reject) => {
    discover(address, tfx, input)
      .then((result) => {
        console.log(result);
        // let { command, params } = commandFactory(input);
        let commandResult = runAction(result.command[0], result.params);
        resolve(responseFactory(commandResult));
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
};


const runAction = function(command, params) {
  console.log(`hello im sanaz and doing ${command} for you!`);
  console.log(params);
  window.postMessage({ 'type': 'FROM_SANAZ', command, 'params': params }, '*');
};

const responseFactory = (commandResult) => {
  return { message: commandResult, messageType: 'text' };
};

const commandFactory = (input) => {
  if (typeof input === 'string' && textToCommand.hasOwnProperty(input)) {
    return textToCommand[input];
  }
  return {
    command: 'failed',
    params: [],
  };
};


export default {
  textToCommand,
  availableCommand,
  inputSuggestions,
  commandSuggestions,
};