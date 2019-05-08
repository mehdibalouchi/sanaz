const TFX = {
  'commands': {
    'select': {
      'template': 'To select a columns, you need to specify a number or column caption, like select column B',
      'arguments': ['{selection}'],
    },
    'format': {
      'template': 'To Format a column, you need a column and a type, like format column five or column A as date',
      'arguments': ['{selection}', '{type}'],
    },
    'insert': {
      'template': 'To insert an element, you need a position and an element type, like insert row after row 5',
      'arguments': ['{element}', '{position}', '{selection}'],
    },
    'delete': {
      'template': 'To delete a row, you need a row, like row 11 or first row',
      'arguments': ['{selection}'],
    },
    'sort': {
      'template': 'To sort a column, you need a column and an order, like sort column B',
      'arguments': ['{selection}', '{order}'],
    },
  },
  'terms': {
    '{selection}': {
      'pattern': ['number {element}', '{element} number'],
      'regexp': ['/(?P<element>column|row) (?P<name>\w+)/', '/(?P<name>\w+) (?P<element>column|row)/'],
    },
    '{element}': {
      'pattern': ['column', 'row'],
      'regexp': ['/(?P<element>column/)', '(?P<element>/row/)'],
    },
    '{position}': {
      'pattern': ['before', 'after', 'up', 'right', 'left', 'down'],
      'regexp': ['?P<position>/before/', '?P<position>/after/', '?P<position>/up/', '?P<position>/right/', '?P<position>/left/', '?P<position>/down/'],
    },
    '{order}': {
      'pattern': ['ascending', 'descending', 'by date'],
      'regexp': ['?P<order>/ascending/', '?P<order>/descending/', '?P<order>/by date/'],
    },
    '{type}': {
      'pattern': ['date', 'number'],
      'regexp': ['?P<type>/date/', '?P<type>/number/'],
    },
  },
};

export default TFX;