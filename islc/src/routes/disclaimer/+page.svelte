<script>
    import { onMount } from "svelte";
    let mit = '';
    
    onMount(async () => {
        const res = await fetch('https://raw.githubusercontent.com/hermaplusplus/ISLC/main/LICENSE');
        mit = await res.text();
    });
</script>

<h1>Disclaimer</h1>
<p>This website is operated independently from, and is not affiliated with nor endorsed by <a href="https://www.yum.com/wps/portal/yumbrands/Yumbrands">Yum! Brands</a> or any of its subsidiaries or affiliates. The name "<a href="https://www.pizzahut.co.uk/">Pizza Hut</a>" as well as related names, marks, emblems, and images are registered trademarks of their respective oweners.</p>
<p>This page and its contents are provided under <a href="https://github.com/hermaplusplus/ISLC/blob/main/LICENSE">this MIT License</a>, which is copied below.</p>
<div style="background: #E8E8E8; border-radius: .5em; color: #000; padding: .4em .8em .5em; width: fit-content">
    <pre>
        {mit}
    </pre>
</div>