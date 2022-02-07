import React ,{useState} from 'react'

import styles from '../styles/Buttons.module.css';

import Button from '@material-ui/core/Button';

// MUI icons
import TranslateIcon from '@material-ui/icons/Translate';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
    btn:{
        color:'#1967d2',
        backgroundColor:"transparent",
        '&:hover':{
            backgroundColor:'#E4ECFA',
            color:'#1967D2'
        },
        '&:focus':{
            border:'1px solid #1967D2'
        }
        ,
        outline:'none',
        border:'1px solid rgba(0,0,0,0.12)',
        textTransform:'capitalize',
        fontFamily:'Poppins',
        letterSpacing:'-.3px',
        marginRight:'8px'
    },
    btnEnabled:{
        backgroundColor:"#E4ECFA",
        color:'#1967D2'
    }
})

function Buttons() {

    const classes = useStyle();
    const [enableButton , setEnableButton] = useState('text')

    const setText = () => {
        setEnableButton('text')
    }

    const setDocument = () => {
        setEnableButton('document')
    }

    return (
        <div className={styles.buttons}>
        <Button
            onClick={setText}
            className={`${classes.btn} ${enableButton === 'text' && classes.btnEnabled}`}
            variant='outlined'
            startIcon={<TranslateIcon/>}
            disableElevation
        >
            Text
        </Button>

        <Button
            onClick={setDocument}
            className={`${classes.btn} ${enableButton === 'document' && classes.btnEnabled}`}
            variant='outlined'
            startIcon={<InsertDriveFileIcon/>}
            disableElevation
        >
            Document
        </Button>

    </div>
    )
}

export default Buttons
