<template>
    <div class="pop-box">
      <h1 class="img-title">经常总结分类，能大大加强你的智慧，如果能全部说出来，恭喜你精通了该知识点</h1>
    <img class="the-img" src="@/assets//images/bg1.jpg" alt="">
      <div class="buttons main">
      <!-- <button class="btn-hover color-1">BUTTON</button> -->
      <!-- <button class="btn-hover color-2">BUTTON</button>
      <button class="btn-hover color-3">BUTTON</button>
      <button class="btn-hover color-4">BUTTON</button>
      <button class="btn-hover color-5">BUTTON</button>
      <button class="btn-hover color-6">BUTTON</button>
      <button class="btn-hover color-7">BUTTON</button>
      <button class="btn-hover color-8">BUTTON</button>
      <button class="btn-hover color-9">BUTTON</button>
      <button class="btn-hover color-10">BUTTON</button> -->
      <!-- <button class="btn-hover color-11">BUTTON</button> -->
      </div>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import taohua from '@/assets/images/taohua.png'
let stop:any = ref()
let staticx:any = ref()
const img = new Image();
// 杩欓噷鍘焜s浣滆€呰崚濡栨搷浣�,璇风湅婧愮爜,濡備綍杩涘埗杞垚妯辫姳
img.src =taohua
// img.src ='/images/hua1.png'
function Sakura(x:any, y:any, s:any, r:any, fn:any) {
  this.x = x;
  this.y = y;
  this.s = s;
  this.r = r;
  this.fn = fn;
}

Sakura.prototype.draw = function (cxt:any) {
  cxt.save();
  cxt.translate(this.x, this.y);
  cxt.rotate(this.r);
  cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s);
  cxt.restore();
};

Sakura.prototype.update = function () {
  this.x = this.fn.x(this.x, this.y);
  this.y = this.fn.y(this.y, this.y);
  this.r = this.fn.r(this.r);
  if (
    this.x > window.innerWidth ||
    this.x < 0 ||
    this.y > window.innerHeight ||
    this.y < 0
  ) {
    this.r = getRandom("fnr");
    if (Math.random() > 0.4) {
      this.x = getRandom("x");
      this.y = 0;
      this.s = getRandom("s");
      this.r = getRandom("r");
    } else {
      this.x = window.innerWidth;
      this.y = getRandom("y");
      this.s = getRandom("s");
      this.r = getRandom("r");
    }
  }
};
let SakuraList = function () {
  this.list = [];
};
SakuraList.prototype.push = function (sakura:any) {
  this.list.push(sakura);
};
SakuraList.prototype.update = function () {
  let i = 0,
    len = this.list.length;
  for (; i < len; i++) {
    this.list[i].update();
  }
};
SakuraList.prototype.draw = function (cxt:any) {
  let i = 0,
    len = this.list.length;
  for (; i < len; i++) {
    this.list[i].draw(cxt);
  }
};
SakuraList.prototype.get = function (i:any) {
  return this.list[i];
};
SakuraList.prototype.size = function () {
  return this.list.length;
};

const  getRandom = (option:any)=>{
  let ret, random:any;
  switch (option) {
    case "x":
      ret = Math.random() * window.innerWidth;
      break;
    case "y":
      ret = Math.random() * window.innerHeight;
      break;
    case "s":
      ret = Math.random();
      break;
    case "r":
      ret = Math.random() * 6;
      break;
    case "fnx":
      random = -0.5 + Math.random();
      ret = function (x:any, y:any) {
        return x + 0.5 * random - 1.7;
      };
      break;
    case "fny":
      random = 1.5 + Math.random() * 0.7;
      ret = function (x:any, y:any) {
        return y + random;
      };
      break;
    case "fnr":
      random = Math.random() * 0.03;
      ret = function (r:any) {
        return r + random;
      };
      break;
  }
  return ret;
}

const  startSakura = () =>{
  let  requestAnimationFrame:any =
    window.requestAnimationFrame ||
    (window as any).mozRequestAnimationFrame ||
    (window as any).webkitRequestAnimationFrame ||
    (window as any).msRequestAnimationFrame ||
    (window as any).oRequestAnimationFrame;
  let canvas = document.createElement("canvas"),
    staticx = true
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.setAttribute(
    "style",
    "position: fixed;left: 0;top: 0;pointer-events: none;"
  );
  canvas.setAttribute("id", "canvas_sakura");
  document.getElementsByTagName("body")[0].appendChild(canvas);
  let cxt = canvas.getContext("2d");
  const sakuraList:any = new (SakuraList as any)();
  for (let i = 0; i < 1; i++) {
    let sakura
    let randomX = getRandom("x");
    let randomY = getRandom("y");
    let randomR = getRandom("r");
    let randomS = getRandom("s");
    let randomFnx = getRandom("fnx");
    let randomFny = getRandom("fny"); 
    let randomFnR = getRandom("fnr");
    sakura = new (Sakura as any)(randomX, randomY, randomS, randomR, {
      x: randomFnx,
      y: randomFny,
      r: randomFnR,
    });
    sakura.draw(cxt);
    sakuraList.push(sakura);
  }
  stop = requestAnimationFrame(function test() {
    (cxt as any).clearRect(0, 0, canvas.width, canvas.height);
    sakuraList.update();
    sakuraList.draw(cxt);
    stop = requestAnimationFrame(test);
  });
}
window.onresize = function () {
  const canvasSnow:any = document.getElementById("canvas_sakura");
  canvasSnow.width = window.innerWidth;
  canvasSnow.height = window.innerHeight;
}; 
img.onload = function () {
  startSakura();
};
</script>
<style lang='less' scoped>
* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.btn-hover {
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-hover:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.btn-hover:focus {
    outline: none;
}

.btn-hover.color-1 {
    background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}
.btn-hover.color-2 {
    background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);
    box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
}
.btn-hover.color-3 {
    background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}
.btn-hover.color-4 {
    background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);
    box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
}
.btn-hover.color-5 {
    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}
.btn-hover.color-6 {
    background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);
    box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);
}
.btn-hover.color-7 {
    background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);
    box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
}
.btn-hover.color-8 {
    background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
}
.btn-hover.color-9 {
    background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}
.btn-hover.color-10 {
        background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
}
.btn-hover.color-11 {
       background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);  box-shadow: 0 5px 15px rgba(242, 97, 103, .4);
}
</style>