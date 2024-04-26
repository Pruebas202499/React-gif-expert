import { useState, useEffect } from 'react'
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    //const [counter, setCounter] = useState(10);
    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])

    return (
        <>
            <h1>{category}</h1>
            {/* {
                isLoading ? (<h2 >Cargando...</h2>) : null
            } */}
            {
                isLoading && (<h2 >Cargando...</h2>)
            }
            {/* <LoadinMessage isLoading={isLoading} /> */}
            <div className="card-grid">
                {images.map(((img) =>
                    <GifItem
                        key={img.id}
                        {...img}
                    // tile={img.tile}
                    // url={img.url}
                    />
                ))
                }
            </div>
            {/* <h5>{counter}</h5>
            <button onClick={getGifs}> +1 </button> */}
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}


