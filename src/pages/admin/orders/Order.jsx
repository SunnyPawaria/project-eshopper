import React from 'react'

export default function Order() {
  return (
    <div className="card">
      <div className='card-header bg-primary '>
        <h5 className='text-white'>Order </h5>
      </div>
      <div className="card-body">
        <div className='table-responsive'>
          <table className="table table-striped">
            <thead className='bg-primary text-white'>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
