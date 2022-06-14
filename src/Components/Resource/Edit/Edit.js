import React, { useEffect, useState } from 'react'
import { Button, Card, Form as BootstrapForm, Spinner } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../../../Plugins/axios'



export default function Edit({
  title,
  children,
  form,
  route,
  request,
  extraData,
  setData
}) {

  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    let data = { ...form }

    if(extraData && typeof extraData === 'object') {
      data = { ...data, ...extraData }
    }
    
    axios.put(`${request}/${id}`, data)
    .then(() => {
      navigate(`/${route}`)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const loadData = () => {
    setLoading(true)
    axios.get(`${request}/${id}`).then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <Card className='m-3'>
      {
        loading 
          ? <div className='d-flex justify-content-center'><Spinner animation="border" /></div>
          : <>
              <Card.Header className='d-flex align-items-center justify-content-between'>
                <span>
                  { title && title } Update
                </span>

              </Card.Header>
              <Card.Body>
                <BootstrapForm onSubmit={handleSubmit}>
                  { children }

                  <div className='d-flex justify-content-end mt-3'>
                    <Button href={`/${route}`} className='py-1 h-75' variant='danger'>Cancel</Button>
                    <Button className='py-1 h-75 ms-2' variant='success' type='submit'>Update</Button>
                  </div>
                </BootstrapForm>
              </Card.Body>
            </>
          
      }
    </Card>
  )
}
