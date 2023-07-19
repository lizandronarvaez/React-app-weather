import useGetCity from "../hooks/useGetCity";
import CardItemCIty from "./CardItemCIty";
import Spinner from "./Spinner/Spinner";
import PropTypes from 'prop-types';

const City = ({ cityValue }) => {
    const { data } = useGetCity(cityValue);

    return (
        <div className="card-weather">
            {
                data.length === 0 || data.length === undefined && data.name === "Zurgena" ?
                    <Spinner />
                    : <CardItemCIty city={data} />
            }
        </div>
    )
}

City.propTypes = {
    cityValue: PropTypes.string.isRequired
}
export default City