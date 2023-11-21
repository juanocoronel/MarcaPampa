import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const HomeScreen = () =>  {

  // El UserContext nos provee de la info de usuario
  const {usuario} = useContext(UserContext)

    return (
      <>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" >
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
             Entra a nuestra Tienda{' '}
              <a href="#" className="font-semibold text-green-700">
                <span className="absolute inset-0" aria-hidden="true" />
                Marca Pampa <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
Marca Pampa            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Donde el viento de la Pampa susurra historias, plasmamos momentos, y conectamos el alma gaucha con la esencia digital.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          </div>
      </>
    )
  }
  