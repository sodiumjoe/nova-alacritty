const colors = require('nova-colors');
const yaml = require('yaml');
const fs = require('fs');
const mkdirp = require('mkdirp');

const {
  ansiGroups: {
    normal,
    bright,
  },
  uiGroups: {
    background,
    foreground,
    userCurrentState,
  }
} = colors;

const values = {
  colors: {
    normal,
    bright,
    primary: {
      background,
      foreground,
    },
    cursor: {
      text: normal.black,
      cursor: userCurrentState,
    },
  }
};

mkdirp('build', () => {
  fs.writeFileSync('./build/colors.yml', yaml.stringify(values));
});
