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

- `login` : 标准登陆方式，使用注册用户的认证信息 (credentials) 登陆系统，如 `{ "username": "USERNAME", "password": "PASSWORD"}` 或 `{ "email": "USERNAME@DOMAIN", "password": "PASSWORD"}`；
- `simpleLogin` : 仅需用户名即可登陆，若该用户不存在则创建该用户，邮箱域为 `example.com`；

## 常见问题

### 1. 如何一次性获取某用户及其所有画廊和每个画廊的所有物品？

```
/api/HiwuUsers/{id}?filter={"include":{"galleries":["items"]}}&access_token=ACCESS_TOKEN
```

### 2. 如何一次性获取某画廊及其所有物品？

```
/api/Galleries/{id}?filter={"include":["items"]}&access_token=ACCESS_TOKEN
```

### 3. 如何一次性获取某一用户所有画廊的名字？

```
/api/Galleries/{id}?filter={"fields":{"name":"true"}}&access_token=ACCESS_TOKEN
```

```json
[
  { "name": "Gallery 1" },
  { "name": "Gallery 2" },
  { "name": "Gallery 3" }
]
```
