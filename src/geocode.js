const request=require('postman-request')


//CODE of GEOCODE FUNCTION 
const geocode=(location,callback)=>{

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ location +'.json?access_token=pk.eyJ1IjoiYW5zaHVtYW4wMjEiLCJhIjoiY2twMTV6bHpiMGt5ejJwdGU0cHQ3bWN0cSJ9.EDouUyu64OugEN3-AbNr2g&limit=1'
    
    request({url:url,json:true},(error, response)=>{
        if(error){
            callback('Unable to connect ! check your connection.',undefined)
        }else if(response.body.features.length===0){
            callback('Please enter the location carefully !',undefined)
        }else{
            const obj={
                Place:response.body.features[0].place_name,
                latitude:response.body.features[0].center[0],
                longitude:response.body.features[0].center[1]
            }
            callback(undefined,obj)
        }
    })
}


module.exports=geocode
