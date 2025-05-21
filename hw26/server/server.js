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

app.delete('/contacts', (request, response)=>{
	const {id} = request.body

	const index = data.findIndex(item => item.id === id);
	data.splice(index, 1);

	response.send('deleted')
});

app.post('/contacts', (request, response) => {
	const newContact = request.body;

	data.push(newContact);
})


app.listen(PORT, ()=>{
	console.log('server started');
});