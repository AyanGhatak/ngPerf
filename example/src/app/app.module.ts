import * as angular from 'angular';
import { NgPerfService } from './app.service';
import { NgPerfDemoComponent } from './app.component';

export const NgPerfDemoModule = angular.module('ngPerfDemo', ['ngPerf'])
  .service('ngPerfDemoService', NgPerfService)
  .component('ngPerfDemo', NgPerfDemoComponent);
