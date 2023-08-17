<script>
    import { onMount } from 'svelte';
    import { monthLookup, RolloverDay, RolloverMonth } from './rollover.js';
    export let data;
    let now = new Date(), day, month, year, hour, minute;

	onMount(()=> {
        
        day = now.getDate(),
        month = (now.getMonth() + 1),
        year = now.getFullYear();
        hour = now.getHours();
        minute = now.getMinutes();

        if (('' + month).length < 2) 
            month = '0' + month;
        if (('' + day).length < 2) 
            day = '0' + day;
        if (('' + hour).length < 2) 
            hour = '0' + hour;
        if (minute < 30) 
            minute = '00';
        else 
            minute = '30';
	})
</script>

<h1>ISLC: {data.d["cat"].title}</h1>

<h3><a href="/islc">← Return to categories</a></h3>

<hr>

{ #each data.d["cat"].tags as tag }
<table width="100%" style="padding:0.5em">
    <tr>
        <td width="50%">
            <div style="text-align:center; padding-right:1em">
                <b>{tag.name}</b><br>
                {tag.note}
            </div>
        </td>
        <td width="50%">
            <table width="100%" class="tag">
                <tr>
                    <td class="tag">{hour}.{minute}</td>
                    <td class="tag"></td>
                </tr>
                <tr>
                    <td class="tag">{day}.{month}</td>
                    <td class="tag">{RolloverDay(tag.ready)}.{RolloverMonth(tag.ready)}</td>
                </tr>
                <tr>
                    { #if tag.name == "Roquito Pearls" }
                    <td class="tag">{RolloverDay(tag.discard)}.{RolloverMonth(tag.discard+monthLookup[parseInt(month)-1])}</td>
                    { :else }
                    <td class="tag">{RolloverDay(tag.discard)}.{RolloverMonth(tag.discard)}</td>
                    { /if }
                    <td class="tag">23.59</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<hr>
{ /each }
{ #each data.d["ext"].extras as item }
<table width="100%" style="padding:0.5em">
    <tr>
        <td width="50%">
            <div style="text-align:center; padding-right:1em">
                <b>{item.name}</b><br>
                {item.note}
            </div>
        </td>
        <td width="50%">
            <table width="100%" class="">
                <tr>
                    <td style="border: 1px solid black;
                    border-collapse: collapse;
                    padding-top: 2.6em;
                    padding-bottom: 2.6em;
                    text-align: center;"></td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<hr>
{ /each }

<h3><a href="/islc">← Return to categories</a></h3>

<style>
    table.tag, th.tag, td.tag {
        border: 1px solid black;
        border-collapse: collapse;
        padding-top: .2em;
        padding-bottom: .2em;
        text-align: center;
        background: rgb(242, 225, 38);
    }
</style>