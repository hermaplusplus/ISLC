<svelte:head>
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5GP9ZF2MVK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5GP9ZF2MVK');
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5886087880659292"
     crossorigin="anonymous"></script>
</svelte:head>

<nav>
    <a href="/" class="navi">🍕 Home</a>
    <a href="/islc" class="navi">ISLC (Dates)</a>
    <a href="/banking" class="navi">Banking</a>
    <!--<a href="/more" class="navi">More</a>-->
</nav>

<slot />


<br><br><br>

<div class="footer">
  
    <div style="text-align:left">
        <p>
            <a href="/disclaimer" target="_blank">Disclaimer</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/hermaplusplus/ISLC" target="_blank">Source Code</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/hermaplusplus/ISLC/issues" target="_blank">Report Issue</a>
        </p>
    </div>
</div>


<style>
    .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 1em;
      border-radius: 0 0 0 0;
      box-shadow: 0 0 .3em #999;
      background: #FFFA;
    }

    a.navi {
		  	color: white;
		}

		a.navi:hover {
			color: white;
		}

		a.navi:active {
			color: white;
		}
</style>
