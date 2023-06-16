<template>
    <div>
        <theTitle>
                <template #title>
                    <div class="friendTitle">双向</div>
                    <div class="FriendChain">
                    <div class="FriendChains" v-for="item in 6">
                            <img class="friendImg" src="src/assets/images/me.jpg" alt="">
                            <div class="friendChains-right">
                                <div class="friendName">名字</div>
                                <div class="friendIntro">介绍</div>
                            </div>
                    </div>
                    </div>
            </template>
        </theTitle>
        <theTitle>
                <template #inner>
                    <div class="friendTitle">单向</div>
                    <div class="FriendChain">
                    <div class="FriendChains" v-for="item in 3">
                            <img class="friendImg" src="src/assets/images/me.jpg" alt="">
                            <div class="friendChains-right">
                                <div class="friendName">名字</div>
                                <div class="friendIntro">介绍</div>
                            </div>
                    </div>
                    </div>
            </template>
        </theTitle>
    </div>
</template>
<script lang='ts'  setup>
import theTitle from '../../components/theTitle.vue'
import { ref } from 'vue'
</script>
<style lang="less" scoped>
.friendTitle{
    color: #000;
    margin-bottom: 20px;
}
.FriendChain{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .FriendChains{
        background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
        width: 290px;
        height: 200px;
        display: flex;
        align-items: center;
        border-radius: 20px;
        margin-bottom: 20px;
        padding-left: 20px;
    .friendImg{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .friendChains-right{
        flex: 1;
            .friendName{
                color: #000;
                text-align: left;
                padding-left: 10px;
                font-size: 22px;
            }
            .friendIntro{
              color: #000;
              text-align: left;
              padding-left: 10px;

            }
        }
}
}

</style>