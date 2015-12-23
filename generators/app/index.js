'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    this.log(yosay(
      'Welcome to the nuclear ' + chalk.red('atomic-reactor')
    ));

    // Prompt example, that can be inserted in the prompts array
    // {
    //   type: 'confirm',
    //   name: 'srcFolder',
    //   message: 'Is there a src folder?',
    //   default: false,
    // },
    var prompts = [];

    this.prompt(prompts, function(props) {
      this.props = props;

      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function() {
    // TODO explore how to use this explosion art in small scale
    // var explosion = `
    //                           *****   *******   **
    //                    *****  *********************  *****
    //              ********************************************
    //             **********************************************
    //                ****  *******************************  ***
    //                         *********************
    //                            ****************
    //                             *************
    //                              **********
    //                              ***********                *
    //                  *          *************           *
    //              *              **************      *
    //            ****  ***   *  *****************  ****    **   ****
    //        ********************************************************`;
    //
    // this.log(chalk.red(explosion));
    // - atoms/
    // - molecules/
    // - organisms/
    mkdirp.sync('src/components/atoms/');
    mkdirp.sync('src/components/molecules/');
    mkdirp.sync('src/components/organisms/');
  },

  install: function() {
    this.installDependencies();
  },
});
