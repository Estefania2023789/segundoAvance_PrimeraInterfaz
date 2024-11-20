// import logo from './logo.svg';
import './App.css';
import React from "react";
import logo from './flama.png';
import icono from './iconoIngresar.png';

function App() {
  return (
    <div className='App'>
        {/* Header */}
        <header className="header">
          <div className="contenedor-logo">
            <img src={logo} alt="Logo" className="logo" />
            <h1>APP_NAME</h1>
          </div>
          
          <div className="contenedor-informativo">
            <nav>
              <a href="#home">Home</a>
              <a href="#about">Sobre Nosotros</a>
              <a href="#contact">Contáctenos</a>
              <a href="#messages">Mensajes</a>
            </nav>
            <img src={icono} alt="icono" className="profile-icon"/>
          </div>
          
        </header>

        <div className="contenedor-shop">
          <h2> Shop</h2>
          <p> Home {'>'} Shop {'|'} Gas Duragas</p>
        </div>



        {/* Main Content */}
        <div className="contenido-principal">
          {/* Product Section */}
          <div className="producto-detalle">

            <div className="imagenes">
              <div className="miniaturas">
                <img src="https://agas.ec/25-large_default/cilindros-15kg-duragas.jpg" alt="Miniatura 1" />
                <img src="https://agas.ec/25-large_default/cilindros-15kg-duragas.jpg" alt="Miniatura 2" />
                <img src="https://agas.ec/25-large_default/cilindros-15kg-duragas.jpg" alt="Miniatura 3" />
                <img src="https://agas.ec/25-large_default/cilindros-15kg-duragas.jpg" alt="Miniatura 4" />
              </div>
              
              <div className="imagen-producto">
                <img src="https://agas.ec/25-large_default/cilindros-15kg-duragas.jpg" alt="Gas duragas" />
              </div>
            </div>
            
            <div className="info-producto">
              <h3>Gas Duragas</h3>
              <p className="precio">$3.50</p>
              <p className="rating">⭐⭐⭐⭐⭐ | 5 Reseñas de Clientes</p>
              <p className="descripcion">Ideal para tu hogar, este gas comprimido de alta calidad es perfecto para cocinar, calentar agua y calefacción. Viene en cilindros de fácil manejo, garantizando comodidad y seguridad en su uso. A un precio accesible de $3.50, es la opción perfecta para mantener tu hogar siempre listo y funcionando con eficiencia. ¡Obtén el tuyo y disfruta de la comodidad del gas en casa!</p>
              <div className="acciones">
                <input type="number" defaultValue="1" min="1" className="cantidad" />
                <button className="btn">Agregar a Carrito</button>
                <button className="btn">+ Comparar</button>
              </div>
            </div>

          </div>

          
          <div className="informacion-producto">
            <h2>Información del Producto</h2>
            <p>
              ¡La energía que tu hogar necesita al mejor precio! Nuestro gas doméstico de alta calidad está diseñado para brindarte un rendimiento eficiente y seguro en todas tus actividades diarias, como cocinar, calentar agua o incluso calefacción. Con un precio accesible de $3.50, cada cilindro es fácil de transportar y almacenar, garantizando siempre un suministro confiable. Además, su tecnología de compresión asegura que aproveches al máximo cada litro de gas, dándote más por tu dinero. Este gas está disponible en presentaciones prácticas y seguras, perfectas para cualquier hogar. Ideal para familias, cocinas pequeñas o como respaldo para situaciones de emergencia. ¡No esperes más y adquiere el gas que tu hogar necesita para funcionar sin interrupciones!
            </p>
          </div>
        </div>


      </div>
  );
}

export default App;
