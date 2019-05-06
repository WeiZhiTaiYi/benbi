#1安装启动
> 1.安装项目依赖 : npm install
>2.启动vue项目 :npm run serve
#2开发vue项目
>写代码要写在src目录里面
>components：组件的意思
>>ctrl+c终止服务器
>npm run build 把所有程序打包成html,css和js文件
执行完build会多一个dist文件
>想要发布自己做外部应用的话把dist目录里的所有文件发布到服务器上就可以了
>http-server用服务器启动dist里面html.css和js文件
#3引入组件
>import 引入组件
>>import 输入要引入组件的名字 from 引入组件的文件地址
>注册组件 
>>components：{ 组件的名字 }
>>>components要写在export default里

#4创建一个vue项目框架
>vue create 项目名字 

#vue 小问题
>1.vue项目中用v-for循环本地图片,图片不显示.可以显示完整的路径但是照片不显示用:require 写法
list[
    {img: require('填写图片路径')}
]
#跳转路游
>注意:用a标签跳转路游会刷新页面所以改用`<router-link>`
>链接路游用 import 要连接的网页名 from '网页当前路径'
router-link默认是A标签可以改变他的标签 给他一个属性tag
`<router-link tag="div">`这样router-link就会变成div标签
