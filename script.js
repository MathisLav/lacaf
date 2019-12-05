function add_msg(){
    msg = window.document.getElementById("input_msg").value;
    window.document.getElementById("input_msg").value = '';

    div_msg = document.createElement("div");
    div_msg.appendChild(document.createTextNode("user : " + msg));
    window.getElementById("div_msg").appendChild(div_msg);
}