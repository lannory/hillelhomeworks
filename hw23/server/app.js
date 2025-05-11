import express, { response } from 'express';
import {data} from './todos.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;


app.get('/todos', (request, response)=>{
	response.send(JSON.stringify(data));
});

app.post('/todos', (request, response)=>{
	const newTodo = request.body;
	data.push(newTodo);
	response.send('ok')
});

app.delete('/todos', (request, response)=>{
	const {index} = request.body;
	data.splice(index, 1);
});


app.patch('/todos', (request, response) =>{
	const {index} = request.body;

	data[index].isChecked = !(data[index].isChecked);
});

app.listen(PORT, ()=>{
	console.log(`we are listening to ${PORT} port`)
});