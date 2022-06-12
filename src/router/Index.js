import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Default from '../Layouts/Default'
import Panel from '../Layouts/Panel'
import Pages from '../Pages/Index'


export default function Index() {
  return (
    <Routes>
      <Route path='panel' element={<Panel />}>
        <Route index element={ <Pages.DashBoard/> } />
        <Route path='*' element={ <Pages.NotFound/> } />
      </Route>
    
      <Route path='*' element={<Default />}>
        <Route index element={ <Pages.Home/> } />
        <Route path='about' element={ <Pages.About/> } />
        <Route path='*' element={ <Pages.NotFound/> } />
      </Route>
    </Routes>
  )
}
