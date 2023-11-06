<template>
  <section class="home-page" id="home-page">
    <div class="home-section">
      <div class="home-content">
        <h3>CASA PERU IS WAITING FOR YOU TO EXPERIENCE THE BEST OF PERUVIAN CUISINE</h3>
        <p>Since 2015 Casa Peru Restaurant is one of the most popular peruvian cuisine restaurants in the Salt Lake City area, our goal is to make our customers feel at home and deliver the best experience possible.</p>
        <a href="https://www.clover.com/online-ordering/casa-peru-west-valley-city" target="_blank"><button class="order-btn">ORDER NOW</button></a>
        <!-- <a href="./menu"><button class="view-menu-btn">VIEW MENU</button></a> -->
        <a ><router-link to="/menu"><button class="view-menu-btn">VIEW MENU</button></router-link></a>
        <!-- <router-link to="/menu"></router-link> -->
        <!-- <a class="nav-link"><router-link to="/menu">Menu</router-link></a> -->
      </div>
      <div class="hero-image">
        <img :src="mainImageSrc">
      </div>
    </div>
    <!-- <div class="home-content">
      <h3>CASA PERÚ IS WAITING FOR YOU TO EXPERIENCE THE BEST OF PERUVIAN CUISINE</h3>
      <p>Since 2016 Casa Perú Restaurant is one of the most popular peruvian cuisine restaurants in the Salt Lake City area, our goal is to make our customers feel at home and deliver the best experience possible.</p>
      <a href="https://www.clover.com/online-ordering/casa-peru-west-valley-city" target="_blank"><button class="order-btn">ORDER NOW</button></a>
      <a href="/menu"><button class="view-menu-btn">VIEW MENU</button></a>
    </div>
    <div class="hero-image">
      <img :src="mainImageSrc">
    </div> -->
    <!-- <Contact /> -->
  </section>
</template>

<script>
// import Contact from './Contact.vue'
export default {
  name: 'Home',
  components: {
    // Contact
  },
  data (){
    return{
      images: [],
      mainImageSrc: null
    }
  },
  methods: {

  },
  created (){
    let self = this
    this.images = [
      {
        image: require('../assets/images/seafood/ceviche.png')
      },
      {
        image: require('../assets/images/meats/lomo-saltado-mixto.png')
      },
      {
        image: require('../assets/images/meats/parrillada-de-la-casa.png')
      },
      {
        image: require('../assets/images/chicken/mostrito.png')
      },
      {
        image: require('../assets/images/soups/sopa-de-choros.png')
      },
      {
        image: require('../assets/images/meats/tacutacu.png')
      },
      {
        image: require('../assets/images/meats/churrasco.png')
      },
      {
        image: require('../assets/images/seafood/leche-de-tigre-con-calamares.png')
      },
      {
        image: require('../assets/images/seafood/ceviche-de-camarones.png')
      }

    ],
    this.mainImageSrc = this.images[1].image,
    setInterval(function(){
      console.log("function called");
      self.mainImageSrc = self.images[Math.floor(Math.random()*self.images.length)].image;
    }, 3000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .home-section{
    min-height: 100vh;
    padding: 16px 10%;
    padding-top: 136px;
    background: lightgray;
  }
  
  .home-section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 0;
    overflow: hidden;
  }

  .home-section .hero-image{
    flex: 1 1 624px;
  }

  .home-section .hero-image img{
    width: 120%;
  }

  .home-section .home-content{
    flex: 1 1 624px;
  }

  .home-section .home-content h3{
    color: #333;
    font-size: 64px;
  }

  .home-section .home-content p{
    color: #666;
    font-size: 16px;
    padding: 16px 0;
  }

  .order-btn{
    font-size: 27.2px;
    padding: 11.2px 64px;
    border-radius: 80px;
    margin-top: 16px;
    background: red;
    cursor: pointer;
    border: 3.2px solid white;
    color: white;
  }

  .order-btn:hover{
    background: black;
    color: white;
  }

  .view-menu-btn{
    font-size: 27.2px;
    padding: 11.2px 64px;
    border-radius: 80px;
    margin-top: 16px;
    margin-left: 10px;
    background: red;
    cursor: pointer;
    border: 3.2px solid white;
    color: white;
  }

  .view-menu-btn:hover{
    background: black;
    color: white;
  }

  .home-section::before,
  .home-section::after{
    content: '';
    position: absolute;
    top: 80px;
    right: -96px;
    background: black;
    border-radius: 48px;
    transform: rotate(-45deg);
    height: 640px;
    width: 1120px;
    z-index: -2;
    animation: animate 1s linear 1;
  }

  @media (max-width: 1581px){
    .home-section{
      background: red;
    }

    .home-section .home-content h3{
      margin-top: 5rem;
      color: white;
      font-size: 4rem;
    }

    .home-section .home-content p{
      /* color: #FFFFFF; */
      color: lightgray;
      font-size: 1rem;
      padding: 1rem 0;
    }

    .order-btn{
      font-size: 1.7rem;
      padding: .7rem 4rem;
      border-radius: 5rem;
      margin-top: 1rem;
      background: none;
      cursor: pointer;
      border: .2rem solid white;
      color: white;
    }

    .order-btn:hover{
      background: white;
      color: red;
    }

    .view-menu-btn{
      font-size: 1.7rem;
      padding: .7rem 4rem;
      border-radius: 5rem;
      margin-top: 1rem;
      background: none;
      cursor: pointer;
      border: .2rem solid white;
      color: white;
    }

    .view-menu-btn:hover{
      background: white;
      color: red;
    }

    .home-page .hero-image img{
      width: 100%;
    }
    
  }

  @media (max-width: 754px){
    .home-section::before,
    .home-section::after{
      content: '';
      position: absolute;
      top: 80px;
      right: -96px;
      background: black;
      border-radius: 48px;
      transform: rotate(-45deg);
      height: 640px;
      width: 1120px;
      z-index: -2;
      animation: animate 1s linear 1;
    }

    .home-section .home-content{
      text-align: center;
    }

    .home-section .home-content h3{
      margin-top: -4rem;
    }

    .home-section .home-content p{
      padding: 3rem 0;
    }

    .order-btn{
      font-size: 1.7rem;
      padding: .7rem 4rem;
      border-radius: 5rem;
      margin-top: 2rem;
      background: lightgray;
      cursor: pointer;
      border: .2rem solid white;
      color: black;
    }

    .order-btn:hover{
      background: white;
      color: red;
    }

    .view-menu-btn{
      font-size: 1.7rem;
      padding: .7rem 4rem;
      border-radius: 5rem;
      margin-top: 2rem;
      background: lightgray;
      cursor: pointer;
      border: .2rem solid white;
      color: black;
    }

    .view-menu-btn:hover{
      background: white;
      color: red;
    }
  }
  @media (max-width: 404px){
    .view-menu-btn{
      display: block;
      margin: auto;
      margin-top: 10px;
    }
  }

  @media (max-width: 375px){
    .home-section .home-content h3{
      font-size: 3.3rem;
      padding-top: 11px;
    }
    .hero-image{
      margin-top: 20px;
    }
  }

  @media (max-width: 360px){
    .home-section .home-content h3{
      font-size: 3.1rem;
    }
  }

  @media (max-width: 320px){
    .home-section .home-content h3{
      font-size: 2.9rem;
      padding-top: 9px;
    }
  }

</style>
