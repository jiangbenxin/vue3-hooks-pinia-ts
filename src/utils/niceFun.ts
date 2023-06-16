// export const getRandomColor =()=>{
//     return (function(m, s, c) {
//         return (c ? arguments.callee(m, s, c - 1) : '#') +
//             s[m.floor(m.random() * 16)]
//     })(Math, '0123456789abcdef', 5)
// }
export const getRandomColor =()=>{
    return Math.floor(Math.random() * 20)
}