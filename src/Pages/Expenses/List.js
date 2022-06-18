import React, { useState } from 'react'
import ResourceList from '../../Components/Resource/List/List'

export default function List() {

  //[--] table head list
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

  //[--] param list
  const [params] = useState({
    type: 'expense',
  })

  return (
    <div>
      <ResourceList
        title="Expense"
        route="expense"
        request="expenses"
        headers={headers}
        params={params}
      >
      </ResourceList>
    </div>
  )
}