
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const port = 3000


//this function accepts a string and returns a new string with 
//every third letter of the orginal string
const everyThirdLetter = (str) => {
    if (str.length < 3){
        return str
    }
    let newStr = ''
    for (let i = 0; i < str.length; i++){
        if(i % 3 === 2) newStr+= str[i]
    }
    return newStr
}



app.post('/test', (req, res) => {
    let result = ''
    const {string_to_cut} = req.body   // Destructuring the value from req.body object
    result = everyThirdLetter(string_to_cut)  
    console.log({"return_string":`${result}`})
    res.status(200).send({"return_string":`${result}`})
})


app.listen(port, () => {
    console.log(`server running on ${port}`)
})