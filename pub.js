var mqtt = require('mqtt')
var topic = 'projectiottest'
var message = 'Hallo Guys!'
var client = mqtt.connect('mqtt://localhost:127.0.0.1')

client.on('connect', ()=>{
	setInterval(()=>{
	client.subscribe(topic, message)
	console.log('Message sent!', message)
}, 5000)
})
