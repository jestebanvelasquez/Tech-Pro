import sonido from'../assets/icono-sonido.svg';
import bateria from '../assets/icono-bateria.svg'
import garantia from '../assets/icono-garantia.svg'


export const Especifications = () => {
  return (
        <section className='container'>
            <div className='iconos'>

            <div className='icono'>
                <img src={sonido} alt="settings" />
                <h3 className='text-center'>GRAN SONIDO</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore doloribus quam impedit illum officia, nostrum ratione similique rerum, ab sunt soluta suscipit inventore, modi quasi facilis. Voluptates, ratione sint!</p>
            </div>
            <div className='icono'>
                <img src={garantia} alt="garantia" />
                <h3 className='text-center'>GARANTIA DE POR VIDA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore doloribus quam impedit illum officia, nostrum ratione similique rerum, ab sunt soluta suscipit inventore, modi quasi facilis. Voluptates, ratione sint!</p>
            </div>
            <div className='icono'>
                <img src={bateria} alt="bateria" />
                <h3 className='text-center'>+20 HORAS DE BATERIA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore doloribus quam impedit illum officia, nostrum ratione similique rerum, ab sunt soluta suscipit inventore, modi quasi facilis. Voluptates, ratione sint!</p>
            </div>
            </div>
        </section>
    )
}


