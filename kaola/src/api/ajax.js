//import Axios from "axios";

/*
ajax请求函数
返回值是个promise对象（异步返回response.data)
*/
// export default function ajax(url,data={},type='GET'){
//     return new Promise(function(resolve,reject){
//         //异步ajax请求
//         let promise 
//         if(type==='GET'){
//             //准备URL query参数数据
//             let dataStr=''// 数据拼接字符串
//             Object.keys(data).forEach(key=>{
//                 dataStr+=key+'='+data[key]+'&';
//                 console.log(dataStr);
//             })
//             if(dataStr!==''){
//                 dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
//                 url=url+'?'+dataStr;
//             }
//             //发送GET 请求
//             promise=Axios.get(url)
//         }else{
//             // 发送post请求
//             promise=Axios.post(url,data)
//         }
//         promise.then(function(response){
//             // 成功了调用resolve
//             resolve(response.data)
//         }).catch(function(error){m 
//             // 失败了调用reject
//             reject(error)
//         })
//     })
// }

/* 
const response = await ajax()
const result = response.data

const 
*/
