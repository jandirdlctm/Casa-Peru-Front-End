<template>
  <div id="app">



    <header>
      <a href="/" class="casa-peru-logo"><img src="./assets/logo.png"></a>
      <!-- <div id="menu-bar" class="fas fa-bars">

      </div> -->


      <!-- <button v-on:click="navButtonClicked" type="button" name="button">aa</button> -->
      <!-- v-bind:class="{'fas fa-times': closeMode}"> -->
      <!-- <button v-on:click="navButtonClicked" type="button" name="button" v-bind:class="{'fas fa-times': closeMode, 'fas fa-bars': !closeMode}"></button> -->
      <!-- <div v-on:click="navButtonClicked" class="menu-bar" ><i  v-bind:class="icon"></i></div> -->
      <!-- v-bind:class="{ 'fas fa-times': closeMode==true }" -->
      <!-- <div class="">
        <html:button v-on:click="navButtonClicked" id="menu-bar" class="fas fa-bars" type="button" name="button"></html:button>
      </div> -->

      <Slide right>

          <a class="nav-link"><router-link to="/">Home</router-link></a>
          <a class="nav-link"><router-link to="/house-specialties">House Specialties</router-link></a>
          <a class="nav-link"><router-link to="/menu">Menu</router-link></a>
          <a class="nav-link"><router-link to="/reviews">Reviews</router-link></a>
          <a class="contact-link" href="#anchor-point" style="color: white;">Contact</a>

      </Slide>



      <!-- <nav class="navbar">
        <ul>
          <li><a><router-link to="/">Home</router-link></a></li>
          <li><a><router-link to="/house-specialties">House Specialties</router-link></a></li>
          <li><a><router-link to="/menu">Menu</router-link></a></li>
          <li><a><router-link to="/reviews">Reviews</router-link></a></li>
          <li><a href="#anchor-point">Contact</a></li>
        </ul>
      </nav> -->
    </header>
    <router-view></router-view>
    <!-- FOOTER -->
    <a name="anchor-point"></a>
    <div class="footer-container">
      <div class="box-wrapper">
        <div class="wrapper">
        <h3>Contact Info</h3>
        <p><a href="https://www.google.com/maps/dir/37.093376,-113.5640576/google.+maps+casa+peru/@38.8752355,-114.8586644,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x87528b65a25e6bef:0x11b7cea0a5c8b5ec!2m2!1d-111.9419932!2d40.6975339" target="_blank"><i class="fas fa-map-marker-alt"></i>   1830 W 3500 S West Valley City, UT</a></p>
        <p><a href="tel:8019725807"><i class="fas fa-phone-volume"></i>   (801) 972-5807</a></p>
      </div>

      <div class="wrapper">
        <h3>Quick Links</h3>
        <a href="/">Home</a>
        <a href="/house-specialties">House Specialties</a>
        <a href="/menu">Menu</a>
        <a href="/reviews">Reviews</a>
      </div>

      <div class="wrapper">
        <!-- <h3>Hours</h3>
        <p>Monday       11:00 AM - 8:00 PM</p>
        <p>Tuesday      CLOSED</p>
        <p>Wednesday    11:00 AM - 8:00 PM</p>
        <p>Thursday     11:00 AM - 8:00 PM</p>
        <p>Friday       11:00 AM - 9:00 PM</p>
        <p>Saturday     11:00 AM - 9:30 PM</p>
        <p>Sunday       11:00 AM - 6:30 PM</p> -->
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
        
      </div>

      <div class="wrapper">
        <h3>Social Media</h3>
        <a href="https://www.facebook.com/pg/casaperurestaurant14/about/?ref=page_internal" target="_blank">Facebook</a>
      </div>

      <!-- <h1 class="credit">Developed by <a href="#">Kelsey meza </a> all rights reserved.</h1> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
import {Slide} from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    Slide
  },
  data: function(){
    return{
      closeMode: false,
      // icon: "fas fa-times"
    }
  },
  methods:{
    navButtonClicked: function(){
      console.log("hamburger button clicked");
      this.closeMode = !this.closeMode;
      console.log(this.closeMode);
      // this.icon = "fas fa-times";
      // console.log(this.icon);
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
    /* border-left: .2rem solid blac; */
    font-size: 2rem;
  }
  header .navbar ul li a:hover{
    color: black;
    border-color: black;
  }

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

.credit{
  font-size: 2rem;
  text-align: center;
  border-top: .2rem solid rgba(255,255,255,.7);
  padding: 2rem 1rem;
  font-weight: normal;
  letter-spacing: 1rem;
  color: white;
}

.credit a{
  color: red;
}

table {
  border-collapse: separate;
  border-spacing: 0px 17px;
  font-size: 1.7rem;
  text-align: left;
  color: white;
}

td {
  /* padding: 10px 0; */
  padding-left: 60px;
}

/* table{
  font-size: 1.7rem;
  color: #eee;
  /* padding: 1rem 0; */
/* }  */

/* td{
  text-align: right;
  margin-left: 10px;
  padding: 10px;
}

th{
  text-align: left;
} */

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

@media (max-width: 360px){
    
    td {
  /* padding: 10px 0; */
  padding-left: 40px;
}

  }






</style>
