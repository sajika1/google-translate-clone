import React from 'react'

// material UI components
import { Avatar, Button, makeStyles } from '@material-ui/core';

import styles from '../styles/PopUp.module.css';

// src of first section of logos in popUp
const logos_top = [ 
    {text:'Search' , src:'logoImages/search.png'},
    {text:'Maps' , src:'logoImages/maps.png'},
    {text:'YouTub' , src:'logoImages/youtube.png'},
    {text:'Plays' , src:'logoImages/play.png'},
    {text:'News' , src:'logoImages/news.png'},
    {text:'Gmail' , src:'logoImages/gmail.png'},
    {text:'Meet' , src:'logoImages/meet.png'},
    {text:'Chat' , src:'logoImages/chat.png'},
    {text:'Contacts' , src:'logoImages/contacts.png'},
    {text:'Drive' , src:'logoImages/drive.png'},
    {text:'Calender' , src:'logoImages/calender.png'},
    {text:'Translate' , src:'logoImages/translate.png'},
    {text:'Photos' , src:'logoImages/photos.png'},
    {text:'Duo' , src:'logoImages/duo.png'},
    {text:'Shopping' , src:'logoImages/shopping.png'},
]

// src of second section of logos in popUp
const logos_bottom = [ 
    {text:'ّFinance' , src:'logoImages/finance.png'},
    {text:'Docs' , src:'logoImages/docs.png'},
    {text:'Sheets' , src:'logoImages/sheets.png'},
    {text:'Slides' , src:'logoImages/slides.png'},
    {text:'Books' , src:'logoImages/books.png'},
    {text:'Bloger' , src:'logoImages/blogger.png'},
    {text:'Hangouts' , src:'logoImages/hangouts.png'},
    {text:'Keep' , src:'logoImages/keep.png'},
    {text:'Jamboard' , src:'logoImages/jamboard.png'},
    {text:'Classroom' , src:'logoImages/classroom.png'},
    {text:'Earth' , src:'logoImages/earth.png'},
    {text:'Collections' , src:'logoImages/collections.png'},
    {text:'Arts and Colture' , src:'logoImages/arts.png'},
    {text:'Google Ads' , src:'logoImages/ads.jpg'},
    {text:'Podcasts' , src:'logoImages/podcasts.png'},
    {text:'Stadia' , src:'logoImages/stadia.png'},
    {text:'Google One' , src:'logoImages/one.png'},
    {text:'Travel' , src:'logoImages/travel.png'},
    {text:'Forms' , src:'logoImages/forms.png'},
]

// customized material UI components (add custom classes with useStyle hooks)
const useStyle = makeStyles({
    btn:{
        color:'#1967d2',
        backgroundColor:"#fff",
        '&:hover':{
            backgroundColor:'#E4ECFA',
            color:'#1967D2'
        },
        '&:focus':{
            border:'none',
            backgroundColor:'#E4ECFA',
            color:'#1967D2',
            boxShadow:'0 1px 2px 2px rgba(0,0,0,0.09)'
        }
        ,
        outline:'none',
        border:'1px solid #dadce0',
        textTransform:'capitalize',
        fontFamily:'Poppins',
        letterSpacing:'-.3px',
        fontWeight:'400',
        margin:'16px 0 20px 0',
        maxWidth:'265px'
    },
    btnEnabled:{
        backgroundColor:"#E4ECFA",
        color:'#1967D2'
    }
})



function PopUp({showPopUp , setShowPopUp}) {
 
    //? custom MUI components classes and styles
    const classes = useStyle();
    
    //! ==== get popUp element and handle outside clicked ===== 
        const ref = React.createRef();
        const handleClickOutside = (e)=>{
            if (ref.current && !ref.current.contains(e.target)) {
                setShowPopUp(false)
            }
        }
        document.addEventListener('click' , handleClickOutside , true);
    //! ========================================================

    return (
        <div className={`${styles.popup} ${showPopUp ? styles.show : styles.hide}`} ref={ref}>
            <div className={styles.content}>
                <div className={styles.icons}>
                    <div className={styles.icon}><Avatar /></div>
                    <div className={styles.text}>Account</div>
                </div>
                {logos_top.map((item , key)=>{
                    return(
                        <div className={styles.icons} key={key}>
                            <div className={styles.icon}><img src={item.src} alt={item.text} /></div>
                            <div className={styles.text}>{item.text}</div>
                        </div>
                    )
                })}
            </div>
            
            <div className={styles.line}> </div>

            <div className={styles.sub_content}>
                {logos_bottom.map((item , key)=>{
                    return(
                        <div className={styles.icons} key={key}>
                            <div className={styles.icon}><img src={item.src} alt={item.text} /></div>
                            <div className={styles.text}>{item.text}</div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.button}>
            <Button
                className={`${classes.btn}`}
                variant='outlined'
                disableElevation
            >
                More From Google
            </Button>
            </div>
        </div>
    )
}

export default PopUp
