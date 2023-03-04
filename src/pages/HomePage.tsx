import { Especifications } from "../components/Especifications"
import { Footer } from "../components/Footer";
import { Header } from "../components/Header"
import { Informacion } from "../components/Informacion"
import { ModeloProducto } from "../components/ModeloProducto"
import { Suscripcion } from '../components/Suscripcion';

export const HomePage = () => {
  return (
    <section >
      <Header/>
      <Especifications/>
      <Informacion />
      <ModeloProducto/>
      <Suscripcion/>
      <Footer/>
    </section>
  )
}
