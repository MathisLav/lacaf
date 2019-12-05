<!DOCTYPE html><html><head>
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
          <input type="submit" onclick="add_msg()" text="Envoyer" />
        </form>

    </div>
    
    
    <script src="entity.js"></script>
    <script src="sketch.js"></script>
  </body></html>