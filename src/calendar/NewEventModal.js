import React, { useState, useEffect } from "react";
import fire from "../firebase";
import "firebase/firestore";

export default function NewEventModal({ onClose, clicked }) {
  const db = fire.firestore();

  const [horas, setHoras] = useState();

  //agregar data a firestore horas y dia clickeado
  const saveHour = async () => {
    console.log('horas ?',horas)
    
    
    if (horas && horas != "ninguna-opcion" ) {
    
      await db.collection("turnos").doc().set({
        hour: horas,
        day: clicked,
      
      });
      alert('Hemos enviado un mail de confirmacion a tu cuenta de email.')
      onClose();
    }else{
      alert('Debes seleccionar una opcion FORRO!')
    }
   
  };

  const [hours, setHours] = useState([
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ]);
//moment
  //leer datos desde database condicion day : clicked
  const getHours = () => {
    var citiesRef = db.collection("turnos");

    var query = citiesRef.where("day", "==", clicked);

    query
      .get()
      .then((result) => {
        //MAPEO TODOS LOS TURNOS YA ELEGIDOS PARA OBTENER UN NUEVO ARREGLO CON LOS MISMOS Y LOS PASO A NUMERO
        const turnosMapeados = result.docs.map((item) => {
          return Number(item.data().hour);
        });
        console.log(turnosMapeados);
        //FILTRO LAS HORAS PARA QUEDARME CON LOS HORARIOS QUE NO INCLUYAN A LOS TURNOS MAPEADOS
        const newHours = hours.filter((horario) => {
          return !turnosMapeados.includes(horario);
        });
        //SETEO LAS HORAS A LAS NEWHOURS QUE SON MIS HORAS FILTRADAS QUE EN LAS OPTIONS DEL SELECT MAPEE SOLO HORARIOS DISPONIBLES
        setHours(newHours);
        console.log(newHours);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  useEffect(() => {
    getHours();
  }, []);

  return (
    <div id="newEventModal">
      <h2>Elige un horario disponible:</h2>
      <select onChange={(e) => setHoras(e.target.value)}>
        <option value="ninguna-opcion">Selecciona una opcion</option>
        {hours.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>

      <button onClick={saveHour}>save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

/* 
<select onChange={(e) => setHoras(e.target.value)}>
        <option>Selecciona una opcion</option>
        {hours.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>*/
