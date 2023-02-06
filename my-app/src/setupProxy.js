const { createProxyMiddleware } = require("http-proxy-middleware");

//! 개별적으로 사용하는 방법
// module.exports = function (app) {
//   app.use(
//     "/api2", //proxy가 필요한 path parameter를 입력합니다.
//     createProxyMiddleware({
//       target: "http://localhost:3070", //타겟이 되는 api url를 입력합니다.
//       changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
//     })
//   );
//   app.use(
//     "/api", //proxy가 필요한 path parameter를 입력합니다.
//     createProxyMiddleware({
//       target: "http://localhost:3080", //타겟이 되는 api url를 입력합니다.
//       changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
//     })
//   );
// };

//! 2개를 합쳐서 한번에 사용 하는 방법
module.exports = function (app) {
  app.use(
    ["/api", "/api2"],
    createProxyMiddleware({
      target: "http://localhost:3080",
      changeOrigin: true,
      router: {
        "/api2": "http://localhost:3070",
      },
    })
  );
};
