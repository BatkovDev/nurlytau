
const inputElement = document.querySelector('.inpt17');
    inputElement.addEventListener('focus', function() {
      if (inputElement.value === '') {
        inputElement.value += '+7'; // Добавляем букву "+7", если поле ввода пустое
      }
    });
    
    inputElement.addEventListener('blur', function() {
        let i="";
        if(inputElement.value[0]=="+"){
            i+="+";
        }
        i+=inputElement.value.replace(/[^0-9]/g, '');
        inputElement.value = i;
      if (inputElement.value.substr(-2) === '+7' && inputElement.value.length === 2) {
        inputElement.value = ''; // Если только "+7" введено, удаляем его при потере фокуса
      }
    });
let stena=true;
let podsk=true;
let krovla=true;
function type0(){
    const headertext = document.querySelector(".header-text p");
    headertext.className="link"
    const header = document.querySelector(".header-text div");

    const div = document.createElement('div');
    const p2 = document.createElement('p');
    p2.append("3Д МОДЕЛЬ");
    p2.className="link";
    div.prepend(p2);
    const h = document.createElement('h2');
    h.append("| ");
    div.prepend(h);
    const p = document.createElement('p');
    p.append("ВЫБОР КАЛЬКУЛЯТОРА");
    p.addEventListener("click", (event) => {
        type0();
    })
    div.prepend(p);
    

    header.replaceWith(div)
    
    const con4 = document.querySelector(".con4");
    con4.style.display="none";
    const cont = document.querySelector(".headerlinemenu");
    cont.style.display= "block";
    const cont2 = document.querySelector(".mainmenu");
    cont2.style.display= "block";
    const cont3 = document.querySelector(".con1");
    cont3.style.display= "none";
    const cont13 = document.querySelector(".con2");
    cont13.style.display= "none";
    const cont23 = document.querySelector(".con3");
    cont23.style.display= "none";
    const cont4 = document.querySelector(".headerline");
    cont4.style.display= "none";
    const cont5 = document.querySelector(".end");
    cont5.style.display= "none";
    const cont61 = document.querySelector(".cc2");
    cont61.style.display= "block";
    const cont71 = document.querySelector(".cc3");
    cont71.style.display= "block";
    const cont6 = document.querySelector(".cc4");
    cont6.style.display= "block";
    const cont7 = document.querySelector(".cc5");
    cont7.style.display= "block";
    krovla=true;
    stena=true;
    podsk=true
}
function type3(){
    const headertext = document.querySelector(".header-text p");
    headertext.className="link"
    const header = document.querySelector(".header-text div");

    const h = document.createElement('h2');
    h.append("| ");
    header.prepend(h);
    const p = document.createElement('p');
    p.append("КАЛЬКУЛЯТОР");
    header.prepend(p);

    const cont = document.querySelector(".headerlinemenu");
    cont.style.display= "none";
    const cont2 = document.querySelector(".mainmenu");
    cont2.style.display= "none";
    const cont3 = document.querySelector(".con1");
    cont3.style.display= "block";
    const cont4 = document.querySelector(".headerline");
    cont4.style.display= "block";
    const cont5 = document.querySelector(".end");
    cont5.style.display= "block";
    
}
function type2(){
    const headertext = document.querySelector(".header-text p");
    headertext.className="link"
    const header = document.querySelector(".header-text div");

    const h = document.createElement('h2');
    h.append("| ");
    header.prepend(h);
    const p = document.createElement('p');
    p.append("КАЛЬКУЛЯТОР");
    header.prepend(p);

    const cont = document.querySelector(".headerlinemenu");
    cont.style.display= "none";
    const cont2 = document.querySelector(".mainmenu");
    cont2.style.display= "none";
    const cont3 = document.querySelector(".con1");
    cont3.style.display= "block";
    const cont4 = document.querySelector(".headerline");
    cont4.style.display= "block";
    const cont5 = document.querySelector(".end");
    cont5.style.display= "block";
    const cont6 = document.querySelector(".cc4");
    cont6.style.display= "none";
    const cont7 = document.querySelector(".cc5");
    cont7.style.display= "none";
    krovla=false;
}

