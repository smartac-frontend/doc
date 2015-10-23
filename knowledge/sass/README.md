# CSS拓展语言：[Sass](http://sass-lang.com/)介绍
## CSS拓展语言介绍
CSS拓展语言（CSS Preprocessor），也有叫做CSS预处理器。    

CSS拓展语言出现的原因是，CSS自身支持的功能能有限（如不支持变量，条件控制，循环等编程元素），并不满足我们想要的一些功能。而CSS拓展语言支持CSS不支持的特性。

使用CSS拓展语言后，减少CSS的开发的时间，并且让CSS开发变得简单和可维护。    

CSS拓展语言思想是：CSS拓展语言的定义了一套语法，按这些语法写的代码，编译生成对应的CSS。我们在网站上引用的是生成的CSS。因此，**使用CSS拓展语言并不会产生额外的浏览器兼容性问题**。    

下面是某CSS拓展语言的源码
```
$color: #f00;// 定义的变量
.color-red {
	color: $color;
}
```
编译后生成
```
.color-red {
	color: #f00;
}
```

常见的CSS拓展语言有:[Sass](http://sass-lang.com/),[Less](http://lesscss.org/) 和 [Stylus](https://learnboost.github.io/stylus/)。

## Sass是什么
Sass是世界上最成熟，稳定强大的专业的CSS拓展语言。    

Sass 和所有版本的CSS完全兼容，有丰富的特性，成熟的核心团队，庞大的社区和非常多的基于Sass的框架。

## Sass的安装
1. [安装Ruby](http://www.ruby-lang.org/zh_cn/downloads/)
1. 命令行执行 `gem install sass`

看是否安装成功：在命令行中执行
```
sass -v
```
 
注意：由于国内网络原因（你懂的），导致 rubygems.org 存放在 Amazon S3 上面的资源文件间歇性连接失败。所以你会遇到 gem安装资源没反应，使用Taobao的[RubyGem镜像](https://ruby.taobao.org/)可以解决这个问题。使用方式如下
```
$ gem sources --remove https://rubygems.org/
$ gem sources -a https://ruby.taobao.org/
$ gem sources -l
*** CURRENT SOURCES ***

https://ruby.taobao.org
# 请确保只有 ruby.taobao.org
$ gem install rails
```

更多见Sass官网的[安装指南](http://sass-lang.com/install)

## 将Sass编译成CSS
将一个Sass文件编译成CSS
```
sass input.scss output.css
```

命令 Sass 监视文件的改动并更新 CSS
```
sass --watch input.scss:output.css
```

如果你的目录里有很多 Sass 文件，你还可以命令 Sass 监视整个目录：
```
sass --watch app/sass:public/stylesheets
```

使用`sass --help`可以列出完整的帮助文档。    

或者可以参考[该项目](https://github.com/iamjoel/sass-learn)的做法：用Gulp及插件来做。     
当启动Gulp的任务后，`src`下的scss文件变化时，就会将scss文件编译成对应的CSS。

## Sass的基本语法
Sass语法规则有两种，一种是通过tab键控制缩进的语法规则(缩进要求非常严格)，这种语法对于熟悉Ruby的同学来说会非常的方便和喜欢。这种语法的Sass文件是以.sass后缀命名。另一种语法是SCSS，这是Sass的新的语法规则，他的外观和CSS的一模一样，文件后缀是.scss。如下所示：
```
//Sass语法
$width: 200px
.box
    width: $width

//SCSS语法
$width: 200px;
.box {
    width: $width;
}
```

Sass和SCSS的语法不能混用。下面介绍的都是SCSS的语法.

### 变量
变量以`$`开头,如
```
$color: #f00;
.color-red {
	color: $color;
}
```

### 计算功能
在代码中使用算式,如
```
$leftW: 100px;
.right-part{
	margin-left: $leftW + 10px;
}
```

### 嵌套
```
.box{
	.box-header{
		background-color: green;
		&:hover{
			background-color: red;
		}
	}
}
```
转化成如下CSS
```
.box .box-header{
	background-color: green;
}
.box .box-header:hover{
	background-color: red;
}
```

### 注释
单行注释 `// comment`，只保留在SASS源文件中，编译后被省略。     
多行注释：`/* comment */`，会保留到编译后的文件。    
在 `/*`后面加一个感叹号，表示这是"重要注释"。即使是压缩模式编译，也会保留这行注释，通常可以用于声明版权信息。

## 插值
在选择器和属性上使用变量，必须用差值。否则会报错。
```
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```
生成
```
p.#foo {
  border-color: blue;
}
```

### 继承
一个选择器，继承另一个选择器。
```
.box {
    width: 100px;
}
.blue-box{
	@extend .box;
	background: bule;
}
```

### Mixin
Mixin 有点像 C 语言的宏（macro），是可以重用的代码块。下面
```
@mixin rounded($vert, $horz, $radius: 10px) {
    border-#{$vert}-#{$horz}-radius: $radius;
    -moz-border-radius-#{$vert}#{$horz}: $radius;
    -webkit-border-#{$vert}-#{$horz}-radius: $radius;
}
```

### %placeholder
和Mixin类似，只是%placeholder不支持参数，以及变量，调用是用`@extend`。%placholder不会被编译到CSS样式文件中。    

关于是用 Mixin 还是 %placeholder :如果你需要使用变量，最好使用 Mixin，否则使用%placeholder。更详细的描述见[这里](http://www.w3cplus.com/preprocessor/sass-mixin-placeholder.html)。

### 条件语句
```
@if lightness($color) > 30% {
　　background-color: #000;
} @else {
　　background-color: #fff;
}
```

### 循环
```
@for $i from 1 to 10 {
　　.border-#{$i} {
　　　　border: #{$i}px solid blue;
　　}
}
$i: 6;
@while $i > 0 {
　　.item-#{$i} { width: 2em * $i; }
　　$i: $i - 2;
}
@each $member in a, b, c, d {
　　.#{$member} {
　　　　background-image: url("/image/#{$member}.jpg");
　　}
}  　　
```

### 函数
```
@function double($n) {
　　@return $n * 2;
}
#sidebar {
　　width: double(5px);
}
```

### 插入文件
`@import`命令，用来插入外部文件。
```
@import "path/filename.scss";
```

### 输出调试信息
`@debug`, `@warn`, `@error`。    
调试信息均输出在命令行里。他们的区别只是信息的等级不同而已。

## Sass是如何让CSS开发变得简单和可维护
### 减少重复
变量，继承，Mixin，函数的功能可以减少重复的代码。

## 简化代码
通过定义一些Mixin,函数，可以简化代码。如加浏览器前缀的Mixin，去浮动的Mixin等。

### 功能一样的放在一起
嵌套，插入文件的功能可以放在一起。
```
// box的样式
.box{
	.box-header{
		// ...
	}
	.box-body{
		// ...
	}
}
```

## 常见问题
### 在Windows下，遇到`scss`文件中有中文时,报如下错误
```
Error:     error path/to/include-chinese.scss (Line 136: Invalid GBK character"\xE8")
```
在`scss`文件第一行加上
```
@charset "utf-8";
```

## ppt
见 [这里](../../ppt/sass.html)




