import './main.scss'
import PizzaRestaurant from '../../assets/images/rest.jpg'
const Pizza = () => {
    return (
        <>
            <div className="pizza container">
                <div className="title">
                    <h1>ABOUT US</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <button>
                        READ MORE
                    </button>
                </div>
                <div className="image">
                    <img src={PizzaRestaurant} alt="" />
                </div>

            </div>
        </>
    )
}
export default Pizza