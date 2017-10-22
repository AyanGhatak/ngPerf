export class NgPerfService {
  static $inject = ['$http'];
  static BASE_URL = 'https://api.github.com/search/users';
  constructor(private $http: any) {}

  fetchUsers(location = 'San Francisco', page = 1, language='javascript', per_page = 10) {
    return this.$http({
      method: 'GET',
      url: 'https://api.github.com/search/users',
      paramSerializer: () => {
        return `q=location:${location}+language:${language}&page=${page}&per_page=${per_page}`;
      }
    }).then((response: any) => response.data.items);
  }
}
