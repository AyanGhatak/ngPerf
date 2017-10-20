import * as angular from 'angular';

import { ngPerfService } from './ngPerf.utilService';
import { ngPerfDirective } from './ngPerf.directive';

export const ngPerf = angular.module('ngPerf', [])
  .service('utilService', ngPerfService)
  .directive('ngPerf', ['utilService', ngPerfDirective]);
