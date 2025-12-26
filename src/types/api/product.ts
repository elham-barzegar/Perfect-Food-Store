import {EntityType, PopulateType} from "@/types";
import {CategoryType} from "@/types/api/Category";
import {ImageType} from "@/types/api/Image";


export interface ProductType {
    title: string
    description: any
    quantity: number
    price: number
    sell_price?: number
    discount_expire_date: any
    rate: number
    weight: number
    is_popular: boolean
    is_top_selling: boolean
    is_trending: boolean
    SKU?: string
    label?: string
    unit: string
    total?: any
    sold?: any
    is_popular_fruit?: boolean
    is_best_seller?: boolean
    thumbnail?: {
        data?: EntityType<ImageType>
    }
    gallery?: PopulateType<CategoryType>
    categories?: PopulateType<CategoryType>
}

{/*
export interface Thumbnail{
    data: Data
}
export interface Data{
    id: number
    attributes: Attributes2
}
export interface Attributes2{
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats?: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string
    provider: string
    provider_metadata: any
}
export interface Formats{
    thumbnail: Thumbnail2
}
export interface Thumbnail2{
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    url: string
}
export interface Gallery{
    data: any
}
export interface Attributes3 {
    title: string
    description: any
    slug: string
    is_featured: boolean
    icon_name: any
    color: any
    product_count: any
    link: any


}
*/}