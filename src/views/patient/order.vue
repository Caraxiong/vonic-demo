<template>
  <div class="page has-navbar" v-nav="{title: '订单确认'}">
    <div class="page-content">
      <von-input 
        type="text" 
        v-model="name" 
        placeholder="请输入患者姓名" 
        label="患者姓名">
      </von-input>
      <von-input 
        type="text" 
        v-model="ad" 
        placeholder="请输入住院号" 
        label="住院号">
      </von-input>
      <von-input 
        type="text" 
        v-model="phoneNum" 
        placeholder="请输入手机号" 
        label="手机号">
      </von-input>
      <von-input 
        type="text" 
        v-model="bedId" 
        placeholder="请输入床位号" 
        label="床位号">
      </von-input>
      <von-input 
        type="text" 
        v-model="area" 
        placeholder="请输入所在病区" 
        label="所在病区">
      </von-input>
      <von-input 
        type="text" 
        v-model="order" 
        placeholder="" 
        label="预约订单">
      </von-input>
      <von-input 
        type="text" 
        v-model="time" 
        placeholder="请输入送餐时间" 
        label="送餐时间">
      </von-input>
      <von-checkbox :options="topics" v-model="chosenTopics" theme="positive"></von-checkbox>
      
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name:'',
        ad:'',
        phoneNum:'',
        bedId:'',
        area:'',
        order:'',
        time:'',
        chosenTopics:[],
        topics:["糖尿病", "低糖", "低脂"]
      }
    },
    methods: {
    }
  }
</script>