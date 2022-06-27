import React from 'react';
import {
    UilArrowUp, 
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService';

function TemperatureAndDetails(props) {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{props.weather.details}</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>

            <img src={iconUrlFromCode(props.weather.icon)} alt="" className='w-20' />
            <p className='text-5xl'>{`${props.weather.temp.toFixed()}°`}</p>

            <div className='flex flex-col space-y-2'>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1'/>
                    Real Feel: 
                    <span className='font-medium ml-1'>{`${props.weather.feels_like.toFixed()}°`}</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1'/>
                    Humidity: 
                    <span className='font-medium ml-1'>{props.weather.humidity}</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1'/>
                    Wind: 
                    <span className='font-medium ml-1'>{`${props.weather.speed} km/h`}</span>
                </div>

            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun />
            <p className='font-light'>Rise: <span className='font-medium ml-1'>{formatToLocalTime(props.weather.sunrise, props.weather.timezone, "hh:mm a")}</span></p>
            <p className='font-light'>|</p>

            <UilSunset />
            <p className='font-light'>Set: <span className='font-medium ml-1'>{formatToLocalTime(props.weather.sunset, props.weather.timezone, "hh:mm a")}</span></p>
            <p className='font-light'>|</p>

            <UilArrowUp />
            <p className='font-light'>Max: <span className='font-medium ml-1'>{`${props.weather.temp_max.toFixed()}°`}</span></p>
            <p className='font-light'>|</p>

            <UilArrowDown />
            <p className='font-light'>Min: <span className='font-medium ml-1'>{`${props.weather.temp_min.toFixed()}°`}</span></p>
        </div>

    </div>
  );
}

export default TemperatureAndDetails;