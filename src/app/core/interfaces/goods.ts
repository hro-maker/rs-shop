export interface Igood{
  id: string,
  name: string,
  imageUrls: string[],
  rating: number,
  price: number,
  availableAmount:number,
  description: string ,
   isInCart: boolean,
  isFavorite: boolean,
  category: string,
  subCategory: string
}
