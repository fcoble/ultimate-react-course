import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({children, onClick}) {
  return <button className="button" onClick={onClick}>{children}</button>;
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  const [showAddFriend, setShowAddFriend] = useState(false);

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    //we use the spread operator because using array.push would mutate the original array
    //this method creates a new array and sets the friends state to be the new array
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => cur?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelection}s/>


        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>}
    </div>
  ) 

}


function FriendsList({ friends, selectedFriend, onSelection}) {
  return (
    <ul>
    {friends.map((friend) => 
      (<Friend friend={friend} key={friend.id} selectedFriend={selectedFriend} onSelection={onSelection}/> ))
    }
  </ul>
  );
}

function Friend({friend, onSelection, selectedFriend}) {

  const isSelected = selectedFriend?.id === friend.id;

  console.log(isSelected);

  return <li className={isSelected ? "selected" : ""}>
    <img src={friend.image} alt={friend.name}/>
    <h3>
      {friend.name}
    </h3>
    {friend.balance < 0 && <p className="red">You owe {friend.name} {Math.abs(friend.balance)}&euro;</p>}
    {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
    {friend.balance > 0 && <p className="green">{friend.name} owes you {Math.abs(friend.balance)}&euro;</p>}
    <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
  </li>;
}

//controlled input elements
function FormAddFriend({onAddFriend}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName('');
    setImage("https://i.pravatar.cc/48")
  }

  return <form className="form-add-friend" onSubmit={handleSubmit}>
    <label>👫 Friend Name</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

    <label>🌅 Image URL</label>
    <input type="text" value={image} onChange={(e) => setName(e.target.value)}/>
    <Button>Add</Button>
  </form>;
}



function FormSplitBill( {selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");


  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💵 Bill Value</label>
      <input 
        type="text" 
        value={bill} 
        onChange={(e) => setBill(Number(e.target.value))}/>

      <label>🧍Your Expense</label>
      <input 
        type="text"  
        value={paidByUser} 
        //With every keystroke paidByUser becomes the value, so if an amount is typed in that is greater than
        //the Bill Value, it reverts to the last paid by user value, pretty slick
        onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}/>   

      <label>👫 {selectedFriend.name}'s Expense</label>
      <input 
        type="text" 
        disabled="true" 
        value={paidByFriend}/>

      <label>🤑 Who is paying the bill?</label>
      <select 
        value={whoIsPaying} 
        onChange={(e) => setWhoIsPaying(Number(e.target.value))}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