function type1(){
    const headertext = document.querySelector(".header-text p");
    headertext.className="link"
    const header = document.querySelector(".header-text div");

    const h = document.createElement('h2');
    h.append("| ");
    header.prepend(h);
    const p = document.createElement('p');
    p.append("КАЛЬКУЛЯТОР");
    header.prepend(p);

    const cont = document.querySelector(".headerlinemenu");
    cont.style.display= "none";
    const cont2 = document.querySelector(".mainmenu");
    cont2.style.display= "none";
    const cont3 = document.querySelector(".con1");
    cont3.style.display= "block";
    const cont4 = document.querySelector(".headerline");
    cont4.style.display= "block";
    const cont5 = document.querySelector(".end");
    cont5.style.display= "block";
    const cont6 = document.querySelector(".cc2");
    cont6.style.display= "none";
    const cont7 = document.querySelector(".cc3");
    cont7.style.display= "none";
    podsk=false
    stena=false;
}
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
    const cont8 = document.querySelector(".option-content8");
    cont8.style.display= "none";
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
function Hiddecontent8(){
    const cont = document.querySelector(".option-content8");
    cont.style.display= "block";
    const cansel = document.querySelector(".cansel");
    cansel.style.display= "block";
    
}
function option8(a){
    if(a==1){
        const post = document.querySelector(".post");
        post.style.display= "none";
        const cont2 = document.querySelector(".select-text8 div");
        const span = document.createElement('div');
        span.append("Доставка материалов");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content8");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text8");
        selecttext1.style.color="black"
    }else if(a==2){
        const cont2 = document.querySelector(".select-text8 div");
        const post = document.querySelector(".post");
        post.style.display= "block";
        const span = document.createElement('div');
        span.append("Самовывоз материалов");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content8");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text8");
        selecttext1.style.color="black"
    }else if(a==3){
        const cont2 = document.querySelector(".select-text8 div");
        const post = document.querySelector(".post");
        post.style.display= "block";
        const span = document.createElement('div');
        span.append("Доставка и постройка дома");
        cont2.replaceWith(span);
        const cont = document.querySelector(".option-content8");
        cont.style.display= "none";
        const cansel = document.querySelector(".cansel");
        cansel.style.display= "none";
        const selecttext1 = document.querySelector(".select-text8");
        selecttext1.style.color="black"
    }

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
        span.append("Укажите толщину ",br,"по утеплителю панели кровли");
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
    let n=input1.value.replace(/[^.,]/g, '');
    let i=input1.value.replace(/[^0-9.,]/g, '');
    if(n.length<2 && i[0]!=',' && i[0]!='.'){
        
        input1.value=i;
        if (i !== "") {
            input1.value+=" м";
        }
        console.log(input1.value);
    }else{
        input1.value="";
    }
    
});
const input2 = document.querySelector('.inpt02');
input2.addEventListener("change", (event) => {
    let n=input2.value.replace(/[^.,]/g, '');
    let i=input2.value.replace(/[^0-9.,]/g, '');
    if(n.length<2 && i[0]!=',' && i[0]!='.'){
        
        input2.value=i;
        if (i !== "") {
            input2.value+=" м";
        }
        console.log(input2.value);
    }else{
        input2.value="";
    }
});
const input3 = document.querySelector('.inpt03');
input3.addEventListener("change", (event) => {
    let n=input3.value.replace(/[^.,]/g, '');
    let i=input3.value.replace(/[^0-9.,]/g, '');
    if(n.length<2 && i[0]!=',' && i[0]!='.'){
        
        input3.value=i;
        if (i !== "") {
            input3.value+=" м";
        }
        console.log(input3.value);
    }else{
        input3.value="";
    }

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
        span.append("Укажите толщину ",br,"по утеплителю панели стены");
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
        let n=m[i].value.replace(/[^.,]/g, '');
        let li=m[i].value.replace(/[^0-9.,]/g, '');
        if(n.length<2 && li[0]!=',' && li[0]!='.'){
        
            m[i].value=li;
            if (li !== "") {
                m[i].value+=" м";
            }
        }else{
            m[i].value="";
        }
    
        
    });
}

const t = document.querySelectorAll(".t");

