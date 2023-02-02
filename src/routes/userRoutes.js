// const { getUsers, createUser } = require('../controller/userController');

import getController from '../controller/userController.js';

// const Router = require('express').Router();
import Router from 'express';

const router = Router();

router.get('/', getController.getUsers);
router.post('/', getController.createUser);

// module.exports = Router;

export default router;


