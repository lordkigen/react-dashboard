import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatableSource';
import { NavLink  } from 'react-router-dom'
import { useState } from 'react';



const Datatable = () => {

  const [data, setData ] = useState(userRows)

  const deleteHandler = (id) => {
     setData(data.filter((item) =>  item.id !== id))
  }

    const actionColumn = [
        { field: "action", headerName: "Action", width: 200, renderCell: (params) => {
            return (
                <div className="cellAction">
                   <NavLink to="/users/user">
                    <div className="viewButton">View</div>
                   </NavLink>
                    <div className="deleteButton" onClick={() => deleteHandler(params.row.id)}>Delete</div>
                </div>
            )
        }}
    ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
         <NavLink to="/users/new" className="link">
          Add New
         </NavLink>
      </div>
         <DataGrid className='dataGrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable