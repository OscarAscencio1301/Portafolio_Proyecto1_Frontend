import { Link } from "react-router-dom"


const Header = () => {
  return (
  <div className="header__container">
    <h2 className="header__title">Sistema de Notas</h2>
    <div className="">
        <ol className="header__menu">
            <li><Link to={'/'}>Crear Nota</Link></li>
            <li><Link to={'/search'}>Buscar Nota</Link></li>
        </ol>
    </div>
  </div>
  )
}

export default Header
