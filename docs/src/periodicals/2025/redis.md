[[toc]]
## 前言
Redis 是一款内存级的数据库，凭借其卓越的性能，几乎成为每位开发者的标配工具。

虽然 Redis 包含大量需要掌握的知识，但其中的热点知识并不多。今天，『知行』就和大家分享一些 Redis 中的热点知识。

## Redis 数据结构

<img src="/periodicals/2025/redis/1.png" style="width: 80%;">

Redis 中常用的数据结构大致可分为两类：

1. 核心类型：String、Hash、List、Set、Zset（Sorted Set）
2. 扩展类型：Bitmap、Geospatial、Streams、HyperLogLog

## 键过期策略

<img src="/periodicals/2025/redis/2.png" style="width: 80%;">

Redis 中的键过期策略主要用于处理设置了过期时间（TTL）的键的自动删除，确保内存资源合理利用。在 Redis 中，键过期策略包括两种：

1. 惰性删除：访问键时检查是否过期
2. 定期删除：后台定期检查键是否过期

## 键驱逐策略
<img src="/periodicals/2025/redis/3.png">

Redis 的键驱逐策略用于在内存达到限制时决定哪些数据应该被删除。常见的 Redis 键驱逐策略包括：

1. noeviction（默认）：不删除键，直接拒绝写入操作（返回错误）；
2. allkeys-lru：从所有键中，删除 **最近最少使用** 的键；
3. allkeys-lfu：从所有键中，删除 **最不频繁使用** 的键；
4. allkeys-random：从所有键中，**随机删除** 键；
5. volatile-lru：从设置了过期时间的键中，删除 **最近最少使用** 的键；
6. volatile-lfu：从设置了过期时间的键中，删除 **最不频繁使用** 的键；
7. volatile-random：从设置了过期时间的键中，**随机删除** 键；
8. volatile-ttl：从设置了过期时间的键中，删除 **剩余生存时间最短** 的键；

## 主从全量同步

<img src="/periodicals/2025/redis/4.png" style="width: 85%;">

Redis 主从全量同步是当从节点首次连接或数据差异过大时，主节点生成 RDB 快照并传输给从节点的过程。

全量同步虽然保证数据完整，但资源消耗较大，需要调整积压缓冲区大小、启用无盘复制等方式优化。

## 主从增量同步

<img src="/periodicals/2025/redis/5.png" style="width: 85%;">

Redis 增量同步是指在主从复制中，主节点仅将数据的增量部分同步给从节点。

增量同步是 Redis 主从复制的核心优化，通过缓冲区缓存写命令，可实现高效断连恢复。

## 持久化机制

<img src="/periodicals/2025/redis/6.png" style="width: 70%;">

Redis 持久化机制指的是将内存中的数据保存到磁盘中，以便在其重启或故障时保留数据，防止数据丢失。它提供了两种主要的持久化机制：

1. RDB（Redis DataBase）：快照
2. AOF（Append Only File）：日志追加

此外，还有两者结合的 **混合持久化**（Redis 4.0+）

## 知行有话
本期的分享到此结束啦！如果大家认为 Redis 中还有哪些比较热点的知识点没有提及到，欢迎在评论区留言哦~

