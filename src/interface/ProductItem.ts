export interface ProductItem {
    id: string,
    title : string,
    rating: number,
    image : string,
    priceFrom : string,
    priceTo?:string,
    stage: string
} 
export interface UserState{
    isAuthenticated: boolean,
    currentUser: string     
} 

// export interface ProductItem {
//     basket: ProductType[];
// }