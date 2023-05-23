AcademicPages是学术个人网站的GitHub页面模板

AcademicPages结构：
```
AcademicPages
├── _data                      # data files for customizing the theme
|  ├── navigation.yml          # main navigation links
|  └── ui-text.yml             # text used throughout the theme's UI
├── _includes
|  ├── analytics-providers     # snippets for analytics (Google and custom)
|  ├── comments-providers      # snippets for comments
|  ├── footer
|  |  └── custom.html          # custom snippets to add to site footer
|  ├── head
|  |  └── custom.html          # custom snippets to add to site head
|  ├── feature_row             # feature row helper
|  ├── gallery                 # image gallery helper
|  ├── group-by-array          # group by array helper for archives
|  ├── nav_list                # navigation list helper
|  ├── toc                     # table of contents helper
|  └── ...
├── _layouts
|  ├── archive-taxonomy.html   # tag/category archive for Jekyll Archives plugin
|  ├── archive.html            # archive base
|  ├── categories.html         # archive listing posts grouped by category
|  ├── category.html           # archive listing posts grouped by specific category
|  ├── collection.html         # archive listing documents in a specific collection
|  ├── compress.html           # compresses HTML in pure Liquid
|  ├── default.html            # base for all other layouts
|  ├── home.html               # home page
|  ├── posts.html              # archive listing posts grouped by year
|  ├── search.html             # search page
|  ├── single.html             # single document (post/page/etc)
|  ├── tag.html                # archive listing posts grouped by specific tag
|  ├── tags.html               # archive listing posts grouped by tags
|  └── splash.html             # splash page
├── _sass                      # SCSS partials
├── assets
|  ├── css
|  |  └── main.scss            # main stylesheet, loads SCSS partials from _sass
|  ├── images                  # image assets for posts/pages/collections/etc.
|  ├── js
|  |  ├── plugins              # jQuery plugins
|  |  ├── vendor               # vendor scripts
|  |  ├── _main.js             # plugin settings and other scripts to load after jQuery
|  |  └── main.min.js          # optimized and concatenated script file loaded before </body>
├── _config.yml                # site configuration
├── Gemfile                    # gem file dependencies
├── index.html                 # paginated home page showing recent posts
└── package.json               # NPM build scripts
```

# 站点配置
    · 主配置文件位于_config.yml中的基目录中，它定义了侧边栏中的内容和站点范围内的其他特性。
    · 顶部菜单的配置文件位于_data/navigation.yml中。

## 本地运行（开发和调试）
    1. 将仓库克隆到本地
       1. 
    Make sure you have ruby-dev, bundler, and nodejs installed: sudo apt install ruby-dev ruby-bundler nodejs
    确保你已经安装了ruby-dev，bundler和nodejs：sudo apt install ruby-dev ruby-bundler nodejs
    Run bundle clean to clean up the directory (no need to run --force)
    运行bundle clean清理目录（不需要运行--force）
    Run bundle install to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
    运行bundle install安装ruby依赖项。如果你得到错误，删除Gemfile.lock并重试。
    Run bundle exec jekyll liveserve to generate the HTML and serve it from localhost:4000 the local server will automatically rebuild and refresh the pages on change.
    运行bundle exec jekyll liveserve生成HTML并从localhost:4000提供，本地服务器将自动重建并刷新更改的页面。

1. 将仓库克隆到本地
2. 在项目根目录下打开终端，Run `bundle install` to install ruby dependencies. 
3. Run `bundle exec jekyll serve` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

```
也可以之间在github仓库直接编辑修改和调试。
```
## 导航页
_data\navigation.yml

_config.yml
# 定义集合（collections）的属性和设置。

```
#Collections
collections:
  teaching:
    output: true  # output: true表示该集合的内容需要输出（即生成页面）
    permalink: /:collection/:path/  # permalink: /:collection/:path/ 定义了该集合的永久链接格式。
    # 这里使用了占位符（placeholder），其中 :collection 表示集合名称，而 :path 表示集合中每个文档的路径。
    # 这个设置意味着生成的页面链接将以 "/集合名称/文档路径/" 的形式呈现。
    # 如果有一个名为 "teaching" 的集合，并且在该集合下有一个名为 "lesson1" 的文档，那么该文档的永久链接将是 "/teaching/lesson1/"
```