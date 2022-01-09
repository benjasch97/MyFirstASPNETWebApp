$("#btnSend").click(function () {
    alert("From: " + $("#textFrom").val() +
        ", Subject: " + $("#textSub").val() + 
        ", Message: " + $("#textMessage").val())

    $("#oppOfJiren").fadeToggle()
})