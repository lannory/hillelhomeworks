
export default function DeleteContact ({id}){

	function handleDelete()
	{	
		fetch('http://localhost:3000/contacts', {
			method: 'Delete',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({id})
		})
	}
	return <button className='delete' onClick={handleDelete}>Delete</button>
}