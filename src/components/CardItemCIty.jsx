import useGetDay from "../hooks/useGetDay";
import PropTypes from 'prop-types';

const CardItemCIty = ({ city }) => {
  const { name, temperature, descriptionCity } = city;
  // Temperatura
  const { now, min, max } = temperature;
  // Description
  const { description, icon } = descriptionCity;
  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

  // Date
  const { date } = useGetDay();
  return (
    <div className="card-item-city">
      <p className="name_city">{name}</p>
      <p className="status_day">{date}</p>
      <p className="temp_now">Actual {now}º</p>
      <img className="icon" src={iconUrl} alt="icon" />
      <p className="status_weather">{description}</p>
      <div className="temperatures">
        <p className="temp_min">Temp.Min {min}º</p>
        <p className="temp_max">Temp.Max {max}º</p>
      </div>

    </div>
  )
}

CardItemCIty.propTypes = {
  city: PropTypes.object.isRequired
}
export default CardItemCIty