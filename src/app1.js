const express=require('express')
const path =require('path')
const hbs=require('hbs')
const geocode=require('./geocode')
const forecast=require('./forecast')

const app=express()

//Telling the express about the templating engine of HBS


const config=path.join(__dirname,"/html_dir")
app.use(express.static(config))

const view_path=path.join(__dirname,'/templates/views')
const partials=path.join(__dirname,'/templates/partials')


app.set('view engine','hbs')
app.set('views',view_path)
hbs.registerPartials(partials)

app.get('/',(req,res)=>{
    res.render('root')
})

app.get('/index',(req,res)=>{
    res.render('index', {
        title:'Forecast Information',
        name:'Anshuman'
    })
})


app.get('/about',(req,res)=>{
    res.render('about', {
        title:'About us !',
        name:'Anshuman',
        
    })
})


app.get('/help',(req, res)=>{
    res.render('help',{
        title:'Share Your Experience !',
        name:'Anshuman',
    })
})

app.get('/help/*',(req,res)=>{
   res.render('404',{
       title:'No help article found ! '
   })
})



app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'No query statemend found'
        })
    }

        geocode(req.query.address,(error,response)=>{
            if(error){
            return res.send({error})
         }

        forecast(response.longitude,response.latitude,(error,forecast_report)=>{
            if(error){
                res.send({error})
            }
            
            res.send({Report:forecast_report})
            
        })
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404 page not found '
    })
})


app.listen(3000,()=>{
    console.log('server is running ..')
})