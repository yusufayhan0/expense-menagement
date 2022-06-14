import React from 'react'
import { Form } from 'react-bootstrap'

export default function SelectField({
  name,
  onChange,
  formError,
  items,
  label,
  value
}) {
  return (
    <Form.Group className='my-2'>
      <Form.Label>{ label }</Form.Label>
      <Form.Select defaultValue={value} name={ name } onChange={onChange} aria-label="Default select example">
        {
          items && items.map(interval => (
            <option 
              key={ interval.id ? interval.id : interval } 
              value={ interval.id ? interval.id : interval }
            >
              {interval.name ? interval.name : interval}
            </option>
          ))
        }
      </Form.Select>
      <Form.Text className='color-danger'> {formError} </Form.Text>
    </Form.Group>
  )
}
