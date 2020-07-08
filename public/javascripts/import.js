$(document).ready(function() {
    $('#uploadBtn').click(function() {
        $('#uploadFile').click()
    });

    $('#uploadFile').on("change", function() {
        $('#submit').click()
    });
});