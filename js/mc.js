//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/mc.marcusblackstock.com";
//https://mcapi.us/server/status?ip=666.fluctis.com&port=25757
$.getJSON(url, function (r) {
   //data is the JSON string
   if (r.error) {
      $('#rest').html('Server Offline<br><p>Discord: <a href="https://discord.gg/5mztRFs">https://discord.gg/5mztRFs</a></p>');
      return false;
   }
   var pl = '';


   for (i = 0; i < r.players.sample.length; i++) {
      var myobj = r.players.sample[i].name;
      // for (var name in myobj) {
          pl += '<li>'+myobj+'</li>';          
      // }
  }       

   // if (r.players.sample.length > 0) { pl = '<br>' + r.players.sample[0].name; }
   $('#rest').html('Message me to be whitelisted!<br>Bedrock players use port 19132.<br><br><p>Discord: <a href="https://discord.gg/5mztRFs">https://discord.gg/5mztRFs</a></p><br><b>MOTD:</b> ' + r.description.replace(/§(.+?)/gi, '') + '<br><b>Version:</b> ' + r.version.name + '<br><br><b>Players Online:</b> ' + r.players.online + '/' + r.players.max+'<br><ul>'+pl+'</ul>');


   $('#favicon').attr('src', r.favicon);

});

// https://codepen.io/nodws/pen/ZLLXXq