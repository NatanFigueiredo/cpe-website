<template>
    <footer role="contentinfo" id="faixaFooter" class="d-flex flex-column bgc-originalColor">
        <div id="info" class="d-lg-flex flex-lg-row justify-content-center">
            <div id="cpeInfo" class="m-2 text-originalColor d-flex flex-column align-items-start">
                <p>Cursinho Popular EACH USP - CPE</p>
                <div class="d-flex text-originalColor flex-column align-items-start">
                    <p class="m-0 text-footer">Escola de Artes, Ciências e Humanidades - EACH/USP</p>
                    <p class="m-0 text-footer">Sala 155 - Prédio I1 (Titanic)</p>
                    <p class="m-0 text-footer">Rua Arlindo Bettio, 1000 - Vila Guaraciaba</p>
                    <p class="m-0 text-footer">São Paulo/SP</p>
                </div>
            </div>
            <div id="a11yOptions" class="m2 d-flex flex-column align-items-center justify-content-center">
                <div id="normal" class="d-flex align-items-center"  @click="changeColor(1)">
                    <div style="background-color: #12385B;" class="colorIcon"/>
                    <p class="m-0 text-originalColor">Cores Originais</p>
                </div>
                <div id="colorBlind" class="d-flex align-items-center" @click="changeColor(2)">
                    <div style="background-color: #EF7A20;" class="colorIcon"/>
                    <p class="m-0 text-originalColor">Cores Alternativas</p>
                </div>
            </div>
        </div>
        
        <div id="contactIcons" class="m-2 faleComAGente">
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
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            ano: new Date().getFullYear()
        }
    },
    methods: {
        changeClass(oldClass, newClass) {
            let elements = document.getElementsByClassName(oldClass)
            Array.from(elements).forEach(el => {
                el.classList.add(newClass)
                el.classList.remove(oldClass)
            })

        },
        changeColor(option) {
            if(option === 1) {
                // Changing text
                this.changeClass("text-alternativeColor","text-originalColor")
                this.changeClass("bgc-alternativeColor","bgc-originalColor")
                this.changeClass("sh-alternativeColor","sh-originalColor")
                this.changeClass("subtitle-alternativeColor","subtitle-originalColor")
                this.changeClass("bg-alternativeColor","bg-originalColor")
                this.changeClass("title-alternativeColor","title-originalColor")
            }
            else if(option === 2) {
                this.changeClass("text-originalColor","text-alternativeColor")
                this.changeClass("bgc-originalColor","bgc-alternativeColor")
                this.changeClass("sh-originalColor","sh-alternativeColor")
                this.changeClass("subtitle-originalColor","subtitle-alternativeColor")
                this.changeClass("bg-originalColor","bg-alternativeColor")
                this.changeClass("title-originalColor","title-alternativeColor")
            }
        }  
    }
}
</script>

<style>
/* -------------- FOOTER -------------- */
#faixaFooter {
    width: 100%;
    height: auto;
    padding: 10px;
}

.text-footer {
    font-size: 15px;
}

#contactIcons {
    font-weight: bold;
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

.colorIcon {
    width: 30px;
    height: 30px;
    border: 2px solid gray;
    border-radius: 50%;
    margin:10px;
}

</style>