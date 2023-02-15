<template>
    <div class="div">
        <HomeNavigation />
        <div class="container">
            <div class="row">
                <div class="col">

                    <div class="card" id="card-1">
                        <img src="https://www.sandhillrelo.com/wp-content/uploads/2019/07/additional-relocation-services-8.png"
                            height="425px" class="card-img-top" alt="???">
                        <div class="card-body">
                            <h2 class="card-title">Relocation applicants dashboard</h2>
                            <p class="card-text">123,456 relocation applicants.</p>
                            <!-- <a href="#" class="btn btn-primary stretched-link" @click="$router.push({ name: 'Dashboard' })"></a> -->
                            <a class="btn stretched-link" @click="$router.push({ name: 'Dashboard' })"></a>
                        </div>
                    </div>

                </div>
                <div class="col">
                    <div class="card" id="card-1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT51uCDHipEp4m3XTaUhmWgIqMA6_xtD5mOHAnF3IOonVvXAq3cffVoYt13eIu0qne9pck&usqp=CAU"
                            height="425px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h2 class="card-title">Shelter assistance dashboard</h2>
                            <p class="card-text">123,456 shelter applicants</p>
                            <a class="btn   stretched-link" @click="$router.push({ name: 'ShelterDashBoard' })"> </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data: () => ({
        show: false,
        show1: false,
    }),
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
    border: 1px solid black;
    transform: scale(1.05);
}

.card:active {
    transform: scale(0.95) rotateZ(1.7deg);
}
</style>

