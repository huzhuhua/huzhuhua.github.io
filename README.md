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
    站点的主配置文件位于_config.yml中的基目录中，它定义了侧边栏中的内容和站点范围内的其他特性。你需要将默认变量替换为关于你自己和你网站的github仓库的变量。顶部菜单的配置文件位于_data/navigation.yml中。

## 本地运行（开发和调试）
1. 将仓库克隆到本地
2. 在项目根目录下打开终端，Run `bundle install` to install ruby dependencies. 
3. Run `bundle exec jekyll serve` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

```
也可以之间在github仓库直接编辑修改和调试。
```
## 导航页
_data\navigation.yml

