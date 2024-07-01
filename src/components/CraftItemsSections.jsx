import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CraftItemsSections = ({ craft }) => {
    console.log(craft)
    return (
        <div className='px-5 md:px-0 ' data-aos="zoom-in"  data-aos-duration="1500">

            <div className="card  bg-base-100 shadow-xl ">
                <figure><img src={craft.image} className='h-[350px] w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{craft.item_name}</h2>
                    <p>{craft.short_description}</p>
                    <p><span className='text-2xl font-bold'>Price : </span> <span className='text-red-500'>{craft.price} USD</span></p>
                    <div className="card-actions mt-4">
                    <Link to={`/crafts/${craft._id}`} className="btn btn-primary w-full hover:bg-secondary">Details</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};
CraftItemsSections.propTypes = {
    craft: PropTypes.any.isRequired,

}

export default CraftItemsSections;