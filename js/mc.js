var url = "https://api.mcsrvstat.us/3/mc.marcusblackstock.com";

$.getJSON(url, function (r) {
  if (!r.online) {
    $('#rest').html('<b>Server Offline</b><br><p>Discord: <a href="https://discord.gg/5mztRFs">https://discord.gg/5mztRFs</a></p>');
    return;
  }

  // Handle player list (may not exist or may be empty)
  var pl = '';
  if (r.players && r.players.online > 0 && r.players.list && r.players.list.length > 0) {
    for (var i = 0; i < r.players.list.length; i++) {
      var player = r.players.list[i];
      var uuid = player.uuid;
      var name = player.name;
      pl += '<li style="list-style: none; transform: translateX(-1rem);">' +
              '<img class="player-avatar" src="https://crafatar.com/avatars/' + uuid + '?size=32&overlay"> ' +
              name +
            '</li>';
    }
  } else {
    pl = '<li>No players online</li>';
  }

  // Handle MOTD
  var motd = 'N/A';
  if (r.motd && r.motd.clean && r.motd.clean.length > 0) {
    motd = r.motd.clean.join('<br>');
  }

  // Software + Version
  var software = r.software ? r.software : '';
  var version = r.version ? r.version : (r.protocol && r.protocol.name ? r.protocol.name : 'Unknown');
  var softwareVersion = software ? software + ' ' + version : version;

  // Handle port
  var port = (r.port);

  // Handle icon
  if (r.icon) {
    $('#server-icon-img').attr('src', r.icon);
  }

  // Display server info
  $('#rest').html(
    '<b>SERVER ONLINE!</b><br>Message me to be whitelisted.<br>' +
    'Open to Java and Bedrock players.<br>Use port <b>' + port + '</b> for Bedrock Edition.<br><br>' +
    '<p>Discord: <a href="https://discord.gg/5mztRFs">https://discord.gg/5mztRFs</a></p><br>' +
    '<b>MOTD:</b> ' + motd + '<br>' +
    '<b>Version:</b> ' + version + '<br><br>' +
    '<b>Players Online:</b> ' + r.players.online + '/' + r.players.max + '<br>' +
    '<ul>' + pl + '</ul>'
  );
});
