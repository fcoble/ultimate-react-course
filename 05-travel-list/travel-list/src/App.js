import { useState } from "react";
//since the Logo.js file contains export 'default' (empahsis on default)
//we could name Logo anything that we want, for example import X from './logo
//and call the component with <X />
import Logo from './components/Logo';
import Form from "./components/Form";
//This was done using refactor by selecting the code, refactor, and then new file
//This method refactors the code into a named export, so this is an example
// of a named export, in opposition to a 'default' export
import { PackingList } from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  {id: 1, description: "Passports", quantity: 2,  packed: false},
  {id: 2, description: "Socks", quantity: 12,  packed: true},
  {id: 3, description: "Charger", quantity: 1,  packed: false},
]
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(((items) => [...items, item]));
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item=>item.id !== id))
  }
  
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => 
        item.id === id ? { ...item, packed: !item.packed }
    : item)
  );
  }
  function handleClearItems() {
    const confirmed = window.confirm('Are you sure that you want to delete all items?')
    
    if (confirmed) setItems([]);

  }

  return <div className="app">
    <Logo />
    <Form onAddItems={handleAddItems}/>
    <PackingList 
      items={items} 
      onDeleteItem={handleDeleteItem} 
      onToggleItem={handleToggleItem}
      onClearItems={handleClearItems}
    />
    <Stats items={items}/>
  </div>
}


