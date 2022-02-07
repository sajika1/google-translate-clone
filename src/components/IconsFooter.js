import React from 'react'

import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

import styles from '../styles/IconsFooter.module.css';

function IconsFooter() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_items}>
                
                <div className={styles.icons}>
                    <div className={styles.icon}>
                        <HistoryOutlinedIcon className={styles.mui_icon}/>
                    </div>
                    <div className={styles.text}>
                        <p>History</p>
                    </div>
                </div>

                <div className={styles.icons}>
                    <div className={styles.icon}>
                        <StarOutlinedIcon className={styles.mui_icon}/>
                    </div>
                    <div className={styles.text}>
                        <p>Saved</p>
                    </div>
                </div>

                <div className={styles.icons}>
                    <div className={styles.icon}>
                    <PeopleAltOutlinedIcon className={styles.mui_icon}/>

                    </div>
                    <div className={styles.text}>
                        <p>Contribute</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IconsFooter
