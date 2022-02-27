import React from 'react'
import Calendar from './calendar/Calendar';
import './logStyle.css'

export default function Home({logOut,}) {
    
  
   
    return (
        <div className='divHome'>
           <h1>Marampo Barber Shop</h1>
           <h3>Selecciona un dia y horario</h3>
           <Calendar  />

            <button onClick={logOut}>Log out</button>
        </div>
   
   )
}
