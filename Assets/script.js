// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //////////////////////////////////////////////////////////
  var displayTimeElement = $('#currentDay');
  // Function to display current date and time in header.
  function displayTime() {
    displayTimeElement.text(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'));
  }
  setInterval(displayTime, 1000);
  ///////////////////////////////////////////////////////////////////////////////////////////////



  // Display Past, Present or Future function().
  function hourStatus() {
  var currentTime = dayjs().hour();
  $('.time-block').each(function(){
    var rowHour = parseInt($(this).attr('id').split('-')[1]);
    // console.log(rowHour);
    if (rowHour < currentTime) { // if the hour of the row is less than now, display 'past'
      $(this).addClass('past');
    } else if (rowHour === currentTime) { // if the hour of the row is the same as the current time display 'present'
      $(this).addClass('present');
      $(this).removeClass('past');
    } else { // if the hour of the row is neither, display 'future'
      $(this).addClass('future');
      $(this).removeClass('past'); // removes class 'past'
      $(this).removeClass('present'); // removes class 'present'
    }
    
  })
  
  // console.log(currentTime); 
  }
  hourStatus();
  
  ///////////////////////////////////////////////////////////////////////////////////////////////

  // Save Variables
  var saveButton = $('.saveBtn'); // saves the button to the variable, so I can use it later in my saveTask() function.

  // Function that saves new appointment input to local storage
  function saveTask() {

    // display: block to show saved message.


    // use setTimeout() to delay hiding the saved message.


    var hourKey = $(this).parent().attr('id'); // finds the parent #id of the <button>

    var hourValue = $(this).siblings('textarea').val(); // finds the sibling, in this case the value or 'input' of the <textarea>

    localStorage.setItem(hourKey, JSON.stringify(hourValue));
  };

   
///////////////////////////////////////////////////////////////////////////////////////////////


// Function to read from localStorage
  function populateSchedule () {
    for (let i = 9; i < 18; i++) { // For loop, loops through localStorage and renders each respective time-block to the allocated row.

      $(`#hour-${i} textarea`).val(JSON.parse(localStorage.getItem(`hour-${i}`)));

    }


  }
populateSchedule(); // calls the populateSchedule() function
  
  
saveButton.on('click', saveTask) // Eventlistener on save button, calls the function saveTask().
});
  
  
  
  



 




