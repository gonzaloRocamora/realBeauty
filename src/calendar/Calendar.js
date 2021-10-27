import React, { useState, useEffect } from 'react';
import  CalendarHeader  from './CalendarHeader';
import  Day from './Day';
import  NewEventModal  from './NewEventModal';

import  useDate  from './useDate';
import './styles.css'


export default function Calendar  ()  {
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
//obtenemos el dia del año clickeado
  //console.log(clicked)
  const [events, setEvents] = useState(
    localStorage.getItem('events') ? 
      JSON.parse(localStorage.getItem('events')) : 
      []
  );

  const eventForDate = date => events.find(e => e.date === date);

 

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const { days, dateDisplay } = useDate(events, nav);
  
  return(
    <>
      <div id="calendar">
        <CalendarHeader 
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onPrev={() => setNav(nav - 1)}
         
        />

        <div id="weekdays">
          <div>Domingo</div>
          <div>Lunes</div>
          <div>Martes</div>
          <div>Miercoles</div>
          <div>Jueves</div>
          <div>Viernes</div>
          <div>Sabado</div>
        </div>

        <div id="calendar">
          {days.map((mapDays, index) => (
            <Day
              key={index}
              day={mapDays}
              
              onClick={() => {
                if (mapDays.value !== 'padding') {
                  setClicked(mapDays.date);
                }
              }}
            />
          ))}
        </div>
      </div>

      {
        clicked && !eventForDate(clicked) &&
        <NewEventModal
          onClose={() => setClicked(null)}
          clicked={clicked}
         
        />
      }

    
    </>
  );
};
