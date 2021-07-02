export interface IProduct {
  id: number,
  title: string,
  image: string,
  category: string,
  price: string,
}

export interface IProductsPreview {
  title: string,
  link: string,
  buttonText: string,
  products: IProduct[]
}
