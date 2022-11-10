function age(){
    var name = document.getElementById('name').value;
    var cyear = document.getElementById('cdate').value;
    var bdate = document.getElementById('bdate').value;
    
    var cage = cyear - bdate

    document.getElementById('age').innerHTML = 'Hello '+name+' you are '+cage+' years old';
    
}