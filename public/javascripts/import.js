$(document).ready(function() {
    $('#uploadBtn').click(function() {
        $('#uploadFile').click()
    });

    $('#uploadFile').on("change", function() {
        $('#submit').click()
    });

    if ($.cookie("undefined") === "undefined") {
        $.removeCookie("undefined");
    } else {
        window.location.href = "/"
    }

});