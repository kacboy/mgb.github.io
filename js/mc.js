//based on a pen by @robinselmer
// https://codepen.io/nodws/pen/ZLLXXq
var url = "https://api.minetools.eu/ping/mc.marcusblackstock.com";
//https://mcapi.us/server/status?ip=666.fluctis.com&port=25757
$.getJSON(url, function (r) {
  //data is the JSON string
  if (r.error) {
    $('#rest').html('<b>Server Offline</b><br><p>Discord: <a href="https://discord.gg/5mztRFs">https://discord.gg/5mztRFs</a></p>');
    return false;
  }
  var pl = '';


  for (i = 0; i < r.players.sample.length; i++) {
    var myobj = r.players.sample[i].name;
    // for (var name in myobj) {
    pl += '<li>' + myobj + '</li>';
    // }
  }

  // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split      
  const versionNumber = r.version.name.split(" ", 2);

  // if (r.players.sample.length > 0) { pl = '<br>' + r.players.sample[0].name; }
  $('#rest').html('<b>SERVER ONLINE!</b><br>Message me to be whitelisted.<br>Bedrock players use port 19132.<br><br><p>Discord: <a href="https://discord.gg/5mztRFs">https://discord.gg/5mztRFs</a></p><br><b>MOTD:</b> ' + r.description.replace(/§(.+?)/gi, '') + '<br><b>Version:</b> ' + versionNumber[1] + '<br><br><b>Players Online:</b> ' + r.players.online + '/' + r.players.max + '<br><ul>' + pl + '</ul>');

  $('#favicon').attr('src', r.favicon);

});

// https://stackoverflow.com/questions/56279807/is-it-possible-to-automatically-have-the-last-updated-date-on-my-website-changed/56280126
// https://codepen.io/chelsslehc/pen/eaVXQj?editors=1111
// const desiredRepo = "MCMap";
// const dateTagClass = ".date";
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     let repos = JSON.parse(this.responseText);

//     //https://stackoverflow.com/questions/4726040/javascript-adding-zeros-to-the-beginning-of-a-string-max-length-4-chars
//     function zeroPad(num) {
//       return num.toString().padStart(2, "0");
//     }

//     repos.forEach((repo) => {
//       if (repo.name == desiredRepo) {
//         var lastUpdated = new Date(repo.pushed_at);
//         var day = zeroPad(lastUpdated.getUTCDate()) - 1;
//         var month = zeroPad(parseInt(lastUpdated.getUTCMonth()) + 1);
//         var year = lastUpdated.getUTCFullYear();
//         $(dateTagClass).text(`Last updated: ${month}/${day}/${year}`);
//       }
//     });
//   }
// };
// xhttp.open("GET", "https://api.github.com/users/kacboy/repos", true);
// xhttp.send();
