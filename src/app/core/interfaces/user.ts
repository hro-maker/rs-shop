export interface Iuser{
  "firstName": string,
  "lastName": string,
  "cart": string[],
  "favorites":string [],
  "orders": [
    {
      "items": [
        {
          "id": string,
          "amount": number
        }
      ],
      "details": {
        "name": string,
        "address": string,
        "phone": string,
        "timeToDeliver": string,
        "comment": string
      },
      "id": string
    }
  ]
}
