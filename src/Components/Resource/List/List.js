import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Table from '../../Partials/Table/Table'
import axios from '../../../Plugins/axios'
import { getParams } from '../../../Helpers/resource'
import { defaultToast } from '../../../Helpers/toast'

export default function List({
  title,
  actions,
  headers,
  request,
  params,
  route
}) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const handleDelete = (id) => {
    axios.delete(`${request}/${id}`).then(() => {
      defaultToast('successfully deleted')
      loadData()
    })
  }

  const loadData = () => {
    setLoading(true)
    axios.get(`${request}?${getParams(params)}`).then(res => {
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
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <span>
          { title && title } List
        </span>

        <Button href={`/${route}/create`} variant="secondary" className='background-base-2'>Add { title && title }</Button>
      </Card.Header>
      <Card.Body>
        <Table
          handleDelete={handleDelete}
          headers={headers}
          data={data}
          actions={actions}
          loading={loading}
          route={route}
        />
      </Card.Body>
    </Card>
  )
}
