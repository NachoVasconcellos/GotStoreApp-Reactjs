//Funcion para generar orden de compra

const generateOrderObject = (nombre, email, telefono, cart, total) => {
    return {
        buyer: {
            name: nombre,
            email: email,
            phone: telefono,
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;