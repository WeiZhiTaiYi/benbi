#model指令的学习
```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
    <div id="app">
        <h4>{{ msg }}</h4>

        <!-- v-bind 只能实现数据的单向绑定，从M 自动绑定到V，无法实现数据的双向绑定 -->
        <!-- <input type="text" v-bind:value="msg" style="width:100%"> -->


        <!-- 使用 v-model 指令，可以实现 表单元素和 Model 中数据的双向数据绑定 -->
        <!-- 注意：v-model 中能运用在 表单元素中 -->
        <!-- input(radio,text,address,email....) select checkbox textarea -->
        <input type="text" v-model="msg" style="width:100%">

    </div>
    <script>
        var vm = new Vue({
            el:'#app',
            data:{
                msg:'大家都是好学生，爱敲代码，爱学习，爱思考，简直是完美，没瑕疵'
            },
            methods:{

            }
        })
    </script>
</body>
</html>