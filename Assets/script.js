// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.




  //////////////////////////////////////////////////////////
  // TODO Add dayjs().diff to check wether its past, present or future
  var displayTimeElement = $('#currentDay');
  // Function to display current date and time in header.
  function displayTime() {
    displayTimeElement.text(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'));
  }
  setInterval(displayTime, 1000);
  //////////////////////////////////////////////////////////


 
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


  // Save Variables
  var saveButton = $('.saveBtn');

  // Function that saves new appointment input to local storage
  function saveTask() {

    // display: block to show saved message.

    // use setTimeout() to delay hiding the saved message.


    var hourKey = $(this).parent().attr('id'); // finds the parent #id of the <button>

    var hourValue = $(this).siblings('textarea').val(); // finds the sibling, in this case the value or 'input' of the <textarea>

    localStorage.setItem(hourKey, JSON.stringify(hourValue));

   



  };
// Function to read from localStorage
  function populateSchedule () {
    for (let i = 9; i < 18; i++) { // For loop, loops through localStorage and renders each respective time-block to the allocated row.

      $(`#hour-${i} textarea`).val(JSON.parse(localStorage.getItem(`hour-${i}`)));

    }


  }
populateSchedule();
  
  
saveButton.on('click', saveTask) // Eventlistener on save button, calls the function saveTask().
});
  
  
  
  



