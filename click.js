let nameinput=document.querySelector("#name");
let surname=document.querySelector("#surname");
let age=document.querySelector("#age");
let mail=document.querySelector("#email");
let genderlist=document.querySelector("#gender");
let submit=document.querySelector("button");
let tbody=document.querySelector("tbody");
submit.addEventListener("click",function(){
    tbody.innerHTML+=
    `<tr>
           <td>${nameinput.value}</td>
            <td>${surname.value}</td>
            <td>${age.value}</td>
            <td>${mail.value}</td>
          </tr>`;
          nameinput.value=" ";
          age.value=" ";
          mail.value=" ";
})