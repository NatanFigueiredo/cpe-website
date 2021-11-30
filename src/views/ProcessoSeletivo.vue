<template>
	<div>
		<Banner 
			title="Seja estudante do CPE"
			imageName="sala1.jpg"
			imageAlt="Estudante em uma sala de aula"
		/>

		<div class="mt-4 container-fluid d-flex flex-column align-items-center">

            <p class="h1 d-inline-flex title">Processo Seletivo de Estudantes</p>

			<div id="psInfo" class="d-flex flex-column align-items-center d-sm-flex flex-sm-row justify-content-sm-center m-2">
				<img src="@/assets/Icons/selection.png" alt="Icone de uma pessoa sendo escolhida dentre três no total" class="img-fluid icon lg-icon">
				<div class="w-100 m-0">
					<p class="mt-4">Para ser estudante do Cursinho, é necessario se inscrever e ser aprovado em nosso processo seletivo </p>
					<p class="d-flex flex-column align-items-center">
						Não se preocupe, ele é bem simples e tem como objetivo priorizar, mas não exclusivamente, determinadas pessoas para que estas tenham acesso a educação de qualidade <br>
						No CPE, damos prioridades para pessoas nas seguintes condições:
						<ul class="m-2 d-flex flex-column align-items-start">
							<li>Estudantes de escola pública; 🏫 </li>
							<li>Família de baixa renda; 👨‍👨‍👧‍👦</li>
							<li>Moradores da Zona Leste de São Paulo; 🗺️</li>
							<li>PPI; 👩🏾</li>
							<li>Pessoas transsexuais, transgêneros ou travestis. 🏳️‍🌈</li>
						</ul>
					</p>
				</div>
			</div>

			<div v-if="ps" class="alert alert-success" role="alert">
				Nosso processo seletivo para estudantes está aberto <br>
				Veja mais detalhes na seção abaixo
			</div>
			<div v-else class="alert alert-danger" role="alert">
				No momento não possuímos nenhum PS em andamento <br>
				Siga nossas redes sociais para saber quando um novo processo seletivo de estudantes ocorrer
			</div>
            

			<!-- <div class="divider-azul w-75 mx-auto"/>

            <div class="d-flex align-items-center flex-column m-4 section">
                <p class="h2 subtitle">Como funciona o PS de estudantes?</p>

                <div class="d-flex flex-column d-sm-flex flex-sm-row justify-content-center">
                    <div class="m-2 box">
                        <img src="@/assets/Icons/sun.png" alt="Periodo vespertino" class="img-fluid icon">
                        <p class="mt-4 h5">Vespertino</p>
                        <p>Essa turma ocorre ao longo do período da tarde das 14:00 às 18:40</p>
                    </div>
                    <div class="m-2 box">
                        <img src="@/assets/Icons/moon.png" alt="Periodo Noturno" class="img-fluid icon">
                        <p class="mt-4 h5">Noturna</p>
                        <p>
                            Essa turma ocorre no período noturno, ideal para estudantes que trabalhem ou tenham outras atividades durante o dia <br> <br>
                            As aulas ocorrem das 19:00 às 22:30
                        </p>
                    </div>
                </div>
            </div> -->

			<div class="divider-azul w-75 mx-auto"/>

			<div class="d-flex align-items-center flex-column m-4 container-fluid">
				<p class="h2 subtitle">Procesos seletivos anteriores</p>
				<p class="mt-2">Veja aqui os editais de processos seletivos anteriores</p>
				<div id="processosanteriores" class="w-100 d-flex flex-column d-sm-flex flex-sm-row justify-content-center">
					<div class="m-2 box">
						<p class="mt-4 h5">Turma Extensiva</p>
						<div class="d-flex flex-column">
							<a class="m-2" href="http://bit.ly/ManualProcessoSeletivo20212 ">
								<button type="button" class="btn btn-lg">2021/2</button>
							</a>
							<a class="m-2" href="http://bit.ly/ManualProcessoSeletivo20211">
								<button type="button" class="btn btn-lg">2021/1</button>
							</a>
						</div>
					</div>
					<div class="m-2 box">
						<p class="mt-4 h5">Turma de Revisão</p>
						<div class="d-flex flex-column">
							<a class="m-2" href="http://bit.ly/ManualProcessoSeletivo20212">
								<button type="button" class="btn btn-lg">2020</button>
							</a>

						</div>
					</div>
				</div>
				
				
			</div>
        </div>
	</div>
</template>

<script>
import Banner from '../components/Banner.vue'

export default {
	data() {
		return {
			ps: false,
		}
	},
	components: {
		Banner
	}

}
</script>

<style>

/* #processosanteriores > div {
	border: 1px solid red;
	width: 100%;
} */

@media (min-width: 576px) { 
	.lg-icon {
		margin: 50px;
		min-width: 250px;
	}

	#psInfo > div {
		max-width: 50%;
	}
}

.btn {
	background-color: #EF7A20;
	color: white;
	border: 1px solid #12385B;
	width: 50%;
}



</style>