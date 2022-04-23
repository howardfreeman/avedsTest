import cardiogram from '../../img/med-services-icons/cardiogram.png'
import stethoscope from '../../img/med-services-icons/stethoscope.png'
import chart from '../../img/med-services-icons/chart.png'
import './med-services.css'

const MedServices = () => {
    return (
        <section className="services">
            <div className="row">
                <div className="col-md-4">
                    <div className="services_card">
                        <div className="round">
                            <img src={cardiogram} alt="cardiogram-icon" />
                        </div>
                        <h2 className="title">Онлайн-прием</h2>
                        <div className="divider"></div>
                        <div className="descr">Рыба текст</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="services_card">
                        <div className="round">
                            <img src={stethoscope} alt="stethoscope-icon" />
                        </div>
                        <h2 className="title">Экстренный Случай</h2>
                        <div className="divider"></div>
                        <div className="descr">Рыба текст</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="services_card">
                        <div className="round">
                            <img src={chart} alt="chart-icon" />
                        </div>
                        <h2 className="title">Лечение рака</h2>
                        <div className="divider"></div>
                        <div className="descr">Рыба текст</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MedServices;