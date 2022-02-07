import React , {useContext, useEffect, useState} from 'react';

import TranslateNav from './TranslateNav';

import styles from '../styles/Translate.module.css';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

import { TranslateContext } from '../context/TranslateContextProvider';

const translateResource = [
    {eng:'hello' , per: 'سلام'},
    {eng:'hi' ,per: 'سلام'},
    {eng:'hey' , per:'سلام'},
    {eng:'how' , per: 'چطور'},
    {eng:'how are' , per: 'چطور هستند'},
    {eng:'are', per:'هستند'},
    {eng:'you', per:'تو'},
    {eng:'how are you', per:'چطور هستید'},
    {eng:'program', per:'برنامه'},
    {eng:'programmer', per:'برنامه نویس'},
    {eng:'translate', per:'ترجمه'},
    {eng:'mobile', per:'تلفن همراه'},
    {eng:'laptop', per:'لپ تاپ'},
    {eng:'book', per:'کتاب'},
    {eng:'home', per:'خانه'},
];

function Translate() {

    // change translate resault (use from UseReducer in TranslateContextProvider)
    const {dispatch} = useContext(TranslateContext);

     // this state for get input value to translate (lifting state up from left side to translate)
    const [input , setInput] = useState('');

    const [traanslateMode , setTranslateMode] = useState('etp');


    useEffect(()=>{
        translateResource.find(key => {
            if (traanslateMode === 'etp') {
                if(key.eng === input.trim().toLowerCase()) dispatch({type:"Translate" ,  value: key.per});
            }else if(traanslateMode === 'pte'){
                if(key.per === input.trim().toLowerCase()) dispatch({type: "Translate" , value : key.eng});
            }else{
                console.log('please chose a language');
            }
        })
    } , [input]);

    return (
        <div className={styles.translate}>
            <TranslateNav setTranslateMode={setTranslateMode}/>
            <div className={styles.main}>    
                <LeftSide input={input} setInput={setInput}/> 
                <div className={styles.mid_line}></div>
                <RightSide input={input} />
            </div>
        </div>
    )
}

export default Translate
