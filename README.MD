npm run build 编译

https://babeljs.io/docs/plugins/

### FAQ

1. 关于babel-loader 引入redux 报错 ?

A: According to the error it seems that redux is complaining about the stage option. It is probably because redux is still using Babel 5. 

http://stackoverflow.com/questions/33623003/error-when-compiling-with-webpack-and-babel-loader


2. koa2 下 await async 需要用 babel

Babel setup

For Node 4.0 and Babel 6.0 you can setup like this

```
// install babel and required presets
$ npm install babel-core --save
$ npm install babel-preset-es2015-node5 --save
$ npm install babel-preset-stage-3 --save

```

