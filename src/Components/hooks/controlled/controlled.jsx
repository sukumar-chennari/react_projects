// import { useState } from "react";
// import { singleValidator } from "./validators.js";

// export const ControlledForm = () => {
//     let initialData = {
//       username: '',
//       mobileNumber: '',
//       mobileModel: 'Galaxy j7',
//       issue: '',
//       state: '',
//       country: 'India'
//     };

//    // const countryStateData = {
// //   "United States": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
  
// //   "Canada": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"],
  
// //   "India": ["Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
  
// //   "Australia": ["Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"],
  
// //   "Germany": ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"],
  
// //   "Brazil": ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"],
  
// //   "United Kingdom": ["England", "Northern Ireland", "Scotland", "Wales"],
  
// //   "China": ["Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong", "Guangxi", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Inner Mongolia", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Ningxia", "Qinghai", "Shaanxi", "Shandong", "Shanghai", "Shanxi", "Sichuan", "Tianjin", "Tibet", "Xinjiang", "Yunnan", "Zhejiang"],
  
// //   "Mexico": ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico City", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"],
  
// //   "South Africa": ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"],
  
// //   "Japan": ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"],
  
// //   "France": ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"],

// //   "Italy": ["Abruzzo", "Aosta Valley", "Apulia", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardy", "Marche", "Molise", "Piedmont", "Sardinia", "Sicily", "Trentino-South Tyrol", "Tuscany", "Umbria", "Veneto"],
  
// //   "Russia": ["Adygea", "Altai Krai", "Altai Republic", "Amur Oblast", "Arkhangelsk Oblast", "Astrakhan Oblast", "Bashkortostan", "Belgorod Oblast", "Bryansk Oblast", "Buryatia", "Chechen Republic", "Chelyabinsk Oblast", "Chukotka Autonomous Okrug", "Chuvash Republic", "Dagestan", "Ingushetia", "Irkutsk Oblast", "Ivanovo Oblast", "Jewish Autonomous Oblast", "Kabardino-Balkaria", "Kaliningrad Oblast", "Kalmykia", "Kaluga Oblast", "Kamchatka Krai", "Karachay-Cherkessia", "Karelia", "Kemerovo Oblast", "Khabarovsk Krai", "Khakassia", "Khanty-Mansi Autonomous Okrug", "Kirov Oblast", "Komi Republic", "Kostroma Oblast", "Krasnodar Krai", "Krasnoyarsk Krai", "Kurgan Oblast", "Kursk Oblast", "Leningrad Oblast", "Lipetsk Oblast", "Magadan Oblast", "Mari El Republic", "Mordovia", "Moscow"]
// // }

//     const [flag, setFlag] = useState(false);
//     const [formData, setFormData] = useState(initialData);
//     const [formError, setFormError] = useState({
//       nameErr: '',
//       mobileErr: '',
//     });
//     const [stateOptions, setStateOptions] = useState(countryStateData['India']);

//     const onChangeHandler = (event) => {
//         const { name, value } = event.target;

//         if (name === "country") {
//             // Update the country and reset the state to the first option in the new state's list
//             const newStateOptions = countryStateData[value];
//             setStateOptions(newStateOptions);
//             setFormData({ 
//                 ...formData, 
//                 country: value, 
//                 state: newStateOptions[0]  // Set the state to the first one in the list
//             });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }

//         const errorObj = singleValidator(formData);
//         if (Object.keys(errorObj).length > 0) {
//             const { usernameErr, mobileNumberErr } = errorObj;
//             let obj = {
//                 nameErr: usernameErr,
//                 mobileErr: mobileNumberErr
//             };
//             setFormError(obj);
//         }
//     };

//     const submitHandler = (event) => {
//         event.preventDefault();
//         const { username, mobileNumber } = formData;
//         if (username.length === 0 || mobileNumber.length === 0)
//             alert('Please fill the form');

//         setFlag(true);
//     };

