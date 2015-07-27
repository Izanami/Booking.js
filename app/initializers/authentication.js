// app/initializers/authentication.js
import CustomAuthenticator from '../authenticators/custom';
import CustomAuthorizer from '../authorizers/custom';

export default {
  name:       'authentication',
  before:     'simple-auth',
  initialize: function(container, application) {
    application.register('authenticator:custom', CustomAuthenticator);
    application.register('authorizer:custom', CustomAuthorizer);
  }
};
