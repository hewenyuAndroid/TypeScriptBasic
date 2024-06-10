
# VSCode 运行环境配置


1. 下载安装 VSCode： https://code.visualstudio.com/
2. 安装 Code Runner 插件
3. 安装 ts-node (ts运行环境)
    3.1 安装 node.js    (https://nodejs.org/en/) // 可以使用 DevEco Studio 安装的 node.js    (`D:\DevEco\NodeJs`)
    3.2 配置环境变量    `path: D:\DevEco\NodeJs`    // `npm -v` 查看版本号
    3.3 安装 TypeScript // `npm i -g typescript`
    3.4 终端输入 `tsc -v` 有版本号则表示安装成功

## 问题及解决方案

### 1. npm install 安装typescript时一直卡在 idealTree\:isp-bms\:sill idealTree buildDeps 时

处理方案： 更换镜像

1.  cmd窗口输入 `npm config get registry` 查看当前镜像地址
2.  输入 `npm config set registry https://registry.npm.taobao.org` 更换镜像地址
3.  输入 `npm config get registry` 查看镜像是否替换成功
4.  继续安装 `npm i -g typescript`

> 注意: 第2步修改npm镜像提示 `request to https://registry.npm.taobao.org/ts-node failed, reason: certificate has expired` 错误，是由于淘宝的镜像已经切换，需要切换到新的源:

```
// 清除缓存
1. npm cache clean --force
// 修改新的镜像地址
2. npm config set registry https://registry.npmmirror.com
// 查看当前的配置
3. npm config list
```


### 2. vscode tsc 命令无效问题

处理方案：

1.  以管理员身份打开 powershell
2.  输入命令 `set-ExecutionPolicy RemoteSigned`
3.  选项选择 `Y`;

### 3. cmd命令行tsc命令无效问题

处理方案：

1.  输入 `npm config get prefix` 获取 ts-node 的位置
2.  上述对应的目录配置到环境变量中


### 4. 简化运行TS的步骤
问题：每次修改ts文件后，需要执行 `tsc a.ts` 生成对应的js文件，然后 `node a.js` 运行代码
简化方式：使用 `ts-node` 包直接在 node.js 中运行ts代码；
安装命令： `npm i -g ts-node` 
使用方式：`ts-node a.ts` （只是简化命令，内部还是将ts转成js文件在运行的）





