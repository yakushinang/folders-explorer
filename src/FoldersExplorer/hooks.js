import  {useState, useMemo}from "react";
import {convertToLookupTable} from './helpers'
import _ from 'lodash';

export const useFoldersExplorer = ({data}) =>{
    // try using useMemo in other functions if needed to make code run faster
    // rename to Entity
    const hierarchyidData = useMemo(()=>convertToLookupTable(data),[data])
    const [path, setPath] = useState(hierarchyidData[Object.keys(hierarchyidData)[0]].displayName)
    const entityData = _.get(hierarchyidData, path)
    const enterEntety = (curentPath) => {  
        setPath(curentPath)
    }

    return {
        entityData,
        enterEntety,
        path
    }
}