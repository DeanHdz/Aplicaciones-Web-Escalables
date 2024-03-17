export interface Show{
    id : number,
    title : string,
    year : number,
    episodes : number,
    image : string
    isSelected?: boolean //Por default es falso al no declarar
}