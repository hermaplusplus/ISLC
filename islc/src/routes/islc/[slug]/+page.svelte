<script>
    import { onMount } from 'svelte';
    import { RolloverDay, RolloverMonth } from './rollover.js';
    export let data;
    let now = new Date(), month, day, year;

	onMount(()=> {
        
        day = now.getDate(),
        month = (now.getMonth() + 1),
        year = now.getFullYear();

    if (('' + month).length < 2) 
        month = '0' + month;
    if (('' + day).length < 2) 
        day = '0' + day;
	})
</script>

<h1>ISLC: {data.cat.title}</h1>
<h3><a href="/islc">← Return to categories</a></h3>
{ #each data.cat.tags as tag }
<p>
    <b>{tag.name}</b><br>
    {tag.note}<br>
    {day}.{month}<br>
    {RolloverDay(tag.ready)}.{RolloverMonth(tag.ready)}<br>
    {RolloverDay(tag.discard)}.{RolloverMonth(tag.discard)}
</p>
{ /each }