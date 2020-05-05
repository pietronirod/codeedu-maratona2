import express from "express"

const Webserver = {
    start() {
        const app = express()
        const port = 3000
        const router = express.Router()

        router.get('/', (req, res) => res.send("Maratona Fullcycle 2.0"))
        
        app.use("/", router)
        app.listen(port, () => console.log(`Server listening on port ${port}`))
    }
}

export default Webserver