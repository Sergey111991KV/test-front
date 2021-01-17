const express = require('express')
const config =  require('config')

const app = express()
 
const PORT = config.get('port') || 5000

const GET_PHOTO = 'https://boiling-refuge-66454.herokuapp.com/images'

app.use

async function start () {
    try {
        app.listen(5000, () => console.log(`App has been started on port ${PORT}... `))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit
    }
}

start()