import { SuccessResponse } from "src/types/utils.type"
const URL = 'categories'
const categoryApi = {
  getCategories() {
    return http.get<SuccessResponse<Category[]>>('categories')
  }
}