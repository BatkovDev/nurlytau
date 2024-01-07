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

        const selecttext1 = document.querySelector(".select-text1");
        selecttext1.style.color="black"

        
        const cont = document.querySelector(".option-content1");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const addiction = document.querySelector(".addiction");
        addiction.style.display= "block";
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
        const selecttext1 = document.querySelector(".select-text1");
        selecttext1.style.color="black";
        const addiction = document.querySelector(".addiction");
        addiction.style.display= "block";
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
        const selecttext1 = document.querySelector(".select-text1");
        selecttext1.style.color="#a4a4a4"
        const addiction = document.querySelector(".addiction");
        addiction.style.display= "none";
        
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
        const selecttext1 = document.querySelector(".select-text2");
        selecttext1.style.color="black"
    }else if(a==2){
        const cont2 = document.querySelector(".select-text2 div");
        const span = document.createElement('div');
        span.append("ПИР панели");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content2");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text2");
        selecttext1.style.color="black"
    }else if(a==3){
        const cont2 = document.querySelector(".select-text2 div");
        const span = document.createElement('div');
        span.append("Укажите тип панели кровли");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content2");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text2");
        selecttext1.style.color="#a4a4a4"
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
        const selecttext1 = document.querySelector(".select-text3");
        selecttext1.style.color="black"
    }else if(a==2){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("80 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text3");
        selecttext1.style.color="black"
    }else if(a==3){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("100 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text3");
        selecttext1.style.color="black"
    }else if(a==4){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("120 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text3");
        selecttext1.style.color="black"
    }else if(a==5){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("150 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text3");
        selecttext1.style.color="black"
    }else if(a==6){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("200 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text3");
        selecttext1.style.color="black"
    }else if(a==7){
        const cont2 = document.querySelector(".select-text3 div");
        const span = document.createElement('div');
        span.append("250 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content3");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text3");
        selecttext1.style.color="black"
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
        const selecttext1 = document.querySelector(".select-text3");
        selecttext1.style.color="#a4a4a4"
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
        const selecttext1 = document.querySelector(".select-text4");
        selecttext1.style.color="black"
    }else if(a==2){
        const cont2 = document.querySelector(".select-text4 div");
        const span = document.createElement('div');
        span.append("0,6 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content4");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text4");
        selecttext1.style.color="black"
    }else if(a==3){
        const cont2 = document.querySelector(".select-text4 div");
        const span = document.createElement('div');
        span.append("0,7 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content4");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text4");
        selecttext1.style.color="black"
    }else if(a==4){
        const cont2 = document.querySelector(".select-text4 div");
        const span = document.createElement('div');
        span.append("0,8 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content4");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text4");
        selecttext1.style.color="black"
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
        const selecttext1 = document.querySelector(".select-text4");
        selecttext1.style.color="#a4a4a4"
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
const input4 = document.querySelector('.inpt04');
input4.addEventListener("change", (event) => {
    let i=input4.value.replace(/[^0-9]/g, '');
    input4.value=i;
    if (i !== "") {
        input4.value+=" шт";
    }
    console.log(input4.value);
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
        const selecttext1 = document.querySelector(".select-text5");
        selecttext1.style.color="black"
    }else if(a==2){
        const cont5 = document.querySelector(".select-text5 div");
        const span = document.createElement('div');
        span.append("ПИР панели");
        cont5.replaceWith(span);
        const cont = document.querySelector(".option-content5");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text5");
        selecttext1.style.color="black"
    }else if(a==3){
        const cont5 = document.querySelector(".select-text5 div");
        const span = document.createElement('div');
        span.append("Укажите тип панели стены");
        cont5.replaceWith(span);
        const cont = document.querySelector(".option-content5");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text5");
        selecttext1.style.color="#a4a4a4"
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
        const selecttext1 = document.querySelector(".select-text6");
        selecttext1.style.color="black"
    }else if(a==2){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("80 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text6");
        selecttext1.style.color="black"
    }else if(a==3){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("100 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text6");
        selecttext1.style.color="black"
    }else if(a==4){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("120 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text6");
        selecttext1.style.color="black"
    }else if(a==5){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("150 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text6");
        selecttext1.style.color="black"
    }else if(a==6){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("200 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text6");
        selecttext1.style.color="black"
    }else if(a==7){
        const cont2 = document.querySelector(".select-text6 div");
        const span = document.createElement('div');
        span.append("250 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content6");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text6");
        selecttext1.style.color="black"
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
        const selecttext1 = document.querySelector(".select-text6");
        selecttext1.style.color="#a4a4a4"
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
        const selecttext1 = document.querySelector(".select-text7");
        selecttext1.style.color="black"
    }else if(a==2){
        const cont2 = document.querySelector(".select-text7 div");
        const span = document.createElement('div');
        span.append("0,6 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content7");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text7");
        selecttext1.style.color="black"
    }else if(a==3){
        const cont2 = document.querySelector(".select-text7 div");
        const span = document.createElement('div');
        span.append("0,7 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content7");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text7");
        selecttext1.style.color="black"
    }else if(a==4){
        const cont2 = document.querySelector(".select-text7 div");
        const span = document.createElement('div');
        span.append("0,8 мм");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content7");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text7");
        selecttext1.style.color="black"
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
        const selecttext1 = document.querySelector(".select-text7");
        selecttext1.style.color="#a4a4a4"
    }
}

