import {inputSuggestions, commandSuggestions} from '../model'

export const getCommandSuggetions = (input) => {
  return commandSuggestions.filter(({hint}) => hint.includes(input)).map((item)=>item.hint);
};

export const getSample = (hint)=>{
  let item =  commandSuggestions.find((value)=>value.hint === hint)
  return item.sample
}

export const getInputSuggetions = (input) => {
  let searchString = input.split(" ").slice(-1)[0]
  if(searchString && searchString.length>0)
    return inputSuggestions.filter((item) => String(item).startsWith(String(searchString)));
  return []
};
