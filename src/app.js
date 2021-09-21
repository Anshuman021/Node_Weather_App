// //WORKING WITH HTTP REQUESTS
const request=require('postman-request')
const geocode=require('./geocode')
const forecast=require('./forecast')




//for getting the forecast report
const weather_report=(longitude,latitude)=>{

    forecast(longitude,latitude,(error,response)=>{
        if(error){
            console.log(error)
        }else{
            console.log("The report is given below : ")
            console.log(response)
        }
    })

}




const location=process.argv[2]

if(!location){
    console.log("Please provide the location.")
}else{

    //For getting the geocode
    geocode(location,(error,response)=>{
         if(error){
        console.log(error)
      }
         else{
            console.log("The geocode for the given location is given below : \n")
            console.log(response)
            weather_report(response.longitude,response.latitude)
    }
 })
}

