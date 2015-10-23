# 网页PPT： reveal.js 介绍
![reveal.js](http://upload-images.jianshu.io/upload_images/16777-450adc0c3346b29d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##  reveal.js 是个啥
[reveal.js](https://github.com/hakimel/reveal.js/) 是一个展示内容的框架，可以简单的理解为网页版的PPT。我们用 reveal.js 做出来的PPT其实是一个HTML文件。

## 优势
和传统的PPT相比，reveal.js 有哪些吸引我的地方呢？主要有：
* 制作简单：对程序员来说，只是做个页面而已；对非程序员可以使用[在线编辑器](http://slides.com/)
* 运行简单：因为是一个HTML文件，那么只要双击，就能在浏览器中展示。（注：为了更好的效果，还是用高级浏览器打开比较好，虽然它对IE8及以上版本的旧浏览器做了优雅降级。更详细的浏览器支持，见[这里](https://github.com/hakimel/reveal.js/wiki/Browser-Support)）
* 功能强大，灵活：因为是在浏览器中运行的，可以用HTML+CSS+JS，做各种想要的东西：比如与现场的用户进行交互（如用户在手机上进行一些投票，页面上实时显示投票数）；并且，reveal.js 有多套默认皮肤，支持 多种PPT切换动画，Fragments，内联PPT( [nested slides](https://github.com/hakimel/reveal.js#markup))，代码高亮，解析 Markdown，懒加载图片和视屏，导出为PDF和一系列的 [JS API](https://github.com/hakimel/reveal.js#api) 等特性

## 安装
### 小白版安装
1. 下载： https://github.com/hakimel/reveal.js/releases
1. 解压下载的文件。将 index.html 里的内容替换成自己的内容
1. 打开 index.html 来查看效果


### 完整版安装
reveal.js 的某些特性需要服务器端的支持，如 外部Markdown，演讲者注释。如果要用这些功能，需要安装完整版。步骤如下
1. 安装 [Node.js](http://nodejs.org/)
1. 安装 [Grunt](http://gruntjs.com/getting-started#installing-the-cli)
1. 下载
   ```sh
   $ git clone https://github.com/hakimel/reveal.js.git
   ```
1. 到 reveal.js 文件夹
   ```sh
   $ cd reveal.js
   ```
1. 安装依赖
   ```sh
   $ npm install
   ```
7. 运行
   ```sh
   $ grunt serve
   ```
8. 打开 <http://localhost:8000> 来查看

 你也可以改变端口用 `grunt serve --port 8001`。

## DEMO
最后附上 [一丝](https://github.com/yisibl) 用 reveal.js 做的高大上的demo
* [CSS 居中之美](http://yisibl.github.io/share/the-beauty-of-center-in-CSS.html)
* [超越 icon font](http://yisibl.github.io/share/exceed-icon-font-sh.html)
* [CSS 后处理器](http://yisibl.github.io/share/css-post-processor.html)
* [CSS 工作流](http://yisibl.github.io/share/css-workflow.html#/1)

是不是很高大上，哈哈。