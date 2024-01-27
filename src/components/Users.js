import React, { useEffect, useState } from 'react'

function Users({ data, sort }) {

    const [nameOrder, setNameOrder] = useState('');

    const handleNameOrder = (fieldName)=>{
       let newOrder = nameOrder  == '' ? 'asc' : (nameOrder == 'asc'? 'desc' : '' );
       setNameOrder(newOrder);
       sort(fieldName, true ,newOrder )

    }
    
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                            <div className='d-flex justify-content-between'>
                                <div>name</div>
                                <div className='text-end'> 

                                <button className='btn p-0' onClick={()=>{
                                    handleNameOrder()
                                    }}>
                                    <div className= {nameOrder != '' ? 'text-primary':''}>
                                    {

                                       nameOrder == '' ?
                                       <i className="bi bi-sort-alpha-down"/> :
                                        (nameOrder == 'asc' ?
                                        <i className="bi bi-sort-alpha-down" ></i> :
                                        <i className="bi bi-sort-alpha-up"></i>)
                                    }
                                    </div>        
                                </button>

                                </div>
                            </div>
                             </th>
                        <th scope="col">phone</th>
                        <th scope="col">email</th> 
                        <th scope="col">username</th> 
                    </tr>
                </thead>

                <tbody>
                    {
                        data?.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.phone}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.username}</td>
                                    
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>




        </>
    )
}

export default Users