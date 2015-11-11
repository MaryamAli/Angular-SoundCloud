import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import HomeController from './controllers/home.controller';

angular
  .module('app', ['ui.router'])
  .constant('SC', '4fdb73276057bdd94da75dd2893c7250')
  .config(config)
  .controller('HomeController', HomeController);


