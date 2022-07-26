import  './navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='navbar'>
        <div className="wrapper">
          <div className="search">
               <input type="text" placeholder='search ...' />
               <SearchOutlinedIcon/>
          </div>
          <div className="items">
            <div className="item" >
              <LanguageOutlinedIcon className='icon'/>
              English
            </div>
            <div className="item">
              <DarkModeOutlinedIcon className='icon'  onClick={() => dispatch({ type: "TOGGLE"})}/>
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className='icon'/>
              <div className="counter"><span>1</span></div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className='icon'/>
              <div className="counter"><span>2</span></div>
            </div>
            <div className="item">
              <ListOutlinedIcon className='icon'/>
            </div>
            <div className="item">
               <img src="https://images.unsplash.com/photo-1641893588018-b958a5845cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="avater" className='avatar' />
            </div>
          </div>
        </div>
    </div> 
  )
}

export default Navbar