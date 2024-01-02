//<div class="flex-container">
//<div class="first">
//<div class="center">
//    Калькулятор
//</div>
//</div>
//<div class="second">

//<div class="center">
//    3D модель
//</div>
//</div>
//</div>

let krovla="Односкатная";

let thereIsMiniContent1=true;
let thereIsMiniContent2=false;
let thereIsMiniContent3=false;
let thereIsMiniContent6=false;

function result(){
    const set = [];
    const setcol = [];
    const col01 = document.querySelectorAll(".col01");
    const G2 = document.querySelectorAll(".G2");
    let worked=true;
    for (let i = 0; i < G2.length; i++) {
      for (let j = 0; j < set.length; j++) {
        if(set[j]==G2[i].value){
            setcol[j]=setcol[j]*1+col01[i].value*1;
            worked=false;
        }
      }
      if(worked){
        console.log(col01[i].value)
        set.push(G2[i].value);
        setcol.push(col01[i].value);
      }
      worked=true;
      
    }

    const nodeList = document.querySelectorAll(".G");

    for (let i = 0; i < nodeList.length; i++) {
      for (let j = 0; j < set.length; j++) {
        if(set[j]==nodeList[i].value){
            setcol[j]=setcol[j]*1+1;
            worked=false;
        }
      }
      if(worked){
        set.push(nodeList[i].value);
        setcol.push(1);
      }
      worked=true;
      
    }

    
    const h9 = document.querySelector(".h9");
    h9.append(" Тип крыши: "+krovla, document.createElement('br'))

    if(thereIsMiniContent2){
        const set01 = document.querySelector(".inpt01").value;
        h9.append("Пролеты: "+set01, document.createElement('br'))
        
    }else{
        const set01 = "не указано";
        h9.append("Пролеты: "+set01, document.createElement('br'))
        
    }
    if(thereIsMiniContent3){
        h9.append("Крановые оборудование: " , document.createElement('br'));
        for (let i = 0; i < set.length; i++) {
            h9.append(setcol[i]+" шт "+ " по "+set[i]+" т", document.createElement('br'));
        }
    }else{
        h9.append("Крановые оборудование: не указано", document.createElement('br'));
    }
    
        const set02 = document.querySelector(".set02").value;
        const set03 = document.querySelector(".set03").value;
        const set04 = document.querySelector(".set04").value;
        h9.append(" Длина здания: "+set02, document.createElement('br'),"Ширина здания: "+set03, document.createElement('br'),"Высота до низа несущих конструкций: "+set04, document.createElement('br'));
    
        const set05 = document.querySelector(".set05").value;
        const set06 = document.querySelector(".set06").value;
        const set07 = document.querySelector(".set07").value;
        const set08 = document.querySelector(".set08").value;
        h9.append("Кровля здания: "+set05, document.createElement('br'),"Кровля здания: "+set06, document.createElement('br'),"Кровля здания: "+set07, document.createElement('br'),"Кровля здания: "+set08, document.createElement('br'));
    
    let set1 = 0;

    const G4 = document.querySelectorAll(".G4");
    const G5 = document.querySelectorAll(".G5");

    for (let i = 0; i < G4.length; i++) {
        set1+=G4[i].value*G5[i].value;
    }
    const G6 = document.querySelectorAll(".G6");
    const G7 = document.querySelectorAll(".G7");
    const G8 = document.querySelectorAll(".G8");
    

    for (let i = 0; i < G6.length; i++) {
        console.log(G6[i].value, G7[i].value, G8[i].value)
        set1+=G6[i].value*G7[i].value*G8[i].value;
    }
    if(thereIsMiniContent6){
        h9.append("площадь проемов:"+set1, document.createElement('br'));
        
        
    }else{
        h9.append("площадь проемов: не указано", document.createElement('br'));
        
    }
    
    
    const set09 = document.querySelector(".set09").value;
    const set10 = document.querySelector(".set10").value;
    const set11 = document.querySelector(".set11").value;

    
    

    
    
     
    

    

    
    
    

    
    h9.append("ФИО : "+set09, document.createElement('br'),"E-mail: "+set10, document.createElement('br'),"Телефон: "+set11);
    const answer = document.querySelector(".answer");
    answer.style.display="block";


    
}


