<template>
	<div role="main">    
		<Banner 
			title="Conheça o Cursinho EACH-USP"
			imageName="espacocursinho.jpg"
			imageAlt="Imagem do espaço do cursinho na EACH-USP"
		/>

		<div class="mt-4">
			<p class="h1 d-inline-flex title">Cursinho Popular EACH-USP</p>
			<p>
				Transformando em realidade o sonho de entrar na universidade <br>
				Conheça aqui mais um pouco sobre nós
			</p>
		</div>

		<div class="divider-azul w-75 mx-auto"> </div>
		
		<!-- Resumo -->
		<div class="mt-4 d-flex flex-column justify-content-center align-items-center w-100">
			<p class="h2 subtitle">Prazer, CPE</p>

			<div class="content d-flex flex-column-reverse d-lg-flex flex-lg-row justify-content-center align-items-center">
				<div class="m-2 textColumn d-flex flex-column justify-content-between" id="boxResumo">
					<p>
						O Cursinho Popular EACH-USP é um cursinho pré-vestibular 100% gratuito, 
						sem qualquer mensalidade, taxa de inscrição ou custo de material, 
						que busca ser um facilitador para jovens de baixa renda, de escolas públicas e da 
						Zona Leste de São Paulo que sonham em ingressar em uma universidade.
					</p>
					<p>
						A entidade surgiu em 2015, por meio da iniciativa dos estudantes da Universidade de São Paulo, 
						do campus da EACH-USP, localizado no bairro de Ermelino Matarazzo, na Zona Leste de São Paulo. 
						A associação civil surgiu com o objetivo de fornecer gratuitamente maiores chances de ingresso 
						em universidades públicas a estudantes pretos, pardos e indígenas de baixa renda, de escolaridade pública 
						e que residem na região.
					</p>
					<p>
						Por ser gratuito, o Cursinho depende inteiramente de doações e do trabalho voluntário de mais de cem pessoas, 
						como professores, plantonistas, psicólogos, assistentes sociais e equipe administrativa. 
					</p>
				</div>
				<img src="@/assets/frasesonho.jpg" alt="Pessoa de costas vestindo uma camisa com a frase 'Transformando em realidade o sonho de entrar na Universidade'" class="imgLateral img-fluid">

			</div>

		</div>

		<div class="divider-azul w-75 mx-auto"> </div>

		<!-- História -->
		<div class="mt-4 d-flex flex-column justify-content-center align-items-center w-100">
			<p class="h2 subtitle">A História do Cursinho</p>

			<p class="textColumn m-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae odio lorem. Donec eu lacus nec nulla bibendum posuere scelerisque ut augue. Proin non nisl vel neque fermentum euismod quis quis dui. Donec accumsan nulla venenatis, fermentum sem quis, suscipit augue. Suspendisse tempor massa vel est ultrices, sit amet ultrices leo suscipit. Sed gravida sagittis felis ut sodales. Sed et nisi quam. Cras vitae suscipit quam, lobortis viverra quam. Nullam tincidunt semper metus vel facilisis. Vestibulum eget commodo ante. Suspendisse nec sapien lacus. Praesent id neque pulvinar, molestie eros quis, sagittis neque. 
			</p>
		</div>

		<div class="divider-azul w-75 mx-auto"> </div>

		<!-- Atena -->
		<div class="mt-4 d-flex flex-column justify-content-center align-items-center w-100">
			<p class="h2 subtitle">Atena Sanches</p>
			<div class="content d-flex flex-column justify-content-center align-items-center w-100">	
				<div class="d-sm-flex flex-sm-row">
					<img src="@/assets/atena-camisa.png" alt="Figura da mascote do CPE, a coruja Atena" class="imageBox rounded-circle">
					<img src="@/assets/atena-apostilas.jpg" alt="Foto da pelúcia Atena sobre apostilas de estudo" class="imageBox rounded-circle">
				</div>
				<p class="m-4 textColumn">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac augue iaculis, elementum dolor vitae, congue orci. In pellentesque quam sed sapien condimentum hendrerit nec et diam. Aenean id ligula nec magna lacinia maximus eget ac odio. Donec sit amet massa consequat, gravida enim nec, tincidunt justo. Lorem ipsum dolor. 
				</p>
			</div>

		</div>
	</div>
</template>

<script>
import Banner from '../components/Banner.vue'

export default {
    components: {
        Banner
    }

}
</script>

<style>

.imgLateral {
	margin: 2px;
	height: 450px;
	border: 5px solid #12385B;
	border-radius: 25px;
	
}

#boxResumo {
	height: 50%;
}

@media (min-width: 576px) { 
	div .textColumn {
		width: 60%;
	}
	
	div .content {
		max-width: 75%;
	}

	.imgLateral {
		margin-left: 5%;
	}


}

</style>