import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addCategoryStart } from '../../../redux/action/category.action';

let initialValue = {
  name: '',
  image: '',
  status: ''
}



export default function AddOrUpdate() {
  const [formData, setFormData] = useState(initialValue);

  const { name, status } = formData;

  const dispatch = useDispatch();

  const inputChange = (event) => {
    if (event.target.type === 'file') {
      setFormData((prevValue) => ({
        ...prevValue,
        [event.target.name]: event.target.files[0]
      }))
    } else {
      setFormData((prevValue) => ({
        ...prevValue,
        [event.target.name]: event.target.value
      }))
    }
  }

  const submit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(addCategoryStart(formData));
  }

  return (
    <div className="card">
      <div className='card-header bg-primary'>
        <h5 className='text-white' >Add Category
          <Link to='/admin/category' className='btn btn-success' style={{
            float: "right"
          }}>Back</Link>
        </h5>
      </div>
      <div className="card-body">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name='name'
              value={name}
              onChange={inputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name='image'
              onChange={inputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleCheck1">Status</label>
            <select
              className="form-select form-control"
              name='status'
              defaultValue={status}
              onChange={inputChange}>
              <option>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}