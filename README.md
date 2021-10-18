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
        "_id": "616d0b3ac2af9dc80602bccc",
        "name": "Com Uc Ga",
        "types": [
          {
            "_id": "616d0b3ac2af9dc80602bcc4",
            "name": "Cay",
            "__v": 0
          },
          {
            "_id": "616d0b3ac2af9dc80602bcc8",
            "name": "Kho",
            "__v": 0
          }
        ],
        "categories": [
          {
            "_id": "616d0b3ac2af9dc80602bcac",
            "name": "Ga",
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
          "_id": "616d0b3ac2af9dc80602bca4",
          "name": "lang dai hoc",
          "__v": 0
        },
        "rating": 4.4,
        "open": "02:30",
        "close": "23:00",
        "__v": 0
      },
      {
        "_id": "616d0b3ac2af9dc80602bcce",
        "name": "Com Tam",
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
        "_id": "616d0b3ac2af9dc80602bcd0",
        "name": "Com Suon",
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
        "_id": "616d0b3ac2af9dc80602bcd2",
        "name": "Bun bo",
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
        "_id": "616d0b3ac2af9dc80602bcd4",
        "name": "Bun Thit Nuong",
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
        "_id": "616d0b3ac2af9dc80602bcd6",
        "name": "Tra chanh",
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
        "_id": "616d0b3ac2af9dc80602bcd8",
        "name": "Nuoc Mia",
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
        "_id": "616d0b3ac2af9dc80602bcda",
        "name": "Kem",
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
        "_id": "616d0b3ac2af9dc80602bcdc",
        "name": "Ca vien chien",
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
        "_id": "616d0b3ac2af9dc80602bcde",
        "name": "Banh mi thit",
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
    "page": 1,
    "pagingCounter": 1,
    "hasPrevPage": false,
    "hasNextPage": true,
    "prevPage": null,
    "nextPage": 2
  }
  ```
