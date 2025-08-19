import express from 'express';
import { protectRoute } from '../middlewares/auth.ts';
import { getMessages, getUsersForSidebar, sendMessage } from '../controllers/message.ts';

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;