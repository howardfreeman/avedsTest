import './header.css'
import logo from '../../img/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header_logo" />
            <a href="" className='header_contacts'>Контакты</a>
            <button className="header_btn">Войти</button>
            <div className="divider"></div>
        </header>
    )
}

export default Header;