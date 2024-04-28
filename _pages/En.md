---
layout: archive
title: "Resume"
permalink: /cv/
excerpt: "Personal Resume"
author_profile: true
redirect_from:
  - /resume
---
<!-- <a href="#top" class="up-to-top">Back to Top</a> -->

{% include base_path %}

## Education
<hr>

* 1998.09 - 2002.07, Jilin University, Biological and Agro-engineering, Bachelor's degree;
* 2002.09 - 2005.07, Jilin University, Computer Software and Theory, Master's degree, Advisor: Professor Fu Hong;
* 2014.09 - 2019.06, Hainan University, Information and Communication Engineering, Doctoral degree, Advisor: Professor Bai Yong.

## Work experience
<hr>
* 2020.01 - present, School of Information and Communication Engineering, Hainan University, Associate Professor, PhD supervisor;
* 2014.12 - 2019.12, School of Information Science and Technology, Hainan University, Associate Professor;
* 2009.04 - 2014.11, School of Information Science and Technology, Hainan University, Teaching Assistant, Lecturer;
* 2005.07 - 2009.03, worked in Ningbo Broadband Research Institute, ZTE Nanjing Research Institute, Shanghai Auxwin Information Technology Co., Ltd. for many years in the areas of application modules, protocol stacks, and low-level drivers on feature phones and smartphones. He was a Engineer, Senior Engineer, Department Manager respectively.

## Research fields
<hr>

* Main research fields: Intelligent measurement and control technology, artificial intelligence;
* Main engineering application fields: Computer vision and image processing, intelligent robot applications, Internet of Things and smart agriculture, marine information perception and processing, mobile communications.

# Systematic research
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
