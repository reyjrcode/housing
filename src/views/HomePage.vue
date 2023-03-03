<template>
    <div class="div">


        <HomeNav />

        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card" id="card-1" data-aos="fade-right">
                        <img src="https://www.sandhillrelo.com/wp-content/uploads/2019/07/additional-relocation-services-8.png"
                            height="425px" class="card-img-top" alt="???">
                        <div class="card-body">
                            <h2 class="card-title">Relocation applicants dashboard</h2>
                            <p class="card-text">123, 456 relocation applicants.</p>
                            <a class="btn stretched-link" @click="$router.push({ name: 'Dashboard' })"></a>
                        </div>
                    </div>

                </div>
                <div class="col">
                    <div class="card" id="card-1" data-aos="fade-left">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT51uCDHipEp4m3XTaUhmWgIqMA6_xtD5mOHAnF3IOonVvXAq3cffVoYt13eIu0qne9pck&usqp=CAU"
                            height="425px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h2 class="card-title">Shelter assistance dashboard</h2>
                            <p class="card-text">123, 456 shelter applicants</p>
                            <a class="btn   stretched-link" @click="$router.push({ name: 'ShelterDashBoard' })"> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="loader-wrapper">
            <div class="loader">
                <div class="box-1">
                </div>
                <span>
                    Loading.....
                </span>
            </div>
        </div>
    </div>
</template>
<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>


<script>

var $ = require("jquery");

$(window).on("load", function () {
    // $(".loader-wrapper").fadeOut("slow");
    // window.location = window.location
    $(".loader-wrapper").fadeOut(2000);
}
);

window.onload=function(){
 
}
 
</script>


<style>
.card-1 {
    box-sizing: border-box;
    width: 500px;
    height: 540px;
    background: rgba(217, 217, 217, 0.58);
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
}

.card:hover {
    border: 1px solid rgb(6, 131, 54);
    transform: scale(1.05);
}

.card:active {
    transform: scale(0.95) rotateZ(1.7deg);
}


.loader-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #e1fcf0;
    display: flex;
    justify-content: center;
    align-items: center;
}


/* loader */
.loader {
    position: relative;
}

.box-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 150px;
    width: 150px;
    background-color: #FFFFFF;
    background-image: linear-gradient(135deg, #FFFFFF 0%, #6284FF 34%, #FF0000 100%);
    border-radius: 50%;
    animation: rotate 3s linear infinite;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.box-1::before {
    content: '';
    position: absolute;
    inset: 15px;
    background: #f5f5f5;
    border-radius: 50%;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.loader span {
    text-align: center;
    position: absolute;
    top: 65px;
    left: 25px;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 2px;
    font-weight: 800;
    font-size: 1rem;
    animation: text-animate412 3s linear infinite;
}

@keyframes text-animate412 {

    10% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>

