## Compass用法指南
### 引言
SASS的基本功能介绍在上周的分享中已经介绍差不多了，不过对于在实践中使用SASS来说，强大的Compass是必不可少的，
她由SASS的核心团队成员Chris Eppstein创建，是一个非常丰富的样式框架，包括大量定义好的mixin，
 函数，以及对SASS的扩展。
## 一、Compass是什么？
简单说，Compass是Sass的工具库（toolkit）。
Sass本身只是一个编译器，Compass在它的基础上，封装了一系列有用的模块和模板，补充Sass的功能。它们之间的关系，有点像Javascript和jQuery、Ruby和Rails、python和Django的关系。
## 二、安装
Compass是用Ruby语言开发的，所以安装它之前，必须安装Ruby。
假定你的机器（Linux或OS X）已经安装好Ruby，那么在命令行模式下键入：
`
sudo gem install compass
`
 如果你用的是Windows系统，那么要省略前面的sudo。正常情况下，Compass（连同Sass）就安装好了。
## 三、项目初始化
接下来，要创建一个你的Compass项目，也可以说是创建一个sass项目，假定它的名字叫做myproject，那么在命令行键入：
`compass create myproject`
成功之后可以在你的文件夹下面看到三个文件了 config.rb sass stylesheets
config.rb是配置文件，还有两个子目录sass和stylesheets，前者存放Sass源文件，后者存放编译后的css文件。
![1](https://github.com/smartac-frontend/doc/blob/master/knowledge/Compass/images/2.png)
![1](https://github.com/smartac-frontend/doc/blob/master/knowledge/Compass/images/3.png)
## 四、编译
在写代码之前，我们还要知道如何编译。因为我们写出来的是后缀名为scss的文件，只有编译成css文件，才能用在网站上。Compass的编译命令是
            `compass compile`
该命令在项目根目录下运行，会将sass子目录中的scss文件，编译成css文件，保存在stylesheets子目录中。

默认状态下，编译出来的css文件带有大量的注释。但是，生产环境需要压缩后的css文件，这时要使用--output-style参数。
`compass compile --output-style compressed`
Compass只编译发生变动的文件，如果你要重新编译未变动的文件，需要使用--force参数
`compass compile --force`
## compass watch命令
在命令行模式下，除了一次性编译命令，compass还有自动编译命令
`compass watch`
运行该命令后，只要scss文件发生变化，就会被自动编译成css文件。也就不需要每次都要手动去编译scss文件了
## 五、Compass的模块
Compass采用模块结构，不同模块提供不同的功能。目前，它内置五个模块：
1.reset
2.css3
3.layout
4.typography
5.utilities
### reset模块
浏览器有很多默认的样式，以前写css的时候可能要手动写一些重置的样式，不过现在用compass就可以直接重置浏览器的样式了
只要在scss文件头部引入一行代码
`@import "compass/reset";`
这样就加载了compass的reset模块，编译之后会生成相应的css reset代码
### css3模块
目前，该模块提供19种CSS3命令，大家可以参考下列链接去学习相应的模块[compass css3模块](http://compass-style.org/reference/compass/css3/)



 
