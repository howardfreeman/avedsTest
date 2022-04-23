import './main-screen.css'

const MainScreen = () => {
    return (
        <section className="main_screen">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="title">Место для получения медицинской помощи</h1>
                    <div className="btn_group">
                        <button type="button" className="enter_btn">Войти</button>
                        <button type="button" className="contacts_btn">Контакты</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainScreen;