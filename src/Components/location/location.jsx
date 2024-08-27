import React, { Component } from "react";
import axios from "axios";

class GetLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lon: null,
            error: null,
            weatherData: {},
            imageAddress:'' // Initialized as an empty object
        };
    }

    fetchData = async (lat, long) => {
        try {
            let { data } = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3fbfee0add6f67c23b4e7b25fd590df6`
            );
            //console.log("API Response:", data); // Log the full API response
            this.setState(
                {
                    weatherData: data, // Update the state with API response
                },
                () => {
                    // Call updateBackgroundImage after the state is updated
                    this.imageURL(this.state.weatherData.main.temp - 273.15);
                }
            );
        } catch (error) {
            console.error("Error fetching weather data:", error);
            this.setState({
                error: "Failed to fetch weather data.",
            });
        }
    };

    
    imageURL=(temp)=>{
        let image=''
        if(Math.floor(temp)>=24){
            image="https://img.freepik.com/free-vector/beach-background-with-smiling-sun_23-2147635239.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714089600&semt=ais"
        }

        else if(Math.floor(temp)>10 && Math.floor(temp)<24){
            return ()=>{this.myURL("https://www.shutterstock.com/image-photo/striking-duality-single-tree-illustrates-600nw-2431290473.jpg")}
        }

        else{
            return ()=>{ this.myURL("https://www.shutterstock.com/image-photo/ice-podium-mockup-display-presentation-600nw-1952562100.jpg")}
        }
        this.setState({imageAddress: image})
    }

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

                <div style={{height:'100vh',width:'100', textAlign:'center', backgroundImage:`url(${this.state.imageAddress})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                {Object.keys(weatherData).length > 0 && weatherData.main ? (
                    <div>
                      
                        <h3>Weather Information:</h3>
                        <p>{`Area: ${(weatherData.name)}`}</p>
                        <p>{`Temperature: ${(weatherData.main.temp - 273.15).toFixed(2)} °C`}</p>
                        <p>{`Weather: ${weatherData.weather[0].description}`}</p>
                        <p>{`Humidity: ${weatherData.main.humidity}%`}</p>
                    </div>
                ) : (
                    <h3>No weather data available yet.</h3>
                )}
                </div>
                
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
