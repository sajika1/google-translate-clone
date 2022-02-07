import { Avatar } from '@material-ui/core';
import { CameraAltOutlined, PersonAdd } from '@material-ui/icons';
import React from 'react'

import styles from '../styles/UserInfo.module.css';

function UserInfo({showUserInfo , setShowUserInfo}) {

      
    //! ==== get popUp element and handle outside clicked ===== 
    const ref = React.createRef();

    const handleClickOutside = (e)=>{
        if (ref.current && !ref.current.contains(e.target)) {
            setShowUserInfo(false)
        }
    }
    document.addEventListener('click' , handleClickOutside , true);
    //! ========================================================

    return (
    
        <div className={`${styles.userInfo} ${showUserInfo ? styles.show : styles.hide}`} ref={ref}>
            <div className={styles.header}>
                <div className={styles.user_logo}>
                    <div>
                        <Avatar className={styles.avatar}/>
                        <div className={styles.add_pic}>
                            <div>
                                <CameraAltOutlined className={styles.camera}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.user_text}>
                    <p className={styles.name_text}>Sajika</p>
                    <p className={styles.gmail_text}>sajjadsajjad464@gmail.com</p>
                </div>
                <div className={styles.user_button}>
                    <button className={`${styles.button} ${styles.rounded}`}>Manage Your Google Account</button>
                </div>
            </div>

            <div className={styles.gmails}>
                <div className={styles.gmail}>
                    <div className={styles.gmail_content}>
                        <div className={styles.pic}>
                            <Avatar className={styles.pic_avatar}/>
                        </div>
                        <div className={styles.gmail_text_content}>
                            <p className={styles.title}>Sajjad kh</p>
                            <p className={styles.subtitle}>sample@gmail.con</p>
                        </div>
                    </div>
                </div>

                <div className={styles.gmail}>
                    <div className={styles.gmail_content}>
                        <div className={styles.pic}>
                            <Avatar className={styles.pic_avatar}/>
                        </div>
                        <div className={styles.gmail_text_content}>
                            <p className={styles.title}>Sajjad kh</p>
                            <p className={styles.subtitle}>sample@gmail.con</p>
                        </div>
                    </div>
                </div>

                <div className={styles.gmail}>
                    <div className={styles.gmail_content}>
                    <div className={styles.pic}>
                            <PersonAdd className={styles.pic_icon}/>
                        </div>
                        <div className={styles.gmail_text_content}>
                            <p className={styles.title}>Add another account</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.signOut}>
                <button className={styles.button}>
                    sign out of all accounts
                </button>
            </div>

            <div className={styles.line}></div>

            <div className={styles.privacy}>
                <div>
                    <div className={styles.privacy_item}>Privacy Policy</div>
                    <div className={styles.point}></div>
                    <div className={styles.privacy_item}>Terms of Service</div>
                </div>
            </div>
        </div>
       
    )
}

export default UserInfo
