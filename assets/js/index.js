
function mostrar(element){
    // Mostrar la pantalla de carga
    document.getElementById('loading').style.display = 'flex';

    // Simular un retardo para la carga (por ejemplo, 1 segundo)
    setTimeout(function() {
        // Ocultar todos los artículos
        document.getElementById('home_div').style.display = 'none';
        document.getElementById('products_div').style.display = 'none';
        document.getElementById('contact_div').style.display = 'none';
        
        // Mostrar el artículo correspondiente
        switch (element.id) {
            case 'home':
                document.getElementById('home_div').style.display = 'block';
                break;
            case 'product':
                document.getElementById('products_div').style.display = 'block';
                break;
            case 'contact':
                document.getElementById('contact_div').style.display = 'block';
                break;
        }

        // Ocultar la pantalla de carga
        document.getElementById('loading').style.display = 'none';
    }, 1000); // 1000 milisegundos = 1 segundo


}




