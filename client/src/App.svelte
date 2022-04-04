<script>
	import { Router, Link, Route } from "svelte-navigator";
	import About from "./Pages/About/About.svelte"
	import Frontpage from "./Pages/Frontpage/Frontpage.svelte";
	import Experience from "./Pages/Experience/Experience.svelte"
	import Portfolio from "./Pages/Portfolio/Portfolio.svelte";
	import Contact from "./Pages/Contact/Contact.svelte"

	const backgroundSrc = "./images/comfy.jpg"
</script>

<Router>
	<Route path="/" component={Frontpage} />
	<Route path="/about" component={About} />
	<Route path="/experience" component={Experience} />
	<Route path="/portfolio" component={Portfolio} />
	<Route path="/contact" component={Contact} />
</Router>

<style>
:global(body){
	background-image: url("../images/comfy.jpg");
	background-repeat: no-repeat;
	background-position: center;
	background-size:cover;
	padding: 0;
	display: flex;
	flex-direction: column;
}

</style>