import React from 'react'
import Calendar from './calendar/Calendar';

export default function Home({logOut, email}) {
    
  
   
    return (
        <div>
           <h2>Welcome To Real Beauty</h2> 
           <Calendar email={email} />

            <button onClick={logOut}>Log out</button>
        </div>
   
   )
}
