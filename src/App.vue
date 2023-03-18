<template>
  <header>
    <img src="@/assets/logocbadv.png" alt="logo">
    <nav class="nav-desktop">
      <ul>
        <li>
          <router-link class="router-link" to="/">HOME</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/sobrenos">SOBRE NÓS</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/areadeatuacao">ÁREA DE ATUAÇÃO</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/politicadeprivacidade">POLÍTICA DE PRIVACIDADE</router-link>
        </li>
        <li>CONTATO</li>
      </ul>
    </nav>
  </header>
  <router-view/>
  <a href="https://www.google.com/">
    <img class="whatsapp" src="@/assets/whatsapp.svg" alt="whatsapp">
  </a>
  <footer>
    <div class="localizacao">
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-location-dot"/>
        <h6>Localização:</h6>
      </div>
      <p>~localizacao</p>
    </div>
    <div class="contato">
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-phone" />
        <h6>Contato:</h6>
      </div>
      <p>(71) 9 0000-0000</p>
      <p>cdadvogados@gmail.com</p>
    </div>
    <span>política de privacidade - C&B advogados © 2023</span>
  </footer>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');


*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Playfair Display', serif;
}
body{
  background: linear-gradient(180deg, #000000 67.29%, #0C0E29 100%);
  height:100vh;
  margin-top:76px;
}
header{
  position:fixed;
  top:0;
  background: linear-gradient(286.9deg, #000000 18.68%, #0C0E29 38.18%);
  width:100%;
  z-index:999;

  img{
    position:absolute;
    left: 15px;
    top: 15px;
  }
}
.nav-desktop{
    display:flex;
    align-items: center;
    justify-content: center;
    height: 76px;
  ul{ 
    display:flex;
    align-items: center;
    text-align:center;
    justify-content: center;
  }
  li{
    color:#fff;
    list-style: none;
    margin:0px 20px;
    //padding:27.5px 0px;
    font-weight: 700;
    letter-spacing: 0.02em;
    transform:.8s;
    cursor:pointer;
    &:hover{
      border-bottom: 2px #fff solid;
    }
  }
}
  .router-link{
    text-decoration:none;
    color:#fff;
    font-weight: 700;
    letter-spacing: 0.02em;
    transform:.8s;
    &:hover{
      border-bottom: 2px #fff solid;
    }
  }
  .whatsapp{
    position:fixed;
    right:20px;
    bottom:20px;
    z-index:99;
  }
  footer{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color:#fff;
  }

</style>