const sht = document.querySelectorAll(".sht");

for (let i = 0; i < sht.length; i++) {
    sht[i].addEventListener("change", (event) => {
        let li=sht[i].value.replace(/[^0-9]/g, '');
        sht[i].value=li;
        if (li !== "") {
            sht[i].value+=" шт";
        }
    });
}

const m = document.querySelectorAll(".m");

for (let i = 0; i < m.length; i++) {
    m[i].addEventListener("change", (event) => {
        let li=m[i].value.replace(/[^0-9]/g, '');
        m[i].value=li;
        if (li !== "") {
            m[i].value+=" м";
        }
    });
}

const t = document.querySelectorAll(".t");

for (let i = 0; i < t.length; i++) {
    t[i].addEventListener("change", (event) => {
        let li=t[i].value.replace(/[^0-9]/g, '');
        t[i].value=li;
        if (li !== "") {
            t[i].value+=" т";
        }
    });
}

function cont(ar){
    console.log("hi")
    
    
    let lent = document.createElement('div');
    lent.className="lent";
    let input1 = document.createElement('input');
    input1.placeholder="Количество"
    lent.append(input1);
    let input2 = document.createElement('input');
    input2.placeholder="Ширина двери, м"
    lent.append(input2);
    let input3 = document.createElement('input');
    input3.placeholder="Высота двери, м"
    lent.append(input3);
    if(ar==1){
        const cont = document.querySelector(".cont0001");
        cont.append(lent);
        input1.className="len0001 sht sht1";
        input2.className="len0001 m sh1";
        input3.className="len0002 m v1";
    }else if(ar==2){
        const cont = document.querySelector(".cont0002");
        cont.append(lent);
        input1.className="len0001 sht sht2";
        input2.className="len0001 m sh2";
        input3.className="len0002 m v2";
    }else if(ar==3){
        const cont = document.querySelector(".cont0003");
        cont.append(lent);
        input1.className="len0001 sht sht3";
        input2.className="len0001 m sh3";
        input3.className="len0002 m v3";
    }
    const sht = document.querySelectorAll(".sht");

    for (let i = 0; i < sht.length; i++) {
        sht[i].addEventListener("change", (event) => {
            let li=sht[i].value.replace(/[^0-9]/g, '');
            sht[i].value=li;
            if (li !== "") {
                sht[i].value+=" шт";
            }
        });
    }

    const m = document.querySelectorAll(".m");

    for (let i = 0; i < m.length; i++) {
        m[i].addEventListener("change", (event) => {
            let li=m[i].value.replace(/[^0-9]/g, '');
            m[i].value=li;
            if (li !== "") {
                m[i].value+=" м";
            }
        });
    }
}
function cont2(){
    let lent = document.createElement('div');
    lent.className="lent";
    let input1 = document.createElement('input');
    input1.className="len0003 sht sht4";
    input1.placeholder="Количество"
    lent.append(input1);
    let input2 = document.createElement('input');
    input2.className="len0004 t v4";
    input2.placeholder="Вес оборудования, т"
    
    lent.append(input2);
    const cont = document.querySelector(".cont0004");
    cont.append(lent);
    const sht = document.querySelectorAll(".sht");

    for (let i = 0; i < sht.length; i++) {
        sht[i].addEventListener("change", (event) => {
            let li=sht[i].value.replace(/[^0-9]/g, '');
            sht[i].value=li;
            if (li !== "") {
                sht[i].value+=" шт";
            }
        });
    }

    const t = document.querySelectorAll(".t");

    for (let i = 0; i < t.length; i++) {
        t[i].addEventListener("change", (event) => {
            let li=t[i].value.replace(/[^0-9]/g, '');
            t[i].value=li;
            if (li !== "") {
                t[i].value+=" т";
            }
        });
    }
}
let num=1;
let pred=true;
let pred2=true;
function next(a){
    
    if (a && num!=4){
        
        num++;
        if (num==2){
            window.scrollTo(0, 0)
            const con1 = document.querySelector(".con1");
            con1.style.display="none";
            const con2 = document.querySelector(".con2");
            con2.style.display="block";
            const probel = document.querySelector(".probel");
            probel.style.display="inline";
            const back = document.querySelector(".back");
            back.style.display="inline";
            
            const step2 = document.querySelector(".step2");
            step2.style.color="white";
            pred=false
            const con4 = document.querySelector(".con4");
            con4.style.display="block";
            
            

        }else if (num==3){
            pred2=false
            window.scrollTo(0, 0) 

            const con2 = document.querySelector(".con2");
            con2.style.display="none";
            const con3 = document.querySelector(".con3");
            con3.style.display="block";
            const step3 = document.querySelector(".step3");
            step3.style.color="white";
            const back = document.querySelector(".result");
            back.style.display="inline";
            const next = document.querySelector(".next");
            next.style.display="none";
            const con4 = document.querySelector(".con4");
            con4.style.display="none";

        }
    }else if(!a && num!=1){
        num--
        if (num==1){
            window.scrollTo(0, 0)
            const con2 = document.querySelector(".con2");
            con2.style.display="none";
            const con1 = document.querySelector(".con1");
            con1.style.display="block";
            const probel = document.querySelector(".probel");
            probel.style.display="none";
            const back = document.querySelector(".back");
            back.style.display="none";
            const step2 = document.querySelector(".step2");
            step2.style.color="#ffac28";
            pred2=true;
            pred=true;
            const con4 = document.querySelector(".con4");
            con4.style.display="none";

        }else if (num==2){
            window.scrollTo(0, 0)
            const con3 = document.querySelector(".con3");
            con3.style.display="none";
            const con2 = document.querySelector(".con2");
            con2.style.display="block";
            const step3 = document.querySelector(".step3");
            step3.style.color="#ffac28";
            const con4 = document.querySelector(".con4");
            con4.style.display="block";
            const next = document.querySelector(".next");
            next.style.display="inline";
            const back = document.querySelector(".result");
            back.style.display="none";
        }
        
    }
}

