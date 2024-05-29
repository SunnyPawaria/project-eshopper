import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteCategoryStart, getCategoryStart } from '../../../redux/action/category.action';

export default function Category() {

  const { category: { categories } } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryStart())
  }, [categories.length])

  return (
    <div className="card">
      <div className='card-header bg-primary'>
        <h5 className='text-white' >Category
          <Link to='/admin/category/add' className='btn btn-success' style={{
            float: "right"
          }}>Add Category</Link>
        </h5>
      </div>
      <div className="card-body">
        <div className='table-responsive'>
          <table className="table table-striped">
            <thead className='bg-primary text-white'>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {
                categories.length > 0 && categories.map((category, index) => (
                  <tr key={index}>
                    <th>{ index + 1 }</th>
                    <td>
                      <img src={category.image} style={{
                        height: "50px",
                        position: "relative"
                      }}  />
                    </td>
                    <td>{category.name}</td>
                    <td>{ category.status == '1' ? 'Active' : 'Inactive' }</td>
                    <td>
                      <Link className='btn btn-warning mx-2' to={`/admin/category/edit/${category.id}`}>Edit</Link>
                      <button className='btn btn-danger' onClick={() => dispatch(deleteCategoryStart(category.id))}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
