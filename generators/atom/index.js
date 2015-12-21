'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({

  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('component', { type: String, required: true });

    this.component = _.capitalize(_.camelCase(this.component));
  },

  writing: function() {
    var snakeComponent = _.snakeCase(this.component);
    var stylesheetsType = 'scss'; // TODO make it dynamic, prompting the user
    var appPath = 'app/'; // TODO make it dynamic, prompting the user
    var type = 'atoms/'; // could be molecule or organism, just to make it repliccable

    var stylesheetsPath = appPath + type + snakeComponent + '/stylesheets';
    var imagesPath = appPath + type + snakeComponent + '/images';
    var testsPath = appPath + type + snakeComponent + '/tests';

    mkdirp.sync(stylesheetsPath);
    mkdirp.sync(imagesPath);
    mkdirp.sync(testsPath);

    this.fs.copyTpl(
      this.templatePath('atom.jsx'),
      this.destinationPath('app/atoms/' + snakeComponent + '/' + this.component + '.jsx'),
      {component: this.component}
    );

    // TODO add templates for tests and stylesheet

    this.fs.write(stylesheetsPath + '/' + snakeComponent + '.' + stylesheetsType, '');
    this.fs.write(testsPath + '/' + snakeComponent + '.js', '');
  },
});
