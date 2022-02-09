import React from 'react';

import styles from '../styles/LeftFooter.module.css';

import IconButton from '@material-ui/core/IconButton';
import MicIcon from '@material-ui/icons/Mic';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


// react tooltip for show tooltip message when hover on elements
import ReactTooltip from 'react-tooltip';
import { useEffect } from 'react';


import { TranslateContext } from '../context/TranslateContextProvider';
import { useContext } from 'react';

function LeftFooter({input}) {

    const {dispatch} = useContext(TranslateContext);

    useEffect(()=>{
        if (input.length === 0) {
            dispatch({type:'clear'})
        }
    },[input])

    return (
        <div className={styles.left_footer}>
           <div>
           <IconButton disabled data-tip="translate by voice" data-place="bottom">
                <MicIcon />
            </IconButton>
            {
                input !== ' ' ?
                    <IconButton  data-tip="listen" data-place="bottom">
                        <VolumeUpIcon />
                    </IconButton>
                    :
                    <IconButton  disabled>
                        <VolumeUpIcon />
                    </IconButton>
            }
           </div>
           <div className={styles.counter}>
               <p>{input.length}/5000</p>
               <div>
                    <div style={{display:'inline'}} data-tip="turn on virtual keyboard" data-place="bottom">
                        <IconButton disabled className={styles.iconButton}>
                            <KeyboardIcon  className={styles.icon}/>
                        </IconButton>
                    </div>
                    <div style={{display:'inline'}} data-tip="select input tool" data-place="bottom">
                        <IconButton disabled className={styles.iconButton}>
                            <ArrowDropDownIcon  />
                        </IconButton>
                    </div>
               </div>
           </div>
           <ReactTooltip />
        </div>
    )
}

export default LeftFooter
