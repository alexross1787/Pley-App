import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./styles.css/reservation.css"

export default function ReservationList () {
    return (
        <div>
            <h2>Reservations</h2>
            <form>
                <div className='resv-container'>
                <div className='row form-group col-sm-2'>
                    <label className=''>Date</label>
                    <div className='col-sm-4'></div>
                        <div className='input-group date' id='Datepicker'></div>
                    <input type='text'></input>
                </div>
                </div>
            </form>
        </div>
    )
}