function dontworked(){
    if(pred){
        alert("Вы уже находитесь на странице ВИД ЗДАНИЯ");
    }
    
}
const step1 = document.querySelector(".step1");

step1.addEventListener("click", (event) => {
    if(!pred){
        num=1
        window.scrollTo(0, 0)
        const con3 = document.querySelector(".con3");
        con3.style.display="none";
        const con2 = document.querySelector(".con2");
        con2.style.display="none";
        const con1 = document.querySelector(".con1");
        con1.style.display="block";
        const next = document.querySelector(".next");
        next.style.display="inline";
        const probel = document.querySelector(".probel");
        probel.style.display="none";
        const back = document.querySelector(".back");
        back.style.display="none";
        const step2 = document.querySelector(".step2");
        step2.style.color="#ffac28";
        const step3 = document.querySelector(".step3");
        step3.style.color="#ffac28";
        const con4 = document.querySelector(".con4");
        con4.style.display="no ne";
        pred2=true;
        pred=true;
        const result = document.querySelector(".result");
        result.style.display="none";
    }
});

const step2 = document.querySelector(".step2");

step2.addEventListener("click", (event) => {
    if(!pred2){
        num=2
        window.scrollTo(0, 0)
        const con3 = document.querySelector(".con3");
        con3.style.display="none";
        const con2 = document.querySelector(".con2");
        con2.style.display="block";
        const con1 = document.querySelector(".con1");
        con1.style.display="none";
        const step3 = document.querySelector(".step3");
        step3.style.color="#ffac28";
        const con4 = document.querySelector(".con4");
        con4.style.display="block";
        const back = document.querySelector(".next");
        back.style.display="inline";
        const result = document.querySelector(".result");
        result.style.display="none";
    }
});

