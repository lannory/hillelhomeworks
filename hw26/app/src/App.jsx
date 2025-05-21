import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import AddContact from './AddContact';
import ContactsList from './ContactsList';
function App() {
  const [route, setRoute] = useState('Contacts')




  return (
    <>
      <nav><button onClick={()=> setRoute('Contacts')}>Contacts</button> <button onClick={()=> setRoute('addContact')}>Add new contact</button></nav>
      {route === 'Contacts' && <ContactsList/> }
      {route === 'addContact' && <AddContact changeRoute={setRoute}/>}
      {/* {route === 'editContact' && <EditContact/>} */}
    </>
  )
}

export default App
