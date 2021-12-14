<template>
    <div role="main" class="bg-originalColor">
        <Banner 
            title="Nossas Aulas" 
            imageName="sala1.jpg"
            imageAlt= "Sala de aulas com estudantes" 
        />

        <div class="mt-4 container-fluid" tabindex="0">
            <p class="h1 d-inline-flex title title-originalColor">Turmas do CPE</p>

            <p class="text-originalColor">
                Nossas aulas ocorrem em turmas extensivas, ao longo do ano, e de revisão, próximas aos vestibulares de fim de ano.  <br>
                Veja abaixo mais informações sobre cada uma.
            </p>

            <div class="d-flex align-items-center flex-column m-4 section" tabindex="0">
                <p class="h2 subtitle subtitle-originalColor ">Turmas extensivas</p>
                <p class="text-originalColor">
                    Nossas turmas extensivas se iniciam em março e em julho através de processo seletivo. <br>
                    Ao longo do ano, cada estudante terá acesso de qualidade a todo o conteúdo de vestibulares junto de professores e plantonistas.
                </p>

                <div class="d-flex flex-column d-sm-flex flex-sm-row justify-content-center text-originalColor">
                    <div class="m-2 box" tabindex="0">
                        <img src="@/assets/Icons/sun.png" alt="Periodo vespertino" class="img-fluid icon">
                        <p class="mt-4 h5 hl-originalColor">Vespertino</p>
                        <p>Essa turma ocorre ao longo do período da tarde das 14:00 às 18:40</p>
                    </div>
                    <div class="m-2 box" tabindex="0">
                        <img src="@/assets/Icons/moon.png" alt="Periodo Noturno" class="img-fluid icon">
                        <p class="mt-4 h5 hl-originalColor">Noturna</p>
                        <p>
                            Essa turma ocorre no período noturno, ideal para estudantes que trabalhem ou tenham outras atividades durante o dia <br> <br>
                            As aulas ocorrem das 19:00 às 22:30
                        </p>
                    </div>
                </div>
            </div>

            <div class="d-flex align-items-center flex-column m-4 section" tabindex="0">
                <p class="h2 subtitle subtitle-originalColor ">Turmas de revisão</p>
                <p class="text-originalColor">
                    Nossas turmas de revisão tem inicio em por volta de setembro ou outubro <br>
                    Nessa turma, qualquer estudante tera uma revisão intensa e completa para os vestibulares
                    </p>

                <div class="d-flex flex-column d-sm-flex flex-sm-row justify-content-center" tabindex="0">
                    <div class="m-2">
                        <img src="@/assets/Icons/book.png" alt="Turma de revisão" class="img-fluid icon">
                        <p class="mt-4 h5 hl-originalColor">Vespertino e Noturno</p>
                        <p class="text-originalColor">Essa turma ocorre junto dos alunos da turma extensiva, ambos os periodos em seus respectivos horarios</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="divider-azul w-75 mx-auto bgc-originalColor"> </div>

        <div class="mt-4 d-flex flex-column container-fluid" tabindex="0">
            <p class="h1 title title-originalColor">Materiais e Recursos</p>

            <p class="text-originalColor">
                Após a uma parceria com a Somos Educação em 2020, toda pessoa estudante do CPE tem acesso a materiais físicos e digitais consumíveis do Sistema Anglo de forma gratuita.
                <br>
                Estudantes do CPE também tem a disposição varias plataformas e ferramentas digitais, além de toda a estrutura da EACH-USP para estudos.
            </p>

            <div class="d-flex flex-column justify-content-center align-items-center m-4 text-originalColor" tabindex="0">
                <div class="d-sm-flex flex-sm-row justify-content-center w-100">
                    <div class="m-2 box">
                        <img src="@/assets/Icons/moodle.png" alt="Imagem logo da plaforma Moodle" class="img-fluid icon">
                        <p class="mt-4 h5 hl-originalColor">Moodle</p>
                        <p>Um ambiente virtual de aprendizagem - AVA - com website e aplicativo de celular.</p>
                    </div>
                    <div class="m-2 box">
                        <img src="@/assets/Icons/anglo-logo.png" alt="Imagem logo do Sistema Anglo de Ensino" class="img-fluid icon">
                        <p class="mt-4 h5 hl-originalColor">Sistema Anglo</p>
                        <p>Apostilas fisícas e digitais com a qualidade Anglo e sem custo para os estudantes.</p>
                    </div>
                </div>
                <div class="d-sm-flex flex-sm-row justify-content-center w-100">
                    <div class="m-2 box">
                        <img src="@/assets/Icons/qmagico.png" alt="Imagem logo da plaforma QMágico" class="img-fluid icon">
                        <p class="mt-4 h5 hl-originalColor">QMágico</p>
                        <p>Um ambiente virtual de aprendizagem - AVA - com website e aplicativo celular</p>
                    </div>
                    <div class="m-2 box">
                        <img src="@/assets/Icons/letrus.jpg" alt="Imagem logo da plaforma Letrus" class="img-fluid icon">
                        <p class="mt-4 h5 hl-originalColor">Letrus</p>
                        <p>Um ambiente virtual de aprendizagem - AVA - com website e aplicativo celular</p>
                    </div>
                </div>
                

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

img.icon {
    border: 2px solid #12385B;
    border-radius: 50%;
    width: 100px;
}

@media (min-width: 960px) {
    .box {
        width: 25%;
    }
}

</style>