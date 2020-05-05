import express from "express"
import Router from "./routers/router.js"

const Webserver = {
    start() {
        const app = express()
        const port = 3000
        const router = express.Router()

        router.get('/', (req, res) => Router.root(req, res))

        app.use("/", router)
        app.listen(port, () => console.log(`Server listening on port ${port}`))
    }
}

export default Webserver