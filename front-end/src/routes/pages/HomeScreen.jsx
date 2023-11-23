import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import "../../../../front-end/src/index.css"

export const HomeScreen = () => {

  // El UserContext nos provee de la info de usuario
  const { usuario } = useContext(UserContext)

  const backgroundImageStyle = {
    backgroundImage: `url('https://c.wallhere.com/photos/b5/4d/1920x1200_px_landscape-700153.jpg!d')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
  };

  const h1Style = {
    fontFamily: "Blanka-Regular, sans-serif",
    fontSize: "5xl",
    fontWeight: "bold",
    tracking: "tight",
    wordSpacing: "0px",
    letterSpacing: "3px"
  };

  return (
    <>
    <div  style={backgroundImageStyle}>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" >
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          {/* <div className="relative rounded-full px-3 py-1 text-sm bg-white shadow-inner  leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Entra a nuestra Tienda Online{' '}
            <a href="#" className="font-semibold text-lime-700" >
              <span  className="absolute inset-0" aria-hidden="true" />
              aqui <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </div>
        <div className="text-center">
          <h1 style={h1Style} className="text-5xl font-bold tracking-tight text-lime-900 sm:text-7xl">
            Retrato Pampa            </h1>
          <p className="mt-8 text-lg leading-9 text-white">
          Capturando la esencia de la pampa en cada imagen, donde la naturaleza y la historia se encuentran en un retrato único.         </p>
          {/* <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-lime-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
Registrame            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Ingresar <span aria-hidden="true">→</span>
            </a>
          </div> */}
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
      </div>
      </div>
    </>
  )
}
