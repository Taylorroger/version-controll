### git使用及版本控制
#### 工作分支及说明
* 项目初始化创建release和develop分支，release分支用于分布版本，develop分支用于开发，此分支由项目主程管理。
* 所有开发人员基于develop开发分支创建各自开发分支，命名以开发者姓名简写 + Dev， eg: 'zzlDev‘
* 开发人员只能向各自的分支提交代码
* develop用于拉取所有人的代码，合并冲突，产品功能检查，测试, 再合并检查完成之后所有开发拉取develop代码
* master拉取develop分支代码用于项目进度管理，添加tag，tag注明功能模块
* release拉取master代码，用于发布版本，并在每次push之后添加Tag，tag内容为发布版本号

