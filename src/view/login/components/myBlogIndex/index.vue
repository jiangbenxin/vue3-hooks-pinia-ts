<template>
   <div id="mainmmm" class="main pop-box">
    
    <!-- <div class="text1 text">HTML</div>
    <div class="text2 text">CSS</div>
    <div class="text3 text">JavaScript</div> -->
   </div>
</template>
<script lang='ts' setup>
      const base64Img = [
            // '/src/assets/images/hua1.png',
            // '/src/assets/images/hua2.png',
            // '/src/assets/images/hua3.png',
            // '/src/assets/images/hua4.png',
            // '/src/assets/images/hua5.png',
            // '/src/assets/images/hua6.png',
            // '/src/assets/images/hua7.png',
            // '/src/assets/images/hua8.png',
        ];


        //生成从minNum到maxNum的随机数
        const randomNum = (minNum:any, maxNum:any) => {
            if (minNum && maxNum) {
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            } else if (minNum) {
                return parseInt(`${Math.random() * minNum + 1}`, 10);
            } else {
                return parseInt(`${Math.random() * 10}`, 10);
            }
        }

        // 桃花素材
        const snowflakeURl = new Array(8).fill(null,0,0).map((item, index) => `./images/icon_petal_${index + 1}.png`)

        // 随机六张图
        // const getImagesName = () => snowflakeURl[randomNum(8)];
        const getImagesName = () => base64Img[randomNum(8,null)];

        // 创建一个雪花元素
        const createSnow = () => {
            let theBody  =  document.body.offsetWidth
            const startPositionLeft = randomNum(theBody,null);
            let randomStart = Math.random();
            randomStart = randomStart < 0.5 ? 1 : randomStart;
            const snowboxCssText = `
            position: fixed;
            top:-10px;
            width: 25px;
            transform: rotate(0deg);
            height: 26px;
            background-repeat:no-repeat;
            opacity:${randomStart};
            background-image: url(${getImagesName()});
            left:${startPositionLeft}px;
            `;
            const snow = document.createElement('div');
            snow.style.cssText = snowboxCssText;
            return snow;
        }

        const main = () => {
            // 造新落花
            const snow = createSnow();
            var mainmmm:any =document.querySelector(".main");
            // document.body.appendChild(snow);
            if(mainmmm){
                mainmmm.appendChild(snow)
            }
            const duration = randomNum(6, 10) * 1000; //随机下落时间
            const endPositionLeft = Number(snow.style.left.replace('px', '')) - 100 + Math.random() * 500 + 'px'; //所及下落左/右位置
            snow.animate([
                { top: '160vh', transform: `rotate(${randomNum(100, 360 * 3)}deg)`, left: endPositionLeft }
            ], {
                duration
            })
            snow.getAnimations().map((animation) => {
                animation?.finished.then(() => {
                    // console.log('finished');
                    snow.remove();
                })
            })
        }
        main()
        setInterval(async () => {
            main()
        }, 1000)
</script>
<style lang='less' scoped>
.pop-box{
  background-image: url('src/assets/images/bg1.jpg');
    .text {
            width: 800px;
            height: 200px;
            font-size: 120px;
            font-weight: 900;
            margin: auto;
            color: transparent;
            line-height: 200px;
        }
 
        .text1 {
            background: url(./s3.png);
            -webkit-background-clip: text;
            animation: moveImg 7s infinite alternate linear;
        }
 
        .text2 {
            background: url(./s3.png);
            -webkit-background-clip: text;
            animation: moveImg 5s infinite alternate linear;
        }
 
        .text3 {
            background: url(./s3.png);
            -webkit-background-clip: text;
            animation: moveImg 8s infinite alternate linear;
        }
 
        @keyframes moveImg {
            0% {
                background-position: 0%;
            }
 
            50% {
                background-position: 50%;
            }
 
            100% {
                background-position: 100%;
            }
        }
@keyframes wind{
    0% {
        bottom: 100%;
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-90deg);
        bottom: -10%;
    }
}
.speed1{
    position: absolute;
    animation: wind 5s linear;
}
    
}

</style>