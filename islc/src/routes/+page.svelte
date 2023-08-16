<script>
    import {onMount} from 'svelte';
  
    let isMobile = false;
  
    onMount(() => {
        function checkMobile() {
      // Use user agent detection or any other method to check if the device is a phone
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
      isMobile = !isMobileDevice;
    }
    });
    
  
    //onMount(checkMobile);
</script>

<h1>Welcome to ISLC!</h1>
{#if !isMobile}
  <div style="color:red;"><h3>This page is designed for mobile use. Layout is not optimized for desktop viewing.</h3></div>
{/if}
<p>This site contains an <a href="/islc">Interactive Shelf Life Chart</a> that aims to be compatible with the SLC used in Pizza Hut UK & NI Delivery locatiosn.</p>
<p>You can find some guides related to payment terminals under <a href="/banking">Banking</a>.</p>
<p>More tools and guides can be found under <a href="/more">More</a>.</p>