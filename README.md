# goTop
实现回到顶部的效果，轻巧而方便的小插件
### 基本用法
```
1. 在项目中引入goTop.js
2. 调用方法：  goTop(
{ 
   container: oBtn,
   effect: true
}

参数的含义：
 1. container:表示你需要哪一个dom元素实现回到顶部的效果
 2. speed  只有当匀速运动的时候才需要设置speed ,默认值是120
 3. effect：true   表示减速运动
    effect：false  表示匀速运动
 4. rate:表示做加速运动时候的频率大小,默认值是8，可以根据自己的需求自定义,rate越小，回到顶部的时间越快。
 5.dis：表示需要在什么位置让回到顶部显示和隐藏，默认的是当滚动的距离大于浏览器的高度的时候显示回到顶部
```
### 实例用法
```
goTop(
{
   container: oBtn,
   effect: true，
   rate:20
})

goTop(
{
   container: oBtn,
   effect: false，//表示匀速
   speed:25,
   dis:300
})

如果使用构造函数的方法，用法如下：
  var oBtn = document.getElementById('button');

    var t = new goTop({
        container: oBtn,
        effect: true,
        speed: 120
    });
    

```


