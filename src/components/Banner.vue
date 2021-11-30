<template>
	<div class="banner">
		
		<img :src="require(`@/assets/Banners/${imageName}`)" :alt="imageAlt" class="img-fluid">
		<div class="centered">
			<p class="display-2 banner-title"> {{title}} </p>
		</div>

	</div>
</template>

<script>
export default {
	name: 'Banner',
	props: {
		title: String,
		imageName: String,
		imageAlt: String,
	},
}
</script>

<style>

.banner {
	position: relative;
	text-align: center;

    border-bottom: 10px solid #12385B;
	
}

.banner img {
	width: 100%;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.banner-title {	
    height: auto;
    margin: auto;
    text-shadow: 2px 2px #EF7A20;
    color: white;
    font-weight: bold;
    font-family: 'Spartan', sans-serif;
}


</style>