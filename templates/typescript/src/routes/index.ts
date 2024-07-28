import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'You are live' });
});

export default router;
