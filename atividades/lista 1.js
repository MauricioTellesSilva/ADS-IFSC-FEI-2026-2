//
let somaarray=[1,2,3,4,5];
function somaArrayf(){
    let soma=0;
    for(i=0;i<somaarray.length;i++){
        soma+=somaarray[i];
    }
    console.log(soma);
}
//
let mediaarray=[1,2,3,4,5,6,7,8,9];
function mediaArrayf(){
    let soma=0;
    let media=0;
    for(i=0;i<somaarray.length;i++){
        soma+=somaarray[i];
    }
    media=soma/mediaarray.length;
    console.log(media);
}
//
let menorElementoArray=[2,3,5,6,8,9,90,2,1];
function menorElemento(){
    let menor=0;
    for(i=0;i<somaarray.length;i++){
        if(menorElemento<menorElementoArray[i]){
            menor=menorElementoArray[i];
        }
    }
    console.log(menor);
}
//
let medalhaPrataArray=[2,3,5,6,8,9,90,2,1];
function medalhaPrata(){
    let menor=0;
    let smenor=0;
    for(i=0;i<medalhaPrataArray.length;i++){
        if(smenor<menorElementoArray[i]||smenor>menor){
            smenor=menorElementoArray[i];
            if(menor<smenor){
                menor=smenor
            }
        }
    }
    console.log(menor);
}
//
let filtroArray=[1,2,3,4,5,6,7,8,9];
function filtro(){
    let Arrayimpar=[];
    let FiltroI=0;
    for(i=0;i<filtroArray.length;i++){
        if((filtroArray[i]%2)==1){
            Arrayimpar[FiltroI]=filtroArray[i];
            FiltroI++;
        }
    }
    console.log(Arrayimpar);
}
//
let inversoArray=[1,2,3,4,5,6,7,8,9]; 