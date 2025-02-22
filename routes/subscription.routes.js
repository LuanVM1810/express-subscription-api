import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (request, response) => {
    response.send({ title: "GET all subcription" });
})

subscriptionRouter.get("/:id", (request, response) => {
    response.send({ title: "GET subcription detail" });
})

subscriptionRouter.post("/", (request, response) => {
    response.send({ title: "CREATE subcription" });
})

subscriptionRouter.put("/:id", (request, response) => {
    response.send({ title: "UPDATE subcription" });
})

subscriptionRouter.delete("/:id", (request, response) => {
    response.send({ title: "DELETE subcription" });
})

subscriptionRouter.get("/user/:id", (request, response) => {
    response.send({ title: "GET all user subcription" });
})

subscriptionRouter.put("/:id/cancel", (request, response) => {
    response.send({ title: "CANCEL subcription" });
})

subscriptionRouter.get("/upcoming-renewals", (request, response) => {
    response.send({ title: "GET upcoming renewals" });
})

export default subscriptionRouter;