function krovla1(a){
    
    if(a==1){
        const krovla1 = document.querySelector(".krovla1");
        krovla1.src="img/typeoff1.png";

        const krovla2 = document.querySelector(".krovla2");
        krovla2.src="img/type2.png";

        krovla="Односкатная";
        
    }else if(a==2){
        const krovla1 = document.querySelector(".krovla1");
        krovla1.src="img/type1.png";

        const krovla2 = document.querySelector(".krovla2");
        krovla2.src="img/typeoff2.png";

        krovla="Двухскатная";
        
    }
}
function add1(a){
    
    
    let content_openings = document.createElement('div');
    content_openings.id="content_openings";
    
    let cross = document.createElement('button');
    cross.append("x");
    cross.type="submit";
    cross.className="cross";
    cross.addEventListener('click', function() {
        content_openings.remove();
    });
    content_openings.append(cross);

    if(a==1){
        const input = document.querySelector('.input001');
        let span = document.createElement('span');
        span.append(input.value);
        span.value=input.value;
        span.className="col G8";
        content_openings.append(span);
    }if(a==2){
        const input = document.querySelector('.input002');
        let span = document.createElement('span');
        span.append(input.value);
        span.value=input.value;
        span.className="col G8";
        content_openings.append(span);
    }if(a==3){
        const input = document.querySelector('.input003');
        let span = document.createElement('span');
        span.append(input.value);
        span.value=input.value;
        span.className="col G8";
        content_openings.append(span);
    }

    
    let align_size = document.createElement('div');
    align_size.id="align_size";
    let texxt = document.createElement('h4');
    texxt.append("Ширина");
    let div2 = document.createElement('div');
    div2.append(texxt);
    align_size.append(div2);
    let wrapper = document.createElement('span');
    wrapper.className="wrapper";
    
    let minus = document.createElement('button');
    minus.append("-");
    minus.type="button";
    minus.className="js-minus-btn ";
    wrapper.append(minus)

    let number = document.createElement('input');
    number.type="text";
    number.value="1";
    number.className="js-number G6";
    wrapper.append(number)


    let plus = document.createElement('button');
    plus.append("+");
    plus.type="button";
    plus.className="js-plus-btn ";
    wrapper.append(plus)
    div2.append(wrapper);
    align_size.append(div2);

    let texxt2 = document.createElement('h4');
    texxt2.append("м");
    div2.append(texxt2);
    align_size.append(div2);

    

    let texxt6 = document.createElement('h4');
    texxt6.append("Высота");
    let div1 = document.createElement('div');
    div1.append(texxt6);
    align_size.append(div1);
    let wrapper6 = document.createElement('span');
    wrapper6.className="wrapper";
    
    let minus6 = document.createElement('button');
    minus6.append("-");
    minus6.type="button";
    minus6.className="js-minus-btn ";
    wrapper6.append(minus6)

    let number6 = document.createElement('input');
    number6.type="text";
    number6.value="1";
    number6.className="js-number G7";
    wrapper6.append(number6)


    let plus6 = document.createElement('button');
    plus6.append("+");
    plus6.type="button";
    plus6.className="js-plus-btn ";
    wrapper6.append(plus6)
    div1.append(wrapper6);
    align_size.append(div1);

    let texxt26 = document.createElement('h4');
    texxt26.append("м");
    div1.append(texxt26);
    align_size.append(div1);
    

    
    content_openings.append(align_size);
    if(a==1){
        const maincontent_openings = document.querySelector('.maincontent_openings01');
        maincontent_openings.prepend(content_openings);
    }else if(a==2){
        const maincontent_openings = document.querySelector('.maincontent_openings02');
        maincontent_openings.prepend(content_openings);
    }else if(a==3){
        const maincontent_openings = document.querySelector('.maincontent_openings03');
        maincontent_openings.prepend(content_openings);
    }
    
    var counts = document.querySelectorAll('.wrapper');
    counts.forEach(countFunc);
}

