'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('component', { type: String, required: true });

    // And you can then access it later on this way; e.g. CamelCased
    this.component = _.camelCase(this.component);
  },

  writing: function() {
    this.fs.copy(
      this.templatePath('atom.js'),
      this.destinationPath('atoms/' + this.component.toLowerCase())
    );
  },

  install: function() {
    this.installDependencies();
  },
});
