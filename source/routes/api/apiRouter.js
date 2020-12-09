const express = require('express');
const usersCtrl = require('../../controller/tutorialCtrl');

exports.router = (() => {
    var apiRouter = express.Router();

    apiRouter.route('/users/register/').post(usersCtrl.register);

    return apiRouter;
})();