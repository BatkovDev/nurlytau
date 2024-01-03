const input = document.querySelector('.inpt01');
input.addEventListener("change", (event) => {
    let i=input.value.replace(/[^0-9]/g, '');
    input.value=i;
    if (i !== "") {
        input.value+=" м";
    }
    console.log(input.value);
    
    
    
});




