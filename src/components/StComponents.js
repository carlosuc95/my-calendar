import React from 'react';
import styled, { css } from 'styled-components';


export const Frame = styled.div`

    width: 25rem;
    border: 1px solid lightgray;
    box-shadow: 1px 1px 0.5px #eee;
    margin: 3rem 0px;
`;

export const Header = styled.div`

    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 10px 10px 5px 10px;
    background-color: #f5f6fa;
`;

export const Button = styled.button`
    border: none; 
    cursor: pointer;
    outline:none;
    
`;

export const Body = styled.div`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const Day = styled.div`

    width: 14.2%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${props => props.isSelected && css`
    background-color:#eee;
    `}
    ${props => props.isToday && css`
        
        border: 1px solid #1A91DA;
        color: #1A91DA
    `}
    ${props => props.isDayOfMonth && css`
        color: #eee;
        cursor: unset;
    `}
`;