## 基于Spark电商数据分析系统的设计与实现
### 一、项目架构图
该系统由数据层、存储层、计算层、服务层、应用层组成。数据层的数据可以从数据库、文本文件、外部数据、爬虫数据获取，以此来获取海量数据，数据层的数据可以存储在存储层中的HDFS、Hive当中，建立数据仓库，用计算层的Spark框架进行数据清洗、数据挖掘以及数据计算，将计算结果存储在存储层的MySQL中，通过服务层搭建前后端，获取存储层的数据，最后在应用层展现出来。
![image](https://github.com/Kerden-kpx/Spark_E-commerce_Data_Analysis/blob/master/img/%E9%A1%B9%E7%9B%AE%E6%9E%B6%E6%9E%84%E5%9B%BE.png)
### 二、技术栈
Spark + Hadoop + Spring Boot + MyBatis + Vue + Mysql
### 三、总体功能模块图
电商用户行为分析系统主要划分为数据管理、系统管理、系统功能和数据分析四个核心模块。这样的模块划分旨在实现功能的清晰分离与高效协作，确保系统的可维护性与扩展性。数据管理模块负责日志的收集与分析，通过日志监控系统运行状态，为运维提供数据支持，保障系统的稳定运行。系统管理模块聚焦于用户、角色和权限的精细控制，构建起系统的安全框架，确保不同用户按需访问，维护系统安全与秩序。系统功能模块涵盖登录、注册、个人信息管理等基础功能，这些功能是用户与系统交互的入口，为用户提供便捷的操作体验，同时保障用户数据的准确性和安全性。数据分析模块则是系统的核心，它通过每日趋势、每时趋势、漏斗转化等多维度分析，深度挖掘用户行为数据，为电商企业提供精准的业务洞察，助力决策优化。这种模块化设计不仅使系统结构清晰，便于开发与维护，而且能够灵活应对业务变化，满足企业不断演进的数据分析需求。
![image](https://github.com/Kerden-kpx/Spark_E-commerce_Data_Analysis/blob/master/img/%E5%8A%9F%E8%83%BD%E6%A8%A1%E5%9D%97.png)
### 四、界面展示
#### 4.1、登录界面
![image](https://github.com/Kerden-kpx/Spark_E-commerce_Data_Analysis/blob/master/img/%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2.png)
#### 4.2、注册界面
![image](https://github.com/Kerden-kpx/Spark_E-commerce_Data_Analysis/blob/master/img/%E6%B3%A8%E5%86%8C%E7%95%8C%E9%9D%A2.png)
#### 4.3、数据分析界面
![image](https://github.com/Kerden-kpx/Spark_E-commerce_Data_Analysis/blob/master/img/%E6%AF%8F%E6%97%A5%E8%B6%8B%E5%8A%BF%E5%88%86%E6%9E%90%E5%B1%95%E7%A4%BA.png)
#### 4.4、用户信息界面
![image](https://github.com/Kerden-kpx/Spark_E-commerce_Data_Analysis/blob/master/img/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2.png)
#### 4.5、角户信息界面
![image](https://github.com/Kerden-kpx/Spark_E-commerce_Data_Analysis/blob/master/img/%E8%A7%92%E8%89%B2%E7%95%8C%E9%9D%A2.png)
#### 4.6、权限信息界面
![image](https://github.com/Kerden-kpx/Spark_E-commerce_Data_Analysis/blob/master/img/%E6%9D%83%E9%99%90%E7%95%8C%E9%9D%A2.png)
### 五、测试用例
![image](https://github.com/Kerden-kpx/Spark_E-commerce_Data_Analysis/blob/master/img/%E6%B5%8B%E8%AF%95%E7%94%A8%E4%BE%8B.jpg)
