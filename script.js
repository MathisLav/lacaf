let json_resp;

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
    window.document.getElementById("msgs_chat").appendChild(div_msg);
}

 function bot_resp(msg){
    let resp = json_resp[msg];
    console.log(json_resp["k"]);
    if(!resp)
        resp = random(json_resp["default"]);

    resp_div = document.createElement("div");
    resp_text = document.createTextNode("Gertrude est entrain d'écrire ...");
    resp_div.appendChild(resp_text);
    window.document.getElementById("msgs_chat").appendChild(resp_div);
    
    window.setTimeout(function(resp_text, resp) { resp_text.replaceData(0, resp_text.length, "Gertrude : " + resp); }, 2000, resp_text, resp);
    // text.replaceData(0, text.length, "Gertrude : " + resp);
    // window.setTimeout(document.createTextNode, 1000, "Gertrude : " + msg);
    
    
    // add_msg("Gertrude : " + resp);
}

function reload_cache() {
    localStorage.clear();
    location.reload(true);
}