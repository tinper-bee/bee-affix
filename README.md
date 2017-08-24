# bee-affix

[![npm version](https://img.shields.io/npm/v/bee-affix.svg)](https://www.npmjs.com/package/bee-affix)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-affix/master.svg)](https://travis-ci.org/tinper-bee/bee-affix)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-affix/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-affix?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-affix.svg)](https://david-dm.org/tinper-bee/bee-affix#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-affix.svg?style=flat)](https://npmjs.org/package/bee-affix)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-affix.svg)](http://isitmaintained.com/project/tinper-bee/bee-affix "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-affix.svg)](http://isitmaintained.com/project/tinper-bee/bee-affix "Percentage of issues still open")


react bee-affix component for tinper-bee

some description...

## Affix
将页面元素钉在可视范围。
当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 使用方法

```
<Affix>
    <div class='content'>
    </div>
</Affix>
```



## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|container|固定元素所属容器|（object,ReactNode）|document.body|
|offsetTop|固定被触发距离，默认是0 ，可选的属性|（number,ReactNode）|0|
|horizontal|被固定时是否可以左右滑动，默认是false，可选的属性|（boolean,ReactNode）|-|
|target|设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数，默认值() => window |function,ReactNode|-|
|onChange|触发固定或者固定取消时的回调函数,返回值{ affixed: true, event: evt} |function,ReactNode|-|
|onTargetChange|时刻获取Affix的状态值,返回值{state} |function,ReactNode|-|
#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-affix
$ cd bee-affix
$ npm install
$ npm run dev
```
