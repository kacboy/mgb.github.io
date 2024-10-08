<!doctype html>
<html lang="en">

<head>
  <title>Marcus Blackstock / Thumbnails</title>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
  <div id="header"></div>
  <script>
    $(function () {
      $("#header").load("/header.html");
      $("#nav-placeholder").load("/nav.html");
      $("#footer").load("/footer.html");
    });
  </script>

</head>

<body>
  <div id="nav-placeholder"></div>
  <div class="project-wrapper">
    <div class="project-row">
      <div class="project-content noMargin">
        <h1 class="noMargin" style="color: #77cc77">Thumbnails</h1>
      </div>
    </div>
    <div class="project-row">
      <div class="project-content">
        <p>Here's a gallery of video thumbnails I've made, mostly using Adobe Photoshop.</p>
        <br>
        <hr>
        <br>
        <?php
    $files = scandir('/img/thumbnails/');
    foreach($files as $file) {
        if($file !== "." && $file !== "..") {
            echo "<img src='$file' />";
        }
    }
?>
        <div class="thumbnail">
          <img src="/img/thumbnails/Get more CONTROL with this keyboard! - ASUS Scope RX-SPqM2lz-QVw.webp"></img>
        </div><!--
        --><div class="thumbnail">
          <img src="/img/thumbnails/Google's Reckoning Has Come.-8y9BpBk1f1k.webp"></img>
        </div><!--
        --><div class="thumbnail">
          <img src="/img/thumbnails/NVIDIA Thinks These GPUs Are Worthless-SKtEH_7lGJg.jpg"></img>
        </div><!--
        --><div class="thumbnail">
          <img
            src="/img/thumbnails/Finally Revealing my BIG SECRET - Corning Optical Thunderbolt 3-Dy312cUHumk.jpg"></img>
        </div><!--
        --><div class="thumbnail">
          <img src="/img/thumbnails/Get more CONTROL with this keyboard! - ASUS Scope RX-SPqM2lz-QVw.webp"></img>
        </div><!--
        --><div class="thumbnail">
          <img src="/img/thumbnails/Google's Reckoning Has Come.-8y9BpBk1f1k.webp"></img>
        </div><!--
        --><div class="thumbnail">
          <img src="/img/thumbnails/NVIDIA Thinks These GPUs Are Worthless-SKtEH_7lGJg.jpg"></img>
        </div><!--
        --><div class="thumbnail">
          <img
            src="/img/thumbnails/Finally Revealing my BIG SECRET - Corning Optical Thunderbolt 3-Dy312cUHumk.jpg"></img>
        </div><!--
        --><div class="thumbnail">
          <img src="/img/thumbnails/Get more CONTROL with this keyboard! - ASUS Scope RX-SPqM2lz-QVw.webp"></img>
        </div><!--
        --><div class="thumbnail">
          <img src="/img/thumbnails/Google's Reckoning Has Come.-8y9BpBk1f1k.webp"></img>
        </div><!--
        --><div class="thumbnail">
          <img src="/img/thumbnails/NVIDIA Thinks These GPUs Are Worthless-SKtEH_7lGJg.jpg"></img>
        </div><!--
        --><div class="thumbnail">
          <img
            src="/img/thumbnails/Finally Revealing my BIG SECRET - Corning Optical Thunderbolt 3-Dy312cUHumk.jpg"></img>
        </div>
      </div>
    </div>
  </div>
  <div id="footer"></div>
  <!-- Randomize order -->
  <script>
    var cards = $(".thumbnail");
    for (var i = 0; i < cards.length; i++) {
      var target = Math.floor(Math.random() * cards.length - 1) + 1;
      var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
      cards.eq(target).before(cards.eq(target2));
    }
  </script>
</body>

</html>