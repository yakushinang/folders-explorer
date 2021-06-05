import React from 'react';
import styles from './Row.module.css'
import {cn} from '../helpers/helpers'


const EntityRow = ({data, onClick, classes}) =>{
    return (
        <div onClick={onClick} className={cn(styles.constainer , classes?.container)}>
            {data.map((item,index) => {return <div className={cn(styles.cell, classes?.cell)} key={index}>{item}</div>})}
        </div>
    )
}

export default EntityRow

