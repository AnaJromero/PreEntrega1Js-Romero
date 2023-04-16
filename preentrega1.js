let Usuario = prompt('¡Bienvenido! Ingresa tu nombre para continuar');
while (Usuario == '') {
    alert('Nombre invalido');
    Usuario = prompt('Ingresa tu nombre');
}

alert(Usuario + ', gracias por elegirnos!');

let Total = 0;
function sumarTotal(precio) {
    Total += precio;
}
let mensaje = prompt(Usuario + ' Buscas Productos para tu Mascotas?');
while (mensaje.toLowerCase() === 'si') {
    let producto = prompt('1-Collares\n2-Canil\n3-Bozal\n4-Ropita\n5-Pecheras\n6-Juguetes\n7-Croquetas\n8-Premios');
    switch (producto) {
        case '1':
            alert('Agregaste Collares... 10.990$');
            sumarTotal(10990);
            break;
        case '2':
            alert('Agregaste Canil... 15.990$');
            sumarTotal(15990);
            break;
        case '3':
            alert('Agregaste Bozal... 12.990$');
            sumarTotal(12990);
            break;
        case '4':
            alert('Agregaste Ropita... 7.990$');
            sumarTotal(7990);
            break;
        case '5':
            alert('Agregaste Pechera... 7.990$');
            sumarTotal(7990);
            break;        
        case '6':
            alert('Agregaste Juguete... 8.990$');
            sumarTotal(8990);
            break;
        case '7':
            alert('Agregaste Croquetas... 8.990$');
            sumarTotal(8990);
            break;
        case '8':
            alert('Agregaste Premios... 8.990$');
            sumarTotal(8990);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }    
    mensaje = prompt('¿Deseas comprar algún otro producto?');
    if (mensaje.toLowerCase() === 'no') {
        break;
    }
}

alert(`Total en el carrito: $${Total}`);
alert('Muchas gracias ' + Usuario + ' por tu compra.');