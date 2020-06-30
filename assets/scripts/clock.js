window.onload = function(){

   var actualizarHora = function(){
       var curr_date = new Date();
       var hours = curr_date.getHours(),
           minutes = curr_date.getMinutes(),
           seconds = curr_date.getSeconds(),
           day = curr_date.getDay(),
           date = curr_date.getDate(),
           month = curr_date.getMonth(),
           year = curr_date.getFullYear()
           session;

   var Hours_content = document.getElementById('hours'),
       session_content = document.getElementById('session'),
       Minutes_content = document.getElementById('minutes'),
       Seconds_content = document.getElementById('seconds'),
       Day_content = document.getElementById('day'),
       Date_content = document.getElementById('date'),
       Month_content = document.getElementById('month'),
       Year_content = document.getElementById('year');

   var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   Day_content.textContent = days[day];

   Date_content.textContent = date;

   var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   Month_content.textContent = months[month];

   Year_content.textContent = year;


   if (hours >= 12) {
       hours = hours - 12;
       session = 'PM';
   } else {
       session ='AM';
   }

   if (hours == 0) {
       hours = 12;
   }

   if (hours < 10) { hours = '0' + hours };

   Hours_content.textContent = hours;
   session_content.textContent = session;

   if (minutes < 10) { minutes = '0' + minutes };

   Minutes_content.textContent = minutes;

   if (seconds < 10) { seconds = '0' + seconds };

   Seconds_content.textContent = seconds;

    colors = ['#dc3545','#f1f1f1','yellow','aqua','#ff44f5', '#a2ff77']
    document.querySelector('body').style.color = colors[seconds%6]
   };

   actualizarHora();
   var intervalo = setInterval(actualizarHora, 1000);

}
