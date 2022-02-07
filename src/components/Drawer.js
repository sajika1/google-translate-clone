import React from 'react'

import styles from '../styles/Drawer.module.css'

function Drawer({show , setShow}) {

    const ref = React.createRef();

    const handleClickOutside = (e)=>{
        if (ref.current && !ref.current.contains(e.target)) {
            setShow(false)
        }
    }
    document.addEventListener('click' , handleClickOutside , true);

    return (
        <div className={`${styles.drawer} ${show ? styles.drawer_open : styles.deawer_close}`} ref={ref}>
            <div className={styles.drawer_content} >
                <div className={styles.header}>
                    <div  className={styles.image_wrapper}>
                        <a href="#" className={styles.logo}>
                            <div className={styles.drawer_image_wrapper}>
                                <img className={styles.drawer_image} src='Google_logo.svg' alt="logo_image" />
                            </div>
                            <div className={styles.drawer_link}>
                            Translate
                            </div>
                        </a>
                    </div>
                </div>
                <div className={styles.list_item}>
                    <ul>
                        <li><a href="#">About Google Translate</a></li>
                        <div className={styles.hr}></div>
                        <li><a href="#">Privacy & Terms</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Send feedback</a></li>
                        <li><a href="#">About Google</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Drawer