for (let i = 0; i < t.length; i++) {
    t[i].addEventListener("change", (event) => {
        let n=t[i].value.replace(/[^.,]/g, '');
        let li=t[i].value.replace(/[^0-9.,]/g, '');
        if(n.length<2 && li[0]!=',' && li[0]!='.'){
        
            t[i].value=li;
            if (li !== "") {
                t[i].value+=" т";
            }
        }else{
            t[i].value="";
        }
    
        
    });
}

function cont(ar){
    console.log("hi")
    
    
    let lent = document.createElement('div');
    lent.className="lent";
    let corton = document.createElement('div');
    corton.className="corton nd";

    let input = document.createElement('input');
    input.className="len16 sht";
    input.type="text";
    input.style.borderRight="none";
    input.style.borderTop="none";
    input.placeholder=" ";
    let label = document.createElement('label');
    label.className="placeholder";
    label.append("Количество");
    let labeld = document.createElement('label');
    labeld.className="placeholderdown";
    labeld.append("шт");

    corton.append(input);
    corton.append(label);
    corton.append(labeld);

    let corton2 = document.createElement('div');
    corton2.className="corton nd";
    let input2 = document.createElement('input');
    input2.className="len16 sht ";
    input2.style.borderTop="none";
    input2.type="text";
    input2.style.borderRight="none";
    input2.placeholder=" ";
    let label2 = document.createElement('label');
    label2.className="placeholder";
    label2.append("Ширина ворот");
    let labeld2 = document.createElement('label');
    labeld2.className="placeholderdown";
    labeld2.append("м");

    corton2.append(input2);
    corton2.append(label2);
    corton2.append(labeld2);

    let corton3 = document.createElement('div');
    corton3.className="corton nd";
    
    let input3 = document.createElement('input');
    input3.className="len16 sht ";
    input3.style.borderTop="none";
    input3.type="text";
    input3.placeholder=" ";
    let label3 = document.createElement('label');
    label3.className="placeholder";
    label3.append("Высота ворот");
    let labeld3 = document.createElement('label');
    labeld3.className="placeholderdown";
    labeld3.append("м");

    corton3.append(input3);
    corton3.append(label3);
    corton3.append(labeld3);

    lent.append(corton);
    lent.append(corton2);
    lent.append(corton3);







    if(ar==1){
        const cont = document.querySelector(".cont0001");
        cont.append(lent);
        input.className="len16 sht  sht sht1";
        input2.className="len16 sht  m sh1";
        input3.className="len16 sht  m v1";
    }else if(ar==2){
        const cont = document.querySelector(".cont0002");
        cont.append(lent);
        input.className="len16 sht  sht sht2";
        input2.className="len16 sht  m sh2";
        input3.className="len16 sht  m v2";
    }else if(ar==3){
        const cont = document.querySelector(".cont0003");
        cont.append(lent);
        input.className="len16 sht  sht sht3";
        input2.className="len16 sht  m sh3";
        input3.className="len16 sht  m v3";
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
            let n=m[i].value.replace(/[^.,]/g, '');
            let li=m[i].value.replace(/[^0-9.,]/g, '');
            if(n.length<2 && li[0]!=',' && li[0]!='.'){
            
                m[i].value=li;
                if (li !== "") {
                    m[i].value+=" м";
                }
            }else{
                m[i].value="";
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
            let n=t[i].value.replace(/[^.,]/g, '');
            let li=t[i].value.replace(/[^0-9.,]/g, '');
            if(n.length<2 && li[0]!=',' && li[0]!='.'){
            
                t[i].value=li;
                if (li !== "") {
                    t[i].value+=" т";
                }
            }else{
                t[i].value="";
            }
        
            
        });
    }
}
let num=1;
let pred=true;
let pred2=true;
function next(a){
    console.log(num)
    if (a && num!=4){
        
        num++;
        
        if (num==2){
            
            
            const selecttext1 = document.querySelector(".select-text1 div");
            var selecttext100 = selecttext1.textContent || selecttext1.innerText;
            const selecttext2 = document.querySelector(".select-text2 div");
            var selecttext200 = selecttext2.textContent || selecttext2.innerText;
            const selecttext3 = document.querySelector(".select-text3 div");
            var selecttext300 = selecttext3.textContent || selecttext3.innerText;
            const selecttext4 = document.querySelector(".select-text4 div");
            var selecttext400 = selecttext4.textContent || selecttext4.innerText;
            const selecttext8 = document.querySelector(".select-text5 div");
            var selecttext800 = selecttext8.textContent || selecttext8.innerText;
            const selecttext9 = document.querySelector(".select-text6 div");
            var selecttext900 = selecttext9.textContent || selecttext9.innerText;
            const selecttext10 = document.querySelector(".select-text7 div");
            var selecttext1000 = selecttext10.textContent || selecttext10.innerText;
            const selecttext5 = document.querySelector(".inpt01").value;
            const selecttext6 = document.querySelector(".inpt02").value;
            const selecttext7 = document.querySelector(".inpt03").value;
            console.log("Укажите толщину по утеплителю панели стены");
            if(selecttext100=="Укажите тип кровли" && krovla){
                let pred1f = document.querySelector(".pred1f");
                pred1f.style.display="block";
                let pred2f = document.querySelector(".pred2f");
                pred2f.style.display="none";
                let pred3 = document.querySelector(".pred3f");
                pred3.style.display="none";
                let pred4 = document.querySelector(".pred4f");
                pred4.style.display="none";
                let pred5 = document.querySelector(".pred5f");
                pred5.style.display="none";
                let pred6 = document.querySelector(".pred6f");
                pred6.style.display="none";
                let pred7 = document.querySelector(".pred7f");
                pred7.style.display="none";
                pred1f.classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred1f").classList.remove('shaking');
                }, 500);
                
                num=1;
            }else if(selecttext200=="Укажите тип панели кровли" && krovla){
                let pred1f = document.querySelector(".pred1f");
                pred1f.style.display="none";
                let pred2f = document.querySelector(".pred2f");
                pred2f.style.display="block";
                let pred3 = document.querySelector(".pred3f");
                pred3.style.display="none";
                let pred4 = document.querySelector(".pred4f");
                pred4.style.display="none";
                let pred5 = document.querySelector(".pred5f");
                pred5.style.display="none";
                let pred6 = document.querySelector(".pred6f");
                pred6.style.display="none";
                let pred7 = document.querySelector(".pred7f");
                pred7.style.display="none";
                pred2f.classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred2f").classList.remove('shaking');
                }, 500);
                num=1;
                
            }else if(selecttext300=="Укажите толщину по утеплителю панели кровли" && krovla){
                let pred1 = document.querySelector(".pred1f");
                pred1.style.display="none";
                let pred2 = document.querySelector(".pred2f");
                pred2.style.display="none";
                let pred3 = document.querySelector(".pred3f");
                pred3.style.display="block";
                let pred4 = document.querySelector(".pred4f");
                pred4.style.display="none";
                let pred5 = document.querySelector(".pred5f");
                pred5.style.display="none";
                let pred6 = document.querySelector(".pred6f");
                pred6.style.display="none";
                let pred7 = document.querySelector(".pred7f");
                pred7.style.display="none";
                pred3.classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred3f").classList.remove('shaking');
                }, 500);
                
                num=1;
            }else if(selecttext400=="Укажите толщинуоблицовки панели кровли" && krovla){
                let pred1 = document.querySelector(".pred1f");
                pred1.style.display="none";
                let pred2 = document.querySelector(".pred2f");
                pred2.style.display="none";
                let pred3 = document.querySelector(".pred3f");
                pred3.style.display="none";
                let pred4 = document.querySelector(".pred4f");
                pred4.style.display="block";
                let pred5 = document.querySelector(".pred5f");
                pred5.style.display="none";
                let pred6 = document.querySelector(".pred6f");
                pred6.style.display="none";
                let pred7 = document.querySelector(".pred7f");
                pred7.style.display="none";
                pred4.classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred4f").classList.remove('shaking');
                }, 500);
                
                num=1;
            }else if((selecttext5=="" || selecttext6=="" || selecttext7=="") && stena){
                let pred1 = document.querySelector(".pred1f");
                pred1.style.display="none";
                let pred2 = document.querySelector(".pred2f");
                pred2.style.display="none";
                let pred3 = document.querySelector(".pred3f");
                pred3.style.display="none";
                let pred4 = document.querySelector(".pred4f");
                pred4.style.display="none";
                let pred5 = document.querySelector(".pred5f");
                pred5.style.display="block";
                let pred6 = document.querySelector(".pred6f");
                pred6.style.display="none";
                let pred7 = document.querySelector(".pred7f");
                pred7.style.display="none";
                pred5.classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred5f").classList.remove('shaking');
                }, 500);
                
                num=1;
            }else if(selecttext800=="Укажите тип панели стены"&& stena){
                let pred1 = document.querySelector(".pred1f");
                pred1.style.display="none";
                let pred2 = document.querySelector(".pred2f");
                pred2.style.display="none";
                let pred3 = document.querySelector(".pred3f");
                pred3.style.display="none";
                let pred4 = document.querySelector(".pred4f");
                pred4.style.display="none";
                let pred5 = document.querySelector(".pred5f");
                pred5.style.display="none";
                let pred7 = document.querySelector(".pred7f");
                pred7.style.display="none";
                
                let pred6 = document.querySelector(".pred6f");
                pred6.style.display="block";
                pred6.classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred6f").classList.remove('shaking');
                }, 500);
                
                num=1;
            }else if(selecttext900=="Укажите толщину по утеплителю панели стены" && stena){
                console.log("hir")
                let pred1 = document.querySelector(".pred1f");
                pred1.style.display="none";
                let pred2 = document.querySelector(".pred2f");
                pred2.style.display="none";
                let pred3 = document.querySelector(".pred3f");
                pred3.style.display="none";
                let pred4 = document.querySelector(".pred4f");
                pred4.style.display="none";
                let pred5 = document.querySelector(".pred5f");
                pred5.style.display="none";
                let pred6 = document.querySelector(".pred6f");
                pred6.style.display="none";
                let pred7 = document.querySelector(".pred7f");
                pred7.style.display="block";
                pred7.classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred7f").classList.remove('shaking');
                }, 500);
                
                num=1;
            }else if(selecttext1000=="Укажите толщинуоблицовки панели стены" && stena){
                let pred1 = document.querySelector(".pred1f");
                pred1.style.display="none";
                let pred2 = document.querySelector(".pred2f");
                pred2.style.display="none";
                let pred3 = document.querySelector(".pred3f");
                pred3.style.display="none";
                let pred4 = document.querySelector(".pred4f");
                pred4.style.display="none";
                let pred5 = document.querySelector(".pred5f");
                pred5.style.display="none";
                let pred6 = document.querySelector(".pred6f");
                pred6.style.display="none";
                let pred7 = document.querySelector(".pred7f");
                pred7.style.display="none";
                let pred8 = document.querySelector(".pred8f");
                pred8.style.display="block";
                pred8.classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred8f").classList.remove('shaking');
                }, 500);
                
                num=1;
            }else{
                console.log("selecttext1");
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
                if(podsk){
                    const con4 = document.querySelector(".con4");
                    con4.style.display="block";
                }
                window.scrollTo(0, 0)
            }
            
            
            

        }else if (num==3){
            const selecttext1 = document.querySelector(".inpt04").value;
            
            let predupre=0

            const sht2 = document.querySelectorAll(".sht2");
            const sh2 = document.querySelectorAll(".sh2");
            const v2 = document.querySelectorAll(".v2");
            for (let i = 0; i < sht2.length; i++) {
                d=sht2[i].value.slice(0, -2)*1+sh2[i].value.slice(0, -2)*1+v2[i].value.slice(0, -2)*1;
                console.log(d)
                if (d==1 || d==2){
                    console.log('hi')
                    num=2;
                    predupre=3;
                }
            }

            const sht1 = document.querySelectorAll(".sht1");
            const sh1 = document.querySelectorAll(".sh1");
            const v1 = document.querySelectorAll(".v1");
            for (let i = 0; i < sht1.length; i++) {
                d=sht1[i].value.slice(0, -2)*1+sh1[i].value.slice(0, -2)*1+v1[i].value.slice(0, -2)*1;
                console.log(d)
                if (d==1 || d==2){
                    console.log('hi')
                    num=2;
                    predupre=2;
                }
                    
            }

            


            pred2=false
            const sht3 = document.querySelectorAll(".sht3");
            const sh3 = document.querySelectorAll(".sh3");
            const v3 = document.querySelectorAll(".v3");
            
            for (let i = 0; i < sht3.length; i++) {
                d=sht3[i].value.slice(0, -2)*1+sh3[i].value.slice(0, -2)*1+v3[i].value.slice(0, -2)*1;
                console.log(d)
                if (d==1 || d==2){
                    console.log('hi')
                    num=2;
                    predupre=1;
                }
                    
            }

            
            if(selecttext1==""  && krovla){
                let pred9 = document.querySelector(".pred9f");
                pred9.style.display="block";
                pred9.classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred9f").classList.remove('shaking');
                }, 500);
                
                num=2;
            }else if(predupre==1){
                let pred9 = document.querySelector(".pred9f");
                pred9.style.display="none";
                let pred10 = document.querySelector(".pred10f div");
                let div = document.createElement('div');
                div.append("*Заполните строку до конца");
                pred10.replaceWith(div);

                let pred11 = document.querySelector(".pred11f div");
                let div1 = document.createElement('div');
                div1.append("*не обязательно");
                pred11.replaceWith(div1);
                let pred12 = document.querySelector(".pred12f div");
                let div2 = document.createElement('div');
                div2.append("*не обязательно");
                pred12.replaceWith(div2);
                document.querySelector(".pred10f").classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred10f").classList.remove('shaking');
                }, 500);
                
                num=2;
            }else if(predupre==2){
                let pred9 = document.querySelector(".pred9f");
                pred9.style.display="none";
                let pred10 = document.querySelector(".pred10f div");
                let div = document.createElement('div');
                div.append("*не обязательно");
                pred10.replaceWith(div);
                let pred11 = document.querySelector(".pred11f div");
                let div1 = document.createElement('div');
                div1.append("*Заполните строку до конца");
                pred11.replaceWith(div1);
                let pred12 = document.querySelector(".pred12f div");
                let div2 = document.createElement('div');
                div2.append("*не обязательно");
                pred12.replaceWith(div2);
                
                document.querySelector(".pred11f").classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred11f").classList.remove('shaking');
                }, 500);
                
                num=2;
            }else if(predupre==3){
                let pred9 = document.querySelector(".pred9f");
                pred9.style.display="none";
                let pred10 = document.querySelector(".pred10f div");
                let div = document.createElement('div');
                div.append("*не обязательно");
                pred10.replaceWith(div);
                let pred11 = document.querySelector(".pred11f div");
                let div1 = document.createElement('div');
                div1.append("*не обязательно");
                pred11.replaceWith(div1);
                let pred12 = document.querySelector(".pred12f div");
                let div2 = document.createElement('div');
                div2.append("*Заполните строку до конца");
                pred12.replaceWith(div2);
                document.querySelector(".pred12f").classList.add('shaking');
                setTimeout(function() {
                    document.querySelector(".pred12f").classList.remove('shaking');
                }, 500);
                
                num=2;
            }else{
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
                window.scrollTo(0, 0)
                if(podsk){
                    const con4 = document.querySelector(".con4");
                    con4.style.display="none";
                }
            }
            

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
            if(podsk){
                const con4 = document.querySelector(".con4");
                con4.style.display="block";
            }
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
    const selecttext52 = document.querySelector(".inpt16").value;
    
    const selecttext53= document.querySelector(".inpt17").value;
    console.log(selecttext53)
    const selecttext54= document.querySelector(".inpt18").value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phonePattern = /^\d{11}$/;
    var namePattern = /^[А-ЯЁҒғҚқҢңӨөҰұҮүІі]+$/i;

    const selecttext55 = document.querySelector(".inpt19 div");
    var selecttext56 = selecttext55.textContent || selecttext55.innerText;
    console.log(selecttext56)
    if(selecttext52==""){
        const pred14f = document.querySelector(".pred14f");
        pred14f.style.display="none";
        const pred15f = document.querySelector(".pred15f");
        pred15f.style.display="none";
        const pred16f = document.querySelector(".pred16f");
        pred16f.style.display="none";
        const pred13fk = document.querySelector(".pred13f");
        pred13fk.style.display="none";
        const pred17fk = document.querySelector(".pred17f");
        pred17fk.style.display="block";
        const pred18fk = document.querySelector(".pred18f");
        pred18fk.style.display="none";
        const pred19fk = document.querySelector(".pred19f");
        pred19fk.style.display="none";
        pred17fk.classList.add('shaking');
        setTimeout(function() {
            document.querySelector(".pred17f").classList.remove('shaking');
        }, 500);
    } else if (!namePattern.test(selecttext52)) {
        const pred17fk = document.querySelector(".pred17f");
        pred17fk.style.display="none";
        const pred18fk = document.querySelector(".pred18f");
        pred18fk.style.display="none";
        const pred19fk = document.querySelector(".pred19f");
        pred19fk.style.display="none";
        const pred14f = document.querySelector(".pred14f");
        pred14f.style.display="none";
        const pred15f = document.querySelector(".pred15f");
        pred15f.style.display="none";
        const pred16f = document.querySelector(".pred16f");
        pred16f.style.display="none";
        const pred13fk = document.querySelector(".pred13f");
        pred13fk.style.display="block";
        pred13fk.classList.add('shaking');
        setTimeout(function() {
            document.querySelector(".pred13f").classList.remove('shaking');
        }, 500);
    } else if(selecttext53==""){
        const pred14f = document.querySelector(".pred14f");
        pred14f.style.display="none";
        const pred15f = document.querySelector(".pred15f");
        pred15f.style.display="none";
        const pred16f = document.querySelector(".pred16f");
        pred16f.style.display="none";
        const pred13fk = document.querySelector(".pred13f");
        pred13fk.style.display="none";
        const pred17fk = document.querySelector(".pred17f");
        pred17fk.style.display="none";
        const pred18fk = document.querySelector(".pred18f");
        pred18fk.style.display="block";
        const pred19fk = document.querySelector(".pred19f");
        pred19fk.style.display="none";
        pred18fk.classList.add('shaking');
        setTimeout(function() {
            document.querySelector(".pred18f").classList.remove('shaking');
        }, 500);
    }  else if (!phonePattern.test(selecttext53.replace(/[^0-9]/g, ''))) {
        const pred17fk = document.querySelector(".pred17f");
        pred17fk.style.display="none";
        const pred18fk = document.querySelector(".pred18f");
        pred18fk.style.display="none";
        const pred19fk = document.querySelector(".pred19f");
        pred19fk.style.display="none";
        const pred13f = document.querySelector(".pred13f");
        pred13f.style.display="none";
        const pred15f = document.querySelector(".pred15f");
        pred15f.style.display="none";
        const pred16f = document.querySelector(".pred16f");
        pred16f.style.display="none";
        const pred14f = document.querySelector(".pred14f");
        pred14f.style.display="block";
        pred14f.classList.add('shaking');
        setTimeout(function() {
            document.querySelector(".pred14f").classList.remove('shaking');
        }, 500);
    } else if(selecttext54==""){
        const pred14f = document.querySelector(".pred14f");
        pred14f.style.display="none";
        const pred15f = document.querySelector(".pred15f");
        pred15f.style.display="none";
        const pred16f = document.querySelector(".pred16f");
        pred16f.style.display="none";
        const pred13fk = document.querySelector(".pred13f");
        pred13fk.style.display="none";
        const pred17fk = document.querySelector(".pred17f");
        pred17fk.style.display="none";
        const pred18fk = document.querySelector(".pred18f");
        pred18fk.style.display="none";
        const pred19fk = document.querySelector(".pred19f");
        pred19fk.style.display="block";
        pred19fk.classList.add('shaking');
        setTimeout(function() {
            document.querySelector(".pred19f").classList.remove('shaking');
        }, 500);
    }else if (!emailPattern.test(selecttext54)) {
        const pred17fk = document.querySelector(".pred17f");
        pred17fk.style.display="none";
        const pred18fk = document.querySelector(".pred18f");
        pred18fk.style.display="none";
        const pred19fk = document.querySelector(".pred19f");
        pred19fk.style.display="none";
        const pred13f = document.querySelector(".pred13f");
        pred13f.style.display="none";
        const pred14f = document.querySelector(".pred14f");
        pred14f.style.display="none";
        const pred16f = document.querySelector(".pred16f");
        pred16f.style.display="none";
        const pred15fk = document.querySelector(".pred15f");
        pred15fk.style.display="block";
        pred15fk.classList.add('shaking');
        setTimeout(function() {
            document.querySelector(".pred15f").classList.remove('shaking');
        }, 500);
    } else if(selecttext56=="Выберите услугу"){
        const pred13f = document.querySelector(".pred13f");
        pred13f.style.display="none";
        const pred14f = document.querySelector(".pred14f");
        pred14f.style.display="none";
        const pred15fk = document.querySelector(".pred15f");
        pred15fk.style.display="none";

        const pred16fk = document.querySelector(".pred16f");
        pred16fk.style.display="block";
        pred16fk.classList.add('shaking');
        setTimeout(function() {
            document.querySelector(".pred16f").classList.remove('shaking');
        }, 500);
    }else {
        const answer = document.querySelector(".answer");
        const e12 = document.querySelectorAll(".sht1");
        const e13 = document.querySelectorAll(".sh1");
        const e14 = document.querySelectorAll(".v1");
        let g1=0;
        for (let i = 0; i < e12.length; i++) {
            
            g1=e12[i].value.slice(0, -3)* e13[i].value.slice(0, -2).replace(/,/, ".")* e14[i].value.slice(0, -2).replace(/,/, ".");
        }
        const e15 = document.querySelectorAll(".sht2");
        const e16 = document.querySelectorAll(".sh2");
        const e17 = document.querySelectorAll(".v2");
        let g2=0;
        for (let i = 0; i < e12.length; i++) {
            
            g2=e15[i].value.slice(0, -3)* e16[i].value.slice(0, -2).replace(/,/, ".")* e17[i].value.slice(0, -2).replace(/,/, ".");
        }
        const e18 = document.querySelectorAll(".sht3");
        const e19 = document.querySelectorAll(".sh3");
        const e20 = document.querySelectorAll(".v3");
        let g3=0;
        for (let i = 0; i < e12.length; i++) {
            
            g3=e18[i].value.slice(0, -3)* e19[i].value.slice(0, -2).replace(/,/, ".")* e20[i].value.slice(0, -2).replace(/,/, ".");
        }
        
        const e5 = document.querySelector(".inpt01").value;
        
        const e6 = document.querySelector(".inpt02").value;
        
        const e7 = document.querySelector(".inpt03").value;

        
        
        let br7 = document.createElement('br');
        answer.append(br7);
        answer.append("|площадь стен: ")
        
        let g4=e5.slice(0, -2).replace(/,/, ".")*e7.slice(0, -2).replace(/,/, ".")*2+e6.slice(0, -2).replace(/,/, ".")*e7.slice(0, -2).replace(/,/, ".")*2;
        answer.append(g4-g3-g2-g1);

        let br10 = document.createElement('br');
        answer.append(br10);
        answer.append("|площадь кровли: ");
        
        answer.append(e5.slice(0, -2).replace(/,/, ".")*e6.slice(0, -2).replace(/,/, ".")*0.52);
        let br8 = document.createElement('br');
        answer.append(br8);
        answer.append("|панели для фронтон: ")

        let a=e6.slice(0, -2);
        let b=Math.ceil(a/10);
        sum=0;
        for (let i = 0; i < b; i++) {
            doska=a-i*10;
            sum+=doska
        }
        answer.append(sum);

        


        

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

        let br9 = document.createElement('br');
        answer.append(br9);
        answer.append('|дверей ')
        for (let i = 0; i < e12.length; i++) {
            let br = document.createElement('br');
            answer.append(br);
            answer.append(e12[i].value,',', e13[i].value,',', e14[i].value)
        }

        
        let br = document.createElement('br');
        answer.append(br);
        answer.append('|окна ')
        for (let i = 0; i < e15.length; i++) {
            let br = document.createElement('br');
            answer.append(br);
            answer.append(e15[i].value,',', e16[i].value,',', e17[i].value)
        }

        
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
    
    

}
