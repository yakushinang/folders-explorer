export function cn(){
    const args = [...arguments];
    const cn = args.reduce((acc,value)=>{
        acc += value ? " " + value : " "
        return acc
    }, "")
    return cn.trim();
}