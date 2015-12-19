'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    this.log(yosay(
      'Welcome to the nuclear ' + chalk.red('generator-atomic-reactor')
    ));

    var prompts = [{
      type: 'confirm',
      name: 'srcFolder',
      message: 'Is there a src folder?',
      default: false,
    },
  ];

    this.prompt(prompts, function(props) {
      this.props = props;

      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function() {
    var srcPath = '';
    if (this.props.srcFolder) {
      srcPath = 'src';
    }

    // - atoms/
    // - molecules/
    // - organisms/
    mkdirp.sync(srcPath + '/app/atoms/');
    mkdirp.sync(srcPath + '/app/molecules/');
    mkdirp.sync(srcPath + '/app/organisms/');

    // console.log('structure creeated');
    this.fs.copy(
      this.templatePath('App.js'),
      this.destinationPath(srcPath + '/app/App.js')
    );
  },

  install: function() {
    this.installDependencies();
  },
});
