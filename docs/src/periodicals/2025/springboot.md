[[toc]]
## 前言
SpringBoot 是一个让所有 Java 开发者都又爱又恨的框架。喜欢它是因为其易用性和提供的丰富功能，而它较为复杂的设计也让许多开发者头疼不已。

本期知行将会为大家带来以下内容，和大家一起梳理 SpringBoot 中一些较为核心的内容。

## SpringBoot 启动流程

<img src="/periodicals/2025/springboot/1.png" style="width: 60%;">

SpringBoot 的启动流程主要有以下几个核心步骤：

1. 创建启动容器：创建 DefaultBootstrapContext，用于引导 IOC 容器启动；
2. 启动监听器：监听应用启动时发生的相关事件；
3. 准备应用环境：负责配置应用需要的环境；
4. 创建应用上下文：创建核心 IOC 容器；
5. 准备应用上下文：加载 BeanDefinition；
6. 刷新应用上下文：创建 Bean；
7. 调用 Runner：执行用户自定义的 Runner（ApplicationRunner/CommandLineRunner），用于扩展；

## SpringBoot 生命周期

<img src="/periodicals/2025/springboot/2.png" style="width: 60%;">

SpringBoot 生命周期的每个阶段都会发布相应的事件：

1. starting（启动）：发布 ApplicationStartingEvent 事件；
2. environmentPrepared（环境准备完成）：发布 ApplicationEnvironmentPreparedEvent 事件；
3. contextPrepared（上下文准备完成）： 发布 ApplicationContextInitializedEvent 事件；
4. contextLoad（上下文加载）： 发布 ApplicationPreparedEvent 事件；
5. started（启动完成）： 发布 ApplicationStartedEvent 事件；
6. ready（就绪）：发布 ApplicationReadyEvent 事件；

> [!WARNING]
> 在 SpringBoot 3.0.0 前，ready 阶段是 running，现在 running 已被废弃。

> [!TIP]
> 如果 SpringBoot 生命周期的正常阶段发生异常，会进入失败阶段并发布 ApplicationFailedEvent 事件。

## Bean 生产过程

<img src="/periodicals/2025/springboot/3.png" style="width: 50%;">

Bean 的生产大致有 4 个核心步骤：

1. BeanDefinitionLoader 加载 XML 文件或注解中定义的内容；
2. BeanDefinitionLoader 将加载的内容转换成 BeanDefinition；
3. BeanDefinitionRegistry 将 BeanDefinition 注册到 BeanFactory 中；
4. BeanFactory 负责将 BeanDefinition 生成 Bean；

## BeanDefinitionLoader

<img src="/periodicals/2025/springboot/4.png" style="width: 80%;">

BeanDefinitionLoader 依靠以下几个类完成加载并解析 BeanDefinition：

1. AnnotatedBeanDefinitionReader：负责解析注解
2. AbstractBeanDefinitionReader：负责解析 XML 文件
3. BeanDefinitionReader：负责解析 Groovy 文件
4. ClassPathBeanDefinitionScanner：扫描指定类路径

## Bean 生命周期

<img src="/periodicals/2025/springboot/5.png" style="width: 100%;">

Bean 生命周期的 5 个阶段：

1. 实例化阶段：实例化 Bean；
2. 填充属性阶段（可能发生循环依赖）：对 Bean 的实例化对象进行属性填充；
3. 初始化阶段（核心操作）：负责初始化 Bean，执行一些预定义的方法；
4. 使用阶段：开发者使用；
5. 销毁阶段：执行一些预定义的销毁方法；

## Bean 与循环依赖

<img src="/periodicals/2025/springboot/6.png" style="width: 100%;">

在 Spring 中，若创建 Bean 发生解决循环依赖会通过三级缓存解决。

1. singletonObjects（一级缓存）：存放 **完整** 的 Bean 对象；
2. earlysingletonObjects（二级缓存）：存放 Bean 的 **早期**（early）对象；
3. singletonFactories（三级缓存）：存放 Bean 的 **工厂**（Factory）对象；

## 知行有话
本期的分享到此结束啦！如果大家认为 SpringBoot 中还有哪些比较核心的知识点没有提及到，欢迎在评论区留言哦~



