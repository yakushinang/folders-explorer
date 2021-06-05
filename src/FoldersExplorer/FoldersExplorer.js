import React from 'react';
import styles from './FoldersExplorer.module.css'
import {cn} from '../helpers/helpers'
import FlexRow from '../Row/Row'
import DestinationLink from '../DestinationLink/DestinationLink'
import {useFoldersExplorer} from './hooks'
import {generatePath, getDisplayTimeFormat,getRowList,getPathList} from './helpers'


const FoldersExplorer = (data) =>{

    const {entityData, enterEntety,path} = useFoldersExplorer(data)
    console.log("entity ", entityData)
    console.log("path ", path)
    const parentPath = entityData.parentPath.replace(/\.[^.]*$/g,"").replace(/\.[^.]*$/g,"")

    const generateEntityRow = (item, parent ) =>{
        const entityPath = generatePath(parent, path, item.parentPath, parentPath)
        const classes = parent ?  {container:[styles["parentRow"]]}: {container: [styles["childRow"]]}
        const rowList = getRowList(item.displayName,getDisplayTimeFormat(item?.lastUpdated.updatedAt),item?.lastUpdated.updatedBy)

        return <FlexRow onClick={()=>enterEntety(entityPath)} data={rowList} key={rowList[0]} parent={parent} classes={classes}></FlexRow>
    }

    const generateEntityPath = (item, parent)=>{
        const entityPath = generatePath(parent, path, item.parentPath, parentPath)
        const destinationLinksList = getPathList(item?.parentPath)
        const classes ={container:[styles["linkPath"]]}
        return <DestinationLink onClick={enterEntety} data={destinationLinksList} key={entityPath} classes={classes}></DestinationLink>
    }

    return (
        <div className={cn(styles.constainer)}>
            {entityData && generateEntityPath(entityData, true)}
            {entityData  && generateEntityRow(entityData , true)}
            {entityData  && Object.keys(entityData.children).map(item => generateEntityRow(entityData.children[item])) }
        </div>
    )
}
export default FoldersExplorer