const express =  require('express');
const next = require('next');

const dev =process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

    server.get('/post?:UniqueMessageId', (req, res) => {
        const actualPage = '/post'        
        const queryPage = { UniqueMessageId: req.params.UniqueMessageId } 
        app.render(req, res, actualPage, queryPage)
    })

    server.get('*', (req,res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on https:localhost:3000')
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})