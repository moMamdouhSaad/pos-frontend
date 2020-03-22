export interface ItemsResponse {
    response : Item[],
    success : boolean
}

export interface Item{
    _id? : string,
    product_name : string,
    product_price:number,
    category_id:string,
    __v?:number
}
