"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
// classを指定してクラス化
class Main {
    // コンストラクター
    constructor() {
        // httpサーバーを設定する
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        // サーバーを起動してリクエストを待ち受け状態にする
        server.listen('5000');
        console.log('Hello! Node.js × TypeScript from Class');
    }
    /*
    * サーバーにリクエストがあった時に実行される関数
    */
    requestHandler(request, response) {
        response.end('Hello! Node.js with TypeScript');
    }
}
// Mainクラスのインスタンスを作る
const main = new Main();
//# sourceMappingURL=app.js.map