import { useState } from "react"
import { AddCategory, GifGrid } from "./components"
// import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['jewelery'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
        // setCategories(['Valorant', ...categories])
        // setCategories(cat => [...cat, 'Valorant'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* <AddCategory setCategories={setCategories} /> */}
            {/* <button onClick={() => {
                onAddCategory('test')
            }}>Agregar</button> */}

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map((category) =>
                    <GifGrid key={category} category={category} />
                )
            }

        </>
    )
}

