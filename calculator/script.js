function Hiddecontent0(){
    const cont = document.querySelector(".option-content1");
    cont.style.display= "none";
    const cont2 = document.querySelector(".option-content2");
    cont2.style.display= "none";
    const cont3 = document.querySelector(".option-content3");
    cont3.style.display= "none";
    const cont4 = document.querySelector(".option-content4");
    cont4.style.display= "none";
    const cont5 = document.querySelector(".option-content5");
    cont5.style.display= "none";
    const cont6 = document.querySelector(".option-content6");
    cont6.style.display= "none";
    const cont7 = document.querySelector(".option-content7");
    cont7.style.display= "none";
    const cansel = document.querySelector(".cansel");
    cansel.style.display= "none";
    console.log("hi")
    
}

function Hiddecontent1(){
    const cont = document.querySelector(".option-content1");
    cont.style.display= "block";
    const cansel = document.querySelector(".cansel");
    cansel.style.display= "block";
    
}
function Hiddecontent2(){
    const cont = document.querySelector(".option-content2");
    cont.style.display= "block";
    const cansel = document.querySelector(".cansel");
    cansel.style.display= "block";
    
}
function Hiddecontent3(){
    const cont = document.querySelector(".option-content3");
    cont.style.display= "block";
    const cansel = document.querySelector(".cansel");
    cansel.style.display= "block";
    
}
function Hiddecontent4(){
    const cont = document.querySelector(".option-content4");
    cont.style.display= "block";
    const cansel = document.querySelector(".cansel");
    cansel.style.display= "block";
    
}
function Hiddecontent5(){
    const cont = document.querySelector(".option-content5");
    cont.style.display= "block";
    const cansel = document.querySelector(".cansel");
    cansel.style.display= "block";
    
}
function Hiddecontent6(){
    const cont = document.querySelector(".option-content6");
    cont.style.display= "block";
    const cansel = document.querySelector(".cansel");
    cansel.style.display= "block";
    
}
function Hiddecontent7(){
    const cont = document.querySelector(".option-content7");
    cont.style.display= "block";
    const cansel = document.querySelector(".cansel");
    cansel.style.display= "block";
    
}

function option(a){
    if(a==1){
        const cont2 = document.querySelector(".select-text1 div");
        const span = document.createElement('div');
        span.append("Односкатная");
        cont2.replaceWith(span);
        const typeContent = document.querySelector(".type-content");
        typeContent.src="img/type2.png";
        const cont = document.querySelector(".option-content1");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==2){
        const typeContent = document.querySelector(".type-content");
        typeContent.src="img/type3.png";
        const cont2 = document.querySelector(".select-text div");
        const span = document.createElement('div');
        span.append("Двухскатная");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content1");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==3){
        const typeContent = document.querySelector(".type-content");
        typeContent.src="img/type1.png";
        const cont2 = document.querySelector(".select-text1 div");
        const span = document.createElement('div');
        span.append("Укажите тип кровли");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content1");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }
}

function option2(a){
    if(a==1){
        const cont2 = document.querySelector(".select-text2 div");
        const span = document.createElement('div');
        span.append("Базальтовые панели");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content2");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==2){
        const cont2 = document.querySelector(".select-text2 div");
        const span = document.createElement('div');
        span.append("ПИР панели");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content2");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==3){
        const cont2 = document.querySelector(".select-text2 div");
        const span = document.createElement('div');
        span.append("Укажите тип панели кровли");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content2");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }
}

function option3(a){
    if(a==1){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("50 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==2){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("80 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==3){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("100 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==4){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("120 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==5){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("150 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==6){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("200 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==7){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("250 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==8){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        const br = document.createElement('br');
        span.append("Укажите толщину",br,"поутеплителю панели кровли");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }
}
function option4(a){
    if(a==1){
        const cont2 = document.querySelector(".select-text4 div");
        const span = document.createElement('div');
        span.append("0,5 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content4");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==2){
        const cont2 = document.querySelector(".select-text4 div");
        const span = document.createElement('div');
        span.append("0,6 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content4");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==3){
        const cont2 = document.querySelector(".select-text4 div");
        const span = document.createElement('div');
        span.append("0,7 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content4");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==4){
        const cont2 = document.querySelector(".select-text4 div");
        const span = document.createElement('div');
        span.append("0,8 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content4");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==5){
        const cont2 = document.querySelector(".select-text4 div");
        const span = document.createElement('div');
        const br = document.createElement('br');
        span.append("Укажите толщину",br,"облицовки панели кровли");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content4");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }
}

const input1 = document.querySelector('.inpt01');
input1.addEventListener("change", (event) => {
    let i=input1.value.replace(/[^0-9]/g, '');
    input1.value=i;
    if (i !== "") {
        input1.value+=" м";
    }
    console.log(input1.value);
});
const input2 = document.querySelector('.inpt02');
input2.addEventListener("change", (event) => {
    let i=input2.value.replace(/[^0-9]/g, '');
    input2.value=i;
    if (i !== "") {
        input2.value+=" м";
    }
    console.log(input2.value);
});
const input3 = document.querySelector('.inpt03');
input3.addEventListener("change", (event) => {
    let i=input3.value.replace(/[^0-9]/g, '');
    input3.value=i;
    if (i !== "") {
        input3.value+=" м";
    }
    console.log(input3.value);
});
function option5(a){
    if(a==1){
        const cont5 = document.querySelector(".select-text5 div");
        const span = document.createElement('div');
        span.append("Базальтовые панели");
        cont5.replaceWith(span);
        const cont = document.querySelector(".option-content5");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==2){
        const cont5 = document.querySelector(".select-text5 div");
        const span = document.createElement('div');
        span.append("ПИР панели");
        cont5.replaceWith(span);
        const cont = document.querySelector(".option-content5");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==3){
        const cont5 = document.querySelector(".select-text5 div");
        const span = document.createElement('div');
        span.append("Укажите тип панели стены");
        cont5.replaceWith(span);
        const cont = document.querySelector(".option-content5");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }
}

function option6(a){
    if(a==1){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("50 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==2){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("80 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==3){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("100 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==4){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("120 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==5){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("150 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==6){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("200 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==7){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("250 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==8){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        const br = document.createElement('br');
        span.append("Укажите толщину",br,"поутеплителю панели стены");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }
}


function option7(a){
    if(a==1){
        const cont2 = document.querySelector(".select-text7 div");
        const span = document.createElement('div');
        span.append("0,5 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content7");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==2){
        const cont2 = document.querySelector(".select-text7 div");
        const span = document.createElement('div');
        span.append("0,6 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content7");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==3){
        const cont2 = document.querySelector(".select-text7 div");
        const span = document.createElement('div');
        span.append("0,7 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content7");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==4){
        const cont2 = document.querySelector(".select-text7 div");
        const span = document.createElement('div');
        span.append("0,8 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content7");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }else if(a==5){
        const cont2 = document.querySelector(".select-text7 div");
        const span = document.createElement('div');
        const br = document.createElement('br');
        span.append("Укажите толщину",br,"облицовки панели стены");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content7");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
    }
}

