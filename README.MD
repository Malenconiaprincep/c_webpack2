npm run build 编译

https://babeljs.io/docs/plugins/

### FAQ

1. 关于babel-loader 引入redux 报错 ?

A: According to the error it seems that redux is complaining about the stage option. It is probably because redux is still using Babel 5. 

http://stackoverflow.com/questions/33623003/error-when-compiling-with-webpack-and-babel-loader

