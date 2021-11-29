<template>
    <footer>
        <div class="faixaFooter">
            <div class="faleComAGente">
                <div class="redesSociais">
                <a href="https://br.linkedin.com/company/cursinho-popular-each-usp" target="_blank">
                    <img src="../assets/SocialMedia/linkedin.png" alt="LinkedIn" class="icones">
                </a>
                
                <a href="https://www.facebook.com/CursinhoPopularEACH" target="_blank">
                    <img src="../assets/SocialMedia/facebook.png" alt="Facebook" class="icones">
                </a>
                
                <a href="https://www.instagram.com/cursinhoeachusp/" target="_blank">
                    <img src="../assets/SocialMedia/instagram-sketched.png" alt="Instagram" class="icones">
                </a>
        
                <a href="https://www.google.com.br/maps/dir//Cursinho+Popular+EACH+USP+-+Rua+Arlindo+B%C3%A9ttio,+1000+-+Jardim+Keralux,+S%C3%A3o+Paulo+-+SP/@-23.481952,-46.5034877,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce6014a2e7522b:0x1005b9d5e613a835!2m2!1d-46.501299!2d-23.4819569!3e0" target="_blank">
                    <img src="../assets/SocialMedia/maps.png" alt="Localização" class="icones">
                </a>
                <a href="mailto:atendimento@cursinhoeach.com.br?Subject=Oi%20CPE" target="_top">
                    <img src="../assets/SocialMedia/mail.png" alt="Contato por email" class="icones">
                </a>       
                </div>
            </div>
            <br>
            <p>Curso Pré Vestibular Popular EACH USP - {{ano}}</p>

        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            ano: new Date().getFullYear()
        }
    }
}
</script>

<style>
/* -------------- FOOTER -------------- */
.faixaFooter {
    background-color: #12385B;
    width: auto;
    height: auto;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-direction: column;
}
.faleComAGente {
    font-weight: bold;
    width: 50%;
}
.redesSociais {
    display: flex;
    justify-content: center;
    text-align: center;
    z-index:999;
}

.icones {
    width: 40px;
    height: 40px;
    z-index:999;
    
    margin: 0 10px;
}

.faixaFooter p{
    margin: auto;
    color: white;
}

</style>