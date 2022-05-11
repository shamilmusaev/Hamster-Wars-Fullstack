

const express = require('express')
const app = express()
const cors = require ('cors')
const path = require ('path')
const hamsters = require('./routes/hamsters.js')
const matches = require("./routes/matches");
const matchWinners = require("./routes/matchWinners");
const winners = require("./routes/winners");
const losers = require("./routes/losers");


const PORT = process.env.PORT || 1995
const buildFold = path.join(__dirname, '../build')
const staticFolder = path.join(__dirname, 'static')
const staticImgFolder = path.join(__dirname, 'img')



//middleware

app.use((req, res, next) => {
	//logger - skriver tinformation om det request som kommer 
	console.log(`${req.method} ${req.url} `,
	req.params);
	next()
})

app.use( express. json() )
app.use( cors() )
app.use( express.static(buildFold) )
app.use( express.static(staticFolder) )
app.use( '/img', express.static(staticImgFolder))







app.use("/hamsters", hamsters);
app.use("/matches", matches);
app.use("/matchWinners", matchWinners);
app.use("/winners", winners);
app.use("/losers", losers);




//den här request ska vara sist

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

//starta servern
app.listen(PORT, () => {
	console.log('Server listening on ' + PORT);
})