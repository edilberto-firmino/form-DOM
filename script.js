function onSubmit(){
    console.log(document.getElementsByName('name')[0].value)
    console.log(document.getElementsByName('email')[0].value)
    console.log(document.getElementsByName('password')[0].value)
    console.log(document.getElementsByName('state')[0].value)
    console.log(document.getElementsByName('sexo')[0].cheched)
    console.log(document.getElementsByName('description')[0].value)
    
    
    
    var email = document.getElementsByName('email')[0].value
    var concordo = document.getElementsByName('terms')[0].checked
    var sexo = document.getElementsByName('sexo')[0].checked
    var estado = document.getElementsByName('state')[0].value


    
    
    if (email == '') {
        alert('Preencher email');
    } 
    else if (concordo === false) {
        alert('Preencher Concordo');
    } 
    else if (estado == '') {
        alert('Preencher o Estado');
    } 
    else if (sexo === false) {
        alert('Preencher sexo');
    }
    
    return false;

}