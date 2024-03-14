// import axios, { AxiosRequestConfig } from "axios";
// const instance = axios.create({
//     // baseURL: "http://127.0.0.1:8081/api",
//     baseURL: "http://1.14.159.233:3000/api",
//     timeout: 2000,
//     headers: { "content-type": "application/json;charset=utf-8" },
//     responseType: "json",
// });

// instance.interceptors.request.use(
//     (config) => {
//       const controller = new AbortController();
//       const signal = controller.signal;
//       config.signal = signal;
//       // 根据请求的类型判断需不需要token
//       if (!needToken(config)) {
//         return config;
//       } else {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           // 没token就先登录，取消这次请求
//           message.warn("Please Login", 0.5).then(() => {
//             router.replace({ name: "Login" });
//           });
//           controller.abort();
//           return null;
//         } else {
//           // 有token就带上token
//           config.headers.Authorization = token;
//           return config;
//         }
//       }
//     },
//     (error) => {
//       console.log("请求拦截器的错误：");
//       console.log(error);
//       return Promise.reject(error);
//     }
//   );
  
//   instance.interceptors.response.use(
//     (response) => {
//       if (response.data.token) {
//         //说明是首次登录，才会返回token
//         //把token存到localStorage里
//         localStorage.setItem("token", response.data.token);
//         store.$patch({
//           userName: response.data.username,
//           account: response.data.account,
//           isAdmin: response.data.isAdmin,
//         });
//       }
//       return response;
//     },
//     (error) => {
//       // Token 过期的错误在这里拦截
//       console.log("响应拦截器的错误：");
//       console.log(error);
//       if (error.response.data.message === "Token Invalid!") {
//         message.warn("Token Invalid", 0.5).then(() => {
//           router.replace({ name: "Login" }); 
//         });
//       } else {
//         message.warn(error.response.data.message, 0.5);
//       }
//       return Promise.reject(error);
//     }
//   );
  
//   export default instance;
  
  