//     return (
//         <>
//             {!flag ? (
//                 <form onSubmit={submitHandler} style={{ width: '50%', padding: '20px', border: '2px solid gray' }}>
//                     <div className="form-group">
//                         <label htmlFor="username">Username</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="username"
//                             id="username"
//                             placeholder="name"
//                             value={formData.username}
//                             onChange={onChangeHandler}
//                         />
//                         {formError.nameErr && <span style={{ color: 'red' }}>{formError.nameErr}</span>}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="mobile">Mobile Number</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="mobileNumber"
//                             placeholder="Mobile number"
//                             name="mobileNumber"
//                             value={formData.mobileNumber}
//                             onChange={onChangeHandler}
//                         />
//                         {formError.mobileErr && <span style={{ color: 'red' }}>{formError.mobileErr}</span>}
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="exampleFormControlSelect1">Select Model</label>
//                         <select
//                             onChange={onChangeHandler}
//                             className="form-control"
//                             id="exampleFormControlSelect1"
//                             name="mobileModel"
//                             value={formData.mobileModel}>
//                             <option>Samsung galaxy j7</option>
//                             <option>Samsung j7 pro</option>
//                             <option>Samsung galaxy s24 ultra </option>
//                             <option>Samsung Duos</option>
//                         </select>
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="exampleFormControlSelect1">Select Country</label>
//                         <select
//                             onChange={onChangeHandler}
//                             className="form-control"
//                             name="country"
//                             value={formData.country}>
//                             {Object.keys(countryStateData).map((eachCountry, index) => (
//                                 <option key={index} value={eachCountry}>{eachCountry}</option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="exampleFormControlSelect1">Select State</label>
//                         <select
//                             onChange={onChangeHandler}
//                             className="form-control"
//                             name="state"
//                             value={formData.state}>
//                             {stateOptions.map((currentState, index) => (
//                                 <option key={index} value={currentState}>{currentState}</option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="exampleFormControlTextarea1">Your issue</label>
//                         <textarea
//                             className="form-control"
//                             id="exampleFormControlTextarea1"
//                             rows={3}
//                             name="issue"
//                             value={formData.issue}
//                             onChange={onChangeHandler}
//                         />
//                     </div>
//                     <button className="btn btn-primary">Submit</button>
//                 </form>
//             ) : (
//                 <div className="alert alert-success">
//                     Form submitted successfully!
//                 </div>
//             )}
//         </>
//     );
// };



import { useState } from "react";
import { singleValidator } from "./validators.js";

