import React, { memo, useState } from 'react'

import {useSelector} from 'react-redux'
import { store } from './service/store';
const Test = () => {
    console.log('test rendered');
    const [ids, setData] = useState([]);
    const newUserIds = useSelector(state=>{
        let newIds = state.user.map(user=>user.id)
        return newIds
    })

  return (
    <div>{
        //  ids.map(id=><>{id}</>)
        newUserIds
        
        }</div>
  )
}

export default memo(Test)