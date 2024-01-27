import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import { useEffect, useState } from 'react';
import UserForm from './components/UserForm';

import axios from 'axios'
import UserSearch from './UserSearch';
import api from './service/api';



function App() {

  let [originalUsers, setOriginalUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [addUserOpened, setAddUserOpened] = useState(false)

  const [selectedUser, setSelectedUser] = useState({});
  const [isUserEdit, setIsUserEdit] = useState(false);

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
      if(isUserEdit){
        //make api call and update the data
        api.put(`/users/${user.id}`, user).then(res=>{
          //update the updated data to the user list
          alert('User updated succesfully')
          let newUsers = users.map(user=>{
            if(user.id == res.data.id){
              return res.data
            }else{
              return user
            }
          });
          setUsers(newUsers)
          console.log();
        }).catch(e=>{
          console.log(e);
        })
        
        setIsUserEdit(false);
        setAddUserOpened(false);
      }else{
        axios.post('https://jsonplaceholder.typicode.com/users',user).then(res=>{
        //update user to the userState
        if(res.status == 201){
         
          setUsers([...users, res.data]);
          //hide the user add form again
          setAddUserOpened(false);
          alert('User added succefully');
        }
       
      })
      }
      
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

  const handleAddNewUser = ()=>{
    setAddUserOpened(true);
  }

  const handleDelete = (data)=>{
    try{
      api.delete(`/users/${data}`).then(res=>{
        if(res.status == 200){
          //data deleted succesfully so fetch it from the db in real case 
          // we just delete it from user list
          let newUsers = users.filter((user)=> user.id != data );

          setUsers([...newUsers]);
          alert('user delted succesfully')
        }
      })
      //delete the user from the 
    }catch(e){
      console.log(e.message);
    }
   

  }

  const handleUpdate = (user)=>{
    //set selected user
    setSelectedUser({...user});

    //set useEdit
    setIsUserEdit(true)

    //show the userfor
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

          <Users data={users} sort={sortByFieldName} deleteUser = {handleDelete} updateUser = {handleUpdate}/>
        </div>
        <div className='col-md-4 mt-5'>
          {
            addUserOpened &&
            <UserForm updateUser={updateUserList} user = {selectedUser} isEdit = {isUserEdit}/>
          }
          
        </div>
      </div>

    </div>
  );
}

export default App;
