import userEndpoint from './user.endpoint';
import logbookEndpoint from './logbookEndpoint';

const routes = function (router) {
    userEndpoint(router);
    logbookEndpoint(router);
};

export default routes;
