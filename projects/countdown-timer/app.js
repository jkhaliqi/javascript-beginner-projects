const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');

  //tempDate will get the current date
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  let futureDate = new Date(tempYear + 1, tempMonth,tempDay,9,30,0);
  
  const year = futureDate.getFullYear();
  const month = months[futureDate.getMonth()];
  const date = futureDate.getDate();
  const day = weekdays[futureDate.getDay()];
  const hour = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hour}:${minutes}am`;


  const futureTime = futureDate.getTime();

  // 1 second = 1000ms
  // 1 minute = 60 seconds = 6000ms
  // 1 hour = 60 minutes 
  // 1 day = 24 hours
  // 1 day = 24*60*60*1000 = 86400000ms
  // 1 hour = 60*60*1000 = 3600000ms
  // 1 minute = 60000ms

  function getRemaingTime(){
    const currentTime = new Date().getTime();
    const t = futureTime - currentTime;
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;
    const oneSec = 1000;
    
    let remainingDays = Math.floor(t/oneDay);
    //get hours by finding the remainder t/oneDay.
    //This will give you the total amount of days that go into t
    //and then once we mod it, we will get the remainder which is what
    // we want because this can be converted to hours
    //Similar logic can be continued for finding remaining minutes and seconds
    let remainingHours = Math.floor((t%oneDay)/oneHour);
    let remainingMin = Math.floor((t%oneHour)/oneMin);
    let remainingSeconds = Math.floor((t%oneMin)/oneSec);

    const values = [remainingDays, remainingHours, remainingMin, remainingSeconds];

    function format(value){
      if(value < 10){
        return `0${value}`;
      }
      else{
        return value;
      }
    }

    items.forEach(function(item, index){
      item.innerHTML = format(values[index]);
    })

    if(t < 0){
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired"> Sorry, this giveaway has expired </h4>`
    }
    
  }

  let countdown = setInterval(getRemaingTime, 1000);

  getRemaingTime();


