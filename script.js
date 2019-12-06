let json_resp;
let compte = 0;

function preload(){
}

function setup(){
    json_resp =  loadJSON("reponse.json");
}

function push_msg(){
    msg = window.document.getElementById("input_msg").value;
    window.document.getElementById("input_msg").value = '';

    add_msg("user : " + msg);
    bot_resp(msg);
}

function add_msg(msg){
    div_msg = document.createElement("div");
    div_msg.appendChild(document.createTextNode(msg));
    window.document.getElementById("msgs_chat").insertBefore(div_msg, window.document.getElementById("div_pending"));
}

 function bot_resp(msg){
    let resp = json_resp[msg];
    if(!resp)
        resp = random(json_resp["default"]);

    window.document.getElementById("div_pending").textContent = "Gertrude est entrain d'ecrire";
    compte ++;
        
    window.setTimeout(function(resp) { 
        add_msg("Gertrude : " + resp);
        compte --;
        if(compte <= 0){
            compte = 0;
            window.document.getElementById("div_pending").textContent = "";
        }
    }, 2000, resp);
    // text.replaceData(0, text.length, "Gertrude : " + resp);
    // window.setTimeout(document.createTextNode, 1000, "Gertrude : " + msg);
    
    
    // add_msg("Gertrude : " + resp);
}

function reload_cache() {
    localStorage.clear();
    location.reload(true);
}