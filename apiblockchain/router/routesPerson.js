'use strict';
module.exports = function(app) {
  var personController = require('../controller/controllerPerson');

  //Routes
  app.route('/persons')
    .get(personController.list_all_person)
    .post(personController.create_a_person);

    //route with params
  app.route('/persons/:personId')
    .get(personController.read_a_person)
    .put(personController.update_a_person)
    .delete(personController.delete_a_person);
};