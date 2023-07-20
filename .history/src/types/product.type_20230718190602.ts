export interface Product {
  message: string
  data: {
    products: {
      _id: string
      images: string[]
      price: number
      rating: number
      price_before_discount: number
      quantity: number
      sold: number
      view: number
      name: string
      category: {
        _id: string
        name: string
      }
      image: string
      createdAt: string
      updatedAt: string
    }
  }
}

export interface ProductList {
  products: Product[],
  paginate: {
    page: number
    limit: number
    page_size: number
  }
}

export interface ProductListConfig {
  page?: number
  name?: string
  limit?: number
  sort_by?: 'createdAt' | 'price' | 'sold' | 'view'
  order?: 'asc' | 'desc'
  exclude?: string
  rating_filter?: number
  price_max?: number
  price_min?: number
}
