import './lastmovements.css'

const Producto = ({ imagen, titulo, descripcion }) => {
    return (
      <div className='cont-movements'>
        <img src={imagen} alt={titulo} className='img-last-movements'/>
        <div>
            <h2 className='h2-title-product'>{titulo}</h2>
            <p className='p-product-d'>{descripcion}</p>
        </div>
      </div>
    );
  };
  
  export default Producto;