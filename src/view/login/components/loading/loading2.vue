<template>
  <svg>
    <circle class="path" style="stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    -webkit-animation: dash 2s ease-in-out infinite, color 8s ease-in-out infinite;
    animation: dash 2s ease-in-out infinite, color 8s ease-in-out infinite;
    stroke-linecap: round;" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
  </svg>
</template>
<script lang='ts' setup>
</script>
<style lang='less' scoped>
    @-webkit-keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    @-webkit-keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
      }
    }
    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
      }
    }
    @-webkit-keyframes color {
      100%, 0% {
        stroke: #d62d20;
      }
      40% {
        stroke: #0057e7;
      }
      66% {
        stroke: #008744;
      }
      80%, 90% {
        stroke: #ffa700;
      }
    }
    @keyframes color {
      100%, 0% {
        stroke: #d62d20;
      }
      40% {
        stroke: #0057e7;
      }
      66% {
        stroke: #008744;
      }
      80%, 90% {
        stroke: #ffa700;
      }
    }
</style>