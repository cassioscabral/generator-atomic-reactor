'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    this.log(yosay(
      'Welcome to the nuclear ' + chalk.red('generator-atomic-reactor')
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true,
    },
  ];

    this.prompt(prompts, function(props) {
      this.props = props;

      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  },

  install: function() {
    this.installDependencies();
  },
});
