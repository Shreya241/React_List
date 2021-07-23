import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const[ usersList, setUsersList]=useState([]);
  return (
    <div>
<AddUser/>
<UserList users={usersList}/>
    </div>
  );
}

export default App;
