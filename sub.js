var mqtt = require ('mqtt')
var client = mqtt.connect('mqtt://localhost:127.0.0.1')
var topic = 'projectiottest'

client.on('message', (topic,message)=>{
	message = message.toString()
	console.log(message)
})

client.on('connect', ()=>{
	client.subscribe(topic)
})
