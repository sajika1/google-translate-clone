import React , {useState} from 'react'

import LeftFooter from './LeftFooter';

import styles from '../styles/LeftSide.module.css';

import IconButton from '@material-ui/core/IconButton';
import CloseOutlined from '@material-ui/icons/CloseOutlined';


function LeftSide({input , setInput}) {

     //? this is a reference to span was declared as a TextArea
     const textArea = React.createRef();

     const [counter , setCounter] = useState(0);
 
    const multipleCall = (e) => {
         inputHandler(e)
         counterHandler(e)
     }
     const inputHandler = (e) => {
         setInput(e.target.innerText)
     }
 
     const counterHandler = (e) => {
         if(e.code !== "Backspace") setCounter(prevState => prevState + 1)
         else if(counter > 0) setCounter(prevState => prevState - 1)
     }
 
     const clearInput = () => {
         setInput('')
         setCounter(0)
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
                onKeyDown={multipleCall}  
                onKeyUp={inputHandler}  
                role="textbox" 
                contentEditable 
                className={`${styles.textarea} txta`}
            ></span>

           <LeftFooter counter = {counter} input={input}/>

        </div>
    )
}

export default LeftSide
