# 文档站点

## 基础

> 基于 `vupress` 的文档站点

> 基于 `katex` 的数学公式

> 支持全站点文档检索

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

Copyright © 2018-Present 文学编程设计
