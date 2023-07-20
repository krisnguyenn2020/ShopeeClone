import { ProductList, ProductListConfig } from "src/types/product.type";
import http from "src/utils/http";
import { SuccessResponse } from '../../.history/src/types/utils.type_20230711013735';
const URL = 'products'
const productApi = {
  getProduct(params: ProductListConfig) {
    return http.get<SuccessResponse<ProductList>> / (URL, {
      params
    })
  },
  getProductDetail(id: string) {
    return http.get < Product > </Product>(`${URL}/${ id } `)
  }
}