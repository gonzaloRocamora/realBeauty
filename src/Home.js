import React from 'react'
import Calendar from './calendar/Calendar';

export default function Home({logOut, email}) {
    
  
   
    return (
        <div>
           
           <h4>Selecciona un dia y horario</h4>
           <Calendar email={email} />

            <button onClick={logOut}>Log out</button>
        </div>
   
   )
}
