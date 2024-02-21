import React, { useState } from 'react';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import styles from './accordion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Accordion(props: { 
    question: string,
    answer: string, 
}): JSX.Element {
    const [ opacity, setOpacity ] = useState('0')
    const [ dropIcon, setDrop ] = useState('rotate(180deg)')
    const [ answerPosition, setPosition ] = useState('-10px')
    const [ textSize, setTextSize ] = useState('0px');

    const handleClick = () => {
        if(opacity === '0'){
            setPosition('0px')
            setDrop('rotate(1turn) translateY(-5px)')
            setOpacity('1')
            setTextSize('18px')
        } else {
            setPosition('-10px')
            setDrop('rotate(.5turn) translateY(5px)')
            setOpacity('0')
            setTextSize('0px')
        }
    }

    return (
        <div className={styles.accordionContainer}>
            <button className={styles.accordionButton} onClick={handleClick}>
                {props.question}<h2 className={styles.accordionTitle} style={{ transform: dropIcon }}><FontAwesomeIcon icon={faChevronCircleUp} /></h2>
            </button>
            <p className='accordionAnswer' style={{ opacity: opacity, marginTop: answerPosition, fontSize: textSize }}>{props.answer}</p>
        </div>
    )
}