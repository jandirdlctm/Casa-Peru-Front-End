<template>
    <section class="contact">
        <div class="contact-content">
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
                        <p>1830 W 3500 S, <br>West Valley City, Utah,<br>84119</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p>801-972-5807</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <h3>Hours</h3>
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
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact",
    data (){
      return{

      }
    },
    methods: {

    },
}
</script>

<style scoped>

.contact-content{
    padding: 16px 10%;
}
.contact-content{
    position: relative;
    min-height: 100vh;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    /* background: url(../../public/images/background-images/contact_us_background.jpg) no-repeat ; */
    /* background-color: dimgray; */
    background-color: black;
}

.contact .content{
    max-width: 800px;
    margin-top: 54px;
    text-align: center;   
}

.contact .content h2{
    font-size: 50px;
    font-weight: 500;
    font-family: 'Oswald', sans-serif;
    color: #fff;
}

.contact .content p{
    font-weight: 300;
    /* color: #fff; */
    color: lightgray;
    margin-top: 25px;
}

.container{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 45px;
}

.container .contactInfo{
    width: 50%;
    display: flex;
    flex-direction: column;
}

.container .contactInfo .box{
    position: relative;
    padding: 20px 0;
    display: flex;
}

.container .contactInfo .box .icon{
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

table{
    font-size: 16px;
}

.container .contactInfo .box .text h3{
    font-weight: 500;
    /* color: #00bcd4; */
    color: white;
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
    background: red;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
}

@media (max-width: 991px) {
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

    .container{
        margin-top: 30px;
    }

    .contact .content h2{
        font-size: 36px;
    }
}

@media (max-width: 411px) {
    td{
        padding-left: 35px;
        font-size: 14px
    }
}

@media (max-width: 360px){
    td {
        padding-left: 21px; 
        font-size: 14px;
    }
}
</style>