function addOther1(a){
    
    
    let content_openings = document.createElement('div');
    content_openings.id="content_openings";
    
    let cross = document.createElement('button');
    cross.append("x");
    cross.type="submit";
    cross.className="cross";
    cross.addEventListener('click', function() {
        content_openings.remove();
    });
    content_openings.append(cross);

    const input = document.querySelector('.inputTable');
    let span = document.createElement('span');
    span.append(1);
    span.className="col";
    content_openings.append(span);

    
    let align_size = document.createElement('div');
    align_size.id="align_size";
    let texxt = document.createElement('h4');
    texxt.append("Ширина");
    let div2 = document.createElement('div');
    div2.append(texxt);
    align_size.append(div2);
    let wrapper = document.createElement('span');
    wrapper.className="wrapper";
    
    let minus = document.createElement('button');
    minus.append("-");
    minus.type="button";
    minus.className="js-minus-btn ";
    wrapper.append(minus)

    let number = document.createElement('input');
    number.type="text";
    number.value="1";
    number.className="js-number G4";
    wrapper.append(number)


    let plus = document.createElement('button');
    plus.append("+");
    plus.type="button";
    plus.className="js-plus-btn ";
    wrapper.append(plus)
    div2.append(wrapper);
    align_size.append(div2);

    let texxt2 = document.createElement('h4');
    texxt2.append("м");
    div2.append(texxt2);
    align_size.append(div2);

    

    let texxt6 = document.createElement('h4');
    texxt6.append("Высота");
    let div1 = document.createElement('div');
    div1.append(texxt6);
    align_size.append(div1);
    let wrapper6 = document.createElement('span');
    wrapper6.className="wrapper";
    
    let minus6 = document.createElement('button');
    minus6.append("-");
    minus6.type="button";
    minus6.className="js-minus-btn ";
    wrapper6.append(minus6)

    let number6 = document.createElement('input');
    number6.type="text";
    number6.value="1";
    number6.className="js-number G5";
    wrapper6.append(number6)


    let plus6 = document.createElement('button');
    plus6.append("+");
    plus6.type="button";
    plus6.className="js-plus-btn ";
    wrapper6.append(plus6)
    div1.append(wrapper6);
    align_size.append(div1);

    let texxt26 = document.createElement('h4');
    texxt26.append("м");
    div1.append(texxt26);
    align_size.append(div1);
    

    
    
    

    
    content_openings.append(align_size);
    if(a==1){
        const maincontent_openings = document.querySelector('.maincontent_openings01');
        maincontent_openings.prepend(content_openings);
    }else if(a==2){
        const maincontent_openings = document.querySelector('.maincontent_openings02');
        maincontent_openings.prepend(content_openings);
    }else if(a==3){
        const maincontent_openings = document.querySelector('.maincontent_openings03');
        maincontent_openings.prepend(content_openings);
    }
    
    var counts = document.querySelectorAll('.wrapper');
    counts.forEach(countFunc);
}
a01=false;
a02=false;
a03=false;
function proem(a){
    if (a==1 && !a01){
        const cont0001 = document.querySelector(".cont0001");
        cont0001.style.display= "block";
        const icon001 = document.querySelector(".icon01");
        icon001.src="img/radioON.png";
        a01=true;
    }else if(a==1 && a01){
        const cont0001 = document.querySelector(".cont0001");
        cont0001.style.display= "none";
        const icon001 = document.querySelector(".icon01");
        icon001.src="img/radioOFF.png";
        a01=false;
    }else if (a==2 && !a02){
        const cont0002 = document.querySelector(".cont0002");
        cont0002.style.display= "block";
        const icon002 = document.querySelector(".icon02");
        icon002.src="img/radioON.png";
        a02=true;
    }else if(a==2 && a02){
        const cont0002 = document.querySelector(".cont0002");
        cont0002.style.display= "none";
        const icon002 = document.querySelector(".icon02");
        icon002.src="img/radioOFF.png";
        a02=false;
    }else if (a==3 && !a03){
        const cont0003 = document.querySelector(".cont0003");
        cont0003.style.display= "block";
        const icon003 = document.querySelector(".icon03");
        icon003.src="img/radioON.png";
        a03=true;
    }else if(a==3 && a03){
        const cont0003 = document.querySelector(".cont0003");
        cont0003.style.display= "none";
        const icon003 = document.querySelector(".icon03");
        icon003.src="img/radioOFF.png";
        a03=false;
    }
}


