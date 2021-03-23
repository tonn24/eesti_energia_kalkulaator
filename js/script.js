let slider = document.getElementById("volume");
let intress = document.getElementById("interestValue");
let lepingutasu = document.getElementById("lepingutasu");
let haldustasu = document.getElementById("haldustasu");
let kuudeArv = document.getElementById("kuude-arv");
let currentValue = document.getElementById("currentValue");
let periood = document.getElementById("periood");


$(document).ready(function(){
    $('input:checkbox').click(function() {
        $('input:checkbox').not(this).prop('checked', false);
    });
});

$('input[type=checkbox]').on('click', function() {
    let div = $(this).closest('.checkboxElement');
    $(this).is(":checked") ? div.addClass("coloredCheckboxDiv") : div.removeClass("coloredCheckboxDiv");
});


function doRelocationForSmallerScreen() {
    let currentWidth = window.innerWidth,
        breakpoint = 700,
        newLocation = 'mobile.html';

    if (currentWidth < breakpoint) {
        window.location.replace(newLocation);
    }
}

function doRelocationForLargerScreen() {
    let currentWidth = window.innerWidth,
        breakpoint = 700    ,
        newLocation = 'index.html';

    if (currentWidth > breakpoint) {
        window.location.replace(newLocation);
    }
}

window.addEventListener('resize', doRelocationForSmallerScreen);
window.addEventListener('resize', doRelocationForLargerScreen);


$('#päikesepaneelid').change(function() {
    if ($("#päikesepaneelid").is(':checked')) {
        document.getElementById('periood').options[0] = new Option("60 kuud");
        document.getElementById("currentValue").innerHTML = "5000";
        slider.value = 5000;
        setValues("7.90%", "50€", "1€", 5, 120);
    }
});

$('#soojuspump').change(function() {
    document.getElementById("currentValue").innerHTML = 1000;

    if ($("#soojuspump").is(':checked')) {
        document.getElementById('periood').options[0] = new Option("48 kuud");
        document.getElementById("currentValue").innerHTML = "1000";
        slider.value = 1000;
        setValues("7.90%", "30€", "1€", 5, 72);
        slider.oninput = function( ) {
            if (slider.value < 2000) {
                setValues("7.90%", "30€", "1€", 5, 72);
            } else if(slider.value < 6000){
                setValues("6.50%", "20€", "1€", 5, 72);
            } else {
                setValues("5.90%", "20€", "1€", 5, 120);
            }
        }
    }
});

$('#elekterGaas').change(function() {

        document.getElementById('periood').options[0] = new Option("48 kuud");
        document.getElementById("currentValue").innerHTML = '1000';
        slider.value = 1000;
        setValues("8.90%", "20€", "2€", 5, 72);
        slider.oninput = function( ) {
            if ($("#elekterGaas").is(':checked')) {
                if (slider.value < 1000) {
                    setValues("9.90%", "20€", "2€", 5, 72);
                } else if(slider.value < 2000){
                    setValues("8.90%", "20€", "2€", 5, 72);
                } else if(slider.value < 6000) {
                    setValues("7.50%", "20€", "2€", 5, 72);
                } else {
                    setValues("6.90%", "20€", "2€", 5, 120);
                }
            }
        }
});

$('#offGrid').change(function() {

    if ($("#offGrid").is(':checked')) {
        document.getElementById('periood').options[0] = new Option("60 kuud");
        document.getElementById("currentValue").innerHTML = '5000';
        slider.value = 5000;
        setValues("6.50%", "20€", "0€", 5, 72);
        slider.oninput = function( ) {
            if ($("#offGrid").is(':checked')) {
                if (slider.value < 2000) {
                    setValues("7.90%", "30€", "0€", 5, 72);
                } else if(slider.value < 6000){
                    setValues("6.50%", "20€", "0€", 5, 72);
                } else {
                    setValues("5.90%", "30€", "0€", 5, 120);
                }
            }
        }
    }
});

$('#elektriauto').change(function() {

    if ($("#elektriauto").is(':checked')) {
        document.getElementById('periood').options[0] = new Option("60 kuud");
        document.getElementById("currentValue").innerHTML = 5000;
        currentValue.innerHTML = slider.value;
        document.getElementById("currentValue").innerHTML = '1000';
        slider.value = 1000;
        setValues("5.90%", "50€", "2€", 5, 72);
        slider.oninput = function( ) {
            if ($("#elektriauto").is(':checked')) {
                if (slider.value < 2000) {
                    setValues("5.90%", "50€", "2€", 5, 72);
                } else if(slider.value < 6000){
                    setValues("4.50%", "40€", "2€", 5, 72);
                } else {
                    setValues("3.90%", "50€", "2€", 5, 72);
                }
            }
        }
    }
});

const getCurrentValue = (myValue) => {
    document.getElementById("currentValue").innerHTML = myValue;
}

const selectOne = (start, end) => {
    let select = document.getElementById('periood');
    for (var i=start; i<=end; i+=6) {
        select.options[select.options.length] = new Option(i+1 + " kuud", i);
    }
}

const setValues = (interest, lepTasu, halTasu, select1, select2) => {
    selectOne(select1, select2);
    intress.innerHTML = interest;
    lepingutasu.innerHTML = lepTasu;
    haldustasu.innerHTML = halTasu;
    currentValue.innerHTML = slider.value;
    document.getElementById('sissemakse').setAttribute("max", slider.value);
}

const projectCost = () => {
    let projectCost = 0;


    return projectCost;
}

const showKuudeArv = () => {
    const sel = document.getElementById("periood");
    let text = sel.options[sel.selectedIndex].text;
    kuudeArv.innerHTML = text;
}

window.addEventListener("load", () => {
    periood.addEventListener("change",showKuudeArv);
    showKuudeArv();
});

