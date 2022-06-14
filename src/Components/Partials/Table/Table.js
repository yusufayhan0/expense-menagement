import React from 'react'
import { Table as BootstrapTable, Button } from 'react-bootstrap'
import TableLoading from '../Loading/TableLoading'

export default function Table({ headers, data, loading, handleDelete, route }) {

  return (
    <BootstrapTable striped bordered hover responsive>
      <thead>
        <tr>
          {
            headers && headers.map((header, i) => 
              <th 
                style={{ 
                      width: header.width ? header.width : '',
                      textAlign :header.align ? header.align : ''
                    }} 
                key={i}
                className='text-capitalize'
              >
                { 
                  header.value === '__action' 
                  ? (
                      header.name 
                        ? header.name 
                        : 'Action' 
                    )
                  : header.name 
                }
              </th> 
            )
          }
        </tr>
      </thead>
      {
        loading 
          ? <TableLoading colspan={ headers?.length } />
          : <tbody>
              {
                data && data.map((row, i) => 
                  <tr key={i}>
                    {
                      headers && headers.map((header, j) =>
                        header.value !== '__action' && 
                        <td key={j}>
                          { row[header.value] }
                        </td>
                      )
                    }
                    <td className='d-flex justify-content-end'>
                      <Button className='py-1 h-75' variant='danger' onClick={() => handleDelete(row.id)} >Delete</Button>
                      <Button className='py-1 h-75 ms-2' href={`/${route}/edit/${row.id}`} variant='info'>Edit</Button>
                    </td>
                  </tr>
                )
              }
            </tbody> 
          
      }
    </BootstrapTable>
  )
}
