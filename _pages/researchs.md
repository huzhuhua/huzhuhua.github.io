---
layout: single        #可以修改为talk  single default splash   archive等
title: "系统性工作"
permalink: /researchs/
author_profile: true
classes: wide
---
<!-- 检查配置文件中的 site.talkmap_link 是否为 true。
  如果为 true，则在页面中显示一个带有链接的段落，指向 "/talkmap.html"，显示了所有演讲地点的地图。 -->
{% if site.talkmap_link == true %}

<p style="text-decoration:underline;"><a href="/talkmap.html">See a map of all the places I've given a talk!</a></p>

{% endif %}
  {% for post in site.researchs %}  
  {% include archive-single-talk.html %}
{% endfor %}


<br>
以上工作获得海南省科技进步一等奖1项，海南省教学成果一等奖1项。发表学术论文90余篇，申请专利25件（已授权10件），登记软著27项，出版著作6部，出版“十二五”，“十三五”国家级规划教材3本，主持国家级和省部厅级项目20余项。
