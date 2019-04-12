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

export default {
  textToCommand,
  availableCommand,
  inputSuggestions,
  commandSuggestions,
};