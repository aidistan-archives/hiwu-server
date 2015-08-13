# Hiwu API 服务器

## 地址

- 生产环境 : http://www.hiwu.ren:3002/ (即将切换至 3000)
- 测试环境 : http://www.hiwu.ren:3030/

## 登陆

目前支持下列登陆方法：

- `simpleLogin` : 仅需用户名即可登陆，若该用户不存在则创建该用户，邮箱域为 `example.com`；

## FAQ

##### 1. 如何一次性获取某用户及其所有画廊和每个画廊的所有物品？

```
/api/HiwuUsers/{id}?filter={"include":{"galleries":["items"]}}&access_token=ACCESS_TOKEN
```

##### 2. 如何一次性获取某画廊及其所有物品？

```
/api/Galleries/{id}?filter={"include":["items"]}&access_token=ACCESS_TOKEN
```

##### 3. 如何一次性获取某一用户所有画廊的名字？

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
