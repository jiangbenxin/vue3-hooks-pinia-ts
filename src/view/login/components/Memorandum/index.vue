<template>
   <div id="mainmmm" class="main pop-box">
    <div class="text1 text">HTML</div>
    <div class="text2 text">CSS</div>
    <div class="text3 text">JavaScript</div>
   </div>
</template>
<script lang='ts' setup>
      const base64Img = [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+1JREFUeNqclr9vFUcQx2f2ToAdGyp+PAkigZSIgCLFBEWisBSEKJIiNC7S0QRZCU2UFFCAlH8gilKlTEHrImnSUURQEMVVCgoQtAQMWC958bN573bzmd093/n9kCyfNLc/bne+M9+Z2T198tGiTHxUxBWFOOdoXerTKhO0NEXlyjRXlCXrVKY9pezu2YcsIBdVtYMU6vQl47vIA5EwiFbtCSREj94X1a9RfBzpIZV5B0gH6y/Qf8qiW6x8tRcQM+0KzZd0uoxeACa1qIlzG0gHyn4AbJk1/Ykg1XA4rh0F8P0ZzVeoXGPCG2aNUa9JQPovAIe1cEu0dyaBuBCCjArPB6i5LgYg4ncRsy7Yl4L3+3zlZVRKe414MSdOboL2GjgfLDAROKSmDldtECu8+gGjDksO8WVtjC7Qd9DE6ypb5xiuS2jiH1+m2GBdAjQQz35nn7zxGA5MjIlvgzh3rBD5hN3dhr6svC3sCRgUNHFpc5qC9WYiiFnWpFNYwsohm3zIFMm2wvHWADTEZCgAWWfYm1QvDYiGg9hzEeUbjcWIWh/FmG2tN1rU5y0hiepMKkr5z7ysBpVUVVUnUUMX1nyIwllkI3EO3yhVlHszJGYxqS3JA4kAFCXfSONhylSZAaRvOj2l4TOIi/xiHkovI71otc+8+xTYuh8sJWO/yulZRamG1SbtAvM/o2NRclHVteTiQu8PoeQdlA3aALGtEojPAElxu/UZyG8hnv5t1l+TVnBSTDSchJWD8P4ieVIHuKlEF6syURSpUhfjES3OfPNYIJ4zu4Re0/WL0V6aFXB6jozpR8VsiaxrfSQ0QJZJcRyMButorq3IT64pKyBZQ/kXyH2mXpontvwsEXyTrKG4NNXeDi9CyqZYE4Bwo2wflNvHaXN6Wwmw3H/MaMWya5alh9k3jPkv0cAWRY0Os1ZzVplpo140GPE4oBS4g0JYsWNlnmVvA/DMQjhJuQTZVg61dW3Ux9BY+YV8DuHNfuO/DBYoLzdQ+y3KZ/Gi2wZKMckAptxnoGlUZaOAKC02Nioz5AMLFNRdQ/ll+P+H+U3NkbcStEBHIGt9ywuV5pJpuQLOW0TmdzOgfTN2SYLvqfLfAFrG+nexvMeRu6mtlN1B0/SYzPF6THd10vVrbD4E7Bs8O4/Rn2PVGTzYwIM+HlRq93utvLkmpZWI8+zpAfydpONm6h1vCfAHi1d9FU7hwad4ch6lR5gb0G7ZD0XSHV/cEFLfJfeY+UmLorvbXyIDe4xnPxKIGdw8Qe6+B8BpLD2acjqSZX8qf9H7k8HfeBv28t9lj/2JPILQR7D6K9WmST+kOitPnfrr9b8AAwBO9bdMMR/shAAAAABJRU5ErkJggg==',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAYAAAA/mJfHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAiZJREFUeNqklM2OTUEQx7vqnDF3uBOCxOfGWixtvAE7mQUbD+AZbGzsrTyCiCewk1xjgzWrsZPIYIYYg3tPV/lV9zn3+hginJP/qeqvX1d3Vx/ZvryW3DxZtpRzl6zLRTlsDtsVv6q251mXuqifVXVFs5U2/f/ToIsq8ulfYYIOorN4a4AuuMjVOcyTH8AclyRj7LJIzMgYEafc4q5QOIR/iroz9DsmIqtol/KrpLpJJ6pVzjHyJsSxNRRdM/AkFlL6qbmZu1KjOhOxzJhORLfQSNSeM+Zz27RNhHWJ5iV333Q3aAokrMRcqXxEkS0WWepKiYjTUyJknqZJaEMVBBBMD+nV+0kGBuXyflcWeaxNWUEZ/Iiar7RqH0oaph12tOycyCKyavfzfUL9VrRp5Bd59pbKN/WYPVXtcX6/VgfsLgF5BNWysdHnPPYk0A9OwQuPIyha4H3wKnSMXWeSjdiaeFqyPJLuGhF+KeAibsRA/UGD6w2il9+Rmjpz2FE6EJXtxvWpy15AiwJQrAVI+RzB3iAttqVZrLntZpkk9X103jHLybOXOxkw61XAddlKyEzut4ny2c8b2HJ539EwZVZlEE+99EU9qPdH+Mtk7y1gk70ORPkLvAd4n7/CCbQ0/C16YJz22LMdRi8BXgcw+d2FbcuS3O8x6DX2Css9zXKtwvJHnHX0gKheALI/3f52npXJHwKYAFhl4Ah/SiQ7wKd/+yv5JsAAAqqzyhQ5+KYAAAAASUVORK5CYII=',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAZCAYAAADXPsWXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAshJREFUeNqcVD1rFUEUvWdm98XggxAVCxFEwYAoqIhoaSVYC9pYCBYW/gnBIvaCjWAaGxErLUXESkHEzpSChRpFA5oX4svc67kzu3mbZxI/5r3L7OzOOffcjxnMHzslG40QgoBWZj7FILGqtOr1xJ+7o5KtRw3IOVK4QYA5EXv5m8MtCCYBzBJ8jWqmQ4w7qGCWRDN/S1ITfIPgGcSwQIIh41nh/I1ElzmDlsNyqyzpejj1c8MlqjjMXHwBPC9oLAz47UiMcYo7FwWb52Q/eS6Q5KsTAIUYhcTN07yvqqvF2KvLO1WV1syMW+UqQQOauic0BK0RtMwQzjLM6fzNlY+RzPDtUWIHEJMiAo3qRjtkme9Oc3Wfq+MlsWbSsfN8N1gXnOV/dw0TG3D7EvdfVFNUrqA4wE4JOMlNS9YAy1wWVDkypUGHmiRKElT+omE5wQ0T/Pw9o8htoQNqzJ0igVipqWKBzrUtMRDjGW77MfLoOQoFGAhUkICZSE2DmfZYpReesxIO0IfZAQKG5gl2gJe3ebbkaydAm5doISwB9ir3SZYH7GFxd9DzpzXp0OzZFeRmSW1i+S3aFB3MebkzSc4J7KBq+Ome3WMGhjJr9o5RcczqYPY5AI8SSlEqXWV6YzhEgpUsHQXoP+2Ac52oIgSbsqDX+bBS2rmE48diL6Unz3r+0HTiWghFgRPsJsEdnp35VR2dOYajPS77BGmbvKKi6bQRwS4SPObF9HD8xLmSHu+DSTJom3208puGywTRnkSJt2WsgYuSpBPM7SSRg7FuZy/wWEQSmD2IkLsSo250+VSatKbnusTfqYRJnwRsH7sZK3nm/ja7AhlOYl4tdjRs47JPGa/5fIul/CjrqrSxkggPR2Q7bYIK3vJY3WOO3zAahfx5kCQNqfkdM/ic66cEvbcYkvzD8I79wCN7hddWyqX4j/FLgAEAEYiFiCZX+e4AAAAASUVORK5CYII=',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAXCAYAAADUUxW8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAolJREFUeNp8lL9rVEEQx2dm9/Q8jIeKSLTxH7AwjYi1/4GWFlcJ9qKkF1sFK7GxsbExhVjYaqtYGPxFEAXhxMTEHPFd8nbG77x9d777YTZMdnd2P/Nz3/HHcxfIBwehECMkHAutcCaEUEiMn2OrtRsORBIRkhCIhclUIUaR/g1mpsvEdBXLNm654hv2t3G2RnOGjEmiK5iuYd6G9GGoD+UR6O5ivzgXVg/B7LQR9bDvw4w2zgvIHs5uIYo4DUdNyXNxr0MzUhii6g8zJojtIL9TJrbMZmvQfYX2NWQQsWljseSXaARqFoUwIuOUCoRz1oItIa4Orm3ivBcR9nE2OQFPG5VXB9nqiioM5IrgqIChAuFvQ7FopkcjgC4uBVNPH16USVEtnwkp5crAGFrJ6h2gAEM/oV2PAFsA0xiEeM80cQY99cDgraoljg5D9xSLPwjbPJxQgQ4wN+qZ0xATpKL+QCRboBW/55634G2XU/UqlFIDdTDkyvvLgoMFwCt4HetVqwD/skQ/UJcOLGruT9UiMsnVZ7XaKw2R0pNRdF7tIeZVWLzoD4Lq/jo49lrlyl3II3C/jWrYD1NKz7G+5I2vnVYgjUD/KpgGzPKsWZLoeWG8T5Q+YXUSxoqRRxP3CE50AV4fw9DOxPO0/AqSGT9EuHfQxcJB8Xy9SDlk//diohGjsOsCvUXbXmJ/XkS3TKpP0kNuY36Dgm3MfBi159xSsnvo6QOAB1lsmGE9JMyvYMlmYZvQDVKZlgHeB1QCTsi5VOEP+/4YNMaXVJY3tUxdGGphbWmv3ITQtMyDfbwDdEPLsp2ylBCalv/BXoNVeL6OCAYw0oHQtETabxh9V009yz8YM+OvAAMAa97AOEdO7j0AAAAASUVORK5CYII=',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXZJREFUeNp0UUtKA0EQrd9kVCJBEjcewLVEF67cuPIM3kD34gVE3LnxCh5CvINuvYCgiCJJJGa6qn09iaCCPRRDV7+q9+oVP2zt0s8jpqxmfevYW7VUOzPP879QTJWInKrpNQrOAFLKRDlnEnenNsIZoGNR3QPwySobKqLuLlN3rUeSI6gECDZZ+ECUX1iFUDAx0/2qU0m9vFSAubQGjg+ZeEzQ1H7MY1AM8b/IOSoJD0L0oXAIOR+oajXlubbPiNj2Jg3MUwKNbIGei4QAQxQ5RXfTzjoOjYkFEuDZgYRZAZR7uFBqUhl4BcX3rD4yPBpeNjB5w0lQg0EQDp2g7maNa2jNlj3qIBqEeBMiFBgmYTSoXJOIG+QfiiWWmqaj2Xou6XWxhJYSTI/w8crUcslZmiXDS/W9KmRXYccr1ngC4JQWxRYpiUMOElroMNQdbucAjn5uF/Y4DKF1+PYMwCV636KT059jMPMdXY5AfZ9Vp/TP+RJgACFt0d6A0633AAAAAElFTkSuQmCC',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbdJREFUeNpcksFqFEEQhqt7ZjZZXVAUCV7zEh6EhBw8CV48COJJPAk+QMjJ9xCvgogiuejdN/AFvAkxGpSVbLq7qvy6ZxZXB2pmoOqr/6/qDl9uH0iMUWbzLemGgehltr0lIYZdLfpEU/5dcj7Oq/Q5rS7c1KQ+vfz7dOI+lJRnMYYjVbthylvtwN1fkX9J+CYYSOy52X2zsCDnVmTbzH+iKlbKkgYPqDkhjhtoZhIk7Gsuz+l1AqwaQs1lisQBR1i/kXlccvlE37OeGaL0/hCVr26eYxfRb6A0kJkAKmxWbKDBHZq/7hlhID+nyCJFAXDiRtBc6kK0lNpgie09mrzpsZi9s19w10OMGguKcZqcNdBd6jg2Ws58byK26Pkx7Hywzp+yyVOrcmtJngo1WCdYNfK92paDpY9B9S7nuQO0DBsz8gKuszao2u1ocmltKmH5MF+kU87wWkkpEsL/38hZqGnBZkM7x8nYGTM8EymPUL0ndVKXc1QTC7LRrlbr9cBWGzen4StW/oKqt0D7+LzlJrss7gposRG+jNXl/1duvc0fKL2j6D0zzrl0CxQXgPPpXL//EWAAgfSO+7ohlD8AAAAASUVORK5CYII=',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPhJREFUeNockDtOAzEQhsezXrISEgEEiCMgUQEF56CgIg00FJyFgkPkOLkBokZBKDzCZtfz4ndsfX5o5h//49TfzchEafX+QeFOpn4q4ziToZgM49zMljk8KO+0ND0+pP573Uopz0ieulWBXpvaQyaMqEtKbZ60Vx6+i8CKGyZmPkmJLmsSznzLTXMD6vmXEUkVThvidMbufu6qjxFhYAQU29JU9zq7DHP7ykngwWsD1QuEW+CtAZ+5bIYFSi894gBJay1iMOyuVgUdeEN33ovoEy73bnahokdI7AAqC8L+CuMJb8cP1C+o1GHfAxN0CI3/4Yu+/gUYACJeyfo1sqdUAAAAAElFTkSuQmCC',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJFJREFUeNoUjEsKwkAQBd90j2bGIYJbEUQ8jgvPJIg7r+AdXHsZF+78xYQQ85lux1VBFZR5bLaoixKf+wvVs1h0TduTqkJEQURZNvF7F/zcAn9hXBI7GKwNmbE1zMHl4ZC4FJV3HKS0Pg+zoe1XEmPbfS2I6UpQvanIKb2n6XTkETe2qWqo6Dn28ZJiTcz4CTAA+1pDxlSYR4oAAAAASUVORK5CYII='
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
    height: 100%;
    background-image: url('../../../../assets/images/aiouniya.jpg');
    background-repeat: no-repeat;
    background-size: contain;
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