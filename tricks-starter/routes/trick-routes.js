const express = require('express');
const controller = require('../controllers/tricksController');
const views = require('../controllers/viewController');

const tricksRoutes = express.Router();

// tricksRoutes.get('/:id/edit', controller.getOne, views.showEditForm, views.show404);

// tricksRoutes.get('/new', views.showAddForm);

tricksRoutes.route('/:id')
  .get(controller.getOne, views.showOne, views.show404);
  // .put(controller.update, views.handleUpdate, views.show406)
  // .delete(controller.destroy, views.handleDelete, views.show404);

tricksRoutes.route('/')
  .get(controller.index, views.showTricks, views.show404);
  // .post(controller.create, views.handleCreate, views.show406);

  module.exports = tricksRoutes;
