import React, { useEffect, useState } from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import LineChart from '../Components/Charts/LineChart'
import DoughutChart from '../Components/Charts/DoughutChart'
import PolarArea from '../Components/Charts/PolarArea'
import DashboardCard from '../Components/Partials/DashboardCard/DashboardCard'
import axios from '../Plugins/axios'
import { expenses, incomes, amount } from '../Filters/resource'

export default function DashBoard() {
  const [expensesState, setExpenses] = useState([])
  const [incomesState, setIncome] = useState([])

  useEffect(() => {
    load()
  }, [])

  const [loading, setLoading] = useState(false)

  const load = () => {
    setLoading(true)
    axios.get('/expenses')
    .then(res => {
      setIncome(amount(incomes(res.data)))
      setExpenses(amount(expenses(res.data)))
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <div className='m-3'>
      <Row>
        <Col>
          <DashboardCard 
            title='Income'
            data='23423'
            status='$'
            backgroundColor='#ff6384'
          />
        </Col>
        <Col>
          <DashboardCard
            title='Expenses'
            data="32423"
            status='$'
            backgroundColor='#ff9800'
          />
        </Col>
        <Col>
          <DashboardCard 
            title='Balance'
            data="23423"
            status='$'
            backgroundColor='#4caf50'
          />
        </Col>
        <Col>
          <DashboardCard 
            title='Income'
            data="12312"
            status='$'
            backgroundColor='#00bcd4'
          />
        </Col>
        <Col>
          <DashboardCard
            title='Expenses'
            data="32423"
            status='$'
            backgroundColor='#925900'
          />
        </Col>
        <Col xs="12">
          <Row className='mt-4'>
            <Col md="6">
              <Card body>
                {
                  !loading && (
                    <LineChart 
                      datas={{
                        income: expensesState,
                        expense: incomesState,
                      }} 
                    />
                  )
                }
              </Card>
            </Col>
            <Col md="3">
              <Card body className='h-100'>
                {
                  !loading && (
                    <DoughutChart 
                      datas={{
                        income: expensesState,
                        expense: incomesState,
                      }} 
                    />
                  )
                }
              </Card>
            </Col>
            <Col md="3">
              <Card body className='h-100'>
                {
                  !loading && (
                    <PolarArea
                      datas={{
                        income: expensesState,
                        expense: incomesState,
                      }} 
                    />
                  )
                }
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
