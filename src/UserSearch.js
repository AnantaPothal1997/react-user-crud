
import React, { useState } from 'react'

function UserSearch({searchHandler}) {
    const [searchText, setSearchText] = useState('');
  return (
      <>
          <div className='w-50 position-relative '>
              <div>
                {
                    searchText ==''? 
                    <i className="bi bi-search position-absolute search-icon"></i> : 
                    <i className="bi bi-plus-lg position-absolute search-icon" style={{rotate : '45deg', cursor: 'pointer'}} onClick={()=>{
                        setSearchText('');
                        searchHandler('')
                    }}></i>
                }
                
                
              </div>
              <div>
                  <input type='text' placeholder='Type to find a user...' className='pe-4 form-control' value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                    searchHandler(e.target.value);
                  }}></input>
              </div>
          </div>
      </>
    
  )
}

export default UserSearch