// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('#DateSuspend').click(function () {
    var $this = $(this);

    if ($this.is(':checked')) {
        //console.log("disable");
        $('#DateQ').attr("disabled", "disabled")
        $('#DateBeforeAfter').attr("disabled", "disabled")
    } else {
        $('#DateQ').removeAttr("disabled");
        $('#DateBeforeAfter').removeAttr("disabled");
    }
});
