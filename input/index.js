const input = document.querySelector('.inpt01');
input.addEventListener("change", (event) => {
    let i=input.value.replace(/[^0-9]/g, '');
    
    if (i !== "") {
        input.value=i+" м";
    }
    console.log(input.value);
    
    
    
});


