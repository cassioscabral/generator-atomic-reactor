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
      var appPath = 'src/components/';
      var componentType = type + 's/';
      var commonPath = appPath + componentType + snakeComponent;

      var stylesheetsPath = commonPath + '/stylesheets';
      var imagesPath = commonPath + '/images';
      var testsPath = commonPath + '/tests';
      var filepath = commonPath + '/' + this.component + '.js';

      mkdirp.sync(stylesheetsPath);
      mkdirp.sync(imagesPath);
      mkdirp.sync(testsPath);

      this.fs.copyTpl(
        this.templatePath(type + '.js'),
        this.destinationPath(filepath),
        {
          component: this.component,
          componentClass: _.kebabCase(this.component),
          filename: snakeComponent,
          filepath: filepath,
        }
      );

      this.fs.write(stylesheetsPath + '/' + snakeComponent + '.' + stylesheetsType, '');
      this.fs.write(testsPath + '/' + snakeComponent + '.js', '');
    },
  };
};

exports.baseGeneratorFactory = baseGeneratorFactory;
