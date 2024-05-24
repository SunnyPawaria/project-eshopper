import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'

export default function Auth() {
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
  )
}
