import React, {createContext, useState} from "react";
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

export const BasketContextProvider = (props: Props) => {
    const[basketItems, setBasketItems] = useState<Array<ProductItem>>([]);


    const addItemHandler = (product: EntityType<ProductType>) => {

        const newProduct: ProductItem = {
            productId: product.id,
            title: product.attributes.title,
            img: product.attributes.thumbnail?.data?.attributes.url,
            price: product.attributes.price,
            quantity: 1
        }

        setBasketItems(prevState => [
            ...prevState,
            newProduct
        ])
    }


    const deleteItemHandler = (productId: number) => {
        const newBasket = basketItems.filter((item) => item.productId !== productId);
        setBasketItems(newBasket);
    }


    const incrementItemHandler = (productId: number) => {
        const newBasket = basketItems.map((item)=>{
            if (item.productId === productId)
            return { ...item, quantity: item.quantity + 1 }
            return item;
        })
            setBasketItems(newBasket);
    }


    const decrementItemHandler = (productId: number) => {
        const currentProduct = basketItems.find(item => item.productId === productId);
        if (currentProduct && currentProduct.quantity === 1) {
        //     remove
            deleteItemHandler(productId);
        } else {
            const newBasket = basketItems.map((item)=>{
                if (item.productId === productId)
                    return { ...item, quantity: item.quantity - 1 }
                return item;
            })
            setBasketItems(newBasket);
        }


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