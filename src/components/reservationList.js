import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./styles.css/reservation.css"
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker';
import DatePicker from './datepicker';

export default function ReservationList () {
 
    return (
        <div className='container'>
            <h2>Reservations</h2>
            <div className='form-group res-inputs'>
                <form>
                    <div className='row'>
                        <div className='col'>
                    <div className='form-group'>
                    <label>Date</label>
                    <DatePicker className='datepicker'/>
                    </div>
                    </div>
                    <div className='col'>
                <div className='form-group'>
                <label>Time</label>
                <input 
                type='text'
                className='form-control'
                />
                </div>
                </div>

                <div className='col'>
                <div className="input-group"> 
                <label>Party</label>
                
                <select
                className='custom-select '>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>Huge Party</option>
                </select>
                </div>
                </div>
                </div>

            </form>
            </div>
            <button type='submit' className='btn btn-primary'>Reserve</button>
        </div>
    )
}
