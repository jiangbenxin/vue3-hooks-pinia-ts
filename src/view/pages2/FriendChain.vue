<template>
    <div>
        <theTitle>
                <template #title>
                    <h3 class="friend-title">双向</h3>
                    <div class="friend-chain">
                    <div class="friend-chains" v-for="item in 12">
                        <img class="friend-img" src="src/assets/images/me.jpg" alt="">
                        <div class="friend-chains-right">
                            <div class="friend-name">虚位</div>
                            <div class="friend-intro">待价而沽</div>
                        </div>
                    </div>
                    </div>
            </template>
        </theTitle>
    </div>
</template>
<script lang='ts'  setup>
import theTitle from '../../components/theTitle.vue'
import { getArtcate } from '../../api/friendChain'
import { ref,onMounted} from 'vue'
onMounted(async() => {
    const res = await getArtcate()
    console.log(res);
})
</script>
<style lang="less" scoped>
.friend-title{
    color: #000;
    margin-bottom: 20px;
}

.friend-chain{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .friend-chains{
        width: 290px;
        height: 150px;
        display: flex;
        align-items: center;
        border-radius: 20px;
        margin-bottom: 20px;
        padding-left: 20px;

    .friend-img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .friend-chains-right{
        flex: 1;
            .friend-name{
                color: #000;
                text-align: left;
                padding-left: 10px;
                font-size: 22px;
            }
            .friend-intro{
              color: #000;
              text-align: left;
              padding-left: 10px;

            }
        }
}
}
.friend-chains:nth-child(1){
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}
.friend-chains:nth-child(2){
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.friend-chains:nth-child(3){
    background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
}
.friend-chains:nth-child(4){
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
}
.friend-chains:nth-child(5){
    background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
}
.friend-chains:nth-child(6){
    background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
}
.friend-chains:nth-child(7){
    background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
}
</style>