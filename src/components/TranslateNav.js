import React, { useState }  from 'react'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SyncAltIcon from '@material-ui/icons/SyncAlt';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import styles from '../styles/TranslateNav.module.css';


// react tooltip for show tooltip message when hover on elements
import ReactTooltip from 'react-tooltip';

function TranslateNav({setTranslateMode}) {

    const [value, setValue] = useState(1);

    const handleChange = (event , newValue) => {
      setValue(newValue);
    };

    const changeSelection = () => {
        if(value < 2) setValue(prevState => prevState + 1 )
        else setValue(prevState => prevState - 1)
        if(value === 2) setTranslateMode('etp')
        if(value === 1) setTranslateMode('pte')
    }
    
    const NavTabs = withStyles({
        root: {
        flex:'1',
        overflow:'hidden',
        },
        indicator: {
        backgroundColor: '#1A73E8',
        },
    })(Tabs);

    const NavTab = withStyles(() => ({
        root: {
        minWidth: 72,
        padding:'0 16px',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.036)',
            color:'#000'
        },
        '&$selected': {
            color: '#1A73E8',
            '&:hover':{
                backgroundColor:'rgba(228,236,250,0.3)'
            }
        },
        '&:focus': {
            color: '#40a9ff',
        },
        },
        selected: {},
    }))((props) => <Tab disableRipple {...props} />);
    
    return (
        <div className={styles.nav}>
            <NavTabs
                variant={window.innerWidth < 768 ? "fullWidth" : "scrollable"}
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <NavTab label="detect  language" className={styles.first_responsive} />
                <NavTab label="english" onClick={()=> setTranslateMode('etp')}/>
                <NavTab label="persian" onClick={()=> setTranslateMode('pte')}/>
             </NavTabs>

            <IconButton
                data-tip="swap languages"
                data-place="bottom" 
                className={styles.change_btn} 
                onClick={changeSelection}
                disabled={value === 0 ? true : false}
            >
                <SyncAltIcon/>
            </IconButton>

             <NavTabs 
                variant={window.innerWidth < 768 ? "fullWidth" : "scrollable"}
                value={value !== 0 ? value-1 : value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                centered
            >
                <NavTab label="persian" onClick={()=>{setValue(1)}}/>
                <NavTab label="english" onClick={()=>{setValue(2)}}/>
             </NavTabs>

             <ReactTooltip />
            </div>
    )
}

export default TranslateNav
