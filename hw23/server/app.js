import express from 'express';
import {data} from './products.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


app.get('/products', (request, response)=>{
	response.send(JSON.stringify(data));
});

app.post('/products', (request, response)=>{
	const newProduct = request.body;
	data.push(newProduct);
	console.log('heel yeah');
	response.send('ok')
});

app.get 

app.listen(3002);