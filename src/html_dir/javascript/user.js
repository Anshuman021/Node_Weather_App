const weatherForm = document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
const messageThree=document.querySelector('#message-3')
const messageFour=document.querySelector('#message-4')
const messageFive=document.querySelector('#message-5')
const messageSix=document.querySelector('#message-6')
const messageSeven=document.querySelector('#message-7')






weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    messageOne.textContent = 'Wait for a second ... '
    messageTwo.textContent = ' '
    messageThree.textContent = ' '
    messageFour.textContent = ' '
    messageFive.textContent = ' '
    messageSix.textContent = ' '
    messageSeven.textContent = ' '



    const location =search.value

    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            return messageOne.textContent=data.error
        }
        messageOne.textContent=`Fore cast report of ${location} is given below : `
        messageTwo.textContent=`Data and time : ${data.Report.Time}`
        messageThree.textContent=`Weather-type : ${data.Report.Weather_type}`
        messageFour.textContent=`Region : ${data.Report.region}`
        messageFive.textContent=`The chances of rain : ${data.Report.Rain_chance}`
        messageSix.textContent=`The Temperature  ${data.Report.Temperature}`
        messageSeven.textContent=`Country name :  ${data.Report.Country}`


        })

        
    })
})
