const request=require('postman-request')

const forecast=(long,lat,callback)=>{
    const url1='http://api.weatherstack.com/current?access_key=48c483e9bd56fb885c9d06d22ad957f4&query='+long+','+lat+'&units=f'
   
    request({url:url1,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect , Please check your connection',undefined)
        }else if(response.body.success===false){
            callback('The link is running with missing query ! , unable to fetch the report.',undefined)
        }else{
            const obj={
               region : response.body.location.region,
               Temperature : response.body.current.temperature + " F*",
               Rain_chance : response.body.current.feelslike + " %",
               Time : response.body.location.localtime,
               Country : response.body.location.country,
               Weather_type : response.body.current.weather_descriptions[0]
            }
            callback(undefined,obj)
        }
    })
   }



module.exports=forecast