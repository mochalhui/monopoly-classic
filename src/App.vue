

<template>
  <div id="container">
     <div
      v-for="(item, index) in areaAddressList"
      :key="index"
      :id="item.id"
      :style="{ gridArea: item.gridarea , background:item.background, backgroundImage : `url(${item.backgroundImg})`,backgroundSize: '100%'}"
    >
      {{ item.areaname }}
    </div>
    <div v-for="(item,index) in userList" :key="'user'+index" :id="item.id" :style="{gridArea: item.gridArea,backgroundImage: `url(${item.image})`,position:'absolute',width:'100px',height:'100px',zIndex:'100'}"></div>
    <table id="userInfo">
      <tr>
        <td></td>
        <td>{{user1Info.userName}}</td>
        <td>{{user2Info.userName}}</td>
      </tr>
      <tr>
        <td></td>
        <td>{{user1Info.moneySum}}元</td>
        <td>{{user2Info.moneySum}}元</td>
      </tr>
      <tr>
        <td>银行</td>
        <td>{{user1Info.eachCoin}}元</td>
        <td>{{user2Info.eachCoin}}元</td>
      </tr>
      <tr>
        <td>税收</td>
        <td>待补充</td>
        <td>待补充</td>
      </tr>

</table>
  </div>
</template>

<script >
import { defineComponent } from "vue";

export default defineComponent({
  setup(){
    return{

    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
