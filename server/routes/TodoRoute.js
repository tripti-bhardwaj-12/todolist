import express, { Router } from 'express';
import { deleteTod, getTodo, saveTodo, updateToDo } from '../controllers/todo.js';
const router = Router();
router.get('/',getTodo)
router.post('/save',saveTodo)
router.post('/update',updateToDo)
router.post('/delete',deleteTod)
export default router;
