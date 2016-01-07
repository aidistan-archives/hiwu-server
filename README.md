# Hiwu API 服务器

## 如何部署

部署 hiwu-server 需要服务器有以下环境

- node.js, 0.12.7
  - pm2
  - cnpm

## 如何使用

### 登陆方式

目前支持下列登陆方法：

- `login` : 使用用户的认证信息 (credentials) 登陆，格式为 `{ "email": "EMAIL", "password": "PASSWORD"}`；
- `simpleLogin` : 使用用户名登陆，邮箱域为 `@example.com`（若该用户不存在则创建该用户）；
- `codeLogin` : 使用微信登陆返回的 code 登陆，邮箱域为 `@weixin.qq.com`；

### 权限系统

通过对 Gallery 和 Item 两类对象的 `public` 属性设置 `true` 或 `false`，可以达到
**所有人可见**或**所有者可见**的效果。对他人拥有的 Gallery 或 Item 的数据请求，只能
通过相应模型的 `publicView` 实现，查询非公开对象时，将返回 `PRIVATE_MODEL_VISITED`
错误。

## 常见问题

### 1. 如何一次性获取某用户及其所有画廊和每个画廊的所有物品？

GET /api/HiwuUsers/{id}?filter={"include":{"galleries":["items"]}}&access_token=ACCESS_TOKEN

### 2. 如何一次性获取某一用户所有画廊的名字？

GET /api/HiwuUsers/{id}/galleries?filter={"fields":{"name":"true"}}&access_token=ACCESS_TOKEN
