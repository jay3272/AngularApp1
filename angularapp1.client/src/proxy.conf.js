const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7077';

const PROXY_CONFIG = [
  {
    context: ["/api/EmployeeManagement/login"],
    target: "https://projectapi.gerasim.in/api/EmployeeManagement/login",  // 目標後端 API 網址
    secure: false,  // 如果後端 API 使用 HTTPS，並且您不想驗證 SSL 憑證，設為 false
    changeOrigin: true,  // 修改請求中的來源標頭
    logLevel: "debug",  // 用於除錯，顯示代理的請求資訊

    context: [
      "/weatherforecast",
    ],
    target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
