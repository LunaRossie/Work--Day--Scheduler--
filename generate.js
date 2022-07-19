
let hour8 = $('#8');
let hour9 = $('#9');
let hour10 = $('#10');
let hour11 = $('#11');
let hour12 = $('#12');
let hour1 = $('#1');
let hour2 = $('#2');
let hour3 = $('#3');
let time = moment ();

function setPlanner() {
    $("currentDay").text(moment().format("dddd, MMMM, Do YYYY"));
    $(."time-block").each(function() {
        let id = $(this).attr("id");
        let schedule = localStorage.getItem(id);
        if (schedule !== null) {
            $(this).children('.schedule').val(schedule);
        }
    
});

}

// // function updateColor() {
//     let hour = new Date().getHours();
//     for (let i = 8 ; i <=15; i++ ) {
//     }


}

setPlanner();
var saveButton = $(".saveBtn");
console.log (saveButton);

saveButton.on('click', function(){
    let time =$(this).parent().attr('id');
    let schedule = $(this).siblings('.schedule').val();
    localStorage.setItem(time, schedule);
});

function pastPresentFuture() {
    hour = time.hours();
    $('time-block').each(function () {
        let thisHour = parseInt($(this).attr('id'));

        if (thisHour > hour) {
            $(this).addClass('future');
        }
        else if (thisHour === hour) {
            $(this).addClass('present');
        
        }
        else {
            $(this).addClass('past');
        
        }
    })
}
pastPresentFuture();














