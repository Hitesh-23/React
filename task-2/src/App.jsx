import React from 'react'
import Card from './components/Card'
import {users} from "../src/users.js"
import {users2} from "../src/users.js"

const App = () => {


  return (
    <div className='flex gap-5 flex-wrap justify-center'>
      {users.map(user => {
        return <Card key={user.id} {...user} />
      })}
      {users2.map(user => {
        return <Card key={user.id} {...user}/> 
      })}
    </div>
  )
}

export default App