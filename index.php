<!DOCTYPE html><html><head>
    <meta http-equiv='cache-control' content='no-cache, no-store, must-revalidate'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>

    <script src="p5.js"></script>
    <script src="p5.dom.min.js"></script>
    <script src="p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8">
  </head>
  <body>
    <div id='chat'> 
      <header id="header_chat">Chat</header>
      <div id="msgs_chat">
        <div class="div_msg">Message</div>
      </div>
      <form action="#">
          <input type="text" id="input_msg" placeholder="Votre message..." />
          <input type="submit" onclick="push_msg()" text="Envoyer" />
        </form>

    </div>
    
    
    <script src="script.js"></script>
  </body></html>