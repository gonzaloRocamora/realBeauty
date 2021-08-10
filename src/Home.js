import React from 'react'
import Calendar from './calendar/Calendar';

export default function Home({logOut,}) {
    
  
   
    return (
        <div>
           
           <h4>Selecciona un dia y horario</h4>
           <Calendar  />

            <button onClick={logOut}>Log out</button>
        </div>
   
   )
}
