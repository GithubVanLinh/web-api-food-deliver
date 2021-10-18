# Foodely

## Introduce

Food server document

## API

### Get All Foods

- Method: `GET`
- Path: `/foods`
- Param:
  - **page**:
    - usage: number of page that you want to get
    - type: **Number**
    - example: page=2
  - **categories**:
    - usage: get foods has categories
    - type: **String**
    - example: page="chicken"
  - **name**:
    - usage: get foods include name
    - type: **String**
    - example: page="ga"
  - **type**:
    - usage: get foods by type
    - type: **String**
    - example: page="kho"
  - **area**:
    - usage: get foods in area
    - type: **String**
    - example: page="Lang DH"
- Response:

  ```json
  {
    "foods": [
      {
        "_id": "616d0b3ac2af9dc80602bce0",
        "name": "Banh mi cha ca",
        "types": [
          {
            "_id": "616d0b3ac2af9dc80602bcc4",
            "name": "Cay",
            "__v": 0
          }
        ],
        "categories": [
          {
            "_id": "616d0b3ac2af9dc80602bcae",
            "name": "Heo",
            "__v": 0
          },
          {
            "_id": "616d0b3ac2af9dc80602bcb0",
            "name": "Com",
            "__v": 0
          }
        ],
        "price": 30000,
        "street": {
          "_id": "616d0b3ac2af9dc80602bcc2",
          "name": "nam ky khoi nghia",
          "__v": 0
        },
        "district": null,
        "address": "nga ba",
        "area": {
          "_id": "616d0b3ac2af9dc80602bca8",
          "name": "ktx khu b",
          "__v": 0
        },
        "rating": 4.4,
        "open": "02:30",
        "close": "23:00",
        "__v": 0
      },
      {
        "_id": "616d0b3ac2af9dc80602bce2",
        "name": "che",
        "types": [
          {
            "_id": "616d0b3ac2af9dc80602bcc4",
            "name": "Cay",
            "__v": 0
          }
        ],
        "categories": [
          {
            "_id": "616d0b3ac2af9dc80602bcae",
            "name": "Heo",
            "__v": 0
          },
          {
            "_id": "616d0b3ac2af9dc80602bcb0",
            "name": "Com",
            "__v": 0
          }
        ],
        "price": 30000,
        "street": {
          "_id": "616d0b3ac2af9dc80602bcc2",
          "name": "nam ky khoi nghia",
          "__v": 0
        },
        "district": null,
        "address": "nga ba",
        "area": {
          "_id": "616d0b3ac2af9dc80602bca8",
          "name": "ktx khu b",
          "__v": 0
        },
        "rating": 4.4,
        "open": "02:30",
        "close": "23:00",
        "__v": 0
      },
      {
        "_id": "616d0b3ac2af9dc80602bce4",
        "name": "banh mi trung",
        "types": [
          {
            "_id": "616d0b3ac2af9dc80602bcc4",
            "name": "Cay",
            "__v": 0
          }
        ],
        "categories": [
          {
            "_id": "616d0b3ac2af9dc80602bcae",
            "name": "Heo",
            "__v": 0
          },
          {
            "_id": "616d0b3ac2af9dc80602bcb0",
            "name": "Com",
            "__v": 0
          }
        ],
        "price": 30000,
        "street": {
          "_id": "616d0b3ac2af9dc80602bcc2",
          "name": "nam ky khoi nghia",
          "__v": 0
        },
        "district": null,
        "address": "nga ba",
        "area": {
          "_id": "616d0b3ac2af9dc80602bca8",
          "name": "ktx khu b",
          "__v": 0
        },
        "rating": 4.4,
        "open": "02:30",
        "close": "23:00",
        "__v": 0
      },
      {
        "_id": "616d0b3ac2af9dc80602bce6",
        "name": "Pho",
        "types": [
          {
            "_id": "616d0b3ac2af9dc80602bcc4",
            "name": "Cay",
            "__v": 0
          }
        ],
        "categories": [
          {
            "_id": "616d0b3ac2af9dc80602bcae",
            "name": "Heo",
            "__v": 0
          },
          {
            "_id": "616d0b3ac2af9dc80602bcb0",
            "name": "Com",
            "__v": 0
          }
        ],
        "price": 30000,
        "street": {
          "_id": "616d0b3ac2af9dc80602bcc2",
          "name": "nam ky khoi nghia",
          "__v": 0
        },
        "district": null,
        "address": "nga ba",
        "area": {
          "_id": "616d0b3ac2af9dc80602bca8",
          "name": "ktx khu b",
          "__v": 0
        },
        "rating": 4.4,
        "open": "02:30",
        "close": "23:00",
        "__v": 0
      }
    ],
    "totalFoods": 14,
    "limit": 10,
    "totalPages": 2,
    "page": 2,
    "pagingCounter": 11,
    "hasPrevPage": true,
    "hasNextPage": false,
    "prevPage": 1,
    "nextPage": null
  }
  ```
