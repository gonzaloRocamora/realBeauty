import React from 'react';

export default function Day ({ day, onClick })  {
  const className = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`;
  
  return (
    <div onClick={onClick} className={className}>
      {day.value === 'padding' ? '' : day.value}

      {day.event && <div className='event'>{day.event.title}</div>}
      
    </div>
  );
};


//OBTENER TODA LA DATA DE FIRE
/*
db.collection("turnos").get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data)
      })
    })

      
      .catch((error) => {
        console.log("Error getting document:", error);
      });
*/
/*
const limiter = (checked) =>{
     
  if(checked > 1){
    return alert('asdfa')
  }else{
    return false
  }
  
}

useEffect(() => {
getHours();


}, []);

useEffect(() => {
limiter(totalCbox);

}, [totalCbox])


eturn (
          <label name='labelCheck' htmlFor="horas">
            <input name='inputCheck'
              id="horas"
              type="checkbox"
              value={item}
              onClick={() => setTotalCbox(totalCbox +1)}
              onChange={(e) => setHoras(e.target.value)}
            ></input>
            {item}
          </label>

*/ 

