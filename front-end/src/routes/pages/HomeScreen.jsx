import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const HomeScreen = () =>  {

  // El UserContext nos provee de la info de usuario
  const {usuario} = useContext(UserContext)

    return (
      <>
        <h1>Soy home </h1>
        <h4>Nombre: {usuario.nombre}</h4>        
        <h4>tecnologia: {usuario.tecnologia}</h4>
        <h4>email: {usuario.email}</h4>
        <h4>redes: {usuario.redes}</h4> 
        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Badge
      </span>
      </>
    )
  }
  