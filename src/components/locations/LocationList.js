import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setLocations] = useState([]) 
    // returns an array, that gives you the initial value

    useEffect(
        () => {
            fetch("http://localhost:8089/locations")
                .then(res => res.json()) 
                 // when this comes back we need to convert jsonstring into actual JaveScript 
                .then((locationArray) => {
                    setLocations(locationArray)
                    // modify state by invoking setLocations bc you cannot directly modify state
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
                    (locationObject) => {
                        // customerObject paramater to capture each individual customer object as it iterates
                        return <p key={`location--${locationObject.id}`}>{locationObject.name}</p>
                        //interpolation 
                    }
                
                )
        
            }
        </>
        // empty angle brackets that return one JSX element
    )
}