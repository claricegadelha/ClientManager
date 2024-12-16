$(document).ready(function(){
    $('#date').mask('00/00/0000', {reverse: true});
    if ($('#cpf').length>11) {
        $('#cpf').mask('00.000.000/0000-00', {reverse: true});
    } else {
        $('#cpf').mask('000.000.000-00', {reverse: true});
    }  
});