<template>
    <div class="pop-box">
      <div class="img-title">关于我，至于你？</div>
    <img class="the-img" src="@/assets/images/bg1.jpg" alt="">
    <!-- <audio controls autoplay>
        <source src="./mp3/zzsc.mp3">
    </audio> -->
    <div id="background" class="wall"></div>
    <div id="midground" class="wall"></div>
    <div id="foreground" class="wall"></div>
    <div id="top" class="wall"></div>
    </div>
</template>
<script lang='ts' setup>
</script>
<style lang='less' scoped>
/*满天星*/
audio{
    z-index: 5;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
    opacity: 0.1;
    -webkit-transition: all 2s;
    -moz-transition: all 2s;
    -ms-transition: all 2s;
    -o-transition: all 2s;
    transition: all 2s;
}
audio:hover{
    opacity: 1;
}
.wall{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
#midground{
    background: url("./img/midground.png");
    z-index: 1;
    -webkit-animation: cc 100s linear infinite;
    -moz-animation: cc 100s linear infinite;
    -o-animation: cc 100s linear infinite;
    animation: cc 100s linear infinite;
}
#foreground{
    background: url("./img/foreground.png");
    z-index: 2;
    -webkit-animation: cc 153s linear infinite;
    -o-animation: cc 153s linear infinite;
    -moz-animation: cc 153s linear infinite;
    animation: cc 153s linear infinite;
}
#top{
    background: url("./img/midground.png");
    z-index: 4;
    -webkit-animation: dd 100s linear infinite;
    -o-animation: dd 100s linear infinite;
    animation: da 100s linear infinite;
}
@-webkit-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@-o-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@-moz-keyframes cc {
    from{
        background-position: 0 0;
        transform: translateY(10px);
    }
    to{
        background-position: 600% 0;
    }
}
@keyframes cc {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 600% 0;
    }
}

@keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-webkit-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-moz-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}
@-ms-keyframes da {
    0%{
        background-position: 0 0;
    }
    100%{
        background-position: 0 600%;
    }
}

</style>