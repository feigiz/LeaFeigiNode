import express from 'express';
import cors from 'cors';
import { todoRouter } from './router/todoRouter.js';
import { userRouter } from './router/userRouter.js'
import { postRouter } from './router/postRouter.js'
import { commentRouter } from './router/commentRouter.js'
import { loginRouter } from './router/loginRouter.js';
import { logErrors } from './middleware/logError.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/todos', todoRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);
app.use('/login', loginRouter);

app.use(logErrors);

app.listen(8080, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT:", 8080);
});
