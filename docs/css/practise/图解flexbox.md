---
sidebarDepth : 0
---
# 图解 Flexbox


本文图片、部分翻译来自原文 [How Flexbox works — explained with big, colorful, animated gifs](https://medium.freecodecamp.com/an-animated-guide-to-flexbox-d280cf6afc35#.h4n9x6uv7)

## 属性#1 `display: flex`

示例如下

![flex1.gif](http://www.fengdb.com/public/images/flex1.gif)

上面4个 `div` 默认为 `display: block`

我们给其父级容器添加 

```css
#container {
  display: flex;
}
```

![flex2.gif](http://www.fengdb.com/public/images/flex2.gif)

其实把每个 `div` 添加了一个 **flex context**  (弹性上下文)


## 属性#2 Flex Direction

一个 Flexbox 的容器有两个轴：主轴 交叉轴。如下：

![flex3.png](http://www.fengdb.com/public/images/flex3.png)

默认情况下容器中的每个元素都会沿着主轴自左向右一次排列。所以容器设置为 `display: flex` 后所有的 `div` 会排列在一行上

但是 Flex-direction 属性可以让主轴旋转，如下：

![flex4.gif](http://www.fengdb.com/public/images/flex4.gif)

注意： `flex-direction: column` 并不是把 `div` 从主轴移动到交叉轴上，而是让主轴从水平变为垂直

flex-direction 还有两者值： `row-reverse` 和 `column-reverse` (顾名思义 就是反转)

![flex5.gif](http://www.fengdb.com/public/images/flex5.gif)


## 属性#3 Justify Content

justify-content 用来控制元素在主轴上的对齐方式

先深入理解下主轴和交叉轴的区别。首先设置为 `flex-direction: row`

```css
#container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
```

`justify-content` 有5个可选值：

1. flex-start
2. flex-end
3. center
4. space-between
5. space-around

![flex6.gif](http://www.fengdb.com/public/images/flex6.gif)

`space-between` 会使每个 `div` 之间产生相同的小的间隔，但在 `div` 和容器之间没有间隔

`space-around` 会在每个 `div` 两侧各产生一个相同的间隔，即容器和最外层的 `div` 之间的间隔刚好是两个 `div` 间隔的一半

注意：`justify-content` 是沿着主轴工作的。 `flex-direction` 是改变的主轴方向的。

## 属性#4 Align Items

`justify-content` 是沿着主轴工作的，而 `align-items` 则是沿着交叉轴工作。

首先重置 `flex-direction: row` 两个轴展示如下：

![flex7.png](http://www.fengdb.com/public/images/flex3.png)

`align-items` 有5个可选值：

1. flex-start
2. flex-end
3. center
4. stretch
5. baseline

看看后两个，其中每个 `div` 中的数字都包含在一个 `p` 标签中 

`align-items: stretch` 时每个 `div` 都会充满交叉轴  
`align-items: baseline` 时按照 `p` 标签的底部对齐

![flex8.gif](http://www.fengdb.com/public/images/flex8.gif)

注意：`align-items: stretch` 时每个 `div` 的 height 必须为 **auto** 否则 height 属性会覆盖 stretch 的效果

`align-items: baseline` 时如果 `div` 内没有 `p` 标签或者 `div` 内没有文字或者子标签内没有文字将按照每个 `div` 的底部对齐。如下：

![flex9.png](http://www.fengdb.com/public/images/flex9.png)


进一步理解主轴和交叉轴的区别，把 justify-content 和 align-items 合在一起，看看在 flex-direction 两种值下的效果

![flex10.gif](http://www.fengdb.com/public/images/flex10.gif)

`flex-direction: row` 时每个 `div` 按照水平主轴排列  
`flex-direction: column`时每个 `div` 按照垂直主轴向下排列


## 属性#5 Align Self

`align-self` 可以手动设置一个元素的对齐方式

它会针对一个 `div` 覆盖掉 `align-items` 属性，因为容器内元素属性都为 `auto`, 所以每个 `div` 都会使用父容器的 `align-items` 属性值

```css
#container {
  align-items: flex-start;
}
.square#one {
  align-self: center;
}
/* 只有 #one 这个 div 会居中 */
```

将前两个 `div` 设置 align-self 属性，后两个使用 `align-items: center` 和 `flex-direction: row` 如下

![flex11.gif](http://www.fengdb.com/public/images/flex11.gif)
