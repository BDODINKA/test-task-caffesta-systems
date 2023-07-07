export const checkMinMax = (value1:number, value2: number) => {
    let min = 0
    let max = 0;

    if(value1 > value2) {
        min = value2
        max = value1
    } else {
        min = value1
        max = value2
    }
    return {min,max}
}