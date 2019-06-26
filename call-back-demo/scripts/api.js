/*
This function is to get the PSI reading from the URL
and returns it via a callback function
*/
function getPSIReadings(processDataFunction)
{
     axios.get("https://api.data.gov.sg/v1/environment/psi")
          .then(function(response){
             
             let readings = response.data.items[0].readings.pm25_twenty_four_hourly;
             processDataFunction(readings)
            
     })
}