var distress = []
var ailment = []
var recovery = []

$(document).ready(function() {
    $("#enlightenment").submit(function(event) {
        event.preventDefault();
            $("input:checkbox[name=SD]:checked").each(function() {
                var SD = $(this).val();
                distress.push(SD);
            });
            $("input:checkbox[name=SA]:checked").each(function() {
                var SA = $(this).val();
                ailment.push(SA);
            });
            $("input:checkbox[name=SR]:checked").each(function() {
                var SR = $(this).val();
                recovery.push(SR);
            });
             if ((distress.length >= 6) && (ailment.length === 6) && (recovery.length >= 1)) {
                $("#severestress").show();
            }
            else if ((distress.length >= 4) && (ailment.length >= 5) && (recovery.length >= 1)) {
                $("#moderatelystressed").show();
            }
            else if ((distress.length >= 0) && (ailment.length >= 0) && (recovery.length === 0)) {
                $("#alien").show();
            }
            else if ((distress.length >= 0) && (ailment.length >= 0) && (recovery.length >= 1)) {
                $("#lightlystressed").show();
            }
            console.log(distress)
            console.log(ailment)
            console.log(recovery)
        });
});