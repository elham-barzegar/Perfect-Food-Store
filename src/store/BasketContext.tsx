import React, {createContext, useContext, useReducer, useState} from "react";
import {ProductType} from "@/types/api/product";
import {EntityType} from "@/types";

interface Props {

    children: React.ReactNode;
}

interface ProductItem {
    productId: number;
    title: string;
    price: number;
    img?: string;
    quantity: number;
}

export const BasketContext = createContext<{
    basketItems: Array<ProductItem>,
    addItem: (product: EntityType<ProductType>) => void,
    deleteItem: (productId: number) => void,
    incrementItem: (productId: number) => void,
    decrementItem: (productId: number) => void,
    getItem: (productId: number) => undefined | ProductItem
}>({
    basketItems: [],
    addItem: (product: EntityType<ProductType>) => {},
    deleteItem: (productId: number) => {},
    incrementItem: (productId: number) => {},
    decrementItem: (productId: number) => {},
    getItem: (productId: number) => undefined

})


type Action = {type:"ADD_ITEM", product: EntityType<ProductType>}
            | {type:"DELETE_ITEM", productId: number}
            | {type:"INCREMENT_ITEM", productId: number}
            | {type:"DECREMENT_ITEM", productId: number}


const basketReducer = (currentState: ProductItem[], action: Action) => {

    switch (action.type) {
        case "ADD_ITEM":
            return [
                ...currentState,
                {
                    productId: action.product.id,
                    title: action.product.attributes.title,
                    img: action.product.attributes.thumbnail?.data?.attributes.url,
                    price: action.product.attributes.price,
                    quantity: 1
                }
            ]


        case "INCREMENT_ITEM":
            return  currentState.map((item)=> item.productId === action.productId ? { ...item, quantity: item.quantity + 1 } : item)



        case "DECREMENT_ITEM":

            const currentProduct = currentState.find(item => item.productId === action.productId);
            if (currentProduct && currentProduct.quantity === 1) {
                //     remove
                return  currentState.filter((item) => item.productId !== action.productId);
            }
               return  currentState.map((item)=>{
                    if (item.productId === action.productId)
                        return { ...item, quantity: item.quantity - 1 }
                    return item;
                })



        case "DELETE_ITEM":
            return   currentState.filter((item) => item.productId !== action.productId);

            default:
                return currentState;

    }


}



export const BasketContextProvider = (props: Props) => {
    // const[basketItems, setBasketItems] = useState<Array<ProductItem>>([]);
    const [basketItems, dispatch] = useReducer(basketReducer, []);


    const addItemHandler = (product: EntityType<ProductType>) => {

       dispatch({type:"ADD_ITEM", product: product});
    }


    const deleteItemHandler = (productId: number) => {
        dispatch({type:"DELETE_ITEM", productId: productId} )
    }


    const incrementItemHandler = (productId: number) => {

          dispatch({type:"INCREMENT_ITEM", productId: productId});
    }



    const decrementItemHandler = (productId: number) => {

            dispatch({type:"DECREMENT_ITEM", productId: productId });
    }


const getItemHandler = (productId: number) : ProductItem | undefined => {
        return  basketItems.find(item => item.productId === productId);
}


    return (
        <BasketContext.Provider value={{ basketItems: basketItems, getItem: getItemHandler , addItem: addItemHandler, deleteItem: deleteItemHandler, incrementItem: incrementItemHandler, decrementItem: decrementItemHandler}}>
            {props.children}
        </BasketContext.Provider>
    )
}