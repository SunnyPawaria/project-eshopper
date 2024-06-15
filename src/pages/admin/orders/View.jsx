import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"


export default function View() {
  const {order:{orders}} = useSelector(state => state);

  let {id } = useParams()

  let order = orders.find((order) => order.id === id)

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            OrderId #1
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <ul className="list-group">
            <li className="list-group-item">Sub Total : {order.cart.subTotal} </li>
            <li className="list-group-item">Tax: {order.cart.tax}</li>
            <li className="list-group-item">Grand Total: {order.cart.grandTotal}</li>
          </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Shipping address
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <ul className="list-group">
            <li className="list-group-item">Name : {order.address.first_name +  " " + order.address.last_name} </li>
            <li className="list-group-item">Email: {order.address.email}</li>
            <li className="list-group-item">Address Line 1: {order.address.address_line_1}</li>
            <li className="list-group-item">Address Line 2: {order.address.address_line_2}</li>
            <li className="list-group-item">City: {order.address.city}</li>
            <li className="list-group-item">State: {order.address.state}</li>
            <li className="list-group-item">Country: {order.address.country}</li>
            <li className="list-group-item">Zipcode: {order.address.zipcode}</li>
            <li className="list-group-item">phone: {order.address.phone}</li>
          </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           Product Items
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <div className='table-responsive'>
          <table className="table table-striped">
            <thead className='bg-primary text-white'>
              <tr>
                <th>S No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
               </tr>
            </thead>
            <tbody>
              {
                order.cart.items.length > 0 && order.cart.items.map((product, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <img src={product.image} style={{
                        position: "relative",
                        height: "50px"
                      }} />
                    </td>
                    <td>{product.name}</td>
                    
                    <td>&#8377; {product.price}</td>
                    <td>{product.quantity}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
