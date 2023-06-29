<template>
        <div :class="['testColor', 'tabs']">
                <div v-if="!flag" class="left">originalheart</div>
                <div class="center" :style="{ 'font-size': !flag ? '16px' : '12px' }">
                        <div class="center-tabs-item" v-for="(item, index) in tabList" :key="index"
                                @click="setActiveItem(index, item.route)">
                                <img class="the-icon" :src="`${item.icon}`" alt="" srcset="">
                                {{ item.title }}
                        </div>
                </div>
                <div v-if="!flag" class="right"><img class="right-avatar" :src="imgMe"></div>
        </div>
        <el-carousel :initial-index="carouselIndex" indicator-position="none" ref="remarkCaruselUp" :autoplay="false"
                :interval="1000" arrow="never">
                <el-carousel-item v-for="(item, index) in tabList" :name="`${index}`" :key="item">
                        <myBlogIndex v-if="index == 0"></myBlogIndex>
                        <Classification v-if="index == 1"></Classification>
                        <theTabs v-if="index == 2"></theTabs>
                        <FriendChain v-if="index == 3"></FriendChain>
                        <LeaveMessage v-if="index == 4"></LeaveMessage>
                        <Admin v-if="index == 5"></Admin>
                        <About v-if="index == 6"></About>
                </el-carousel-item>
        </el-carousel>
        <div class="container-body">
                <keep-alive>
                        <router-view ref="child"></router-view>
                </keep-alive>
        </div>
        <div class="footer">
                <div class="footer-inner">
                        <span class="footer-left">Copyright ©
                        </span>
                        <div class="go-scoll-top" @click="goScollTop()">back</div>
                        <span class="footer-right">
                                <img class="the-iconn" v-for="item in footerList" :src="item" alt="">
                                
                        </span>
                </div>
        </div>
</template>
<script lang='ts' setup>
import myBlogIndex from './components/myBlogIndex/index.vue'
import Classification from './components/Classification/index.vue'
import theTabs from './components/theTabs/index.vue'
import FriendChain from './components/FriendChain/index.vue'
import LeaveMessage from './components/LeaveMessage/index.vue'
import Admin from './components/login/index.vue'
import About from './components/About/index.vue'
import { ref, nextTick, reactive, onMounted, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTestPinia } from '@/pinia/index'
import store from '@/store/index';
import imgMe from '@/assets/images/me.jpg'
import {getAssetsFile} from '@/utils/niceFun'
const themeColor = ref(store.state.userInfo.topMenuScroll)
const testStore = useTestPinia()
const themeFzColor = testStore.themeFzColor
const router = useRouter()
const route = useRoute()
const tabList = ref([
        { title: '首页', icon: getAssetsFile('index.png'), route: 'myBlogIndex' },
        { title: '分类', icon: getAssetsFile('class.png'), route: 'Classification' },
        { title: '标签', icon: getAssetsFile('tab.png'), route: 'theTabs' },
        { title: '友链', icon: getAssetsFile('friend.png'), route: 'FriendChain' },
        { title: '留言', icon: getAssetsFile('mesage.png'), route: 'LeaveMessage' },
        { title: '管理', icon: getAssetsFile('setting.png'), route: 'admin' },
        { title: '关于', icon: getAssetsFile('about.png'), route: 'About' },
])
const footerList = ref([
        getAssetsFile('facebook.png'),
        getAssetsFile('wx.png'),
        getAssetsFile('QQ.png'),
        getAssetsFile('email.png'),
])
const remarkCaruselUp: any = ref(null)
const containerBodyMarginTop = ref('10px')

const carouselIndex: any = ref()
const adminFlag = ref(true)
onBeforeMount(() => {
})

onMounted(() => {
        if (route.path != '/articleDetail') {
                carouselIndex.value = Number(localStorage.getItem('carouselIndex')) || 0
                let route: any = null
                tabList.value.forEach((item, index) => {
                        if (carouselIndex.value == index) route = item.route
                })
                setActiveItem(carouselIndex.value, route)
                routeTest(route.name)
        }
        adminFlag.value = route.name == 'admin'
        if (route.name == 'admin') carouselHeight.value = '100vh'
})
const whiteList1 = ['myBlogIndex', 'Classification', 'theTabs', 'FriendChain', 'LeaveMessage', 'admin', 'About']
const setActiveItem = (index: number, route: string) => {
        //查看对应name的图片
        localStorage.setItem('carouselIndex', `${index}`)
        setTimeout(() => {
                router.push({ path: route })
                routeTest(route)
        }, 200)
        nextTick(() => remarkCaruselUp.value.setActiveItem(index))
}
const carouselHeight: any = ref(`${document.documentElement.clientWidth * 0.54}px`)
const routeTest: any = (route: any) => {
        const arr = ['0px', '-15%', '-15%', '-15%', '-15%', '-15%', '-15%',]
        containerBodyMarginTop.value = arr[whiteList1.indexOf(route)]
        let height = document.documentElement.clientWidth
        carouselHeight.value = `${height * 0.54}px`
        if (route == 'admin') carouselHeight.value = '100vh'
}
window.addEventListener('resize', function () {
        if (route.name == 'admin') {
                carouselHeight.value = '100vh'
        } else {
                let height = document.documentElement.clientWidth
                carouselHeight.value = `${height * 0.54}px`
        }
})
const goScollTop = () => document.documentElement.scrollTop = 0
const topMenuScroll: any = ref('')
window.addEventListener('scroll', function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop) {
                topMenuScroll.value = themeColor.value
        } else {
                topMenuScroll.value = ''
        }
})
const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
</script>
<style lang='less' scoped>
.container-body {
        margin-top: v-bind(containerBodyMarginTop);
}

.testColor {
        background-image: v-bind(topMenuScroll);
        color: v-bind(themeFzColor);
}

.tabs {
        display: flex;
        z-index: 99999999;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 100%;
        height: 64px;

        .left {
                // margin-left: 20vw;
                flex: 1;
                text-align: right;
        }

        .center {
                display: flex;
                justify-content: center;
                align-items: center;
                min-width: 60%;

                .center-tabs-item {
                        transition: opacity 0.5s;
                        opacity: 1;
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        // width: 90px;
                        height: 50px;
                        cursor: pointer;
                        font-size: 0.8rem;
                }

                .center-tabs-item:hover {
                        opacity: 0.5;
                        // background: linear-gradient(to right, #4cbf30  0%,#0f9d58 100%) !important;
                }
        }

        .right {
                flex: 1;
                display: flex;
                justify-content: left;
                align-items: center;

                // margin-right: 20vw;
                .right-avatar {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                }
        }
}

:deep(.el-carousel__container) {
        height: v-bind(carouselHeight);
}

.footer {
        color: v-bind(themeFzColor);
        height: 80px;
        margin: 0 auto;
        background-image: v-bind(themeColor);

        .footer-inner {
                margin: 0 auto;
                width: 60%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .footer-left {}

                .footer-right {
                        display: flex;
                        justify-content: right;
                        align-items: center;
                        margin-left: 10%;

                        .the-iconn {
                                margin-left: 10px;
                                width: 15%;
                                height: 15%;
                                max-width: 50px;
                                max-height: 50px;
                        }
                }

                .go-scoll-top {
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        text-align: center;
                        height: 50px;
                        line-height: 50px;
                        background-image: v-bind(themeColor);
                        border-radius: 50%;
                        width: 50px;
                        cursor: pointer
                }
        }

}</style>