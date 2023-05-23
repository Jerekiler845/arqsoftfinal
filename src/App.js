import React, { useState } from 'react';
import './styles.css';

function HotelReservationForm() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos de reserva, como enviar una solicitud al servidor.
    // Por simplicidad, este ejemplo solo muestra los datos en la consola.
    console.log('Fecha de inicio:', startDate);
    console.log('Fecha de fin:', endDate);
    console.log('Cantidad de personas:', guests);
    console.log('Tipo de habitación:', roomType);
  };

  return (
<div >
      

      <h1 class="titulo">Reserva de Hoteles</h1>
<div class='recuadro'>
      

<div class='contenido'>
<label for="hotelselect">elegi tu hotel:<br></br></label>
<select name="hoteles" id="hotelselect">
    <option value="">elija su hotel</option>
    <option value="hotel1">hotel1</option>
    <option value="hotel2">hotel2</option>
    <option value="hotel3">hotel3</option>
    <option value="hotel4">hotel4</option>
    <option value="hotel5">hotel5</option>
</select>

      <form onSubmit={handleSubmit}>
        <label htmlFor="start-date">Fecha de inicio:        </label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
          required
        /><br />

        <label htmlFor="end-date">Fecha de fin:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
          required
        /><br />

        <input type="submit" value="Buscar Hoteles" />
      </form>
</div>

        </div>
     
    </div>
  );
}

export default HotelReservationForm;