export const getCommandSuggetions = (input) => {
  return ['format as text', 'format as date'].filter((item) => item.includes(input));
};

export const getInputSuggetions = (input) => {
  return ['format'].filter((item) => item.includes(input));
};