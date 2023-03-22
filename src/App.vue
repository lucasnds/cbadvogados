<template>
  <header>
    <div class="container-header">
      <router-link class="router-link" to="/">
        <img src="@/assets/logocbadv.png" alt="logo">
      </router-link>
      <NavMobile v-if="this.isOpen"/>
      <font-awesome-icon @click="open()" class="menu"  icon="fa-solid fa-bars" />
    <nav class="nav-desktop">
      <ul>
        <li>
          <router-link class="router-link" to="/">HOME</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/sobrenos">SOBRE NÓS</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/areadeatuacao">ÁREAS DE ATUAÇÃO</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/politicadeprivacidade">POLÍTICA DE PRIVACIDADE</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/contato">CONTATO</router-link>
        </li>
      </ul>
    </nav>
    </div>
  </header>

  <router-view/>
  <a href="https://www.google.com/">
    <img class="whatsapp" src="@/assets/whatsapp.svg" alt="whatsapp">
  </a>
  <footer>
    <div class="footer">
    <div class="container-footer">
      <img src="@/assets/logo-escrita.svg" alt="logo escrita">
      <div class="localizacao">
        <div class="icon">
          <font-awesome-icon class="icone" icon="fa-solid fa-location-dot"/>
          <h6>Localização:</h6>
        </div>
        <p>Wall Street Empresarial - Av. Luís Viana, Paralela - Patamares, Salvador - BA, 41730-101</p>
      </div>
      <div class="contato">
        <div class="icon">
          <font-awesome-icon class="icone" icon="fa-solid fa-phone" />
          <h6>Contato:</h6>
        </div>
        <p>(71) 9 0000-0000</p>
        <p>cdadvogados@gmail.com</p>
      </div>
    </div>
    <div class="redes-socias">
      <a href=""><img src="@/assets/whatsapp-footer.svg" alt="whatsapp"></a>
      <a href=""><img src="@/assets/instagram.svg" alt="instagram"></a>
      
    </div>
    <span>política de privacidade - C&B advogados © 2023</span>
  </div>
  </footer>
</template>

<script>
import NavMobile from '@/components/NavMobile.vue'
export default {
  name: 'App',
  data(){
    return{
      isOpen:false
    }
  },
  methods:{
    open(){
      this.isOpen=!this.isOpen
      console.log("menu" + this.isOpen)
    },
    //Mudar nome da title
    // changeTitle() {
    //   document.title = 'Novo título da página';
    // }
  },
  components:{
    NavMobile
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
.nav-desktop,.nav-desktop ul,.container-header,footer,.container-footer,.icon,.redes-socias{
  display:flex;
  align-items:center;
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  margin-top:76px;
  background-image: linear-gradient(130deg,#161616 25%,#4f4f4f 100%)!important;
  background-repeat: no-repeat;
  
}

header{
  background: linear-gradient(286.9deg, #000000 18.68%, #0C0E29 38.18%);
  width:100%;
  z-index:999;
  position:fixed;
  top:0;
  transform: translate(-50%);
  left: 50%;
  height: 76px;

  img{
    padding:15px 0px;
    @media(max-width:1039px){
      padding:15px;
    }
  }
}
.container-header{
  max-width:1024px;
  margin:0 auto;
  justify-content: space-between;
   width:100%;
}

.menu{
  font-size:2rem;
  color:#fff;
  margin-right:15px;

  @media (min-width:840px){
    display:none;
  }
}

.nav-desktop{

    justify-content: center;
    height: 76px;
  ul{ 

    text-align:center;
    justify-content: center;
  }
  li{
    list-style: none;
    margin:0px 20px;
    letter-spacing: 0.02em;
    font: {
      size:14px;
      weight: 400;
      
    }
    .router-link{
      text-decoration:none;
      color:#fff;
      transition: .5s;
        &:hover,&:focus{
          border-bottom: 1.8px #fff solid;
        }
      }
  }

  @media (max-width:840px){
    display:none;
  }
}
  .whatsapp{
    position:fixed;
    right:20px;
    bottom:20px;
    z-index:99;
  }
  footer{
    flex-direction:column;
    justify-content: flex-end;
    text-align: center;
    color:#fff;
    width:100%;
    margin:0 auto;
    padding:30px 0px 15px 0px;
    background: #000;
    span{
      color:rgba(255, 255, 255, 0.8);
      font: {
        size:16px;
        weight: 400;
      }
      text-decoration-line: underline;
      margin-bottom: 20px;
    }
  }
  .footer{
    max-width:1024px;
    width:100%;
  }
  .container-footer{
    justify-content: space-evenly;
    flex-direction: row;
    width:100%;
    flex-wrap:wrap;
  }
  @media (max-width: 970px) {
    .container-footer {
      justify-content: center; 
    }
    .localizacao,.contato{
   padding: 15px;
    }
  }
  .icon{
    justify-content: center;
    .icone{
      font-size: 18px;
      padding-right: 5px;
    }
    h6{
      font: {
        size:16px;
        weight: 400;
    }
    }
  }
  .localizacao{
    max-width: 340px;
  }
    p{
      font: {
        size:14px;
        weight: 400;
    }
  }
  .redes-socias{
    justify-content: center;
    border-top: 2px #fff solid;
    width:100%;
    img{
      padding: 25px 5px;
    }
  }

</style>
