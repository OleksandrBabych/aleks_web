$(function() {
    $('#btn-submit').click(sendForm);

});

function sendForm(e) {
    e.preventDefault();
    $.ajax({
            url: "https://formspree.io/arch.oleksandrbabych@gmail.com",
            method: "POST",
            data: {
                Name: $('#yourname').val(),
                Mail: $('#youremail').val(),
                Mesage: $('#formtxt').val()
            },
            dataType: "json"
        })
        .done(function() {
            document.getElementById("sform").reset();
        });
}
