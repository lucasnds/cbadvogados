<template>
  <main>
    <div class="foto-banner-homePrincipal">
      <img class="foto-logo" src="@/assets/logo-escrita.svg" alt="">
    </div>

    <div class="visao">
      <h2>NOSSA MISSÃO, VISÃO, VALORES</h2>
      <p>Prover serviços jurídicos de qualidade, a fim de auxiliar os
  clientes a alcançar seus objetivos de forma eficaz e
  inovadora, através de advogados e colaboradores
  qualificados; exercer a advocacia com dignidade e
  independência, observar a ética, os deveres e
  prerrogativas profissionais e defender a Constituição, a
  ordem jurídica do Estado Democrático; através de
  processos dinâmicos, abertos a novos conhecimentos e
  com a crença de que os serviços jurídicos devem estar
  alinhados com os interesses estratégicos e com o
  contexto econômico de nossos clientes.</p>
    </div>

<button class="btn-contato">
  <router-link class="router-link" to="/contato">ENTRE EM CONTATO</router-link>
</button>
  </main>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
main {
  max-width:1024px;
  margin:0 auto;
  
 
  .foto-banner-homePrincipal{
   background-image: url(@/assets/banner-homePrincipal.svg);
   background-size:cover;
   height:600px;
   margin-top: -20px;
   
   
   .foto-logo{
     color: #fff;
     display:flex;
     justify-content: center;
     align-items: center;
     font-size:42px;
     width:80%;
     margin:0 auto;
     height:100%;
     
    }
  }
  .btn-contato{
    padding: 8px 25px;
    border-radius: 50px;
    background: linear-gradient(286.9deg, #000000 18.68%, #0C0E29 38.18%);
    margin: 50px auto; 
    border: 0;
    display: flex;
    justify-content: center;
  }
}
.router-link{
  color: #fff;
  
  text-decoration: none;
}
@media(max-width:860px){
 .foto-logo,.foto-banner-homePrincipal{
   height: 300px !important;
 }
}
.visao{
 margin: 35px auto;
 width: 90%;
}
 h2{
  color:#fff;
  font-size:32px;
  margin-bottom:10px;
 }
 p{
  color:#fff;
  font-size:1rem;
 }

</style>