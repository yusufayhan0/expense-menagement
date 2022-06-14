import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SelectField from '../../Components/Forms/SelectField/SelectField'
import TextField from '../../Components/Forms/TextField/TextField'
import ReactDatePicker from '../../Components/Forms/DatePicker/DatePicker'
import ResourceEdit from '../../Components/Resource/Edit/Edit'

export default function Edit() {

  const [form, setForm] = useState({})
  const [formError, setFormError] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <ResourceEdit
        title="Income"
        form={form}
        setData={setForm}
        formError={setFormError}
        route="income" //[--] geri dönüş için kullanılacak url
        request="expenses" //[--]istek atılacak olan url
      >
        <Row>
          <Col md="4">
            <TextField onChange={handleChange} value={form.name} name='name' label="Name" formError={formError.name} />
          </Col>

          <Col md="4">
            <TextField onChange={handleChange} value={form.description} name='description' label="Description" formError={formError.description} />
          </Col>
          
          <Col md="4">
            <TextField onChange={handleChange} value={form.amount} name='amount' type="number" label="Amount" formError={formError.amount} />
          </Col>

          <Col md="4">
            <ReactDatePicker name='date' label="Date" value={form.date} onChange={handleChange} />
          </Col>

          <Col md="4">
            <SelectField items={ ['Daily', 'Weekly', 'Monthly', 'Yearly'] } value={form.interval} label="Interval" name="interval" onChange={handleChange} />
          </Col>

          <Col md="4">
            <TextField onChange={handleChange} value={form.repeat} name='repeat' type="number" label="Repeat" formError={formError.repeat} />
          </Col>
        </Row>
      </ResourceEdit>
    </div>
  )
}
