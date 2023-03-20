const a= +prompt('Введите число',0);
const b= +prompt('Введите степень числа',0);
function y(a,b=1) {
           !isNaN(b) && !isNaN(a) ?  y=Math.pow(a,b) :  y ='some error';
            return y;
}
        alert(y(a,b));
