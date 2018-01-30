
## Install dependencies

```
npm install
```

## Start server

```
npm start
```

## 单元测试

请参考package.json中的nyc, script.test的变动，以及需要把ava和nyc升级到最新版本。

```
 "scripts": {
    "test": "set THINK_UNIT_TEST=true && nyc ava test/ && nyc report --reporter=html",
  },
  "nyc": {
    "include": [
      "src/model/*.js",
      "src/controller/*.js",
      "src/service/*.js"
    ],
    "sourceMap": false
  }
```