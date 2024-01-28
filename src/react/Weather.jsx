import React, { useState, useEffect } from 'react';

function Weather() {
    const [weather, setWeather] = useState();
    const [location, setLocation] = useState('');
    const monthNamesFr = ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];

    function handleGetWeather() {
        if (location) {
            fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current&key=MDNZA3J5A8N6DPY5GSP93YYF7&contentType=json&lang=fr`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setWeather(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }

    function formatDate(dateString) {
        let day = '';
        let splittedDate = dateString.split("-");
        switch (splittedDate[1]) {
            case '01':
              day = "janv.";
              break;
            case '02':
              day = "fév.";
              break;
            case '03':
               day = "mars";
              break;
            case '04':
              day = "avril";
              break;
            case '05':
              day = "mai";
              break;
            case '06':
              day = "juin";
              break;
            case '07':
                day = "juil.";
                break;
            case '08':
                day = "août";
                break;
            case '09':
                day = "sept.";
                break;
            case '10':
                day = "oct.";
                break;
            case '11':
                day = "nov.";
                break;
            case '12':
              day = "déc.";
        }
        let dayDate; 
        if (splittedDate[2][0] === '0') {
            dayDate = splittedDate[2][1];
        } else {
            dayDate = splittedDate[2];
        };
        return dayDate + ' ' + day;
    }

    return (
        <>
            <div className="flex justify-center gap-4">
                <input placeholder="Quel ville?" className="border rounded-lg px-2" type="text" onChange={(e) => setLocation(e.target.value)} />
                <button className="border-2 border-yellow-400 bg-yellow-300 px-3 py-2 rounded-lg" onClick={handleGetWeather}>Get weather</button>
            </div>
            <div className="flex justify-center">
                <div>
                    {typeof weather !== 'undefined' ? 
                        <div className="border-2 border-yellow-400 bg-yellow-300 px-6 py-6 rounded-lg mt-5">
                            <div className="text-center border-yellow-400 border-b-2 pb-6 text-3xl">
                                En ce moment: {weather.currentConditions.conditions}, {Math.round(weather.currentConditions.temp)}&deg;C
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="py-6 text-3xl">
                                    Prévision
                                </div>
                                <div className="flex gap-6 w-[40rem]">
                                    <div className="w-1/5 text-center space-y-4">
                                        <span>Aujourd'hui</span>
                                        <img class="h-20" src={`/images/weather/${weather.days[0].icon}.svg`}/>
                                        <div>Min: {Math.round(weather.days[0].tempmin)}&deg;C</div>
                                        <div>Max: {Math.round(weather.days[0].tempmax)}&deg;C</div>
                                        <div>Humidité: {Math.round(weather.days[0].humidity)}%</div>
                                    </div>
                                    <div className="w-1/5 text-center space-y-4">
                                        <span>Demain</span>
                                        <img class="h-20" src={`/images/weather/${weather.days['1'].icon}.svg`}/>
                                        <div>Min: {Math.round(weather.days[1].tempmin)}&deg;C</div>
                                        <div>Max: {Math.round(weather.days[1].tempmax)}&deg;C</div>
                                        <div>Humidité: {Math.round(weather.days[1].humidity)}%</div>
                                    </div>
                                    <div className="w-1/5 text-center space-y-4">
                                        <span>{formatDate(weather.days['2'].datetime)}</span>
                                        <img class="h-20" src={`/images/weather/${weather.days['2'].icon}.svg`}/>
                                        <div>Min: {Math.round(weather.days[2].tempmin)}&deg;C</div>
                                        <div>Max: {Math.round(weather.days[2].tempmax)}&deg;C</div>
                                        <div>Humidité: {Math.round(weather.days[2].humidity)}%</div>
                                    </div>
                                    <div className="w-1/5 text-center space-y-4">
                                        <span>{formatDate(weather.days['3'].datetime)}</span>
                                        <img class="h-20" src={`/images/weather/${weather.days['3'].icon}.svg`}/>
                                        <div>Min: {Math.round(weather.days[3].tempmin)}&deg;C</div>
                                        <div>Max: {Math.round(weather.days[3].tempmax)}&deg;C</div>
                                        <div>Humidité: {Math.round(weather.days[3].humidity)}%</div>
                                    </div>
                                    <div className="w-1/5 text-center space-y-4">
                                        <span>{formatDate(weather.days['4'].datetime)}</span>
                                        <img class="h-20" src={`/images/weather/${weather.days['4'].icon}.svg`}/>
                                        <div>Min: {Math.round(weather.days[4].tempmin)}&deg;C</div>
                                        <div>Max: {Math.round(weather.days[4].tempmax)}&deg;C</div>
                                        <div>Humidité: {Math.round(weather.days[4].humidity)}%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    : 
                        ''
                    }
                </div>
            </div>
        </>
    )
}

export default Weather;