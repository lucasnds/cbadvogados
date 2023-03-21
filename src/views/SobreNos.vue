<template>
 <main>
  <div class="foto-banner-sobrenos"></div>
  <h1>SOBRE NÓS</h1>
  <p>Lorem ipsum dolor sit amet. Ea aperiam perspiciatis et minima tempore aut ipsam nisi et molestiae dolore et suscipit eveniet. Non fugit quam est velit atque ut illo iusto id galisum consectetur et rerum fuga 33 officiis alias est facilis eveniet.
   Qui reprehenderit eaque ut nesciunt molestiae in aliquid ducimus eum corporis nostrum eos expedita omnis eos neque perspiciatis eum ratione reprehenderit. 
   <br><br>
   Aut nobis quibusdam qui vitae tempore non debitis iure. Qui voluptatem aliquid et tempora sunt vel nostrum eveniet id blanditiis aperiam eos iusto inventore est tempora incidunt in amet minus. Ut voluptas sapiente ad voluptas deleniti sed temporibus quis est impedit molestias.
    Non fugit quam est velit atque ut illo iusto id galisum consectetur et rerum fuga 33 officiis alias est facilis eveniet.
   empora incidunt in amet minus. Ut voluptas sapiente ad voluptas deleniti sed temporibus quis est impedit molestias.
    Non fugit quam est velit atque ut illo iusto id galisum consectetur et rerum fuga 33 officiis alias est facilis eveniet.
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
   background-image: url(@/assets/sobrenos-foto.svg);
   background-size:cover;
   height:600px;
   
    }
  h1{
   color: #fff;
   position:absolute;
   top: 350px;
   left: 50%;
   transform: translate(-50%, -50%);
   font-size:42px;
   
  }
  p{
   color:#fff;
   margin:35px auto;
   width:90%;
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
    background-image: url(@/assets/fotoEike.svg);
  }
  #Paulo{
    background-image: url(@/assets/fotoPaulo.svg);
  }
  #Pedro{
    background-image: url(@/assets/fotoPedro.svg);
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
  main h1{
   top:280px;
  }
  .foto-banner-sobrenos{
    height:400px !important;
     }
 }


</style>