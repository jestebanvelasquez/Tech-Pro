import headerImg from '../assets/header.webp'


export const Header = () => {
    return (
        <header className="header">
            <div className='container  container-header'>
                <div className="image-header">
                    <img src={headerImg} alt="audifonos" />
                </div>
                <div className="text-header">
                    <p className='tagline-producto'>Sonido Profesional</p>
                    <h1 className='nombre-producto degradado-amarillo'> TechPRO </h1>
                    <p className='descripcion-producto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit perspiciatis repellendus? Repellat vitae beatae labore possimus. Voluptate nesciunt aliquam asperiores reiciendis ratione atque consequatur dignissimos eum, doloremque reprehenderit adipisci.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, numquam? Expedita, reiciendis. Aut assumenda est, repellendus, rerum totam facilis eveniet adipisci id eos sunt officiis culpa vel blanditiis nihil? Eaque.</p>
                    <p className="precio-producto">Desde  <span className='degradado-amarillo'>$299</span></p>
                </div>
            </div>
        </header>
    )
}
