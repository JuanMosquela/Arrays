const productos = [];

let res = parseInt(prompt('Que desea hacer? 1) Para agregar productos -- 2) Para salir'));


if(res !== 1 && res !== 2) console.error('Debes ingresar 1 o 2');

else{
    while(res === 1){     
        if(res === 1){
            let producto = prompt('Ingrese el producto que quiere agregar a su carrito');

            productos.push(producto) ;                                
        }         

        if(res === 2){
            break
        }        
        res = parseInt(prompt('Quiere seguir agregando productos a su lista? 1.(Si) -- 2.(No)'));
        
        if(res !== 1 && res !== 2) alert('Debes ingresar 1 o 2, el programa se detendra');    
    }

    console.log(productos);        
}