function result(){
    const answer = document.querySelector(".answer");
    const e5 = document.querySelector(".inpt01").value;
    
    const e6 = document.querySelector(".inpt02").value;
    
    const e7 = document.querySelector(".inpt03").value;

    
    
    let br7 = document.createElement('br');
    answer.append(br7);
    answer.append("|площадь стен: ")
    

    answer.append(e5.slice(0, -2)*e7.slice(0, -2)*2+e6.slice(0, -2)*e7.slice(0, -2)*2);

    let br10 = document.createElement('br');
    answer.append(br10);
    answer.append("|площадь кровли: ");
    answer.append(e5.slice(0, -2)*e6.slice(0, -2)*2.01);
    let br8 = document.createElement('br');
    answer.append(br8);
    answer.append("|панели для фронтон: ")


    for (let i = 1; i < e6.slice(0, -2)*1+1; i++) {
        let br = document.createElement('br');
        answer.append(br);
        answer.append("Ширина:",i," м","/Высота: 10 м");
        
    }

    


    

    let br11 = document.createElement('br');
    answer.append(br11);

    console.log("cx")
    const e = document.querySelector(".select-text1 div");
    var selecttext = e.textContent || e.innerText;
    answer.append("кровля ")
    if (selecttext=="Укажите тип кровли"){
        answer.append("не выбрана")
    } else{
        answer.append(selecttext)
        const e2 = document.querySelector(".select-text2 div");
        var selecttext2 = e2.textContent || e2.innerText;
        answer.append("|тип панели кровли ")
        if(selecttext2=="Укажите тип панели кровли"){
            answer.append("не выбрана")
        }else{
            answer.append(selecttext2)
        }
        const e3 = document.querySelector(".select-text3 div");
        var selecttext3 = e3.textContent || e3.innerText;
        answer.append("|толщинa по утеплителю панели")
        if(selecttext3=="Укажите толщину по утеплителю панели кровли"){
            answer.append("не выбрана")
        }else{
            answer.append(selecttext3)
        }
        const e4 = document.querySelector(".select-text4 div");
        var selecttext4 = e4.textContent || e4.innerText;
        answer.append("|толщинa облицовки кровли ")
        if(selecttext4=="Укажите толщинуоблицовки панели кровли"){
            answer.append("не выбрана")
        }else{
            answer.append(selecttext4)
        }
        
    }

    let br14 = document.createElement('br');
    answer.append(br14);
    const e8 = document.querySelector(".select-text5 div");
    var selecttext8 = e8.textContent || e8.innerText;
    answer.append("|тип панели стены ")
    if(selecttext8=="Укажите тип панели стены"){
        answer.append("не выбрана")
    }else{
        answer.append(selecttext8)
    }

    const e9 = document.querySelector(".select-text6 div");
    var selecttext9 = e9.textContent || e9.innerText;
    answer.append("|толщинa по утеплителю панели ")
    if(selecttext9=="Укажите толщину по утеплителю панели стены"){
        answer.append("не выбрана")
    }else{
        answer.append(selecttext9)
    }
    const e10 = document.querySelector(".select-text7 div");
    var selecttext10 = e10.textContent || e10.innerText;
    answer.append("|толщина облицовки панели ")
    if(selecttext10=="Укажите толщинуоблицовки панели стены"){
        answer.append("не выбрана")
    }else{
        answer.append(selecttext10)
    }
    
    let br15 = document.createElement('br');
    answer.append(br15);

    const e11 = document.querySelector(".inpt04").value;
    answer.append('|Количество пролетов ')
    answer.append(e11);

    const e12 = document.querySelectorAll(".sht1");
    const e13 = document.querySelectorAll(".sh1");
    const e14 = document.querySelectorAll(".v1");
    let br9 = document.createElement('br');
    answer.append(br9);
    answer.append('|дверей ')
    for (let i = 0; i < e12.length; i++) {
        let br = document.createElement('br');
        answer.append(br);
        answer.append(e12[i].value,',', e13[i].value,',', e14[i].value)
    }

    const e15 = document.querySelectorAll(".sht2");
    const e16 = document.querySelectorAll(".sh2");
    const e17 = document.querySelectorAll(".v2");
    let br = document.createElement('br');
    answer.append(br);
    answer.append('|окна ')
    for (let i = 0; i < e15.length; i++) {
        let br = document.createElement('br');
        answer.append(br);
        answer.append(e15[i].value,',', e16[i].value,',', e17[i].value)
    }

    const e18 = document.querySelectorAll(".sht3");
    const e19 = document.querySelectorAll(".sh3");
    const e20 = document.querySelectorAll(".v3");
    let br2 = document.createElement('br');
    answer.append(br2);
    answer.append('|ворота ')
    for (let i = 0; i < e18.length; i++) {
        let br = document.createElement('br');
        answer.append(br);
        answer.append(e18[i].value,',', e19[i].value,',', e20[i].value)
    }

    const e21 = document.querySelectorAll(".sht4");
    const e22 = document.querySelectorAll(".v4");
    let br3 = document.createElement('br');
    answer.append(br3);
    answer.append('|крановое оборудование ')
    for (let i = 0; i < e21.length; i++) {
        let br = document.createElement('br');
        answer.append(br);
        answer.append(e21[i].value,',', e22[i].value)
    }
    let br4 = document.createElement('br');
    answer.append(br4);
    answer.append('|Обратная связь ')

    const e23 = document.querySelector(".inpt16");
    const e24 = document.querySelector(".inpt17");
    const e25 = document.querySelector(".inpt18");
    answer.append(e23.value,',', e24.value,',', e25.value);
    let br5 = document.createElement('br');
    answer.append(br5);
    answer.append('|Место строительства ');
    const e26 = document.querySelector(".up");
    var selecttext26 = e26.textContent || e26.innerText;
    answer.append(selecttext26);
    let br6 = document.createElement('br');
    answer.append(br6);
    answer.append('|Комментарий ');
    const e27 = document.querySelector("textarea");
    answer.append(e27.value);
    

}
