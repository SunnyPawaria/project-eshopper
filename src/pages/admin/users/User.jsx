import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteUserStart,
  getUserStart,
} from "../../../redux/action/user.action";
import { deleteUser } from "firebase/auth";
import { toastr } from "react-redux-toastr";

export default function User() {
  const {
    user: { users },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserStart());
  }, [users.length]);

  const deleteUserFunc = (user) => {

    dispatch(deleteUserStart(user.id));

    setTimeout(()=>{
      toastr.success('User deleted successfully')
    },2000)
  };

  return (
    <div className="card">
      <div className="card-header bg-primary">
        <h5 className="text-white">
          User
          <Link
            to="/admin/user/add"
            className="btn btn-success"
            style={{
              float: "right",
            }}
          >
            Add User
          </Link>
        </h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="bg-primary text-white">
              {users.length > 0 &&
                users.map((user, index) => (
                  <tr key={index}>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Action</th>
                  </tr>
                ))}
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.type}</td>
                    <td>
                      <Link
                        to={`/admin/user/edit/${user.id}`}
                        className="btn btn-warning mx-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteUserFunc(user)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
