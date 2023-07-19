import { useEffect, useState } from "react";
import getCity from "../helpers/getCity";
const useGetCity = (city) => {

    const [data, setData] = useState([]);

    const informationCity = async () => {
        const dataInformation = await getCity(city)
        setData(dataInformation)
    }

    useEffect(() => {
        informationCity()
    }, [city])

    return {
        data
    }
}

export default useGetCity