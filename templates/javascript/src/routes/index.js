import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json({ message: 'You are live' });
});

export default router;

// add your routes here
