# Hiwu API 服务器

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
