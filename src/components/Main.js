import React, { useContext , useState, useEffect } from 'react';

import styles from '../styles/Main.module.css';
import Buttons from './Buttons';
import IconsFooter from './IconsFooter';

import Translate from './Translate'
import TranslateResault from './TranslateResault';

import { TranslateContext } from '../context/TranslateContextProvider';

function Main() {
    
    // Size of Screen (this state changed when resize event called)
    const [size , setsize] = useState(window.innerWidth);

    // use from context
    const {Resault} = useContext(TranslateContext);
    
    const renderResize = ()=>{
        const screenSize = window.innerWidth;
        setsize(screenSize);
    }

    useEffect(()=>{
        window.addEventListener('resize' , renderResize);
    })


    return (
       <>
            <div className={styles.main}>
                    <Buttons />
                    <Translate />
                    {/* this component rendered in small screens and show resault in this screens responsively */}
                    {(Resault !== ' ' && size <= 768 ) ? <TranslateResault color="primary"/> : null}
                    <div className={styles.feedback}>
                        <a href="#">send feedback</a>
                    </div>
                    <IconsFooter />
            </div>
       </>
    )
}

export default Main
