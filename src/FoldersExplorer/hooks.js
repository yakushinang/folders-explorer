import  {useState, useMemo}from "react";
import {convertToLookupTable} from './helpers'
import _ from 'lodash';

export const useFoldersExplorer = ({data}) =>{
    const hierarchyidData = useMemo(()=>convertToLookupTable(data),[data])
    const [path, setPath] = useState(hierarchyidData[Object.keys(hierarchyidData)[0]].displayName)
    const entityData = _.get(hierarchyidData, path)
    
    const onEntityClick = (curentPath) => {  
        setPath(curentPath)
    }

    return {
        entityData,
        onEntityClick,
        path
    }
}