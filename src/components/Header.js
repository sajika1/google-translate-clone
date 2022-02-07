import React , {useState} from 'react'

import styles from '../styles/Header.module.css';

import Drawer from './Drawer';

// MUI components
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

// MUI icons
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import PopUp from './PopUp';
import UserInfo from './UserInfo';

function Header() {
    const [show , setShow] = useState(false);
    const [showPopUp , setShowPopUp] = useState(false);
    const [showUserInfo ,  setShowUserInfo] = useState(false);
   
    return (
        <header className={styles.header}>
            <div className={styles.haeder_left}>
               <IconButton onClick={()=>setShow(true)}>
                    <MenuIcon/>
                </IconButton>
                <div  className={styles.image_wrapper}>
                    <a href="#" className={styles.header_logo}>
                        <div className={styles.header_image_wrapper}>
                            <img className={styles.header_image} src='Google_logo.svg' alt="logo_image" />
                        </div>
                        <div className={styles.header_link}>
                        Translate
                        </div>
                    </a>
                </div>
            </div>
            <div className={styles.header_right}>
                
                <IconButton className={styles.header_icon} style={{marginRight:'10px'}} onClick={()=>setShowPopUp(true)}>
                    <AppsIcon/>
                </IconButton>

                <IconButton className={styles.header_icon} onClick={()=>setShowUserInfo(true)}>
                    <Avatar className={styles.header_avatar}/>
                </IconButton>
            </div>
            <UserInfo showUserInfo={showUserInfo} setShowUserInfo={setShowUserInfo}/>
            <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>
            <Drawer show={show} setShow={setShow}/>
        </header>
    )
}

export default Header
