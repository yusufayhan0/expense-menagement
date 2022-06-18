//[--] all route operations of the app take place here
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Default from '../Layouts/Default'
import Pages from '../Pages/Index'

export default function Index() {
  return (
    <Routes>
      <Route path='*' element={<Default />}>
        <Route index element={ <Pages.DashBoard/> } />
        <Route path='expense'>
          <Route index element={ <Navigate replace to="/expense/list" /> } />
          <Route path='list' element={ <Pages.Expenses.List/> } />
          <Route path='create' element={ <Pages.Expenses.Create/> } />
          <Route path='edit/:id' element={ <Pages.Expenses.Edit/> } />
        </Route>
        <Route path='income'>
          <Route index element={ <Navigate replace to="/income/list" /> } />
          <Route path='list' element={ <Pages.Income.List/> } />
          <Route path='create' element={ <Pages.Income.Create/> } />
          <Route path='edit/:id' element={ <Pages.Income.Edit/> } />
        </Route>
        <Route path='*' element={ <Pages.NotFound/> } />
      </Route>
    </Routes>
  )
}
