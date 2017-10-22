import { NgPerfDemoController } from './app.controller';

export const NgPerfDemoComponent = {
  template: `
    <div>
      <h1>Find JS developers in your location</h1>
      <form name="searchDev" ng-submit="searchDev.$valid && $ctrl.fetchUsers()">
        <input ng-model="$ctrl.location" placeholder="Enter a location." required/>
        <button type="submit"> Search </button>
      </form>
      <div class="container" ng-if="$ctrl.users && !$ctrl.fetchingResults">
        <div class="list-container">
          <ul>
            <li ng-repeat = "user in $ctrl.users">
              <a href="{{ user.html_url }}">{{ user.login }}</a>
            </li>
          </ul>
        </div>
        <div class="list-navigator">
          <button ng-click="$ctrl.updatePageNumber(-1)" ng-disabled = "$ctrl.pageNo < 2">Prev</button>
          <button ng-click="$ctrl.updatePageNumber(1)">Next</button>
        </div>
      </div>
      <div ng-if="$ctrl.fetchingResults"> Fetching developers in {{ $ctrl.location }} ...</div>
    </div>
  `,
  controller: NgPerfDemoController,
}
