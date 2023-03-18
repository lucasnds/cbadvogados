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
    <div class="foto-adv">
     <div class="texto-adv" id="Eike">
      <h3>Eike Menezes</h3>  
      <span class="first-span">Sócio</span>
      <span>oeikemenezes@gmail.com<br>(71)9 9000-0000</span>
     </div>
    </div>
    <div class="foto-adv">
     <div class="texto-adv" id="Paulo">
      <h3>Paulo Bastos</h3>  
      <span class="first-span">Co-fundador e Sócio</span>
      <span>opaulobastos@gmail.com<br>(71)9 9000-0000</span>
     </div>
    </div>
    <div class="foto-adv">
     <div class="texto-adv" id="Pedro">
      <h3>Pedro Coelho</h3>  
      <span class="first-span">Co-fundador e Sócio</span>
      <span>opedrocoelho@gmail.com<br>(71)9 9000-0000</span>
     </div>
    </div>
   </div>
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
  }
  #Eike{
    background-image: url(@/assets/fotoEike.svg);
   background-size:cover;
  }
  #Paulo{
    background-image: url(@/assets/fotoPaulo.svg);
   background-size:cover;
  }
  #Pedro{
    background-image: url(@/assets/fotoPedro.svg);
   background-size:cover;
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