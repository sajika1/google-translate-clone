import React, { useContext } from 'react'

import styles from '../styles/RightSide.module.css';
import TranslateResault from './TranslateResault';

import TranslateResaultDefault from './TranslateResaultDefault';

import { TranslateContext } from '../context/TranslateContextProvider';

function RightSide({input}) {

    const {Resault} = useContext(TranslateContext);

    return (
        <div className={styles.right_side}>
                { Resault === ' '  ? 
                    <TranslateResaultDefault input={input}/> 
                    :
                    <TranslateResault />                     
                } 
        </div> 
    )
}

export default RightSide
