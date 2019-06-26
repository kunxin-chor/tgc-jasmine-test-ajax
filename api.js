function getPM25Readings(callback)
{
      axios.get("https://api.data.gov.sg/v1/environment/psi")
          .then(function(response){
              let readings = response.data.items[0].readings.pm25_twenty_four_hourly;
               // Once the data has been loaded, DO SOMETHING
              callback(readings)
             
      })
}