import './sidebar.scss'
import { NavLink } from 'react-router-dom';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const Sidebar = () => {

  const { dispatch}  = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="top">
          <NavLink to="/">
              <span className="logo">Dashboard</span>
          </NavLink>
        </div>
        <hr />
        <div className="center">
           <ul>
                <p className="title">MAIN</p>
            <NavLink to="/">
                <li>
                <DashboardIcon className='icon'/>
                <span>dashboard</span>
                </li>
              </NavLink>

                  <p className="title">LIST</p>
                <NavLink to="/users">
              <li>
                <PersonOutlineIcon className='icon'/>
                <span>users</span>
                </li>
                </NavLink>

                 <NavLink to="/products">
              <li>
                <StoreIcon  className='icon'/>
                <span>products</span>
                </li>
                 </NavLink>
                 
              <li>
                <CreditCardIcon  className='icon'/>
                <span>orderes</span>
                </li>
              <li>
                <LocalShippingIcon  className='icon'/>
                <span>delivery</span>
                </li>
                  <p className="title">USEFUL</p>
              <li>
                <DashboardIcon className='icon'/>
                <span>stats</span>
                </li>
              <li>
                <NotificationsNoneIcon className='icon'/>
                <span>notifications</span>
                </li>
                 <p className="title">SERVICE</p>
              <li>
                <SettingsSystemDaydreamOutlinedIcon className='icon' />
                <span>system health</span>
                </li>
              <li>
                <PsychologyOutlinedIcon  className='icon'/>
                <span>logs</span>
                </li>
              <li>
                <SettingsApplicationsIcon  className='icon'/>
                <span>settings</span>
                </li>
                 <p className="title">USER</p>
              <li>
                <AccountCircleOutlinedIcon  className='icon'/>
                <span>profile</span>
                </li>
              <li>
                <ExitToAppIcon  className='icon'/>
                <span>log out</span>
                </li>
           </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions" onClick={() => dispatch({type: "LIGHT"})}></div>
            <div className="colorOptions" onClick={() => dispatch({type: "DARK"})}> </div>
        </div>
    </div>
  )
}

export default Sidebar