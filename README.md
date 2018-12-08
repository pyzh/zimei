# 紫妹

## 看起来像这样

```
事物 渣渣辉
事物 古添乐

渣渣辉 的 攻击力 = 5
古添乐 的 血量 = 10

动作 砍
{
    宾语 的 血量 = 宾语 的 血量 - 主语 的 攻击力
}

渣渣辉 砍 古添乐
// 结果 : 古添乐 的 血量 现在是5

```

等价于,js语句

```
let 渣渣辉={}
let 古添乐={}

渣渣辉.攻击力=5
古添乐.血量=10

function 砍(aim){
    aim.血量=aim.血量-this.攻击力
}

渣渣辉.砍 = 砍

渣渣辉.砍( 古添乐 )
// 结果 : 古添乐 的 血量 现在是5
```

## js运行示例
![default](https://user-images.githubusercontent.com/31165554/49651570-8cc50680-fa6a-11e8-9d65-41d04dd12307.png)

## 基础

> `Markdown` 语法

> 基于 `katex` 的数学公式

> 基于 `vupress` 的文档站点, 支持`Vue`组件

> 基于默认主题,支持全站点文档检索

## 开发

1. 安装 [`nodejs`](https://nodejs.org/zh-cn/)

2. 下载此项目

3. 安装依赖

```bash
npm install
```

4. 开发

```bash
npm run dev
```

5. 发布

```bash
npm run build
```

6. 部署

将静态资源部署到根路由 `http(s)://域名/` 即可
若非部署到根路由,需要配置 `./docs/.vuepress/config.js` 中的 `base` 字段,并将项目部署到相应的路由

## 开发 Note

### 图片等资源

1. 资源应放置于`./docs/.vuepress/public` 目录下

2. 引用方式示例

```
<center class="footer"><img :src="$withBase('/你的图片.png')" alt="频响曲线"></center >
```

### 增加文档

我写的新文档呢?怎么没显示?这需要增加文档配置.

1. 根据`./docs/.vuepress/config.js`里面的相应的配置,复制修改即可

## LICENSE

Copyright © 2018-Present 文学编程设计
