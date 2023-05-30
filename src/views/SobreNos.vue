<template>
 <main>
  <div class="foto-banner-sobrenos">
    <h1>SOBRE NÓS</h1>
  </div>
  
  <p>Prover serviços jurídicos de <B>qualidade</B>, a fim de auxiliar os
    clientes a alcançar seus objetivos de forma eficaz e
    inovadora, através de advogados e colaboradores
    qualificados; exercer a advocacia com dignidade e
    independência, observar a ética, os deveres e
    prerrogativas profissionais e defender a Constituição, a
    ordem jurídica do Estado Democrático; através de
    processos dinâmicos, abertos a novos conhecimentos e
    com a crença de que os serviços jurídicos devem estar
    alinhados com os interesses estratégicos e com o
    contexto econômico de nossos clientes. 
   </p>

      <div class="fotos-adv">
        <div class="foto-adv" v-for="(advogado, index) in advogados" :key="index">
          <div class="texto-adv" :id="advogado.photo">
           <h3>{{advogado.name}}</h3>  
           <span class="first-span">{{advogado.jobFunction}}</span>
           <span>{{advogado.email}}<br>{{advogado.number}}</span>
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
            advogados: [{
                      photo: "Eike",
                      name: "Eike Menezes",
                      jobFunction: "Sócio",
                      email: "oeikemenezes@gmail.com",
                      number: "(71)9 0000-0000"
                  },
                  {
                      photo: "Paulo",
                      name: "Paulo Bastos",
                      jobFunction: "Co-fundador e Sócio",
                      email: "opaulobastos@gmail.com",
                      number: "(71)9 0000-0001"
                  },
                  {
                      photo: "Pedro",
                      name: "Pedro Coelho",
                      jobFunction: "Co-fundador e Sócio",
                      email: "opedrocoelho@gmail.com",
                      number: "(71)9 0000-0002"
                  }]
              
            }
          }
      
    }
</script>

<style lang="scss" scoped>
 main {
  max-width:1024px;
  margin:0 auto;
  
 
  .foto-banner-sobrenos{
   //background-image: url(@/assets/sobrenos-foto.svg);
   //background-size:cover;
   //height:600px;
   
    }
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
  p{
   color:#fff;
   margin:35px auto;
   width:90%;
   font-size:1rem;
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