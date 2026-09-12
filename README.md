# 社区慢病随访服务

该服务以居民测量值为入口，后续可接入风险分层、随访计划和提醒任务。当前 `src/server.ts` 提供健康检查和输入校验示例，SQLite 与缓存的连接配置应由运行环境注入。

```bash
npm install
npm run build
npm start
```

容器监听 8080 端口，所有交互均通过 HTTP API 完成。

