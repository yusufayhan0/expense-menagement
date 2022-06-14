import React, { useState } from 'react'
import ResourceList from '../../Components/Resource/List/List'

export default function List() {

  const [headers] = useState([
    {value: 'id', name: 'ID', width: '5%'},
    {value: 'name', name: 'Name', width: '20%', align: 'center'},
    {value: 'description', name: 'Description'},
    {value: 'amount', name: 'Amount'},
    {value: 'date', name: 'Date'},
    {value: 'interval', name: 'Interval'},
    {value: 'repeat', name: 'Repeat'},
    {value: '__action', name: 'Action', width: '12%', align: 'center'},
  ])

  const [params] = useState({
    type: 'income',
  })

  return (
    <div>
      <ResourceList
        title="Income"
        route="income"
        request="expenses"
        headers={headers}
        params={params}
      >
      </ResourceList>
    </div>
  )
}