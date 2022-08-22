const appRoot = require('app-root-path')
const express = require('express')

const app = express()
const port = process.env.PORT || '5000'
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(appRoot.resolve('/build')))
app.get('*', (req, res) => res.sendFile(appRoot.resolve('/build/index.html')))
app.listen(port, () => console.log(`Listening on port ${port}`))
