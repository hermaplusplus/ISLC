

<!--<div class="headernav">-->
<nav>
    <!--<img src="https://upload.wikimedia.org/wikipedia/sco/d/d2/Pizza_Hut_logo.svg" alt="PH logo" width="24pt" height="24pt"/>-->
    <a href="/">🍕</a>
    <a href="/">Home</a>
    <a href="/islc">ISLC</a>
    <a href="/banking">Banking</a>
    <a href="/more">More</a>
</nav>
<!--</div>-->

<slot />


<br><br><br>

<div class="footer">
  
    <div style="text-align:left">
        <p>
            <a href="/disclaimer" target="_blank">Disclaimer</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/hermaplusplus/ISLC" target="_blank"><!--<img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub Logo" width="24pt" height="24pt"/>-->Source Code</a>&nbsp;&nbsp;&nbsp;&nbsp;
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

    .popup {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .popup h1 {
      font-size: 2rem;
      text-align: center;
      color: red;
    }

    /*.headernav {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
    }

    nav {
        border-radius: 0 0 0 0;
        box-shadow: 0 0 .3em #999;
        background: #c51b29aa;
    }

    .header {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 1em;
      border-radius: 2em 2em 0 0;
      background: #B92C34;
    }*/
</style>
