import React, { useContext} from 'react';

import { IconButton } from '@material-ui/core';
import { Share, StarBorderOutlined, ThumbsUpDownOutlined } from '@material-ui/icons';
import VolumeUp from '@material-ui/icons/VolumeUp';
import FilterNoneOutlinedIcon from '@material-ui/icons/FilterNoneOutlined';

import styles from '../styles/TranslateResault.module.css';

import { TranslateContext } from '../context/TranslateContextProvider';

function TranslateResault({color}) {

    const {Resault} = useContext(TranslateContext);

    return (
        <div className=
            {`${styles.translate_resault} 
            ${color === "primary" ? styles.primary : styles.default}
            ${/^[a-zA-Z]+$/.test(Resault) ? styles.ltr : styles.rtl}`}
        >
            <div className={styles.output}> 
                <IconButton className={styles.star}>
                    <StarBorderOutlined className={`${color === "primary" ? styles.primary : null}`}/>
                </IconButton>
                <p>{Resault}</p>
            </div>
            <div className={styles.footer}>
                <div>
                    <IconButton>
                        <VolumeUp className={`${color === "primary" ? styles.primary : null}`}/>
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <FilterNoneOutlinedIcon className={`${color === "primary" ? styles.primary : null}`}/>
                    </IconButton>
                    <IconButton>
                        <ThumbsUpDownOutlined className={`${color === "primary" ? styles.primary : null}`}/>
                    </IconButton>
                    <IconButton>
                        <Share className={`${color === "primary" ? styles.primary : null}`}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default TranslateResault
