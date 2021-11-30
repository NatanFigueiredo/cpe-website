<template>
    <div>
        <Banner 
            title="Nossas Aulas" 
            imageName="sala1.jpg"
            imageAlt= "Sala de aulas com estudantes" 
        />

        <div class="mt-4 container-fluid">
            <p class="h1 d-inline-flex title">Turmas do CPE</p>

            <p>
                Nossas aulas ocorrem em turmas extensivas, ao longo do ano, e de revisão, próximas aos vestibulares de fim de ano  <br>
                Veja abaixo mais informações sobre cada uma
            </p>

            <div class="d-flex align-items-center flex-column m-4 section">
                <p class="h2 subtitle">Turmas extensivas</p>
                <p>
                    Nossas turmas extensivas se iniciam em março e em julho através de processo seletivo <br>
                    Ao longo do ano, cada estudante terá acesso de qualidade a todo o conteúdo de vestibulares junto de professores e plantonistas
                </p>

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
            </div>

            <div class="d-flex align-items-center flex-column m-4 section">
                <p class="h2 subtitle">Turmas de revisão</p>
                <p>
                    Nossas turmas de revisão tem inicio em por volta de setembro ou outubro <br>
                    Nessa turma, qualquer estudante tera uma revisão intensa e completa para os vestibulares
                    </p>

                <div class="d-flex flex-column d-sm-flex flex-sm-row justify-content-center">
                    <div class="m-2">
                        <img src="@/assets/Icons/book.png" alt="Turma de revisão" class="img-fluid icon">
                        <p class="mt-4 h5">Vespertino e Noturno</p>
                        <p>Essa turma ocorre junto dos alunos da turma extensiva, ambos os periodos em seus respectivos horarios</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="divider-azul w-75 mx-auto"> </div>

        <div class="mt-4 d-flex flex-column container-fluid">
            <p class="h1 title">Materiais e Recursos</p>

            <p>
                Após a uma parceria com a Somos Educação em 2020, toda pessoa estudante do CPE tem acesso a materiais físicos e digitais consumíveis do Sistema Anglo de forma gratuita.
                <br>
                Estudantes do CPE também tem a disposição varias plataformas e ferramentas digitais, além de toda a estrutura da EACH-USP para estudos.
            </p>

            <div class="d-sm-flex flex-sm-row justify-content-center">
                <div class="m-2 box">
                    <img src="@/assets/Icons/sun.png" alt="Imagem logo da plaforma Moodle" class="img-fluid icon">
                    <p class="mt-4 h5">Moodle</p>
                    <p>Um ambiente virtual de aprendizagem - AVA - com website e aplicativo de celular.</p>
                </div>
                <div class="m-2 box">
                    <img src="@/assets/Icons/sun.png" alt="Imagem logo da plaforma Moodle" class="img-fluid icon">
                    <p class="mt-4 h5">QMágico</p>
                    <p>Um ambiente virtual de aprendizagem - AVA - com website e aplicativo celular</p>
                </div>
                <div class="m-2 box">
                    <img src="@/assets/Icons/sun.png" alt="Imagem logo da plaforma Moodle" class="img-fluid icon">
                    <p class="mt-4 h5">Letrus</p>
                    <p>Um ambiente virtual de aprendizagem - AVA - com website e aplicativo celular</p>
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

.divider-azul {
  height: 10px;
  background-color:#12385B;
}

.title {
    font-weight: bold;
    font-family: 'Spartan', sans-serif;
    text-shadow: 2px 2px #EF7A20;
}

.subtitle {
    color: #12385B;
    font-weight: bold;
    font-family: 'Spartan', sans-serif;
    border-bottom: 5px solid #EF7A20;
    /* text-shadow: 2px 2px #fdc41c; */
    width: max-content;
}

img.icon {
    border: 2px solid #12385B;
    border-radius: 50%;
    width: 100px;
}

p.h5 {
    font-weight: bold;
    border: 1px solid #12385B;
    background-color: #12385B;
    color: white;
}

@media (min-width: 960px) {
    .box {
        width: 25%;
    }
}

</style>