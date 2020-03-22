export interface CategoriesResponse {
    response : Category[],
    success : boolean
}

export interface Category{
    _id? : string,
    category_name : string,
    __v?:number
}
