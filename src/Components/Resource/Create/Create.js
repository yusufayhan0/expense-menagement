import React from 'react'
import { Button, Card, Form as BootstrapForm } from 'react-bootstrap'
import axios from '../../../Plugins/axios'
import { useNavigate } from 'react-router-dom'

export default function Create({
  title,
  children,
  form,
  route,
  request,
  extraData
}) {

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)

    let data = { ...form }

    if(extraData && typeof extraData === 'object') {
      data = { ...data, ...extraData }
    }
    
    axios.post(request, data)
    .then(() => {
      navigate(`/${route}`)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      console.log('finally')
    })
  }

  return (
    <Card className='m-3'>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <span>
          { title && title } Create
        </span>

      </Card.Header>
      <Card.Body>
        <BootstrapForm onSubmit={handleSubmit}>
          { children }

          <div className='d-flex justify-content-end mt-3'>
            <Button href={`/${route}`} className='py-1 h-75' variant='danger'>Cancel</Button>
            <Button className='py-1 h-75 ms-2' variant='success' type='submit'>Save</Button>
          </div>
        </BootstrapForm>
      </Card.Body>
    </Card>
  )
}
