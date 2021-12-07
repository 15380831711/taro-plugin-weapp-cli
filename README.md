# taro-plugin-weapp-cli

-   目前主要用于 taro 工程自动打开微信开发者工具进行预览！
-   微信开发者工具要打开安全-服务端口。
-   先登录开发者，小程序的 appid 必须正确配置，否则只能导入工程！

## 用法说明

-   `npm i taro-plugin-weapp-cli -D `

-   在 taro 的[配置](https://taro-docs.jd.com/taro/docs/config)下增加插件:
-   weApp.devTools.path 为微信开发者工具安装路径。

```js
module.exports = {
    plugins: [['taro-plugin-weapp-cli', { 'weApp.devTools.path': '' }]]
};
```

-   执行 taro 的 `npm run dev:weapp` 或 `npm run build:weapp`

## 友情链接

-   微信开发者工具[命令行调用](https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html)
