// const Token = () => {
//     // if (localStorage.getItem('Access_Token') !== null) {
//     //     console.log(localStorage.getItem('Access_Token'))
//     //     return localStorage.getItem('Access_Token')
//     // }
//     console.log("Token : "+localStorage.getItem('Access_Token'));
//     console.log("Token 실행");
//     return localStorage.getItem('Access_Token');
//     // console.log(localStorage.getItem('Access_Token'))
// }
//
const Token = () => localStorage.getItem('Access_Token');
//
// // 해당 토큰을 사용 할 때마다, back에 보내서 확인해서 받아오기.
// const TokenCheck = () => {
//     const token = localStorage.getItem('Access_Token');
//
//     if (token) {
//
//     }
//
//     return token;
// }

export default Token;