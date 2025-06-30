// In your route file (e.g., route/subscribe.js)
import express from 'express';
import { subscribe } from '../controller/SubscribeController.js';

const router = express.Router();

router.post('/subscribe', subscribe);  // This should match

export default router;
