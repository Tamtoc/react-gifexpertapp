import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getGifs( category )
            .then( gifs => {

                // setTimeout( () => {

                    setState({
                        data: gifs,
                        loading: false
                    })

                // }, 500 );

            })

    }, [category]);

    return state;

}
