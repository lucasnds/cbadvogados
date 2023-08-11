<template>
  <header>
    <div class="container-header">
      <router-link class="router-link" to="/">
        <img src="@/assets/logocbadv.png" alt="logo">
      </router-link>
      <img class="menu" src="@/assets/menu.svg" @click="isOpen = true">
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
    <nav class="nav-mobile" v-if="isOpen">
      <img class="close" src="@/assets/close.svg" @click="isOpen = false">
      <ul>
        <li>
          <router-link class="router-link" to="/" @click="isOpen = false">HOME</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/sobrenos" @click="isOpen = false">SOBRE NÓS</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/areadeatuacao" @click="isOpen = false">ÁREAS DE ATUAÇÃO</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/politicadeprivacidade" @click="isOpen = false">POLÍTICA DE PRIVACIDADE</router-link>
        </li>
        <hr width="95%" size="1px" align="center">
        <li id="contato">
          <router-link class="router-link" id="contato__link" to="/contato" @click="isOpen = false">CONTATO</router-link>
        </li>
      </ul>
    </nav>
    </div>
  </header>

  <router-view/>
  <a href="https://api.whatsapp.com/send?phone=5571981535580&text=Ol%C3%A1">
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
        <p>Wall Street Empresarial - Torre A, Sala 121 - Av. Luís Viana, Paralela - Patamares, Salvador - BA, 41730-101</p>
      </div>
      <div class="contato">
        <div class="icon">
          <font-awesome-icon class="icone" icon="fa-solid fa-phone" />
          <h6>Contato:</h6>
        </div>
        <p>(71) 9 8153-5580</p>
        <p>coelhoebastos.adv@outlook.com</p>
      </div>
    </div>
    <div class="redes-socias">
      <a href="https://www.instagram.com/coelhoebastosadv" target="_blank">
        <img src="../src/assets/instagram.svg" alt="instagram">
      </a>
      <a href="https://api.whatsapp.com/send?phone=5571981535580&text=Ol%C3%A1">
        <img src="../src/assets/whatsapp-footer.svg" alt="whatsapp">
      </a>
    </div>
    <router-link class="router-link" to="/politicadeprivacidade"><span>política de privacidade - C&B advogados © 2023</span></router-link>
  </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      isOpen:false
    }
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
    border-top: 2px #fff solid;
    margin: 20px 0px 15px ;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    img{
      padding-top: 15px;
      cursor: pointer;
    }
    
    }
  

  .close{
    color:#fff;
    position: absolute;
    right: 15px;
    top:15px;
  }
  //.none{
    //display:none;
  //}
  .nav-mobile{
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translate(-50%);
    width:95%;
    border-radius: 10px;
    background-color: #1C1C1C;
    padding-bottom: 20px;
    max-width: 500px;
   
    @media(min-width:515px) and (max-width:839px){
      right: 10px;
      transform:unset;
      left:unset;
    }
    @media(min-width:840px){
      display:none;
    }
  ul{ 
    text-align:left;
    justify-content: center;
  }
  li{
    list-style: none;
    padding: 30px;
    letter-spacing: 0.02em;
    font: {
      size:1rem;
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
    hr{
      border: 1px #fff solid;
      margin: 0 auto;
      margin-bottom: 30px;
    }
  }
  
  #contato{
    background-color:#fff!important;
    border-radius: 100px!important;
    margin: 0 auto!important;
    padding: 15px !important;
    width: 35%;
  
    #contato__link{
      display:flex;
      justify-content: center;
      color: #1C1C1C!important;
    }
  }

</style>
