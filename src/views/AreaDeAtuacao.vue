<template>
 <main>
  <div class="foto-banner-areadeatuacao">
   <h1>ÁREAS DE ATUAÇÃO</h1>
 </div>

 <section class="areas">
  <div class="total">
   <div class="areas__image" id="consumidor"></div>
   <div class="areas__text" >
    <p>Consumidor</p>
    <span>Saiba Mais <font-awesome-icon icon="fa-solid fa-caret-right" /></span>
   </div>
  </div>
  <div class="total">
   <div class="areas__image" id="imobiliario"></div>
   <div class="areas__text" >
    <p>Imobiliário</p>
    <span>Saiba Mais <font-awesome-icon icon="fa-solid fa-caret-right" /></span>
   </div>
  </div>
  <div class="total">
   <div class="areas__image" id="trabalho"></div>
   <div class="areas__text" >
    <p>Trabalho e Providência Social</p>
    <span>Saiba Mais <font-awesome-icon icon="fa-solid fa-caret-right" /></span>
   </div>
  </div>
  <div class="total">
   <div class="areas__image" id="trabalho"></div>
   <div class="areas__text" >
    <p>Ambiental</p>
    <span>Saiba Mais <font-awesome-icon icon="fa-solid fa-caret-right" /></span>
   </div>
  </div>
  <div class="total">
   <div class="areas__image" id="trabalho"></div>
   <div class="areas__text" >
    <p>Administrativo</p>
    <span>Saiba Mais <font-awesome-icon icon="fa-solid fa-caret-right" /></span>
   </div>
  </div>
  <div class="total">
   <div class="areas__image" id="trabalho"></div>
   <div class="areas__text" >
    <p>Notarial e Registral</p>
    <span>Saiba Mais <font-awesome-icon icon="fa-solid fa-caret-right" /></span>
   </div>
  </div>
  <div class="total">
   <div class="areas__image" id="trabalho"></div>
   <div class="areas__text" >
    <p>Internet, Comércio Eletrônico e Tecnologia</p>
    <span>Saiba Mais <font-awesome-icon icon="fa-solid fa-caret-right" /></span>
   </div>
  </div>
 </section>
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
 

 .foto-banner-areadeatuacao{
  background-image: url(@/assets/areadeatuacao.svg);
  background-size:cover;
  height:600px;
  
   }
 h1{
  color: #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:42px;
  width:100%;
  height:100%;
 }
 }
 .areas{
  margin: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  &__image{
   width: 282px;
   height: 176.25px;
   background-size: cover;
   border-radius: 10px 10px 0px 0px;
  }
  &__text{
   height: 80px;
   border-radius: 0px 0px 10px 10px;
   background-color: #fff;
   width: 282px;
   display: flex;
   align-items: center;
   position: relative;
  }
  & p{
   font-size: 1rem;
   margin-left: 20px;
   font-weight: 500;
  }
  & span{
   position: absolute;
   bottom: 5px;
   right:10px;
   font-size: 12px;
   cursor: pointer;
  }
 }

 #consumidor{
  background-image: url(@/assets/consumidor.svg);
 }
 #trabalho{
  background-image: url(@/assets/trabalho.svg);
 }
 #imobiliario{
  background-image: url(@/assets/imobiliario.svg);
 }

 .total{
  padding: 15px 25px;
 }
 @media (max-width: 860px) {
  .foto-banner-areadeatuacao{
    height:400px !important;
     }
 }
</style>