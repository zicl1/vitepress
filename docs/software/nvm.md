---
outline: deep
---
# Windows 安装 nvm

## 1.nvm 介绍

nvm（Node Version Manager）是一个用于管理和切换不同版本的 Node.js 的命令行工具。使用 nvm，你可以在同一台机器上安装

并运行多个版本的 Node.js，而不会造成版本之间的冲突。

## 2.下载 nvm

*网络不好的直接用这个网盘地址下载：[https://zicl.lanzoue.com/iJTVf263s0xi](https://zicl.lanzoue.com/iJTVf263s0xi)

nvm Windows 版本下载地址：[https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

选择 Releases 中发布的最新版本：[https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12)

![image](nvm/3528a9885290ba032b2669bc8e3019105cf45d.png)

选择下载 Windows exe 安装程序。

![image](nvm/e3a78ac43c90f7f788f684af1667214c1e8d6c.png)

## 3.安装 nvm

运行安装程序。

![](nvm/78f1d4b19c9ea416e01825658ae6458ac5f897.png)

![](nvm/931fb7b179ff10aa31378004ffe14fa09dd54a.png)

![](nvm/b36ad47398264a5157d8768f4995bac80cdf0a.png)

![](nvm/68b57fa90f4ac22ba0a230bcc061e0f507a7a6.png)

![](nvm/49174f322b3af05716153927a28d30690100a3.png)

![](nvm/783a41326e7cf3ef0372154dac5e878e89e045.png)

安装完成，查看 nvm 版本。

![](nvm/57d29ac34aae268ca0a072625bef17f63697f3.png)

## 4.使用 nvm

查看电脑安装的所有 Node.js 版本。

```bash
nvm list
```

或

```bash
nvm ls
```

![](nvm/89e0c2100cb3dc67de4916f8c62cdad1f6c5d4.png)

查看可以安装的所有 Node.js 的版本。

```bash
nvm list available
```

![](nvm/22de19916901fb39c2a9115f757a6fc4c2dd62.png)

安装指定版本的 Node.js。

```bash
nvm install 18.17.1
```

![](nvm/794e703665ca6ec94038120acc762ea90bf52b.png)

再安装一个最新版本。

```bash
nvm install 20.14.0
```

![](nvm/e766e7f0740ec72dc5f148aeee928b84022720.png)

查看所有安装的 Node.js 版本。

```bash
nvm ls
```

使用 20.14.0 版本的 Node.js。

```bash
nvm use 20.14.0
```

nvm ls 查看前面有 * 号的即为当前使用的 Node.js 版本。

![](nvm/93a17e714eb086b5d523457b02f92f72ce9852.png)

查看 Node.js 版本。

```bash
node --version
```

![](nvm/a54c4ae43404eb642014567b10d71b5d2316c8.png)

> 来源：微信公众号“A子辰”（ID：q751701133）综合整理自 github
> 编辑：Zichen
> 校对：Zichen
> 终审：Zichen

<center>
End.
</br>
谢谢您的阅读！
</center>

![image](../public/images//wechat-public-account.gif)