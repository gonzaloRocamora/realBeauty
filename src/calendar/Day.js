import React from 'react';

export default function Day ({ day, onClick })  {
  const className = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`;
  console.log('hola',day.value);
  //deconstruyo el objeto para acceder al valor date
  //tambien podemos obetener el numero de dias con day.value o ppasar {value}
  //console.log(day)
  let arrDays = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu','Fri', 'Sat'];
  //con el date   que obtengo de mi objeto day utilizo la fecha mm/dd//yyy para obetner el actual day con getDay()
  //luego con el numero de actual day le paso el index a arrDays  mas el numero del dia con day.value
  const {date} = day;
  let stringed = new Date(date)
  let actualDay = stringed.getDay()
  //console.log('STRINGED => ',actualDay)
  return (
    <div onClick={onClick} className={className}>
      
      {day.value === 'padding' ? '' : arrDays[actualDay] + ' ' + day.value}
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

