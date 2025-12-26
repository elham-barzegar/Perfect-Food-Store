import apiClient from "@/api/config/ApiClient";
import {ApiResponseType} from "@/types";
import {CategoryType} from "@/types/api/Category";

export async function getFeaturedCategory ():Promise<ApiResponseType<CategoryType>> {
    return  await apiClient.get('/categories',{
        params: {
            populate: 'thumbnail',
          filters: {
              is_featured: {
                  $eq: "true"
              }
          }
        }
    })
}