const list = document.getElementById("lightSwitch")
let body = document.getElementById("body");
let services = document.getElementById("services");

list.addEventListener('change', (data) => {
    console.log("called here 111", list.checked)

    if(list.checked){
        document.body.classList.remove('bg-light');
        document.body.classList.remove('text-dark');
        document.body.classList.add('bg-dark');
        document.body.classList.add('text-light');

        services.classList.add("bg-dark")
    }else{
        services.classList.remove("bg-dark")

        document.body.classList.remove('bg-dark')
        document.body.classList.remove('text-dark')
        document.body.classList.add('bg-light');
        document.body.classList.add('text-dark');

    }
})

const list1 = document.getElementById("lightSwitch1")

list1.addEventListener('change', (data) => {
    console.log("called here 111", list1.checked)

    if(list1.checked){
        document.body.classList.remove('bg-light');
        document.body.classList.remove('text-dark');
        document.body.classList.add('bg-dark');
        document.body.classList.add('text-light');

        services.classList.add("bg-dark")
    }else{
        services.classList.remove("bg-dark")
        
        document.body.classList.remove('bg-dark')
        document.body.classList.remove('text-dark')
        document.body.classList.add('bg-light');
        document.body.classList.add('text-dark');

    }
})


function myhref(web){window.location.href = web;}
