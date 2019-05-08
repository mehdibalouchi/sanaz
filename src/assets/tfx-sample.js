const TFX = {
  'commands': {
    'select': {
      // 'template': 'To select a columns, you need to specify a number or column caption, like select column B',
      // 'template': 'select a selection of column or row',
      'template': 'select row or select column',
      'arguments': ['{selection}'],
    },
    'format': {
      // 'template': 'To Format a column, you need a column and a type, like format column five or column A as date',
      // 'template': 'format a selection of column or row as a type like date',
      'template': 'format row or format column',
      'arguments': ['{selection}', '{type}'],
    },
    'insert': {
      // 'template': 'To insert an element, you need a position and an element type, like insert row after row 5',
      // 'template': 'insert an element like column or row in a position like after or before',
      'template': 'insert column or insert row',
      'arguments': ['{element}', '{position}', '{selection}'],
    },
    'delete': {
      // 'template': 'To delete a cell, you need a cell, like C11',
      // 'template': 'delete an element like column or row',
      'template': 'delete a column or delete row',
      'arguments': ['{selection}'],
    },
    'sort': {
      // 'template': 'To sort a column, you need a column and an order, like sort column B',
      // 'template': 'sort a selection of column or row with an order like ascending or descending',
      'template': 'sort a column or sort row',
      'arguments': ['{selection}', '{order}'],
    },
  },
  'terms': {
    '{selection}': {
      'pattern': ['number {element}', '{element} number'],
      'regexp': ['(?P<element>column|row) (?P<name>\\w+)'],
    },
    '{element}': {
      'pattern': ['column', 'row'],
      'regexp': ['(?P<element>column)', '(?P<element>row)'],
    },
    '{position}': {
      'pattern': ['before', 'after', 'up', 'right', 'left', 'down'],
      'regexp': ['(?P<position>before)', '(?P<position>after)', '(?P<position>up)', '(?P<position>right)', '(?P<position>left)', '(?P<position>down)'],
    },
    '{order}': {
      'pattern': ['ascending', 'descending', 'by date'],
      'regexp': ['(?P<order>ascending)', '(?P<order>descending)', '(?P<order>by date)'],
    },
    '{type}': {
      'pattern': ['date', 'number'],
      'regexp': ['(?P<type>date)', '(?P<type>number)'],
    },
  },
};

export default TFX;