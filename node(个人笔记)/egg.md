>1.要求node js版本必须大于8.0并且要用Lts 版本

>2.创建egg的环境 npm i egg-init -g / cnpm i egg-init -g
>3.创建项目
    cd到目录里面 （注意目录不要用中文 不要有空格）

    egg-init 项目名称 --type=simple 创建项目 如：egg-init eggdemo01 --type=simple

>   cd eggdemo01 切换到eggdemo01文件夹中

>>  cnpm install 在eggdemo01中下载依赖

>4.运行项目
>> npm run dev

>5.### 安装模板依赖

npm install --save egg-view-nunjucks

### 配置插件

修改文件config/plugin.js

``` js
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  }
};
```

修改文件config/config.default.js

``` js
//添加下面的选项
config.view = {
defaultViewEngine: 'nunjucks'
}

// 自动跳转路由

<meta http-equiv="refresh" content="5;URL=/jemp">

五秒跳转到已路由的/jemp上