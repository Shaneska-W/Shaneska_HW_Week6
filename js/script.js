$(document).ready(function() {

    $('#submitButton').click(function() {
        var textValue = $('#textInput').val();
        var numberValue = $('#numberInput').val();
        var emailValue = $('#emailInput').val();

        $('#output').html(`<p><strong>Text:</strong> ${textValue}</p>
                           <p><strong>Number:</strong> ${numberValue}</p>
                           <p><strong>Email:</strong> ${emailValue}</p>`);
    });


    $('p').hover(function() {
        $(this).css('color', 'red');
    }, function() {
        $(this).css('color', 'black');
    });

});

function decreaseMars(){
    if (document.getElementById('ticketsMars').value != 0){
        document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) - 1;
    }else {
        document.getElementById('ticketsMars').value = 0;
    }

}

function increaseMars(){
    document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value)+ 1;
}

function decreaseSaturn(){
    if (document.getElementById('ticketsSaturn').value != 0){
        document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) - 1;
    }else {
        document.getElementById('ticketsSaturn').value = 0;
    }

}

function increaseSaturn(){
    document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value)+ 1;
}

let totalMarsCost = 0;
let totalSaturnCost = 0;
let totalCost = 0;

function total(){
totalMarsCost = parseInt(document.getElementById('ticketsMars').value) * 50;
totalSaturnCost = parseInt(document.getElementById('ticketsSaturn').value) * 70;
totalCost = totalMarsCost + totalSaturnCost;
document.getElementById('total').innerHTML ="R " + totalCost;
}
