import moment from 'moment';

// better naming for consts
const compareDates = (a,b) =>{
    const dateA = new Date(a)
    const dateB = new Date(b)
    return dateA>dateB?a:b
}

const buildPath=(pathItem, name)=>{
    return pathItem + '.children.' + name
}

const generateLookupTable = (table = {}, entity, parent, currentPathItem ,pathList = [] , lastUpdated) => {
    if(pathList.length === 0){
        return {}
    }
    lastUpdated.updatedAt = compareDates(table[pathList[0]]?.lastUpdated.updatedAt, lastUpdated.updatedAt)
    const existingChildren = table[pathList[0]]?.children
    const currentName = pathList.shift()
    const nodeData = generateLookupTable(existingChildren, entity, currentName, buildPath(currentPathItem , currentName) ,pathList, lastUpdated)
    return {
        ...table,
        [currentName]: {
            parentPath: buildPath(currentPathItem , currentName),
            parent,
            children:{
                ...nodeData
            },
            displayName: currentName,
            lastUpdated:{...lastUpdated}
        }
    }
}
export const convertToLookupTable = (dataList = []) =>{
    let hashTable ={}
    for(let i =0 ; i < dataList.length ; i++){
        const pathList = dataList[i].id.replace(/\s/g, '').split(':') 
        const currentName = pathList.shift()
        const currentPath = currentName
        const lastUpdated = dataList[i].lastUpdated
        lastUpdated.updatedAt = lastUpdated.updatedAt.replace(/\s/g, '')
        hashTable = generateLookupTable(hashTable, dataList[i], currentName, currentPath, pathList ,lastUpdated)
    }

    const DEFAULT_ENTITY_DATA ={
        urn:{
            parentPath:"urn",
            parent:"",
            children:{...hashTable},
            displayName:"urn",
            lastUpdated:""
        }
    } 
    return DEFAULT_ENTITY_DATA
}

export const generatePath=(parent , path, entityParentPath,parentPath)=>{
    const finalPath = parent?parentPath:path
    const entityPath =parent ? finalPath : entityParentPath
    return entityPath
}
export const getDisplayTimeFormat = (dateString = "") =>{
    return moment(dateString).format("DD/MM/YYYY HH:MM")
}
export function getRowList(){
    const args = [...arguments];
    return args
}


export const getPathList=(pathString)=>{
    const pathList = pathString.split(".children.")
    let curentPath=""
    const destinationLinksList = pathList.map((item, index) => {
        if(index === 0){
            curentPath = item
        }else{
            curentPath +=  ".children." + item 
        }
        return {
            name:item,
            path: curentPath
        }
    })
    return destinationLinksList
}
