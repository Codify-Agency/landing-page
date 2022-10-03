import "../../styles/components/sections/Development.scss"

import iconWeb from "../../assets/icon-web-design.png"
import iconShopping from "../../assets/icon-shopping.png"
import iconRealState from "../../assets/icon-real-state.png"

export default function DevelopmentSection() {
  return (
    <section className="development pt-5 pb-5">
      <div className="container">
        <div className="development__head">
          <h2 className="display-6 text-center mb-3">
            Desarrollamos a la medida
          </h2>

          <p className="m-0 text-center">
            No siempre se requieren de diseños y/o procesos complejos para llevar nuestras ideas a internet, es por ello que planificamos un desarrollo a la medida de su idea y/o prespuesto y asi crear una solución increíble para su empresa y clientes.
          </p>
        </div>

        <ul className="development__featured row justify-content-evenly mt-5 mb-5 pt-4">
          <li className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 text-center text-md-start">
            <picture className="d-block mb-4">
              <img src={iconWeb} alt="web design" height={100} />
            </picture>

            <h5>Webs corporativas</h5>

            <p>Sitio web administrable que le permite actualizar sin necesidad de saber programar, cualquier texto o imagen de su sitio web.</p>
          </li>

          <li className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 text-center text-md-start">
            <picture className="d-block mb-4">
              <img src={iconShopping} alt="web design" height={100} />
            </picture>

            <h5>Tiendas en línea</h5>
            
            <p>TIenda en línea en servidor propio construida con Woocommerce&reg; o si prefiere en servicios como Shopify&reg;.</p>
          </li>

          <li className="col-12 col-md-6 col-lg-3 text-center text-md-start">
            <picture className="d-block mb-4">
              <img src={iconRealState} alt="web real state" height={100} />
            </picture>

            <h5>Webs de inmobiliarias</h5>
            
            <p>Gracias a la ventajas de usar WordPress&reg;, podremos construir su web de venta de propiedades en ~15 días.</p>
          </li>
        </ul>

        <p className="text-center m-0">Y más, hablemos hoy e iniciemos juntos a construir esa gran idea.</p>
      </div>
    </section>
  )
}