function countFunc(count) {
    var btnPlus = count.querySelector('.js-plus-btn');
    var btnMinus = count.querySelector('.js-minus-btn');
    var field = count.querySelector('.js-number');
    var fieldValue = parseFloat(field.value, 10);

    btnMinus.addEventListener('click', function() {
        if (fieldValue > 1) {
        fieldValue--;
        field.value = fieldValue;
        } else {
        return 1;
        }
    });
    btnPlus.addEventListener('click', function() {
        fieldValue++;
        field.value = fieldValue;
    });

}
var counts = document.querySelectorAll('.wrapper');
counts.forEach(countFunc);



function addOther(){
    console.log('hi')
    const maincontent_openings = document.querySelector('.maincontent_openings');
    let content_openings = document.createElement('div');
    content_openings.id="content_openings";
    let cross = document.createElement('button');
    cross.append("x");
    cross.type="submit";
    cross.className="cross";
    cross.addEventListener('click', function() {
        content_openings.remove();
    });
    content_openings.append(cross);

    const input = document.querySelector('.inputTable');
    let span = document.createElement('span');
    span.append(1);
    span.className="col";
    content_openings.append(span);

    
    let align_size = document.createElement('div');
    align_size.id="align_size";
    let texxt = document.createElement('h4');
    texxt.append("Грузоподьемность");
    align_size.append(texxt);
    let wrapper = document.createElement('span');
    wrapper.className="wrapper";
    
    let minus = document.createElement('button');
    minus.append("-");
    minus.type="button";
    minus.className="js-minus-btn ";
    wrapper.append(minus)

    let number = document.createElement('input');
    number.type="text";
    number.value="1";
    number.className="js-number G";
    wrapper.append(number)

    let plus = document.createElement('button');
    plus.append("+");
    plus.type="button";
    plus.className="js-plus-btn ";
    wrapper.append(plus)
    align_size.append(wrapper);

    let texxt2 = document.createElement('h4');
    texxt2.append("т");
    align_size.append(texxt2);

    
    content_openings.append(align_size);
    maincontent_openings.prepend(content_openings);
    var counts = document.querySelectorAll('.wrapper');
    counts.forEach(countFunc);

}
function add(){
    
    
    
    const maincontent_openings = document.querySelector('.maincontent_openings');
    let content_openings = document.createElement('div');
    content_openings.id="content_openings";
    let cross = document.createElement('button');
    cross.append("x");
    cross.type="submit";
    cross.className="cross";
    cross.addEventListener('click', function() {
        content_openings.remove();
    });
    content_openings.append(cross);

    
    const input = document.querySelector('.inputTable');
    let span = document.createElement('span');
    span.append(input.value);
    span.value=input.value;
    span.className="col col01";
    content_openings.append(span);
    

    

    let align_size = document.createElement('div');
    align_size.id="align_size";
    let texxt = document.createElement('h4');
    texxt.append("Грузоподьемность");
    align_size.append(texxt);
    let wrapper = document.createElement('span');
    wrapper.className="wrapper";
    
    let minus = document.createElement('button');
    minus.append("-");
    minus.type="button";
    minus.className="js-minus-btn ";
    wrapper.append(minus)

    let number = document.createElement('input');
    number.type="text";
    number.value="1";
    number.className="js-number G2";
    wrapper.append(number)

    let plus = document.createElement('button');
    plus.append("+");
    plus.type="button";
    plus.className="js-plus-btn ";
    wrapper.append(plus);

    align_size.append(wrapper);

    let texxt2 = document.createElement('h4');
    texxt2.append("т");
    align_size.append(texxt2);
    content_openings.append(align_size);
    maincontent_openings.prepend(content_openings);
    var counts = document.querySelectorAll('.wrapper');
    counts.forEach(countFunc);
}

