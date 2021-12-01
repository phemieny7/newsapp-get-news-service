
# News App
An express js api based app using Next js as 
-frontend which also include some cloud infracstructure


## API Reference

#### Get all news

```http
  GET /new/
```
#### Get single news

```http
  GET /api/news/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to single news |


#### Get news by category
```http
  GET /api/news/${category_id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `category_id`      | `string` | **Required**. Id of item to single news |


#### Get news by country
```http
  GET /api/news/${country_id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `country_id`      | `string` | **Required**. Id of item to single news |



