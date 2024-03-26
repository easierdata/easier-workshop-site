import React, { useState } from 'react';
import { faChevronCircleUp, faChevronUp } from '@fortawesome/free-solid-svg-icons';
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
                {props.question}<h2 className={styles.accordionTitle} style={{ transform: dropIcon }}><FontAwesomeIcon icon={faChevronUp} /></h2>
            </button>
            <div>
                <p className={styles.accordionAnswer} style={{ opacity: opacity, marginTop: answerPosition, fontSize: textSize }}>{props.answer}</p>
            </div>
        </div>
    )
}

// Hacky but it works
export function SpecialQS(): JSX.Element {
    const [ opacity, setOpacity ] = useState('0')
    const [ dropIcon, setDrop ] = useState('rotate(180deg)')
    const [ answerPosition, setPosition ] = useState('-10px')
    const [ textSize, setTextSize ] = useState('0px');

    const [ opacity2, setOpacity2 ] = useState('0')
    const [ dropIcon2, setDrop2 ] = useState('rotate(180deg)')
    const [ answerPosition2, setPosition2 ] = useState('-10px')
    const [ textSize2, setTextSize2 ] = useState('0px');

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

    const handleClick2 = () => {
        if(opacity2 === '0'){
            setPosition2('0px')
            setDrop2('rotate(1turn) translateY(-5px)')
            setOpacity2('1')
            setTextSize2('18px')
        } else {
            setPosition2('-10px')
            setDrop2('rotate(.5turn) translateY(5px)')
            setOpacity2('0')
            setTextSize2('0px')
        }
    }

    return (
        <div>
            <div className={styles.accordionContainer}>
                <button className={styles.accordionButton} onClick={handleClick}>
                    Are there any suggested accommodations?<h2 className={styles.accordionTitle} style={{ transform: dropIcon }}><FontAwesomeIcon icon={faChevronUp} /></h2>
                </button>
                <div>
                    <p className={styles.accordionAnswer} style={{ opacity: opacity, marginTop: answerPosition, fontSize: textSize }}>For those traveling from further afield, the suggested accommodation for lodging is <a href="https://www.thehotelumd.com/?gad_source=1&gclid=Cj0KCQiAw6yuBhDrARIsACf94RVjU-mijvlHgp_006IaAlk9pH8ul651BmOa724R3zhHxHh4yahJwYIaAr-jEALw_wcB" target='_blank' rel="noreferrer">The Hotel</a>, which is fairly new and well regarded. <a href="https://reservations.travelclick.com/107316?RatePlanId=3056928" target='_blank' rel="noreferrer">This link</a> can be used to book rooms at the UMD discounted rate. Limited travel support support may be available, in which case we can assist with booking a room.</p>
                </div>
            </div>
            <div className={styles.accordionContainer}>
                <button className={styles.accordionButton} onClick={handleClick2}>
                    Is there still capacity for add additional participants?<h2 className={styles.accordionTitle} style={{ transform: dropIcon2 }}><FontAwesomeIcon icon={faChevronUp} /></h2>
                </button>
                <div>
                    <p className={styles.accordionAnswer} style={{ opacity: opacity2, marginTop: answerPosition2, fontSize: textSize2 }}>Yes! If you or someone you know is interested in attending, please <a href="https://forms.gle/yKoDczS7ZeUQpCZ6A" target='_blank' rel="noreferrer">fill out this form</a> or reach out to <a href='mailto:toshan@umd.edu?subject=Open Geospatial Science Workshop Interest'>toshan@umd.edu</a></p>
                </div>
            </div>
        </div>
    )
}