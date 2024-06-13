import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { auth } from "../../firebase-config";

export default function Auth() {
  const navigate = useNavigate();
  const checkUserAuthenticated = () => {
    if(! auth.currentUser){
      setTimeout(()=>{
        navigate('/login')
      },2000)
    }
  };
  useEffect(() => {
    checkUserAuthenticated();
  },[auth.currentUser]);
  return (
    <div className="container-fluid offer pt-5">
      <div className="row px-xl-5">
        <div className="col-sm-3 pb-4">
          <Sidebar />
        </div>
        <div className="col-sm-9 pb-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
