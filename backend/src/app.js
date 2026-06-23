const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRoutes = require('../src/routes/auth.route')
const notesRoutes = require('../src/routes/notes.route')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())

const path = require('path');

app.use(
    "/uploads",
    express.static("uploads")
);

app.use('/api/auth', authRoutes)
app.use('/api',notesRoutes)

module.exports = app