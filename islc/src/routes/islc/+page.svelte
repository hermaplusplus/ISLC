<script>
	
	const sections = [
        {
            title: "Sides & Pasta",
            slug: "sides"
        },
        {
            title: "Sauces",
            slug: "sauces"
        },
        {
            title: "Toppings",
            slug: "toppings"
        },
        {
            title: "Desserts",
            slug: "desserts",
        },
        {
            title: "Cheese",
            slug: "cheese"
        },
        {
            title: "Dough",
            slug: "dough"
        }
    ]
	
</script>

<h1>ISLC</h1>
<p>
    The official SLC can be confusing, as there is a distinction between, for example, <code>End of day 4</code> and <code>4 days</code>.
    Instead of providing a lot of critical information on a crammed and inconsistently formatted A4 printout, here it will be presented as 
    it will look on the date tags themselves. This function is built for stores without one of those fancy MRD sticker printers.
</p>
<p>
    Note: <code>Cheesy Garlic Tear & Share</code> is under <code>Dough</code> for parity with the official SLC.
</p>
{ #each sections as sec }
    <br>
    <a href="/islc/{ sec.slug }" class="navi">
        <div style="width: fit-screen; padding: 1em; background: #e73841; border-radius: var(--border-radius);">
            <h3><b>{ sec.title }</b></h3>
        </div>
    </a>
{ /each }

<style>
    a.navi {
		color: white;
        text-decoration: none;
	}

	a.navi:hover {
		color: white;
        text-decoration: none;
	}

	a.navi:active {
		color: white;
        text-decoration: none;
	}
</style>