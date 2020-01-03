
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(3000)

let obj = [
	{
		"name": "ivo",
		"surname": "kalendar",
		"addres" : "ul.Lazar Pop Trajkov"
	},{
		"name": "ivo",
		"surname": "kalendar",
		"addres" : "ul.Lazar Pop Trajkov"
	},{
		"name": "ivo",
		"surname": "kalendar",
		"addres" : "ul.Lazar Pop Trajkov"
	}
]

app.get('/', (req,res)=>{
	res.send(obj)
})