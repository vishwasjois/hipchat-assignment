import express from 'express';
import parseController from './parse.controller';

const router = express.Router();
router.use('/parse', parseController);

export default router;
