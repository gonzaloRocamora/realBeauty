
import React from 'react';
import './styles.css';

export default function CalendarHeader  ({ onNext, dateDisplay, onPrev })  {
  return(
    <div id="header">
      <div id="monthDisplay">{dateDisplay}</div>
      <div>
      <button onClick={onPrev} id="nextButton">Anterior</button>
        <button onClick={onNext} id="nextButton">Siguiente</button>
        
      </div>
    </div>
  );
};