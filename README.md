# Hiwu API 服务器

## API 路由

API 基于主版本号进行路由，主版本号为 0 时保持默认值。

    # v0.5.0
    GET http://localhost:3000/api/Users
    -> GET http://localhost:3000/api/Users

    # v2.0.2
    GET http://localhost:3000/api/Users
    -> GET http://localhost:3000/api/v2/Users

## 登陆方式

目前支持下列登陆方法：

- `login` : 使用用户的认证信息 (credentials) 登陆，如 `{ "email": "EMAIL", "password": "PASSWORD"}`；
- `simpleLogin` : 使用用户名直接登陆，邮箱域为 `simple.hiwu.ren`（若该用户不存在则创建该用户）；

## 权限系统

通过对 Gallery 和 Item 两类对象的 `public` 属性设置 `true` 或 `false`，可以达到只有**所有人可见**或**所有者可见**的效果。对他人拥有的 Gallery 或 Item 的查许请求，只能通过相应模型的 `publicView` 实现，查询非公开对象时，将返回 `PRIVATE_MODEL_VISITED` 错误。

## 常见问题

### 1. 如何一次性获取某用户及其所有画廊和每个画廊的所有物品？

GET /api/HiwuUsers/{id}?filter={"include":{"galleries":["items"]}}&access_token=ACCESS_TOKEN

### 2. 如何一次性获取某一用户所有画廊的名字？

GET /api/HiwuUsers/{id}/galleries?filter={"fields":{"name":"true"}}&access_token=ACCESS_TOKEN

返回样例
```json
[
  { "name": "Gallery 1" },
  { "name": "Gallery 2" },
  { "name": "Gallery 3" }
]
```
