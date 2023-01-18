<template>
  <div id="app">

    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <!-- 
    - favicon
  -->
    <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">
    <!-- 
    - google font link
  -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Rubik:wght@400;500;600;700&family=Shadows+Into+Light&display=swap"
      rel="stylesheet">


    <header>
      <a href="/" class="casa-peru-logo"><img src="./assets/logo.png"></a>

      <Slide right :closeOnNavigation="true">
          <a class="nav-link"><router-link to="/">Home</router-link></a>
          <a class="nav-link"><router-link to="/house-specialties">House Specialties</router-link></a>
          <a class="nav-link"><router-link to="/menu">Menu</router-link></a>
          <a class="nav-link"><router-link to="/reviews">Reviews</router-link></a>
          <a class="nav-link"><router-link to="/contact">Contact</router-link></a>
          <!-- <a class="contact-link" href="#anchor-point" style="color: white;">Contact</a> -->
      </Slide>

    </header>

    <router-view></router-view>

    <!-- <Contact /> -->

    <!-- FOOTER -->
    <a name="anchor-point"></a>
    <div class="footer-container">
      <div class="box-wrapper">
        <div class="wrapper">
          <h3>Contact Info</h3>
          <p><a href="https://www.google.com/maps/dir/37.093376,-113.5640576/google.+maps+casa+peru/@38.8752355,-114.8586644,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x87528b65a25e6bef:0x11b7cea0a5c8b5ec!2m2!1d-111.9419932!2d40.6975339" target="_blank"><i class="fas fa-map-marker-alt"></i>   1830 W 3500 S West Valley City, UT</a></p>
          <p><a href="tel:8019725807"><i class="fas fa-phone-volume"></i>   (801) 972-5807</a></p>
        </div>

        <!-- <div class="wrapper">
          <h3>Hours</h3>
          <div class="hrs-of-operation-wrapper">
            <table>
              <tr><th>Monday</th><td>11am - 8pm</td></tr>
              <tr><th>Tuesday</th><td>CLOSED</td></tr>
              <tr><th>Wednesday</th><td>11am - 8pm</td></tr>
              <tr><th>Thursday</th><td>11am - 8pm</td></tr>
              <tr><th>Friday</th><td>11am - 9pm</td></tr>
              <tr><th>Saturday</th><td>11am - 9:30pm</td></tr>
              <tr><th>Sunday</th><td>11am - 6:30pm</td></tr>
            </table>
          </div>
        </div> -->

        <div class="wrapper">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/house-specialties">House Specialties</a>
          <a href="/menu">Menu</a>
          <a href="/reviews">Reviews</a>
        </div>

        <div class="wrapper">
          <h3>Social Media</h3>
          <a href="https://www.facebook.com/pg/casaperurestaurant14/about/?ref=page_internal" target="_blank">Facebook</a>
        </div>

      </div>
      
      <div class="dev-sig-wrapper">
        <h1 class="dev-signature">©Developed by Jandir Porta </h1>
      </div>
    </div>
  </div>
</template>

<script>

import {Slide} from 'vue-burger-menu'
export default {
  name: 'App',

  components: {
    Slide
  },

  data: function(){
    return{
      closeMode: false,
    }
  },
  mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('type', 'module')
      recaptchaScript.setAttribute('src', 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js')
      document.head.appendChild(recaptchaScript)

      let iconScript = document.createElement('script')
      iconScript.setAttribute('type', 'nomodule')
      iconScript.setAttribute('src', 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js')
      
      document.head.appendChild(iconScript)
  },
  methods:{
    navButtonClicked: function(){
      console.log("hamburger button clicked");
      this.closeMode = !this.closeMode;
      console.log(this.closeMode);
    }
  }

}
</script>

<style>

#app {
}

header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: red;
  padding: 1.5rem 10%;
  box-shadow: 0 .3rem 2rem rgba(0,0,0,.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header .casa-peru-logo img{
  height: 8rem;
}

header .navbar ul{
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}

header .navbar ul li{
  margin-left: 3rem;
}

header .navbar ul li a{
  font-size: 1.7rem;
  color: white;
}

header .navbar ul li a.active,
header .navbar ul li a:hover{
  color: black;
}

header #menu-bar{
  font-size: 3rem;
  color: white;
  cursor: pointer;
  display: none;
}

/* footer */
.footer-container{
  background: #282727;
  padding: 1rem 7%;
}

.box-wrapper{
  display: flex;
  flex-wrap: wrap;
}

.wrapper{
  flex: 1 1 25rem;
  margin: 2rem;
}

.wrapper h3{
  font-size: 2.5rem;
  color: white;
  padding: 1rem 0;
  font-weight: normal;
}
.wrapper p{
  font-size: 1.7rem;
  color: #eee;
  padding: 1rem 0;
}

.wrapper a{
  font-size: 1.7rem;
  color: #eee;
  padding: 1rem 0;
  display: block;
}

.wrapper a:hover{
  color: red;
}

.wrapper p i{
  padding-right: .5rem;
  color: red;
}

.dev-signature{
  display: block;
  margin: auto;
  margin-bottom: 20px;
  font-size: 1.0rem;
  text-align: center;
  border-top: .1rem solid rgba(255,255,255,.3);
  padding: 0.8rem 1rem;
  font-weight: bold;
  font-family: 'Shadows Into Light', cursive;
  letter-spacing: 1rem;
  color: white;
}

table {
  border-collapse: separate;
  border-spacing: 0px 17px;
  font-size: 1.7rem;
  text-align: left;
  color: white;
}

td {
  padding-left: 60px;
}

/* HAMBURGER */
.bm-burger-bars{
  background-color: white;
}

.bm-menu{
  background-color: #282727;
}

.nav-link a{
  color: white;
}

@media (max-width: 768px){

  header #menu-bar{
    display: block;
  }

  header .navbar{
    position: fixed;
    top: 8rem;
    left: 0;
    width: 100%;
    background: red;
    border-top: .2rem solid rgba(0,0,0,.1);
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
  }

  header .navbar ul{
    flex-flow: column;
    width: 100%;
  }

  header .navbar ul li{
    margin: 1.5rem;
    width: 100%;
  }

  header .navbar ul li a{
    display: block;
    color: white;
    padding-left: 2rem;
    font-size: 2rem;
  }

  header .navbar ul li a:hover{
    color: black;
    border-color: black;
  }

}

@media (max-width: 474px){ 

  .dev-signature{
    font-size: 0.95rem;
  }

}

@media (max-width: 408px){
  
  .dev-signature{
    font-size: 0.75rem;
  }

}
  
@media (max-width: 384px){
    
  .dev-signature{
    font-size: 0.57rem;
  }

}

@media (max-width: 360px){
    
  td {
    padding-left: 40px;
  }

  .dev-signature{
    font-size: 0.55rem;
  }

}

</style>
