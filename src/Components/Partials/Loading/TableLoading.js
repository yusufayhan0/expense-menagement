import React from 'react'
import { Spinner } from 'react-bootstrap';

export default function TableLoading({ colspan }) {
  return (
    <tbody>
      <tr>
        <td align='center' colSpan={colspan}>
          <Spinner animation="border" />
        </td>
      </tr>
    </tbody>
  )
}
