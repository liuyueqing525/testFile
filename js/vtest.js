/*Vue.component('alert',{
	template:'<button @click="on_click">弹弹弹</button>',
	methods:{
		on_click:function(){
			alert('Yo.');
		}
	}
});*/
Vue.component("like",{
	template:'#like-component-tpl',
	data:function(){
		return{
			like_count:10,
			liked:false,
		}
	},
	methods:{
		like_toggle:function(){
			if(!this.liked){	
				this.like_count++;
			}
			else{
				this.like_count--;
			}
			this.liked =!this.liked;
		}
	}
});	
new Vue({
	el:"#ass",
})
var alert_component={
	template:'<button @click="on_click">弹弹弹</button>',
	methods:{
		on_click:function(){
			alert('Yo.');
		}
	}
};
new Vue({
	el:'#seg1',
	components:{
		alert:alert_component
	},
});
new Vue({
	el:'#seg2',
	components:{
		alert:alert_component,
	},
});
var app = new Vue({
	el:'#app',

	data:{
		math:90,
		phy:80,
		english:30,
		role:'hr',
		from:2,
		dest:[],
		article:'ashduashdiuasbdkjsavdiuasfyasfvjkqlvfuyq biuo',
		url:"http://www.baidu.com",
		kclass:'btn btn-default',
		isActive:true,
		whh:'wohs',
		name:"A",
		sex:['male'],
		age:"16",
		//foodlist:["葱","姜","蒜"],
		foodlist:[
			{
			name:"cong",
			price:10
			},
			{
			name:"jiang",
			price:12
			},
			{
			name:"suan",
			price:5
			},
		]
		},
	methods:{
			onClick:function(){
				console.log("clicked");
			},
			onEnter:function(){
				console.log("mouseenter");
			},
			onOut:function(){
				console.log("mouseout");
			},
			onSubmit:function(){
				console.log("submitted");
			},
			onenter:function(){
				console.log('entered');
			},
			sum1:function(){
				return this.math+this.phy+this.english;
			}
		},
		computed:{
		sum:function(){
			return this.math+this.phy+this.english;
		},
		avg:function(){
			return Math.round(this.sum/3);
		}
	}
});

