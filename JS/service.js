const list = document.getElementById("lightSwitch")
let body = document.getElementById("body");

list.addEventListener('change', (data) => {
    console.log("called here 111", list.checked)

    if(list.checked){
        document.body.classList.remove('bg-light');
        document.body.classList.remove('text-dark');
        document.body.classList.add('bg-dark');
        document.body.classList.add('text-light');

    }else{

        document.body.classList.remove('bg-dark')
        document.body.classList.remove('text-dark')
        document.body.classList.add('bg-light');
        document.body.classList.add('text-dark');

    }
})
