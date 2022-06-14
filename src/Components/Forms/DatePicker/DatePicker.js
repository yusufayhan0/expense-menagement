import moment from 'moment';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker({
  name,
  onChange,
  formError,
  label,
  value
}) {
  const [startDate, setStartDate] = useState(
    value 
      ? new Date(moment(value, 'DD-MM-YYYY').format("MM-DD-YYYY")) 
      : new Date()
  );

  return (
    <Form.Group className="my-2">
      <Form.Label>{ label }</Form.Label>
      <ReactDatePicker dateFormat={'dd-MM-yyyy'} selected={startDate} onChange={(date) => {
        onChange({ target: { value: moment(date).format("DD-MM-YYYY"), name: name}})
        setStartDate(date)
      }} />
      <Form.Text className='color-danger'> {formError} </Form.Text>
    </Form.Group>
  )
}
