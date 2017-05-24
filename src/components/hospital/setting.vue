<template>
  	<accordion>
	  	<accordion-item title="医院设置" content-height="110">
		    <von-input 
			  type="text" 
			  v-model="name" 
			  placeholder="请出入医院名称" 
			  label="医院名称">
			</von-input>
			 <von-input 
			  type="text" 
			  v-model="officename" 
			  placeholder="请出入科室病区" 
			  label="医院名称">
			</von-input>
		  </accordion-item>
		  <accordion-item title="邀请同事成为管理员" content-height="200">
		   	<table>
		      	<tr>
			      	<th>微信昵称</th>
			      	<th>真实姓名</th>
			      	<th>操作</th>
		      	</tr>
		      	<tr>
			      	<td>小小</td>
			      	<td>张三</td>
			      	<td>
			      		<a href="javascript:void(0)">解绑</a>|
			      		<a href="javascript:void(0)" @click="remark()">备注</a>
		      		</td>
		      	</tr>
		      	<tr>
			      	<td>小小</td>
			      	<td>张三</td>
			      	<td>
			      		<a href="javascript:void(0)">解绑</a>|
			      		<a href="javascript:void(0)" @click="remark()">备注</a>
		      		</td>
		      	</tr>
		    </table>
	  	</accordion-item>
	  	 <accordion-item title="订餐时间设置" content-height="200">
		    <table>
		      	<tr>
			      	<th></th>
			      	<th>提醒订餐时间</th>
			      	<th>预计送餐时间</th>
			      	<th>操作</th>
		      	</tr>
		      	<tr>
			      	<td>早餐</td>
			      	<td>前一天：19:00</td>
			      	<td>6:00 - 8:00</td>
			      	<td>
			      		<md-button class="button button-positive" @click.native="update()">修改</md-button>
		      		</td>
		      	</tr>
		      	<tr>
			      	<td>午餐</td>
			      	<td>前一天：19:00</td>
			      	<td>6:00 - 8:00</td>
			      	<td>
			      		<md-button class="button button-positive" @click.native="update()">修改</md-button>
		      		</td>
		      	</tr>
		      	<tr>
			      	<td>晚餐</td>
			      	<td>前一天：19:00</td>
			      	<td>6:00 - 8:00</td>
		      		<td>
			      		<md-button class="button button-positive" @click.native="update()">修改</md-button>
		      		</td>
		      	</tr>
		    </table>
	  	</accordion-item>
	</accordion>
</template>
<script>
  	export default {
	  	data() {
	  		return {
	  			name:'',
	  			officename:'',
	  			time:'',
	  			realname:''
	  		}
	  	},
	  	methods: {
	  		remark() {
	  			let options = {
		          effect: 'scale',
		          buttons: [
		            {text: '确定'},
		            {text: '取消'},
		          ]
		        }

		        let popup = $popup.fromTemplate('<von-input type="text" v-model="realname" placeholder="备注真实姓名" ></von-input>', options)

		        popup.show().then((buttonIndex) => {
		          console.log(buttonIndex)
		        })
	  		},
	  		update() {
	  			let options = {
		          effect: 'scale',
		          buttons: [
		            {text: '确定'},
		            {text: '取消'},
		          ]
		        }

		        let popup = $popup.fromTemplate('<von-input type="text" v-model="time" placeholder="请输入送餐时间" label="预计送餐时间"></von-input>', options)

		        popup.show().then((buttonIndex) => {
		          console.log(buttonIndex)
		        })
	  		}
	  	}
  	}
</script>