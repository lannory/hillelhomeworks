const contactBook = {
	contacts: [
		{ name: "Alex", phone: "123-456-7890", email: "alex@example.com" },
		{ name: "Bob", phone: "234-567-8901", email: "bob@example.com" },
		{ name: "Charlie", phone: "345-678-9012", email: "charlie@example.com" },
		{ name: "David", phone: "456-789-0123", email: "david@example.com" },
		{ name: "Emma", phone: "567-890-1234", email: "emma@example.com" },
		{ name: "Frank", phone: "678-901-2345", email: "frank@example.com" },
		{ name: "Grace", phone: "789-012-3456", email: "grace@example.com" },
		{ name: "Henry", phone: "890-123-4567", email: "henry@example.com" },
		{ name: "Isabella", phone: "901-234-5678", email: "isabella@example.com" },
		{ name: "Jack", phone: "012-345-6789", email: "jack@example.com" }
	],
	findByName: function () {
		let searchName;
		do{
			searchName = prompt("enter name you want to find");
		}while(!searchName)
		
		this.contacts.forEach(i => {
			if(i.name === searchName)
				console.log(`${i.name} ${i.phone} ${i.email}`);
		});
	},

	addNewContact: function (){
		let name, phone, email;
		do{
			name = prompt("enter name of contact");
			phone = prompt("enter phone of contact");
			email = prompt("enter email of contact");
		}while(!name || !phone || !email)
		
		this.contacts.push({'name': name, 'phone': phone, 'email': email})
	}
} 

contactBook.addNewContact();

console.log(contactBook);