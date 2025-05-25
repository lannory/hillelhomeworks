import express from 'express';
import cors from 'cors';
import {data} from './contacts.js'

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/contacts', (request, response)=>{
	response.send(JSON.stringify(data));
});

app.delete('/contacts/:id', (request, response)=>{
	const id = parseInt(request.params.id)

	const index = data.findIndex(item => item.id === id);

	data.splice(index, 1);

	response.send('deleted')
});

app.post('/contacts', (request, response) => {
	const newContact = request.body;

	data.push(newContact);
})

app.patch('/contacts', (request, response) => {
	const {id, name, phone} = request.body;
	
	const i = data.findIndex(item => item.id === id);

	data[i].name = name;
	data[i].id = id;
	data[i].phone = phone;
})

app.listen(PORT, ()=>{
	console.log('server started');
});