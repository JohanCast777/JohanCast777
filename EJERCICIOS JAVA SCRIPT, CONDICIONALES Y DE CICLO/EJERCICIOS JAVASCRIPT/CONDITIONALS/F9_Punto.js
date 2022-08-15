/*9. Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo
ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es
posterior*/

var a,b,c, dia_act, mes_act, año_act
dia_act=7
mes_act=8
año_act=2021
console.log('Ingrese la fecha que desea consultar ')
a=prompt('ingresar dia')
b=prompt('ingresar mes')
c=prompt('ingresar año')
if(c>año_act){
  a=dia_act-a
  b=mes_act-b
  c=año_act-c
  console.log('Los dias faltantes son: ', a, 'Los meses faltantes son:', b, 'y los años faltantes son: ', c)
}else if(c<año_act){
  a=a-dia_act
  b=b-mes_act
  c=c-año_act
  console.log('Los dias faltantes son: ', a, 'Los meses faltantes son:', b, 'y los años faltantes son: ', c)
}