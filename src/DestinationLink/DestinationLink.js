import React from 'react';
import styles from './DestinationLink.module.css'
import {cn} from '../helpers/helpers'
import DestinationLinkEntity from './DestinationLinkEntity'

const DestinationLink = ({data, onClick, classes}) =>{
    console.log("GGGGGGGGGGGGGGGGG ", data)
    return (
        <div className={cn(styles.constainer , classes?.container)}>
            {data.map((item) => {return <DestinationLinkEntity  onClick={onClick} data={item} className={cn(styles.cell, classes?.cell)}   key={item.path}></DestinationLinkEntity>})}
        </div>
    )
}

export default DestinationLink

