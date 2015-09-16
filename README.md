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

## 权限系统

通过对 Gallery 和 Item 两类对象的 `public` 属性设置 true/false，可以达到只有所有人可见/只有所有者可见的效果。

查询他人拥有的 Gallery 或 Item 时，请直接 `GET` `/models/{id}`（即调用 `findById` 方法）。对象不存在或无权限查看均会返回“对象不存在”的错误。

目前对于普通用户，可以获取其他用户的基本信息，但暂时不支持查询其拥有的所有 Gallery。

> 目前这一功能主要开放给分享和公共主页使用。

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
