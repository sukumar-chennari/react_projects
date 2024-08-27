import React, { Component } from "react";
import axios from "axios";

class GetLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lon: null,
            error: null,
            weatherData: {}, // Initialized as an empty object
        };
    }

    fetchData = async (lat, long) => {
        try {
            let { data } = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3fbfee0add6f67c23b4e7b25fd590df6`
            );
            console.log("API Response:", data); // Log the full API response
            this.setState(
                {
                    weatherData: data, // Update the state with API response
                },
                () => {
                    console.log("Updated State:", this.state.weatherData); // Log updated state
                }
            );
        } catch (error) {
            console.error("Error fetching weather data:", error);
            this.setState({
                error: "Failed to fetch weather data.",
            });
        }
    };

    componentDidMount() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        error: null,
                    });
                },
                (error) => {
                    this.setState({
                        error: error.message,
                    });
                }
            );
        } else {
            this.setState({
                error: "Your browser does not support Geolocation",
            });
        }
    }

    render() {
        const { lat, lon, error, weatherData } = this.state;

        if (error) {
            return <h1>{error}</h1>;
        }

        return lat && lon ? (
            <>
                <button onClick={() => this.fetchData(lat, lon)}>Get Weather Details</button>
                <h1>{`Lat: ${lat}`}</h1>
                <h2>{`Long: ${lon}`}</h2>

                {Object.keys(weatherData).length > 0 && weatherData.main ? (
                    <div>
                        <h3>Weather Information:</h3>
                        <p>{`Temperature: ${(weatherData.main.temp - 273.15).toFixed(2)} °C`}</p>
                        <p>{`Weather: ${weatherData.weather[0].description}`}</p>
                        <p>{`Humidity: ${weatherData.main.humidity}%`}</p>
                    </div>
                ) : (
                    <h3>No weather data available yet.</h3>
                )}
            </>
        ) : (
            <h1>Getting the location data...</h1>
        );
    }
}

export default GetLocation;


// import React, { Component } from "react";
// import axios from "axios";
// class GetLocation extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             lat: null,
//             lon: null,
//             error: null,
//             weatherData:[]
//         };
//     }

//     fetchData= async (lat,long)=>{
//         let {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3fbfee0add6f67c23b4e7b25fd590df6`)
//         //console.log(data)
        
//         this.setState({
//             weatherData:[data]
//         })

//         console.log(this.state.weatherData)
//     }

//     componentDidMount() {
//         if ("geolocation" in navigator) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     this.setState({
//                         lat: position.coords.latitude,
//                         lon: position.coords.longitude,
//                         error: null,
//                     });
//                 },
//                 (error) => {
//                     this.setState({
//                         error: error.message,
//                     });
//                 }
//             );
//         } else {
//             this.setState({
//                 error: "Your browser does not support Geolocation",
//             });
//         }
//     }

//     render() {
//         const { lat, lon, error,weatherData } = this.state;

//         if (error) {
//             return <h1>{error}</h1>;
//         }

//         return lat && lon ? (
//             <>
//                 <button onClick={()=>{this.fetchData(lat,lon)}}>Get details</button>
                
//                 <h1>{`Lat: ${lat}`}</h1>
//                 <h2>{`Long: ${lon}`}</h2>
//             </>
//         ) : (
//             <h1>Getting the location data...</h1>
//         );
//     }
// }

// export default GetLocation;
