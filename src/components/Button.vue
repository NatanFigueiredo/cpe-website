<template>
    <a class="m-2" :href="link">
        <button 
            type="button" 
            :class="cssClasses"
            role="button"> 
                {{content}}
        </button>
    </a>
  
</template>

<script>
export default {
    name: 'Button',
    props: ['cssClasses', 'link', 'content']
}
</script>

<style>

.btn {
	background-color: #EF7A20;
	color: white;
	border: 1px solid #12385B;
	width: 50%;
}

</style>