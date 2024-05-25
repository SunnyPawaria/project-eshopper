import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addCategoryStart } from '../../../redux/action/category.action';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase-config';

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
      const storageRef = ref(storage, event.target.files[0].name);

      const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setFormData((prevValue) => ({
                ...prevValue,
                [event.target.name]: downloadURL
              }))
          });
        }
      );
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