export const ControlledForm = () => {
    let intialData={
      username:'',
      mobileNumber:'',
      mobileModel:'Galaxy j7',
      issue:'',
      state:'',
      country:''
    }




const countryStateData = {
  "United States": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
  
  "Canada": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"],
  
  "India": ["Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
  
  "Australia": ["Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"],
  
  "Germany": ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"],
  
  "Brazil": ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"],
  
  "United Kingdom": ["England", "Northern Ireland", "Scotland", "Wales"],
  
  "China": ["Anhui", "Beijing", "Chongqing", "Fujian", "Gansu", "Guangdong", "Guangxi", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Inner Mongolia", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Ningxia", "Qinghai", "Shaanxi", "Shandong", "Shanghai", "Shanxi", "Sichuan", "Tianjin", "Tibet", "Xinjiang", "Yunnan", "Zhejiang"],
  
  "Mexico": ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico City", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"],
  
  "South Africa": ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"],
  
  "Japan": ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"],
  
  "France": ["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"],

  "Italy": ["Abruzzo", "Aosta Valley", "Apulia", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardy", "Marche", "Molise", "Piedmont", "Sardinia", "Sicily", "Trentino-South Tyrol", "Tuscany", "Umbria", "Veneto"],
  
  "Russia": ["Adygea", "Altai Krai", "Altai Republic", "Amur Oblast", "Arkhangelsk Oblast", "Astrakhan Oblast", "Bashkortostan", "Belgorod Oblast", "Bryansk Oblast", "Buryatia", "Chechen Republic", "Chelyabinsk Oblast", "Chukotka Autonomous Okrug", "Chuvash Republic", "Dagestan", "Ingushetia", "Irkutsk Oblast", "Ivanovo Oblast", "Jewish Autonomous Oblast", "Kabardino-Balkaria", "Kaliningrad Oblast", "Kalmykia", "Kaluga Oblast", "Kamchatka Krai", "Karachay-Cherkessia", "Karelia", "Kemerovo Oblast", "Khabarovsk Krai", "Khakassia", "Khanty-Mansi Autonomous Okrug", "Kirov Oblast", "Komi Republic", "Kostroma Oblast", "Krasnodar Krai", "Krasnoyarsk Krai", "Kurgan Oblast", "Kursk Oblast", "Leningrad Oblast", "Lipetsk Oblast", "Magadan Oblast", "Mari El Republic", "Mordovia", "Moscow"]
}


  const [flag,setFlag]=useState(false)
  const [formData,setFormData]=useState(intialData)
  const [formError,setFormError]=useState({
    nameErr:'',
    mobileErr:'',

  })
  const [country,SetCountry]=useState('India')
  const [state,setStates]=useState(countryStateData['India'])

  const onChangeHandler=(event)=>{
    const {name,value}=event.target
    
    setFormData({...formData,[name]:value})
    
    const errorObj=singleValidator(formData)
    if(Object.keys(errorObj).length>0){
      const {usernameErr,mobileNumberErr}=errorObj
      let obj={
        nameErr:usernameErr,
        mobileErr:mobileNumberErr
      }
      setFormError(obj)
    }

    if(name==="country" ){
      SetCountry(value)
      setStates(countryStateData[value])
      setFormData({
        ...formData,
        country: value,
        state: countryStateData[value][0], // Automatically set the state to the first option
      })
    }

   
      
    
    
    
    
  }

    const submitHandler=(event)=>{
      event.preventDefault()
      const {username,mobileNumber}=formData
      if(username.length ==0 || mobileNumber.length==0)
          alert('Please fill the form ') 

      setFlag(true)
        // event.preventDefault()
        // if(nameError || numberError){
        //     alert('Enter the valid details')
        // }else{
        //     //hit the server
        //     if(username.length==0 || number.length==0 )
        //       alert("Enter the form details")
        //     else{
        //       setFlag(true)
        //       let obj={
        //         "username":username,
        //         "Number":number,
        //         "Model":model,
        //         'Issue':issue
        //       }
             
        //       postData(obj)
        //     }
           
        // }
    }   


 
    return (
    <>
     { !flag? (
         <form onSubmit={submitHandler} style={{width:'50%',padding:'20px', border:'2px solid gray'}}>
         <div className="form-group">
           <label htmlFor="username">Username</label>
           <input
             type="text"
             className="form-control"
             name="username"
             id="username"
             placeholder="name"
             value={formData.username}
             onChange={onChangeHandler}
           />
            {formError.nameErr &&  <span style={{color:'red'}}>{formError.nameErr}</span>}
         </div>
         <div className="form-group">
           <label htmlFor="mobile">Mobile Number</label>
           <input
             type="text"
             className="form-control"
             id="username"
             placeholder="Mobile number"
             name="mobileNumber"
             value={formData.mobileNumber}
             onChange={onChangeHandler}
           />
           {formError.mobileErr&&  <span style={{color:'red'}}>{formError.mobileErr}</span>}
         </div>
 
         <div className="form-group">
           <label htmlFor="exampleFormControlSelect1">Select Model</label>
           <select onChange={onChangeHandler} className="form-control" id="exampleFormControlSelect1" name="mobileModel" value={formData.mobileModel}>
             <option>Samsung galaxy j7</option>
             <option>Samsung j7 pro</option>
             <option>Samsung galaxy s24 ultra </option>
             <option>Samsung Duos</option>
             
           </select>
         </div>

         <div className="form-group">
           <label htmlFor="exampleFormControlSelect1">Select Country</label>
           <select  onChange={onChangeHandler} className="form-control" name="country" value={formData.country}>
             {
              
               Object.keys(countryStateData).map(eachCountry=>{
                
                return <option value={eachCountry}>{eachCountry}</option>
               })
             }
             
            
             
           </select>
         </div>

         <div className="form-group">
           <label htmlFor="exampleFormControlSelect1">Select State</label>
           <select onChange={onChangeHandler} className="form-control"  name="state" value={formData.state}>
             {
              state.map(currentState=>{
                return( <option value={currentState}>{currentState}</option>)
              })
             }
           </select>
         </div>
        
         <div className="form-group">
           <label htmlFor="exampleFormControlTextarea1">Your issue</label>
           <textarea
             className="form-control"
             id="exampleFormControlTextarea1"
             rows={3}
             name="issue"
             value={formData.issue}
             onChange={onChangeHandler}
           />
         </div>
         <button  className="btn btn-primary">Submit</button>
       </form>
     ): (
        <div className="alert alert-success">
            Form submitted successfully!
        </div>
    )}

      {/* <CustomTable data={allUserData}  sendDataToParent={handleDataFromChild}/> */}
    </>
  );
};