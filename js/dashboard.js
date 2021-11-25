$("#myDashboard").click(function () {
  $("#mySidenav").addClass("d-block");
});

$(".closebtn").click(function () {
  $("#mySidenav").removeClass("d-block");
});

$(".btn-outline-message #followText").click(function() {
    $(this).text("Following");
});

$(".btn-outline-message #connectText").click(function() {
    $(this).text("Pending");
});

$(".btn-outline-message #messageText").click(function() {
    window.location.href='messages.html#pagetwo';
});

