const getAttributes = (attrs: any = {}, $scope: any) => {
  const { ngPerf, ngPerfOnchange, ngPerfMarkers } = attrs as any;
  let isDisabled;
  let markers;
  let onChange;
  if (ngPerf) { isDisabled = JSON.parse(attrs.ngPerf) }
  if (ngPerfOnchange) { onChange = $scope.$ctrl[ngPerfOnchange] }
  if (ngPerfMarkers) { markers = ngPerfMarkers.split(',') }

  return { isDisabled, markers, onChange };
};

export const ngPerfDirective = (utilService: any) => {
  const link = ($scope: any, _element: any, attrs: any) => {
    let { isDisabled = false, markers = [], onChange = () => { } } = getAttributes(attrs, $scope);
    let prevState = utilService.fetchState($scope.$ctrl, markers);
    // Adds the watcher only when ngPerf is not disabled.
    if (!isDisabled) {
      let hasRegistered = false;

      $scope.$watch(() => {
        if (hasRegistered) { return; }
        hasRegistered = true;
        $scope.$$postDigest(() => {
          const currState = utilService.fetchState($scope.$ctrl, markers);
          onChange(utilService.fetchChangeObj(currState, prevState),
            currState, prevState);
          hasRegistered = false;
          prevState = currState;
        });
      });

    }
  }

  return {
    restrict: 'A',
    link,
  };
};