let x=1;
//Спрятоные
function Hiddecontent(a) {
    if(a==1 && thereIsMiniContent1){
        const cont001 = document.querySelector(".cont001");
        cont001.style.display= "none";
        const icon01 = document.querySelector(".icon1");
        icon01.src="img/radioOFF.png";
        krovla="Не указано";
        thereIsMiniContent1=false;
    }else if(a==1 && !thereIsMiniContent1){
        const cont001 = document.querySelector(".cont001");
        cont001.style.display= "block";
        const icon01 = document.querySelector(".icon1");
        icon01.src="img/radioON.png";
        thereIsMiniContent1=true;
    }else if(a==2 && !thereIsMiniContent2){
        const cont002 = document.querySelector(".cont002");
        cont002.style.display= "block";
        const icon02 = document.querySelector(".icon2");
        icon02.src="img/radioON.png";
        thereIsMiniContent2=true;
    }else if(a==2 && thereIsMiniContent2){
        const cont002 = document.querySelector(".cont002");
        cont002.style.display= "none";
        const icon02 = document.querySelector(".icon2");
        icon02.src="img/radioOFF.png";
        thereIsMiniContent2=false;
    }else if(a==3 && !thereIsMiniContent3){
        const cont003 = document.querySelector(".cont003");
        cont003.style.display= "block";
        const icon03 = document.querySelector(".icon3");
        icon03.src="img/radioON.png";
        thereIsMiniContent3=true;
    }else if(a==3 && thereIsMiniContent3){
        const cont003 = document.querySelector(".cont003");
        cont003.style.display= "none";
        const icon03 = document.querySelector(".icon3");
        icon03.src="img/radioOFF.png";
        thereIsMiniContent3=false;
    }else if(a==6 && !thereIsMiniContent6){
        const cont006 = document.querySelector(".cont006");
        cont006.style.display= "block";
        const icon06 = document.querySelector(".icon6");
        icon06.src="img/radioON.png";
        thereIsMiniContent6=true;
    }else if(a==6 && thereIsMiniContent6){
        const cont006 = document.querySelector(".cont006");
        cont006.style.display= "none";
        const icon06 = document.querySelector(".icon6");
        icon06.src="img/radioOFF.png";
        thereIsMiniContent6=false;
    }

}
function myFunction(a) {

    if (a && x!=4){
        x+=1;
        
        if (x==2){
            const content1 = document.getElementById("content1");
            content1.style.display= "none";

            const content2 = document.getElementById("content2");
            content2.style.display= "block";

            

            const id = document.getElementById("id");
            id.innerText = 'РАЗМЕРЫ';
        }else if(x==3){
            const content2 = document.getElementById("content2");
            content2.style.display= "none";

            const cont03 = document.getElementById("cont03");
            cont03.style.display= "block";

            

            const id = document.getElementById("id");
            id.innerText = 'ОТПРАВИТЬ';

            
        }else if(x==4){
            result()
        }
        

    }
    if (!a && x!=1){
        x-=1;
        if (x==1){
            const content1 = document.getElementById("content1");
            content1.style.display= "block";
            const content2 = document.getElementById("content2");
            content2.style.display= "none";

            

            const id = document.getElementById("id");
            id.innerText = 'ВНЕШНИИ ВИД';
        }else if (x==2){
            const cont03 = document.getElementById("cont03");
            cont03.style.display= "none";

            const content2 = document.getElementById("content2");
            content2.style.display= "block";

            
            const id = document.getElementById("id");
            id.innerText = 'РАЗМЕРЫ';
            
        }
    }
    
}