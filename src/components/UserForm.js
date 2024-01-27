import React, { useEffect, useState } from 'react'

function UserForm({updateUser, user, isEdit}) {
    const [userForm, setUserForm] = useState({
        name:'',
        phone:'',
        email:'',
        username:'',
    });

   const  updateUserForm = (fieldName, fieldVal)=>{
    setUserForm({
        ...userForm,
        [fieldName]:fieldVal
    })

    }

    useEffect(()=>{
        console.log('use effect called');
        //set user form value if it is 
        if(isEdit){
            //set userformfield value
            setUserForm({
                ...user
            })
        }
    }, [user])
    const addUserForm = ()=>{
        // console.log(userForm);
        updateUser(userForm);
        //clear user form
        setUserForm({
        name:'',
        phone:'',
        email:'',
        username:''
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
                <input type='text' value={userForm.username} className='form-control' onChange={(e)=>{
                    updateUserForm('username', e.target.value)
                }}></input>
            </div>

            <div className='text-end'>
            <button className='btn btn-primary mt-2' onClick={addUserForm}>{isEdit ? ' Update User':'Add User'}</button>
            </div>
            
        </form>
    </div>
  )
}

export default UserForm