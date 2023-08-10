<template>
 <main>
  <div class="foto-banner-sobrenos">
    <h1>SOBRE NÓS</h1>
  </div>

      <div class="fotos-adv">
        <div class="foto-adv" v-for="(advogado, index) in advogados" :key="index">
          <div class="texto-adv" :id="advogado.photo">
           <h3>{{advogado.name}}</h3>  
           <span class="first-span" style="font-weight: 600;">{{advogado.jobFunction}}</span>
           <span style="font-size: 15px;">{{advogado.description}}</span>
          </div>
         </div>
       </div> 
     </main>
    </template>
    
    <script>
    export default {
      data(){
            return{
              //"@/assets/fotoPedro.svg"
            advogados: [
              {
                      photo: "Pedro",
                      name: "Dr. Pedro Coelho",
                      jobFunction: "Co-fundador e Sócio",
                      description: `Doutorando em Direito - UFBA,
                      Mestre em Direito, Governança e Públicas
                      , Pós-Graduado em Direito Ambiental e em Licitações e Contratações Públicas`
                  },
                  {
                      photo: "Paulo",
                      name: "Dr. Paulo Bastos",
                      jobFunction: "Co-fundador e Sócio",
                      description: "Especialista em Compliance, Direito e Processo do Trabalho."
                  },
                 
                  {
                      photo: "Eike",
                      name: "Dr. Eike Menezes",
                      jobFunction: "Sócio",
                      description: "Pós-Graduado em Direito Civil, Processo Civil e Direito Empresarial"
                  },]
              
            }
          }
      
    }
</script>

<style lang="scss" scoped>
 main {
  max-width:1024px;
  margin:0 auto;
  

  h1{
   color: #fff;
   display:flex;
   justify-content: center;
   align-items: center;
   font-size:42px;
   width:100%;
   height:100%;
   padding-top: 30px;
   
  }
  }
  .fotos-adv{
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom:3%;
  }
  .foto-adv{
   width:300px;
   height:450px;
   margin:30px auto;
   background-size:cover;
  }
  #Eike{
    background-image: url(@/assets/EikeFoto.jpg);
  }
  #Paulo{
    background-image: url(@/assets/PauloFoto.png);
  }
  #Pedro{
    background-image: url(@/assets/PedroFoto.png);
  }
  .texto-adv{
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    align-items: flex-start;
    height: 100%;
    width:100%;
   color:#fff;
   padding:15px;

   h3{
    border-bottom:1px #fff solid;
    width:100%;
   }
   .first-span{padding-top:5px;
   }
  }
  @media (max-width: 860px) {
  .foto-banner-sobrenos{
   // height:400px !important;
     }
 }


</style>