import React , {useState} from 'react'

import LeftFooter from './LeftFooter';

import styles from '../styles/LeftSide.module.css';

import IconButton from '@material-ui/core/IconButton';
import CloseOutlined from '@material-ui/icons/CloseOutlined';


function LeftSide({input , setInput}) {

     //? this is a reference to span was declared as a TextArea
     const textArea = React.createRef();
 
     const inputHandler = (e) => {
         setInput(e.target.innerText)
     }
 
     const clearInput = () => {
         setInput('')
         textArea.current.innerText = ''
     }

    return (
        <div className={styles.left_side}>
        { input && <IconButton 
            className={styles.close}
                onClick={clearInput}
            >
                <CloseOutlined />
            </IconButton> 
        }
            {/*//? use Span as a textarea to handle resizability while typing */}
            <span 
                ref={textArea}
                onKeyDown={inputHandler}  
                onKeyUp={inputHandler}  
                role="textbox" 
                contentEditable 
                className={`${styles.textarea} txta`}
            ></span>

           <LeftFooter input={input}/>

        </div>
    )
}

export default LeftSide
