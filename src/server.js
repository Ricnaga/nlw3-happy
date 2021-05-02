const express = require('express');
const path = require('path');
const pages = require('./pages')

const server = express()
const PORT = 3000

server
.use(express.urlencoded({extended: true}))
.use(express.static('public'))

.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

server.listen(PORT, console.log(`happy is being watched on port:${PORT} - Quis custodiet ipsos custodes?`))