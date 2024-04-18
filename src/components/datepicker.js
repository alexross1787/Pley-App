import React, { useState }from "react";
import "react-datepicker/dist/react-datepicker.module.css"

export default function DatePicker() {
    const [date,setDate]=useState()

    console.log("Date")
    return (
        <div>
            <input type="date"
            onChange={e=>setImmediate(e.target.value)}/>
        </div>
    )
}