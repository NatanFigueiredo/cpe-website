<template>
	<div role="main" class="bg-originalColor">
		<Banner 
			title="Nossa equipe"
			imageName="equipe1.jpg"
			imageAlt="Pessoas voluntárias sorrindo e segurando uma bandeira com o logo do cursinho "
		/>

		<div class="mt-2">
			<p class="h1 d-inline-flex title title-originalColor">Acreditamos no poder transformador da educação</p>
			<p class="text-originalColor">
                Todas as pessoas do cursinho, docentes e membros administrativos, são pessoas voluntárias e unidas pelo propósito de nossos estudantes  <br>
                Veja abaixo mais informações sobre as pessoas que foram o CPE
            </p>
		</div>

		<div class="m-2 divider-azul w-75 mx-auto bgc-originalColor"/>

		<!-- Administrativo  -->
		<div id="adm" class="m-4 d-flex d-flex flex-column justify-content-center align-items-center">
			<p class="h2 subtitle subtitle-originalColor ">Pessoas voluntárias administrativas</p>
			<div class="content d-flex flex-column-reverse d-lg-flex flex-lg-row justify-content-center align-items-center w-100">	
				<div class="textColumn text-originalColor">
					<p> 
						A parte administrativa do cursinho é dividida em departamentos que colaboram ativamente para fazer a melhor gestão e levar a melhor experiência de estudo para nossos alunos 
						<br>
						Em sua maioria, são estudantes de graduação e pós-graduação da EACH-USP que dedicam algumas horas semanais colaborando com o CPE
					</p>
				</div>
				<img src="@/assets/imagesBox/adm1.jpg" alt="Pessoas sorrindo sentadas em uma escada" class="imageBox img-fluid">
			</div>

			<div class="content d-flex flex-column d-lg-flex flex-lg-row justify-content-center align-items-center w-100">
				<img src="@/assets/imagesBox/adm2.jpg" alt="Gurpo de pessoas em pé e agachadas sorrindo com cartazes e rostos pintados com a palavra USP" class="imageBox img-fluid">
				<div class="textColumn d-flex justify-content-center text-originalColor">
					<p>
						O CPE fornece um ambiente de intensa colaboração além de
						<ul class="d-flex flex-column align-items-start">
							<li> Certificado de voluntariado </li>
							<li> Horas de estágio (verifique os cursos)</li>
						</ul>
					</p>
				</div>
			</div>
			
			<!-- Alerts -->
			<p class="mt-4 h5 hl-originalColor"> Tem interesse em fazer parte do corpo administrativo do Cursinho e realizar sonhos? </p>
			<div v-if="psAdm" class="alert alert-success" role="alert">
				Nosso processo seletivo para membros administrativos está aberto <br>
				<Button 
					content="Se inscreva aqui"
					link="http://bit.ly/ManualProcessoSeletivo20212"
					cssClasses="btn btn-sm mt-2"
				/>
			</div>
			<div v-else class="alert alert-primary" role="alert">
				Preencha nosso fomulário de interresse e fique sabendo assim que o processo seletivo iniciar <br>
				<Button 
					content="Forms de Interesse"
					link="https://bit.ly/FormulárioInteresseCPE"
					cssClasses="btn btn-sm mt-2"
				/>
			</div>

		</div>

		<div class="m-2 divider-azul w-75 mx-auto bgc-originalColor"/>

		<!-- Professores -->
		<div id="docentes" class="m-4 mb-0 d-flex flex-column justify-content-center align-items-center">
			<p class="h2 subtitle subtitle-originalColor ">Pessoas docentes e plantonistas</p>

			<div class="content d-flex flex-column-reverse d-lg-flex flex-lg-row justify-content-center align-items-center w-100">	
				<div class="textColumn text-originalColor">
					<p> 
						As aulas no cursinho são lecionadas por docentes que acreditam na educação e fazem disso sua paixão.
						<br>
						Temos professores em todas as areas de conhecimento de vestibulares, que desenvolvem materiais próprios e especificos para uso dentro do CPE
					</p>
				</div>
				<img src="@/assets/imagesBox/profs.jpeg" alt="Grupo de pessoas docentes tanto em pé quanto agachadas sorrindo" class="imageBox img-fluid">
			</div>

			<div class="content d-flex flex-column d-lg-flex flex-lg-row justify-content-center align-items-center w-100">	
				<img src="@/assets/imagesBox/adm3.jpeg" alt="Estudantes sentados em uma sala de aula com pessoas em pé apresentado slides num projetor" class="imageBox img-fluid">
				<div class="textColumn text-originalColor">
					<p>
						O CPE conta também com uma equipe de plantonistas voluntários, a disposição para auxliar e tirar dúvidas de estudantes ao longo do ano
					</p>
				</div>
			</div>
			
			

			<p class="mt-4 h5 hl-originalColor"> Tem interesse em lecionar no Cursinho e colaborar com a educação popular? </p>
			<div v-if="psProf" class="alert alert-success" role="alert">
				Nosso processo seletivo para professores e plantonistas está aberto <br>
				<Button 
					content="Se inscreva aqui"
					link="http://bit.ly/ManualProcessoSeletivo20212"
					cssClasses="btn btn-sm mt-2"
				/>
			</div>
			<div v-else class="alert alert-primary" role="alert">
				Preencha nosso fomulário de interresse e fique sabendo assim que o processo seletivo iniciar <br>
				<Button 
					content="Forms de Interesse"
					link="https://bit.ly/FormulárioInteresseCPE"
					cssClasses="btn btn-sm mt-2"
				/>
				
			</div>
			

		</div>
	</div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Button from '../components/Button.vue'

export default {
	data() {
		return {
			psAdm: false,
			psProf: false,
		}
	},
	components: {
			Banner, 
			Button
	}

}
</script>

<style>

div .imageBox {
	margin: 10px;
	width: 300px;
	border: 5px solid #12385B;
	border-radius: 25px;
}

@media (min-width: 576px) { 
	div .textColumn {
		width: 60%;
	}
	
	div .content {
		max-width: 75%;
	}
}

@media (max-width: 576px) { 
	.subtitle {
		font-size: 125%;
	}
}

</style>