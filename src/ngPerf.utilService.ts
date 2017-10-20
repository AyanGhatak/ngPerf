export class ngPerfService {
  fetchState($ctrl: any, markers: any = []) {
    return markers
      .reduce((stateObj: any, marker: any) => (stateObj[marker] = $ctrl[marker], stateObj), {});
  }

  fetchChangeObj(currState: any, prevState: any) {
    let changeObj: any = {};
    for (let prop in currState) {
      if (currState.hasOwnProperty(prop)) {
        // @todo: Supports only primitive values.
        const currentValue = currState[prop];
        const previousValue = prevState[prop];
        if (currentValue !== previousValue) {
          changeObj[prop] = { currentValue, previousValue };
        }
      }
    }
    return changeObj;
  }
}
