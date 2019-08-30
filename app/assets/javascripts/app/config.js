angular.module('FirstApp').config([
  "$httpProvider"
  , function(
    $httpProvider
  ) {
    // CSRF
    var csrfToken = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.post['X-CSRF-Token'] = csrfToken;
    $httpProvider.defaults.headers.put['X-CSRF-Token'] = csrfToken;
    $httpProvider.defaults.headers.patch['X-CSRF-Token'] = csrfToken;
    $httpProvider.defaults.headers.delete = {'X-CSRF-Token': csrfToken};
  }]);
