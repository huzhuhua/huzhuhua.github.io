---
layout: archive
title: "Resume"
permalink: /  # 首页
# permalink: /cv/
excerpt: "个人简历"
author_profile: true
---
<!-- <a href="#top" class="up-to-top">Back to Top</a> -->

{% include base_path %}

## Education
<hr>

* 1998.09 - 2002.07，吉林大学，生物与农业工程，本科、学士；
* 2002.09 - 2005.07，吉林大学，计算机软件与理论专业，研究生、硕士，导师：付宏教授；
* 2014.09 - 2019.06，海南大学，信息与通信工程专业，研究生、博士，导师：白勇教授。

## Work experience
<hr>
* 2020.01 - 至今，海南大学，信息与通信工程学院，教授, 博导；
* 2014.12 - 2019.12，海南大学，信息科学技术学院，副教授；
* 2009.04 - 2014.11，海南大学，信息科学技术学院，助教、讲师；
* 2005.07 - 2009.03，先后在宁波波导股份研究院、中兴通讯南京研究所、上海澳讯信息技术有限公司从事多年功能机和智能手机上的应用模块、协议栈和底层驱动等方面的研发工作。分别任工程师、高级工程师、软件部部长。
  
  
## 研究方向
<hr>

* 主要研究方向：智能测控技术、人工智能
* 主要工程应用领域：计算机视觉与图像处理、智能机器人应用、物联网与智慧农业、海洋信息感知与处理、移动通信。


## 系统性研究
<!-- 
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> 
   -->
<!-- 
  <ul>{% for post in site.research %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>  -->
<ul>
  {% for post in site.research reversed %}
  {% include archive-single-cv.html %}
{% endfor %}

</ul>


<!-- ## Talks
<hr>

  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul> -->
  
<!-- ## Teaching
<hr>
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->

  
