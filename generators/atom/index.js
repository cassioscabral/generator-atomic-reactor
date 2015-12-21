var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var mkdirp = require('mkdirp');
var baseGeneratorFactory = require('../base.js').baseGeneratorFactory;

module.exports = yeoman.generators.Base.extend(baseGeneratorFactory('atom'));
