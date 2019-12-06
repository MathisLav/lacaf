let json_resp;
let compte = 0;

function preload(){
}

function setup(){
    json_resp =  loadJSON("reponse.json");
}

function push_msg(){
    let msg = window.document.getElementById("input_msg").value;
    if(msg != "") {
        window.document.getElementById("input_msg").value = '';

        add_msg(msg, "user");
        bot_resp(msg);
    }
}

function add_msg(msg, side){
    let div_msg = document.createElement("div");
    div_msg.classList.add("div_"+side);
    div_msg.appendChild(document.createTextNode(msg));
    //window.document.getElementById("msgs_chat").insertBefore(div_msg, window.document.getElementById("div_pending"));
    window.document.getElementById("msgs_chat").appendChild(div_msg);

    var element = document.getElementById("msgs_chat");
    element.scrollTop = element.scrollHeight - element.clientHeight;
}

 function bot_resp(msg){
    let resp = json_resp[msg];
    if(!resp)
        resp = random(json_resp["default"]);

    window.document.getElementById("div_pending").textContent = "Gertrude est entrain d'ecrire...";
    compte++;
        
    window.setTimeout(function(resp) { 
        add_msg(resp, "bot");
        compte--;
        if(compte <= 0){
            compte = 0;
            window.document.getElementById("div_pending").textContent = "";
        }
    }, 1500, resp);
    // text.replaceData(0, text.length, "Gertrude : " + resp);
    // window.setTimeout(document.createTextNode, 1000, "Gertrude : " + msg);
    
    
    // add_msg(resp, "bot");
}

function reload_cache() {
    localStorage.clear();
    location.reload(true);
}
