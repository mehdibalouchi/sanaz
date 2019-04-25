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
  'formatCells': {
    func: (cells, formatType) => {
      console.log(`formatting ${cells} to ${formatType}!`);
      return null;
    },
    hint: 'format [cells] as [formatType]',
    sample: 'format A1:A3 date',
    returnType: null,
  },
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


export const commandSuggestions = Object.keys(availableCommand).reduce(function(result, key) {
  result.push({ sample: availableCommand[key].sample, hint: availableCommand[key].hint });
  return result;
}, []);

export const getCommandSuggetions = (input) => {
  return commandSuggestions.filter(({ hint }) => hint.includes(input)).map((item) => item.hint);
};

export const getSample = (hint) => {
  let item = commandSuggestions.find((value) => value.hint === hint);
  return item.sample;
};

export const getInputSuggetions = (input) => {
  let searchString = input.split(' ').slice(-1)[0];
  if (searchString && searchString.length > 0)
    return inputSuggestions.filter((item) => String(item).startsWith(String(searchString)));
  return [];
};

export const processInput = function(input) {
  let { command, params } = commandFactory(input);
  let commandResult = runAction(command, params);
  return responseFactory(command, commandResult);
};


const runAction = function(command, params) {
  console.log(`hello im sanaz and doing ${command} for you!`);
  return availableCommand[command].func(...params);
};

const responseFactory = (command, commandResult) => {
  return { message: commandResult, messageType: availableCommand[command].returnType };
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