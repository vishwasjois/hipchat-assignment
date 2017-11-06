import express from 'express';
import { parse } from '../services/parse';

const router = express.Router();

router.post('/message', (req, res) => {
    return parse(req, res);
});

export default router;
