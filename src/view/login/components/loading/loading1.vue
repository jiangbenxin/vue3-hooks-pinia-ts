<template>
    <div class="music">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<script lang='ts' setup>
</script>
<style lang='less' scoped>
  .music {
            width: 175px;
            height: 100px;
            display: flex;
        }

        .music span {
            width: 6px;
            border-radius: 18px;
            margin-right: 6px;
        }

        .music span:nth-child(1) {
            /* 时间递增，参差不齐的效果 */
            animation: bar1 1s 0.1s infinite linear;
        }

        .music span:nth-child(2) {
            animation: bar2 1s 0.2s infinite linear;
        }

        .music span:nth-child(3) {
            animation: bar3 1s 0.3s infinite linear;
        }

        .music span:nth-child(4) {
            animation: bar4 1s 0.4s infinite linear;
        }

        .music span:nth-child(5) {
            animation: bar5 1s 0.5s infinite linear;
        }

        .music span:nth-child(6) {
            animation: bar6 1s 0.6s infinite linear;
        }

        .music span:nth-child(7) {
            animation: bar7 1s 0.7s infinite linear;
        }

        .music span:nth-child(8) {
            animation: bar8 1s 0.8s infinite linear;
        }

        .music span:nth-child(9) {
            animation: bar9 1s 0.9s infinite linear;
        }

        @keyframes bar1 {
            0% {
                background: #f677b0;
                margin-top: 25%;
                height: 1%;
            }

            50% {
                background: #f677b0;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #f677b0;
                height: 1%;
                margin-top: 25%;
            }
        }

        @keyframes bar2 {
            0% {
                background: #df7ff2;
                margin-top: 25%;
                height: 1%;
            }

            50% {
                background: #df7ff2;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #df7ff2;
                height: 1%;
                margin-top: 25%;
            }
        }

        @keyframes bar3 {
            0% {
                background: #8c7ff2;
                margin-top: 25%;
                height: 1%;
            }

            50% {
                background: #8c7ff2;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #8c7ff2;
                height: 1%;
                margin-top: 25%;
            }
        }

        @keyframes bar4 {
            0% {
                background: #7fd0f2;
                margin-top: 25%;
                height: 1%;
            }

            50% {
                background: #7fd0f2;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #7fd0f2;
                height: 1%;
                margin-top: 25%;
            }
        }

        @keyframes bar5 {
            0% {
                background: #7ff2d3;
                margin-top: 25%;
                height: 1%;
            }

            50% {
                background: #7ff2d3;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #7ff2d3;
                height: 1%;
                margin-top: 25%;
            }
        }

        @keyframes bar6 {
            0% {
                background: #7ff2a0;
                margin-top: 25%;
                height: 1%;
            }

            50% {
                background: #7ff2a0;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #7ff2a0;
                height: 1%;
                margin-top: 25%;
            }
        }

        @keyframes bar7 {
            0% {
                background: #adf27f;
                margin-top: 25%;
                height: 1%;
            }

            50% {
                background: #adf27f;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #adf27f;
                height: 1%;
                margin-top: 25%;
            }
        }

        @keyframes bar8 {
            0% {
                background: #e7f27f;
                margin-top: 25%;
                height: 1%;
            }

            50% {
                background: #e7f27f;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #e7f27f;
                height: 1%;
                margin-top: 25%;
            }
        }

        @keyframes bar9 {
            0% {
                background: #ecaa64;
                margin-top: 25%;
                height: 1%;
            }

            50% {
                background: #ecaa64;
                height: 100%;
                margin-top: 0%;
            }

            100% {
                background: #ecaa64;
                height: 1%;
                margin-top: 25%;
            }
        }
</style>