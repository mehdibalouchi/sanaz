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

const textToCommand = {
  'format A1:A3 date': {
    command: 'formatCells',
    params: ['A1:A3', 'date'],
  },
  'A1:A2': {
    command: 'getCells',
    params: ['A1:A2'],
  },
};

const availableCommand = {
  'formatCells': {
    func: (cells, formatType) => {
      console.log(`formatting ${cells} to ${formatType}!`);
      return null;
    },
    hint: 'format [cells] as [formatType]',
    returnType: null
  },
  'getCells': {
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
    returnType: 'text'
  },
};
