var index = 0;
var text = 'Welcome  to  AIT  Placement  cell  💸💰💳!  ';

// Here you can put in the text you want to make it type.
function type()
{
document.getElementById('screen').innerHTML +=text.charAt(index);
index += 1;
var t = setTimeout('type()',100);
// The time taken for each character here is 100ms. You can change it if you want.
}

