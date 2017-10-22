export class NgPerfDemoController {
  pageNo: number = 1;
  // @todo: Write an interface for the User.
  users: Array<any>
  location: string;
  fetchingResults: boolean;

  static $inject = ['ngPerfDemoService'];
  constructor(private ngPerfDemoService: any) {
    // no-op.
  }

  /**
   * Updates the list of user as per the page number.
   */
  fetchUsers() {
    this.fetchingResults = true;
    this.ngPerfDemoService.fetchUsers(this.location, this.pageNo)
      .then((users: any) => this.users = users)
      .finally(() => this.fetchingResults = false);
  }

  updatePageNumber(increment: number) {
    this.pageNo += increment;
    this.fetchUsers();
  }
}
