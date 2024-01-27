import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';

import axios from 'axios'
import UserSearch from './UserSearch';

function App() {

  let [originalUsers, setOriginalUser] = useState([]);
  const [users, setUsers] = useState([]);
  // const [apiLoaded, setApiLoaded] = useState(false)


  //fetch users list
  useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(usersList => {
    //     setUsers(usersList);
    //   })
    // console.log("calling");

    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
      // console.log(res.data);
      setUsers(res.data)
      setOriginalUser(res.data)
      // setApiLoaded(true)
    }, [originalUsers])

  
  },[]) //useeffect hook end

  const updateUserList = (user)=>{
    console.log(user);
    try{
      axios.post('https://jsonplaceholder.typicode.com/users',user).then(res=>{
        //update user to the userState
        if(res.status == 201){
         
          setUsers([...users, res.data]);
          //hide the user add form again
          setAddUserOpened(false);
          alert('User added succefully');
        }
       
      })
    }catch(e){
      console.log(e.message);
    }
   
   }

  const sortByFieldName = (fieldName, caseCheck = false, nameOrder)=>{
    console.log(originalUsers);


    if (nameOrder != '') {
      let sortedUsers = []
      if (nameOrder == 'asc') {
        sortedUsers = users.sort((a, b) => b.name.localeCompare(a.name));
      } else {
        sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
      }

      console.log(sortedUsers);
      setUsers([...sortedUsers]);
    }else{
      console.log("else");
       let sortedUsers = users.sort((a, b) => a.id - b.id);

      setUsers([...sortedUsers]);

    }
    

  }

  const handleSearch = (searchText)=>{
    console.log(searchText);

    if(searchText == ''){
      //clear the value show original users
      setUsers(originalUsers);
    }else{
      if(true){
        console.log(originalUsers);
        let searchedUsers = originalUsers.filter(user=>{
          return user.name.toLowerCase().includes(searchText.toLowerCase());
       })
  
       setUsers(searchedUsers);
      }
    }
   
   
  }

  const [addUserOpened, setAddUserOpened] = useState(false)

  const handleAddNewUser = ()=>{
    setAddUserOpened(true);
  }

  return (
    <div >
      <div className='row ms-1' style={{ width: '99%' }}>
        <div className='col-md-8'>
           
        <div className='text-primary h2 text-center'>Users List</div>

          <div className='d-flex justify-content-between'>
            <UserSearch searchHandler = {handleSearch}/>
            <div className='text-end mt-2 mb-1'>
              <button className='btn btn-primary' disabled = {addUserOpened} onClick={()=>{
                handleAddNewUser()
              }}>Add new User</button>
            </div>
          </div>

          <Users data={users} sort={sortByFieldName} />
        </div>
        <div className='col-md-4 mt-5'>
          {
            addUserOpened &&
            <UserForm updateUser={updateUserList} showForm = {addUserOpened}/>
          }
          
        </div>
      </div>

    </div>
  );
}

export default App;
