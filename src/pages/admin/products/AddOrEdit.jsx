import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase-config";
import { toastr } from "react-redux-toastr";
import {
  addProductStart,
  editProductStart,
} from "../../../redux/action/product.action";

let initialValue = {};

export default function AddOrEdit() {
  const {
    category: { categories },
    product: { products },
  } = useSelector((state) => state);

  let { id } = useParams();

  const navigate = useNavigate();

  if (id) {
    let product = products.find((value) => value.id === id);
    if (product) {
      initialValue = product;
    }
  } else {
    initialValue = {
      name: "",
      image: "",
      short_description: "",
      description: "",
      price: 0.0,
      quantity: 0,
      category_id: 0,
      status: "",
    };
  }

  const activecategories = categories.filter((cat) => cat.status === "1");
  const [formData, setFormData] = useState(initialValue);

  const {
    name,
    image,
    short_description,
    description,
    price,
    quantity,
    category_id,
    status,
  } = formData;

  const dispatch = useDispatch();

  const inputChange = (event) => {
    if (event.target.type === "file") {
      const storageRef = ref(storage, event.target.files[0].name);

      const uploadTask = uploadBytesResumable(
        storageRef,
        event.target.files[0]
      );

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
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
            setFormData((prevValue) => ({
              ...prevValue,
              [event.target.name]: downloadURL,
            }));
          });
        }
      );
    } else {
      setFormData((prevValue) => ({
        ...prevValue,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const submit = (event) => {
    event.preventDefault();
    if (id) {
      dispatch(editProductStart(formData, id));
      toastr.success("Product Updated Successfully");
    } else {
      dispatch(addProductStart(formData));
      toastr.success("Product Added Successfully");
    }
    setTimeout(()=>{
      navigate('/admin/products')
    },5000)
  };

  return (
    <div className="card">
      <div className="card-header bg-primary">
        <h5 className="text-white">
          {id ? "Edit" : "Add"} Product
          <Link
            to="/admin/products"
            className="btn btn-success"
            style={{
              float: "right",
            }}
          >
            Back
          </Link>
        </h5>
      </div>
      <div
        className="card-body"
        style={{
          height: "auto",
        }}
      >
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={inputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={inputChange}
            />
            <div className="mt-4">
              <img
                src={image}
                style={{
                  position: "relative",
                  height: "50px",
                }}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="short_description" className="form-label">
              Short Description
            </label>
            <textarea
              name="short_description"
              id="short_description"
              className="form-control"
              cols="30"
              rows="3"
              value={short_description}
              onChange={inputChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              cols="30"
              rows="5"
              value={description}
              onChange={inputChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={price}
              step="any"
              onChange={inputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={inputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category_id">Category</label>
            <select
              className="form-select form-control"
              id="category_id"
              name="category_id"
              defaultValue={category_id}
              onChange={inputChange}
            >
              <option>Select Category</option>
              {activecategories.length > 0 &&
                activecategories.map((value, index) => (
                  <option value={value.id} key={index}>
                    {value.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleCheck1">Status</label>
            <select
              className="form-select form-control"
              name="status"
              defaultValue={status}
              onChange={inputChange}
            >
              <option>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
