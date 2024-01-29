import React from 'react';
import './ImageGallery.css';

function ImageGallery() {

    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:w-8/12">
                <div className="card hover:cardHover">
                    <a class="button" href="#popup1">
                        <img className="imgCard" src="/images/weather/clear-day.svg" alt="Sun" />
                    </a>
                </div>
                <div className="card hover:cardHover">
                    <img className="imgCard" src="/images/weather/clear-night.svg" alt="Partial moon" />
                </div>
                <div className="card hover:cardHover">
                    <img className="imgCard" src="/images/weather/cloudy.svg" alt="Cloud" />
                </div>
                <div className="card hover:cardHover">
                    <img className="imgCard" src="/images/weather/fog.svg" alt="Fog" />
                </div>
                <div className="card hover:cardHover">
                    <img className="imgCard" src="/images/weather/hail.svg" alt="Hail" />
                </div>
                <div className="card hover:cardHover">
                    <img className="imgCard" src="/images/weather/partly-cloudy-day.svg" alt="Partial cloudy day" />
                </div>
                <div className="card hover:cardHover">
                    <img className="imgCard" src="/images/weather/partly-cloudy-night.svg" alt="Partial cloudy night" />
                </div>
                <div className="card hover:cardHover">
                    <img className="imgCard" src="/images/weather/rain-snow-showers-day.svg" alt="Rain and snow day" />
                </div>
                <div className="card hover:cardHover">
                    <img className="imgCard" src="/images/weather/rain-snow-showers-night.svg" alt="Rain and snow night" />
                </div>
            </div>
            <div id="popup1" class="overlay">
                <div class="popup">
                    <h2>Here i am</h2>
                    <a class="close" href="#">&times;</a>
                    <div class="content">
                        Thank to pop me out of that button, but now i'm done so you can close this window.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery;