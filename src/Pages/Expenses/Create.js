import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ReactDatePicker from '../../Components/Forms/DatePicker/DatePicker'
import TextField from '../../Components/Forms/TextField/TextField'
import SelectField from '../../Components/Forms/SelectField/SelectField'
import ResourceCreate from '../../Components/Resource/Create/Create'

//[--] here, validation can be done with formic or by using form-backend-validation, the errors returned from the backend can be displayed under the form elements.

export default function Create() {
  const [form, setForm] = useState({})
  const [formError, setFormError] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    console.log("aaaaaaaaaaaaaaformformform",form)
  }, [form])

  return (
    <div>
      <ResourceCreate
        title="Expense"
        form={form}
        extraData={{
          type: 'expense',
        }}
        formError={setFormError}
        route="expense" //[--] the url to use for the callback
        request="expenses" //[--] url to request
        type="post" //[--] request type post or put
      >
        <Row>
          <Col md="4">
            <TextField onChange={handleChange} name='name' label="Name" formError={formError.name} />
          </Col>

          <Col md="4">
            <TextField onChange={handleChange} name='description' label="Description" formError={formError.description} />
          </Col>
          
          <Col md="4">
            <TextField onChange={handleChange} name='amount' type="number" label="Amount" formError={formError.amount} />
          </Col>

          <Col md="4">
            <ReactDatePicker name='date' label="Date" onChange={handleChange} />
          </Col>

          <Col md="4">
            <SelectField items={ ['Daily', 'Weekly', 'Monthly', 'Yearly'] } name="interval" label="Interval" onChange={handleChange} />
          </Col>

          <Col md="4">
            <TextField onChange={handleChange} name='repeat' type="number" label="Repeat" formError={formError.repeat} />
          </Col>
        </Row>
      </ResourceCreate>
    </div>
  )
}
