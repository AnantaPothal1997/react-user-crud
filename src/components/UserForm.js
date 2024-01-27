import React, { useState } from 'react'

function UserForm({updateUser}) {
    const [userForm, setUserForm] = useState({
        name:'',
        phone:'',
        email:'',
        userName:'',
    });

   const  updateUserForm = (fieldName, fieldVal)=>{
    setUserForm({
        ...userForm,
        [fieldName]:fieldVal
    })

    }

    const addUserForm = ()=>{
        // console.log(userForm);
        updateUser(userForm);
        //clear user form
        setUserForm({
        name:'',
        phone:'',
        email:'',
        userName:''
        })
    }
  return (
    <div className='form-group'>
        <form onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <div>
                <label>Name</label>
                <input type='text' value={userForm.name} className='form-control' onChange={(e)=>{
                    updateUserForm('name', e.target.value)
                }}></input>
            </div>
            <div>
                <label>phone</label>
                <input type='text' value={userForm.phone} className='form-control' onChange={(e)=>{
                    updateUserForm('phone', e.target.value)
                }}></input>
            </div>
            <div>
                <label>email</label>
                <input type='text' value={userForm.email} className='form-control' onChange={(e)=>{
                    updateUserForm('email', e.target.value)
                }}></input>
            </div>
            <div>
                <label>userName</label>
                <input type='text' value={userForm.userName} className='form-control' onChange={(e)=>{
                    updateUserForm('userName', e.target.value)
                }}></input>
            </div>

            <div className='text-end'>
            <button className='btn btn-primary mt-2' onClick={addUserForm}> Add User</button>
            </div>
            
        </form>
    </div>
  )
}

export default UserForm