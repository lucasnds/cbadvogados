<template>
  <main>
    <div class="foto-banner-homePrincipal">
      <img src="@/assets/logo-escrita.svg" alt="">
    </div>

  </main>
  
</template>

<script>
export default {

}
</script>

<style lang="scss">
main {
  max-width:1024px;
  margin:0 auto;
  
 
  .foto-banner-homePrincipal{
   background-image: url(@/assets/banner-homePrincipal.svg);
   background-size:cover;
   height:600px;
   margin-top: -20px;
   
   
   img{
     color: #fff;
     display:flex;
     justify-content: center;
     align-items: center;
     font-size:42px;
     width:80%;
     margin:0 auto;
     height:100%;
     
     @media(max-width:860px){
      img{
        height: 400px !important;
      }
      }
   }
  }
}

</style>