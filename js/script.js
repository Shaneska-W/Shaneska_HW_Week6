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

