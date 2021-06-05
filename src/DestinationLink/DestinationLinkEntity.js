
import React from 'react';
import styles from './DestinationLink.module.css'
import {cn} from '../helpers/helpers'

const DestinationLinkEntity = ({data, onClick, classes}) =>{
    return (
        <div onClick={()=>onClick(data.path)} className={cn(styles.cell , classes?.cell)}>
            {data.name} /
        </div>
    )
}

export default DestinationLinkEntity







