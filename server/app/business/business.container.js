'use strict';

import userManager from './user.manager';
import logbookManager from './logbook.manager';


function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
    getUserManager: getter(userManager),
    getLogBookManager: getter(logbookManager)
};
