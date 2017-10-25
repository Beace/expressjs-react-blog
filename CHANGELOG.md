# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.10.0"></a>
# [0.10.0](https://github.com/BeAce/expressjs-react-blog/compare/v0.9.0...v0.10.0) (2017-10-25)


### Features

* **package.json:** add fetch-polyfill ([3f6905c](https://github.com/BeAce/expressjs-react-blog/commit/3f6905c))
* **package.json:** add fetch-polyfill ([64b140a](https://github.com/BeAce/expressjs-react-blog/commit/64b140a))
* **webpack.base.config:** 修改webpack中的alian为modules ([00671d2](https://github.com/BeAce/expressjs-react-blog/commit/00671d2))
* **webpack.base.config:** 建立公共的webpack配置文件 ([9891361](https://github.com/BeAce/expressjs-react-blog/commit/9891361))
* **webpack.prod.config:** 修改生产环境和dev环境的webpack配置 ([8b19a51](https://github.com/BeAce/expressjs-react-blog/commit/8b19a51))
* **yarn:** 添加fetch-polyfill whatwg-fetch ([7c3efee](https://github.com/BeAce/expressjs-react-blog/commit/7c3efee))



<a name="0.9.0"></a>
# [0.9.0](https://github.com/BeAce/expressjs-react-blog/compare/v0.8.0...v0.9.0) (2017-10-19)


### Features

* **bin/www:** 添加提示信息 ([0c8d892](https://github.com/BeAce/expressjs-react-blog/commit/0c8d892))
* **build/**:** 重新build ([91c15d8](https://github.com/BeAce/expressjs-react-blog/commit/91c15d8))
* **containers/Post:** 根据后端的请求改变相应的路由 ([31f95fe](https://github.com/BeAce/expressjs-react-blog/commit/31f95fe))
* **server/**:** 重构server部分，去除每次请求链接一次数据库，并且结构化modal和db ([8bc9389](https://github.com/BeAce/expressjs-react-blog/commit/8bc9389))
* **webpack:** 修改webpack 中vendor name ([25c5ee3](https://github.com/BeAce/expressjs-react-blog/commit/25c5ee3))
* **yarn:** 添加一些辅助ci的工具，例如colors ([e2de0ac](https://github.com/BeAce/expressjs-react-blog/commit/e2de0ac))



<a name="0.8.0"></a>
# [0.8.0](https://github.com/BeAce/expressjs-react-blog/compare/v0.7.0...v0.8.0) (2017-10-18)


### Bug Fixes

* **docs:** 修改文件夹名称为docs ([ee941a1](https://github.com/BeAce/expressjs-react-blog/commit/ee941a1))


### Features

* **.nojekyll:** 添加nojekyllfile ([436ea19](https://github.com/BeAce/expressjs-react-blog/commit/436ea19))
* **build|doc:** 添加doc文件夹，重新build，使用githubpage ([bbd546a](https://github.com/BeAce/expressjs-react-blog/commit/bbd546a))
* **public/images:** 优化图片大小 ([e114825](https://github.com/BeAce/expressjs-react-blog/commit/e114825))
* **webpack:** 去除webpack中vendor的lodash，减小vendor体积 ([396e5eb](https://github.com/BeAce/expressjs-react-blog/commit/396e5eb))



<a name="0.7.0"></a>
# [0.7.0](https://github.com/BeAce/expressjs-react-blog/compare/v0.6.0...v0.7.0) (2017-10-15)


### Bug Fixes

* **build:** 处理冲突，重新build ([270da63](https://github.com/BeAce/expressjs-react-blog/commit/270da63))


### Features

* **build/**:** 重新build项目，并且build中添加static/images路径 ([ef4b7d3](https://github.com/BeAce/expressjs-react-blog/commit/ef4b7d3))
* **src/*:** 改变背景图片的路径 ([23e0825](https://github.com/BeAce/expressjs-react-blog/commit/23e0825))
* **webpack:** 重新定义file-loader,暂时不进行图片优化，移除了express中的静态文件路由，js文件通过cdn，图片文件通过打包到项目中来处理文件404的问题，增加dev环境的检测，使用不同的api ([3a1966f](https://github.com/BeAce/expressjs-react-blog/commit/3a1966f))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/BeAce/expressjs-react-blog/compare/v0.5.0...v0.6.0) (2017-10-13)


### Features

* **build/**:** 重新build所有文件 ([74cfe71](https://github.com/BeAce/expressjs-react-blog/commit/74cfe71))
* **containers/*:** 修改原来引入的所有关于样式和第三方js，分别在不同组件内部加载 ([6aab83a](https://github.com/BeAce/expressjs-react-blog/commit/6aab83a))
* **index.html:** 移除index.html中有关第三方包 ([f515750](https://github.com/BeAce/expressjs-react-blog/commit/f515750))
* **public:** 删除重复的第三方文件 ([8e0bddd](https://github.com/BeAce/expressjs-react-blog/commit/8e0bddd))
* **public/*:** 删除重复样式 ([2e6beb8](https://github.com/BeAce/expressjs-react-blog/commit/2e6beb8))
* **webpack.prod.config.js:** 添加生产环境下的webpack build配置，初步处理了js和模板html的打包问题 ([2e672dd](https://github.com/BeAce/expressjs-react-blog/commit/2e672dd))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/BeAce/expressjs-react-blog/compare/v0.4.0...v0.5.0) (2017-10-11)


### Bug Fixes

* **.gitignore:** git忽略build文件夹 ([f748a93](https://github.com/BeAce/expressjs-react-blog/commit/f748a93))


### Features

* **webpack.prod.config.js:** 添加生产环境下的webpack build配置，初步处理了js和模板html的打包问题 ([519d4b4](https://github.com/BeAce/expressjs-react-blog/commit/519d4b4))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/BeAce/expressjs-react-blog/compare/v0.3.0...v0.4.0) (2017-10-11)


### Features

* **webpack.config.js:** 添加dev环境下的webpack-dashboard配置 ([d027b81](https://github.com/BeAce/expressjs-react-blog/commit/d027b81))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/BeAce/expressjs-react-blog/compare/v0.2.2...v0.3.0) (2017-09-30)


### Features

* **containers/NotMatch:** 提取404页面 ([8087262](https://github.com/BeAce/expressjs-react-blog/commit/8087262))
* **src/routes:** 修改路由，实现不同页面按需加载js，移除部分测试代码 ([e3f9069](https://github.com/BeAce/expressjs-react-blog/commit/e3f9069))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/BeAce/expressjs-react-blog/compare/v0.2.1...v0.2.2) (2017-09-30)



<a name="0.2.1"></a>
## [0.2.1](https://github.com/BeAce/expressjs-react-blog/compare/v0.2.0...v0.2.1) (2017-09-30)



<a name="0.2.0"></a>
# [0.2.0](https://github.com/BeAce/expressjs-react-blog/compare/v0.1.0...v0.2.0) (2017-09-30)


### Bug Fixes

* **index.html:** format code ([970a79c](https://github.com/BeAce/expressjs-react-blog/commit/970a79c))


### Features

* **index.html:** merge develop ([68415de](https://github.com/BeAce/expressjs-react-blog/commit/68415de))
* **package.json:** add a generator for changelog ([56ea2f3](https://github.com/BeAce/expressjs-react-blog/commit/56ea2f3))
* **package.json:** change the version ([adc0020](https://github.com/BeAce/expressjs-react-blog/commit/adc0020))
* **package.json:** for cz firendly ([e95fa47](https://github.com/BeAce/expressjs-react-blog/commit/e95fa47))



<a name="0.1.0"></a>
# 0.1.0 (2017-09-30)


### Features

* **changelog:** add a changelog file ([8a8b0ca](https://github.com/BeAce/expressjs-react-blog/commit/8a8b0ca))
* **src/containers:** 添加新闻页面 ([4dddcf9](https://github.com/BeAce/expressjs-react-blog/commit/4dddcf9))
* **src/fetch:** 抽象API请求 ([9fe0fb4](https://github.com/BeAce/expressjs-react-blog/commit/9fe0fb4))



# Change Log

## [0.10.0](https://github.com/BeAce/expressjs-react-blog/tree/0.10.0) (2017-09-30)
[Full Changelog](https://github.com/BeAce/expressjs-react-blog/compare/0.1...0.10.0)

## [0.1](https://github.com/BeAce/expressjs-react-blog/tree/0.1) (2017-07-18)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*
