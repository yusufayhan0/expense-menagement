import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ReactDatePicker from '../../Components/Forms/DatePicker/DatePicker'
import TextField from '../../Components/Forms/TextField/TextField'
import SelectField from '../../Components/Forms/SelectField/SelectField'
import ResourceCreate from '../../Components/Resource/Create/Create'

//[--]burada formik ile validasyon yapılabilir yada form-backend-validation kullanılarak backendden dönen hatalar form elemanlarının altında gösterilebilir 
//[--] Formlar ayrı bir component olarak oluşturulup uygulamada kullanılabilirdi

export default function Create() {

  const [form, setForm] = useState({})
  const [formError, setFormError] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <ResourceCreate
        title="Income"
        form={form}
        extraData={{
          type: 'income',
        }}
        formError={setFormError}
        route="income" //[--] geri dönüş için kullanılacak url
        request="expenses" //[--]istek atılacak olan url
        type="post" //[--]istek tipi post ya da put
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
