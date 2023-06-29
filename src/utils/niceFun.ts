// export const getRandomColor =()=>{
//     return (function(m, s, c) {
//         return (c ? arguments.callee(m, s, c - 1) : '#') +
//             s[m.floor(m.random() * 16)]
//     })(Math, '0123456789abcdef', 5)

import { log } from "console"

// }
const colorArr:any = [
    '#d7bde2',
    '#f9ebea',
    '#f5eef8',
    '#d5f5e3',
    '#e8f8f5',
    '#f8f9f9',
    '#82e0aa',
    '#d7bde2',
    '#a3e4d7',
    '#85c1e9',
    '#f8c471', 
    '#00FF66',
    '#00FF66',
    '#ff0000',
    '#ffffcc',
    '#ffffcc',
]
export const getRandomColor =()=>{
    return colorArr[Math.floor(Math.random() * 20)]
}
export const getJSonParse =(str:string)=>{
    const specialChar = '@'
        const parsedJson = str.replace(/\n/g, specialChar);
        const arr = JSON.parse(parsedJson)
        arr.forEach((item:any) => {
            item.code = item.code?.replace(/@/g, '\n')
            item.text.forEach((item2:any) => {
                item2?.replace(/@/g, '\n')
            });
            // item.text = item.text?.replace(/@/g, '\n')
        });
    return arr
}
export const genRoutesFn = (routers:any)=>{
    // console.log(`------------`);
    const treeObj:any = []
    // 获取旧的菜单
    const menus = routers
    menus.forEach((item: any) => {
        if(item.parentId ==0){
            item.children = []
            treeObj.push(item)
        }
    })
    menus.forEach((item: any) => {
        if(item.parentId!==0){
            treeObj.forEach((item2:any)=>{
                if(item2.id == item.parentId){
                    item2.children.push(item)
                }
            })
        }
    })
    return treeObj
}

// 获取assets静态资源
export const getAssetsFile = (url: string) => {
    return new URL(`../assets/icon/${url}`, import.meta.url).href;
}