<template>
    <section class="contact">
        <div class="content">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo nisi natus nobis at accusantium. Fugit possimus nemo molestiae vero necessitatibus illum recusandae adipisci, aperiam placeat neque ipsam temporibus doloremque.</p>
        </div>
        <div class="container">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <h3>Address</h3>
                        <p>4671 Sugar Camp Road, <br>Owatonna, Minnesota,<br>55060</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p>507-475-6094</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <h3>Email</h3>
                        <p>test.test@outlook.com</p>
                    </div>
                </div>
            </div>
            <!-- contact form -->
            <div class="contactForm">
                <h2>Send Message</h2>
                <div class="inputBox">
                    <input type="text" name="" required="">
                    <span>Full Name</span>
                </div>
                <div class="inputBox">
                    <input type="text" name="" required="">
                    <span>Email</span>
                </div>
                <div class="inputBox">
                    <textarea required=""></textarea>
                    <span>Type your Message...</span>
                </div>
                <div class="inputBox">
                    <input type="submit" name="" value="Send">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact",
    data (){
      return{
        houseSpecials: [
          {
            image: 'images/house-images/ceviche-de-la-casa.png',
            title: 'Ceviche De La Casa',
            price: '$15.25',
            description: 'Fish cooked with lime juice, & sliced fish, yellow chili sauce fried sea food, seafopod mix with peruvian style rice.'
          },
          {
            image: 'images/house-images/tallarin-verde.png',
            title: 'Tallarin Verde',
            price: '$13.25',
            description: 'Green spaghetti sauted in spinach basil sauce topped w/ grilled steak or chicken & deep fried potatoes'
          },
          {
            image: 'images/house-images/arroz-con-pollo-transparent.png',
            title: 'Arroz Con Pollo',
            price: '$10.55',
            description: 'Chicken thighs with green rice and Peruvian sauce'
          },
          {
            image: 'images/house-images/lomo-saltado.png',
            title: 'Lomo Saltado',
            price: '$11.85',
            description: 'Sauteed beef w/ tomato & onions over french fries w/ rice'
          },
          {
            image: 'images/house-images/arroz-con-mariscos.png',
            title: 'Arroz Con Mariscos',
            price: '$13.95',
            description: 'Seafood mixed w/ Peruvian style rice'
          },
          {
            image: 'images/house-images/tallarin-saltado-de-mariscos.png',
            title: 'Tallarin Saltado De Mariscos',
            price: '$13.95',
            description: 'Spaghetti w/ sauteed seafood mix, onions tomato & bell peppers'
          }
        ]
      }
    },
    methods: {

    },
}
</script>

<style scoped>

.contact{
    position: relative;
    /* top:66px; */
    min-height: 100vh;
    /* padding: 50px 100px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.contact .content{
    max-width: 800px;
    margin-top: 100px;
    text-align: center;   
}

.contact .content h2{
    font-size: 36px;
    font-weight: 500;
    color: #fff;
}

.contact .content p{
    font-weight: 300;
    color: #fff;
}

.container{
    width: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.container .contactInfo{
    /* background-color: red; */
    width: 50%;
    display: flex;
    flex-direction: column;
}

.container .contactInfo .box{
    /* background-color: green; */
    position: relative;
    padding: 20px 0;
    display: flex;
}

.container .contactInfo .box .icon{
    /* background-color: orange; */
    min-width: 60px;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 22px;
}

.container .contactInfo .box .text{
    display: flex;
    margin-left: 20px;
    font-size: 16px;
    color: #fff;
    flex-direction: column;
    font-weight: 300;
}

.container .contactInfo .box .text h3{
    font-weight: 500;
    color: #00bcd4;
}

/* CONTACT FORM */

.contactForm{
    width: 40%;
    padding: 40px;
    background: #fff;
}

.contactForm h2{
    font-size: 30px;
    color: #333;
    font-weight: 500;
}

.contactForm .inputBox{
    position: relative;
    width: 100%;
    margin-top: 10px;
}

.contactForm .inputBox input,
.contactForm .inputBox textarea{
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
}

.contactForm .inputBox span{
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666;
}

.contactForm .inputBox input:focus ~ span,
.contactForm .inputBox input:valid ~ span,
.contactForm .inputBox textarea:focus ~ span,
.contactForm .inputBox textarea:valid ~ span{
    color: #e91e63;
    font-size: 12px;
    transform: translateY(-20px);
}

.contactForm .inputBox input[type="submit"]{
    width: 100px;
    /* background: #00bcd4; */
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
}

@media (max-width: 991px) {
    .contact{
        /* top: 117px; */
        /* padding: 50px; */
    }

    .container{
        flex-direction: column;
    }

    .container .contactInfo{
        margin-bottom: 40px;
    }

    .container .contactInfo,
    .contactForm{
        width: 100%;
    }
}

@media (max-width: 768px) {
    .contact .content{
        margin-top: 15px;
    }
}

</style>
