import { Http2ServerRequest, Http2ServerResponse } from "http2";

const app = require("express")();
const html = require("./data");

// エラーになるのでコメントアウトしておく
// app.use(
//   "/",
//   (req: Http2ServerRequest, res: Http2ServerResponse, next) => {
//     req.headers["test-header"] = 1234;
//     next();
//   },
//   (req, res, next) => {
//     console.log(`Request has test header: ${!!req.headers["test-header"]}`);
//     next();
//   }
// );

// app.get("/", (req, res) => {
//   res.set("Content-Type", "text/html");
//   res.send(Buffer.from(html));
// });

// app.listen(8080, function() {
//   console.log("Server is running on 8080");
// });