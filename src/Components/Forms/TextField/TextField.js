import React from 'react'
import { Form } from 'react-bootstrap'

export default function TextField({
  onChange,
  formError,
  name,
  label,
  type,
}) {
  return (
    <Form.Group className='my-2'>
      <Form.Label>{ label }</Form.Label>
      <Form.Control name={ name } onChange={ onChange } type={ type || 'text' } />
      { formError && <Form.Text className='color-danger'> { formError } </Form.Text> }
    </Form.Group>
  )
}
