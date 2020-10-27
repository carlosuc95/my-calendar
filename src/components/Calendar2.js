import React, { useEffect, useState } from 'react';
import {Frame, Body,Button,Header,Day} from './StComponents';


export const Calendar2 = () => {


    const DAYS = [31,28,31,30,31,30,31,31,30,31,30,31];
    const DAYS_LEAP = [31,29,31,30,31,30,31,31,30,31,30,31];
    const DAYS_OF_WEEK = ['MON','TUS', 'WES', 'THU', 'FRY', 'SAT', 'SUN'];
    const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const today = new Date();
    const [date, setDate] = useState(today);
    
    const getDayOfMonth = (date) => {
        const stdofm = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return stdofm || 7; 
    }
    
    const [startDayOfMonth, setStartDayOfMonth] = useState(getDayOfMonth(today));
        
    useEffect(() => {
        
        setStartDayOfMonth(getDayOfMonth(date))

    }, [date]);

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;  
    }

    const days = isLeapYear ? DAYS_LEAP : DAYS;

    return (
        <Frame>
            <Header>

                <Button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDay()))}>
                    Prev
                </Button>
                <div>{ MONTHS[ date.getMonth()] + ' ' + date.getFullYear() }</div>
                <Button  onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDay()))}>
                    Next
                </Button>
            </Header>
            <Body>
            { DAYS_OF_WEEK.map(d => (

                <Day key={d}>
                    <strong>{d}</strong>
                </Day>
            ))}
            { Array(35).fill(null).map( (_,index) =>{

                const d = index - (startDayOfMonth - 2);
                const fa = new Date(date.getFullYear(), date.getMonth(), d);
                const fad = fa.getDate();
                
                
                return(

                    <Day 
                        key={index}
                        isSelected ={d === date.getDate() }
                        isToday = { fa.toDateString() ===  today.toDateString() }
                        isDayOfMonth = { fa.getMonth() !==  date.getMonth() }
                        onClick={() => setDate(fa)}
                    >
                        {fad}
                    </Day>
                )
            }) }

            </Body>
        </Frame>
    )
}
