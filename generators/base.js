var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var mkdirp = require('mkdirp');
var baseGeneratorFactory = function(type) {
  if (!_.includes(['atom', 'molecule', 'organism'], type)) {
    this.log.error('Component type: ' + type + ' invalid');
    done();
    return;
  }

  return {
    constructor: function() {
      yeoman.generators.Base.apply(this, arguments);

      this.argument('component', { type: String, required: true });

      this.component = _.capitalize(_.camelCase(this.component));
    },

    writing: function() {
      var snakeComponent = _.snakeCase(this.component);
      var stylesheetsType = 'scss'; // TODO make it dynamic, prompting the user
      var appPath = 'app/'; // TODO make it dynamic, prompting the user
      var componentType = type + 's/';

      var stylesheetsPath = appPath + componentType + snakeComponent + '/stylesheets';
      var imagesPath = appPath + componentType + snakeComponent + '/images';
      var testsPath = appPath + componentType + snakeComponent + '/tests';

      mkdirp.sync(stylesheetsPath);
      mkdirp.sync(imagesPath);
      mkdirp.sync(testsPath);

      this.fs.copyTpl(
        this.templatePath(type + '.jsx'),
        this.destinationPath('app/' + componentType + '/' + snakeComponent + '/' + this.component + '.jsx'),
        {component: this.component}
      );

      this.fs.write(stylesheetsPath + '/' + snakeComponent + '.' + stylesheetsType, '');
      this.fs.write(testsPath + '/' + snakeComponent + '.js', '');
    },
  };
};

exports.baseGeneratorFactory = baseGeneratorFactory;
