import { testConnection, discover } from './discovery';
import FuzzySearch from 'fuzzy-search';

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

const commandPatterns = [];

const cellPatterGenerator = () => {
  let cellNames = [];
  let letters = ['A', 'a', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'f', 'F'];
  let numbers = ['1', '2', '3', '4', '5', '6', '7'];
  for (let l of letters) {
    for (let n of numbers) {
      cellNames.push(l + n);
    }
  }
  return [...letters, ...numbers, ...cellNames];
};

let cells = cellPatterGenerator();

const formatPatternGenerator = () => {
  let format_samples = [];
  for (let a of ['', 'column', 'row']) {
    for (let b of cells) {
      for (let c of ['', 'to', 'as']) {
        for (let d of ['date', 'text']) {
          format_samples.push({ command: `format${a === '' ? '' : ' '}${a}${b === '' ? '' : ' '}${b}${c === '' ? '' : ' '}${c}${d === '' ? '' : ' '}${d}` });
        }
      }
    }
  }
  return format_samples;
};

let formatPatterns = formatPatternGenerator();

const sortPatternGenerator = () => {
  let samples = [];
  for (let a of ['', 'column']) {
    for (let b of cells) {
      for (let c of ['descending', 'ascending']) {
        samples.push({ command: `sort${a === '' ? '' : ' '}${a}${b === '' ? '' : ' '}${b}${c === '' ? '' : ' '}${c}` });
      }
    }
  }
  return samples;
};

let sortPatterns = sortPatternGenerator();

const deleteSelectPatternGenerator = () => {
  let samples = [];
  for (let a of ['', 'column', 'row']) {
    for (let b of cells) {
      for (let command of ['select', 'delete'])
        samples.push({ command: `${command}${a === '' ? '' : ' '}${a}${b === '' ? '' : ' '}${b}` });
    }
  }
  return samples;
};

let deleteSelectPatterns = deleteSelectPatternGenerator();

const insetPatternGenerator = () => {
  let samples = [];
  for (let a of ['before', 'after']) {
    for (let b of ['', 'column', 'row']) {
      for (let c of cells) {
        for (let command of ['insert'])
          samples.push({ command: `${command}${a === '' ? '' : ' '}${a}${b === '' ? '' : ' '}${b}${c === '' ? '' : ' '}${c}` });
      }
    }
  }
  return samples;
};

let insetPatterns = insetPatternGenerator();

export const commandSuggestions = [
  ...formatPatterns,
  ...sortPatterns,
  ...deleteSelectPatterns,
  ...insetPatterns,

];

export const badOfWord = [
  'format', 'date', 'to', 'as', 'date', 'text', 'A', 'B', 'C', 'D', 'E', '1', '2', '3', '4', '5', '6', '7', '8', 'insert', 'delete', 'before',
  'after', 'sort', 'column', 'row', 'ascending', 'descending',
];

export const getCommandSuggetions = (input) => {
  const searcher = new FuzzySearch(commandSuggestions, ['command'], {
    caseSensitive: false,
    sort: true,
  });
  let result = searcher.search(input);
  // console.log(result[0]['command'])
  return result.length > 0 ? [result[0]['command']] : [];
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
  return runAction(input);
};


const runAction = function(command, params) {
  console.log(`hello im sanaz and doing ${command} for you!`);
  window.postMessage({ 'type': 'FROM_SANAZ', command }, '*');
  return null;
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