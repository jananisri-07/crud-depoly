import express from 'express'
import { createUser, getUser} from '../handlers/users.js';

const usersRouter = express.Router();

usersRouter.get('/',getUser)
usersRouter.post('/',createUser)
// usersRouter.patch('/', updateUser)
// usersRouter.delete('/', deleteUser)
export default usersRouter;

