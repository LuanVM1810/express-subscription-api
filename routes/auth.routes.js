import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-up', (request, response) => {
    response.send({ message: "Sign up" });
})
authRouter.post('/sign-in', (request, response) => {
    response.send({ message: "Sign in" });
})
authRouter.post('/sign-out', (request, response) => {
    response.send({ message: "Sign out" });
})

export default authRouter;