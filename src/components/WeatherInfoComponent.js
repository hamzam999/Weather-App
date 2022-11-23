import {WeatherInfoIcons} from "./WeatherInfoIcons";
const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <div className="infocontainer">
            <img src={WeatherInfoIcons[name]} alt="weatherinfo" className="infoicon" />
            <span className="infolabel">
                {value}
                <span>{name}</span>
            </span>
            </div>
    );
};
export default WeatherInfoComponent;