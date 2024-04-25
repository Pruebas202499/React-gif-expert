export const getProducts = async (category) => {

    const url = `https://localhost:7260/api/Productos`;
    const resp = await fetch(url);
    const data = await resp.json();

    const productos = data.map(p => ({
        id: p.productoId,
        title: p.nombre,
        url: p.descripcion

    })
    );
    console.log(productos)
    return productos;
}