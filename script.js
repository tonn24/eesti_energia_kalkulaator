let slider = document.getElementById("volume");
let intress = document.getElementById("interestValue");
let lepingutasu = document.getElementById("lepingutasu");
let haldustasu = document.getElementById("haldustasu");
let kuudeArv = document.getElementById("kuude-arv");
let projektiMaksumus =  document.getElementById("projekti-maksumus");
let kuumakse = document.getElementById("kuumakse");
let currentValue = document.getElementById("currentValue");

$(document).ready(function(){
    $('input:checkbox').click(function() {
        $('input:checkbox').not(this).prop('checked', false);
    });
});

$('input[type=checkbox]').on('click', function() {
    let div = $(this).closest('.checkboxElement');
    $(this).is(":checked") ? div.addClass("coloredCheckboxDiv") : div.removeClass("coloredCheckboxDiv");
});


function doRelocation() {
    let executed = false;
    let currentWidth = window.innerWidth,
        breakpoint = 800,
        newLocation = 'mobile.html';


    if (executed === false && currentWidth < breakpoint) {
        executed = true;
        window.location.replace(newLocation);
    }
}


if ($(window).width() < 960) {
    window.addEventListener('resize', doRelocation);
}



let currentRangeValue = document.getElementById("currentValue").innerHTML;

$('#päikesepaneelid').change(function() {
    if ($("#päikesepaneelid").is(':checked')) {
        document.getElementById('periood').options[0] = new Option("60 kuud");
        document.getElementById("currentValue").innerHTML = "5000";
        selectOne(5, 120);
        slider.value = 5000;
        intress.innerHTML = "7.90%";
        lepingutasu.innerHTML = "50€";
        haldustasu.innerHTML = "1€";
    }
});

$('#soojuspump').change(function() {
    document.getElementById("currentValue").innerHTML = 1000;
    function defaultValue() {
        selectOne(5, 72);
        intress.innerHTML = "7.90%";
        lepingutasu.innerHTML = "30€";
        haldustasu.innerHTML = "1€";
        currentValue.innerHTML = slider.value;
    }

    if ($("#soojuspump").is(':checked')) {
        document.getElementById('periood').options[0] = new Option("48 kuud");
        defaultValue();
        slider.oninput = function( ) {
            if ($("#soojuspump").is(':checked')) {
                if (slider.value < 2000) {
                    defaultValue();
                } else if(slider.value < 6000){
                    lepingutasu.innerHTML = "20€";
                    haldustasu.innerHTML = "1€";
                    intress.innerHTML = "6.50%";
                    currentValue.innerHTML = slider.value;
                    selectOne(5, 73);
                } else {
                    lepingutasu.innerHTML = "20€";
                    haldustasu.innerHTML = "1€";
                    intress.innerHTML = "5.90%";
                    currentValue.innerHTML = slider.value;
                    selectOne(5, 120);
                }
            }
        }
    }
});

$('#elekterGaas').change(function() {
    function defaultValue() {
        intress.innerHTML = "9.90%";
        document.getElementById("currentValue").innerHTML = '1000';
        lepingutasu.innerHTML = "30€";
        haldustasu.innerHTML = "1€";
        currentValue.innerHTML = slider.value;
        selectOne(5, 72);
    }

    if ($("#elekterGaas").is(':checked')) {
        document.getElementById('periood').options[0] = new Option("48 kuud");
        document.getElementById("currentValue").innerHTML = '1000';
        defaultValue();
        slider.oninput = function( ) {
            if ($("#elekterGaas").is(':checked')) {
                if (slider.value < 1000) {
                    defaultValue();
                } else if(slider.value < 2000){
                    lepingutasu.innerHTML = "20€";
                    haldustasu.innerHTML = "2€";
                    intress.innerHTML = "4.50%";
                    currentValue.innerHTML = slider.value;
                    selectOne(5, 72);

                } else if(slider.value < 6000) {
                    lepingutasu.innerHTML = "20€";
                    haldustasu.innerHTML = "2€";
                    intress.innerHTML = "3.90%";
                    currentValue.innerHTML = slider.value;
                    selectOne(5, 72);
                } else {
                    lepingutasu.innerHTML = "20€";
                    haldustasu.innerHTML = "2€";
                    intress.innerHTML = "3.90%";
                    currentValue.innerHTML = slider.value;
                    selectOne(5, 120);
                }
            }
        }
    }
});

$('#offGrid').change(function() {

    function defaultValue() {
        document.getElementById("currentValue").innerHTML = 5000;
        selectOne(5, 72);
        intress.innerHTML = "7.90%";
        lepingutasu.innerHTML = "30€";
        haldustasu.innerHTML = "0€";
        currentValue.innerHTML = slider.value;
    }

    if ($("#offGrid").is(':checked')) {
        document.getElementById('periood').options[0] = new Option("60 kuud");
        defaultValue();
        slider.oninput = function( ) {
            if ($("#offGrid").is(':checked')) {
                if (slider.value < 2000) {
                   defaultValue();
                } else if(slider.value < 6000){
                    lepingutasu.innerHTML = "20€";
                    haldustasu.innerHTML = "0€";
                    intress.innerHTML = "6.50%";
                    currentValue.innerHTML = slider.value;
                    selectOne(5, 73);
                } else {
                    lepingutasu.innerHTML = "30€";
                    haldustasu.innerHTML = "0€";
                    intress.innerHTML = "5.90%";
                    currentValue.innerHTML = slider.value;
                    selectOne(5, 120);
                }
            }
        }
    }
});

$('#elektriauto').change(function() {

    function defaultValue() {
        intress.innerHTML = "5.90%";
        document.getElementById("currentValue").innerHTML = 5000;
        lepingutasu.innerHTML = "50€";
        haldustasu.innerHTML = "2€";
        currentValue.innerHTML = slider.value;
        selectOne(5, 72);
    }

    if ($("#elektriauto").is(':checked')) {
        document.getElementById('periood').options[0] = new Option("60 kuud");
        document.getElementById("currentValue").innerHTML = 5000;
        defaultValue();
        slider.oninput = function( ) {
            if ($("#elektriauto").is(':checked')) {
                if (slider.value < 2000) {
                    defaultValue();
                } else if(slider.value < 6000){
                    lepingutasu.innerHTML = "40€";
                    haldustasu.innerHTML = "2€";
                    intress.innerHTML = "4.50%";
                    currentValue.innerHTML = slider.value;
                    selectOne(5, 72);

                } else {
                    lepingutasu.innerHTML = "30€";
                    haldustasu.innerHTML = "2€";
                    intress.innerHTML = "3.90%";
                    currentValue.innerHTML = slider.value;
                    selectOne(5, 120);
                }
            }
        }
    }
});

function getCurrentValue(myValue){
    document.getElementById("currentValue").innerHTML = myValue;
}

function selectOne(start, end) {
    let select = document.getElementById('periood');
    for (var i=start; i<=end; i+=6) {
        select.options[select.options.length] = new Option(i+1 + " kuud", i);
    }
}

