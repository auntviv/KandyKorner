import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([]) 
    // returns an array, that gives you the initial value

    useEffect(
        () => {
            fetch("http://localhost:8089/products?_expand=productType")
                .then(res => res.json()) 
                 // when this comes back we need to convert jsonstring into actual JaveScript 
                .then((productsArray) => {
                    setProducts(Array)
                    // modify state by invoking setProducts bc you cannot directly modify state
                })

        },
        []
    )
    // sole purpose of this UseEffect fucntion is to run code when certain state changes, 
    // when any state changes its going to invoke this function, similar to event listener 


    return (
        <>
            {
                locations.map(
                    // using the map array mathod to convert the object to html it takes a function
                    (productObject) => {
                        // productObject paramater to capture each individual customer object as it iterates
                        return <p key={`product--${productObject.id}`}>{productObject.name}</p>
                        //interpolation 
                    }
                
                )
        
            }
        </>
        // empty angle brackets that return one JSX element
    )
}