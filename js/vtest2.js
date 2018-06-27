/*Vue.component("balance",{
	template:`
		<div>
			<show @show-balance="show_balance"></show>
			<div v-if="show">
				你的余额为99元！
			</div>
		</div>
	`,
	data:function(){
		return{
			show:false,
		}
	},
	methods:{
		show_balance:function(data){
			this.show=true;
			console.log('data',data);
		}
	},
	
});
Vue.component('show',{
	template:'<button @click="on_click()">显示余额</button>',
	methods:{
		on_click(){
			this.$emit('show-balance',{a: 1,b: 2});
		}
	},
});
*/
Vue.component('panel',{
	template:'#panel-tpl',
})


Vue.directive('pin',function(el,binding){
	var pinned=binding.value;
	var position = binding.modifiers;
	var warning = binding.arg;

	if(pinned){
		el.style.position='fixed';
		for(var key in position){
			if(position[key]){
				el.style[key]="10px";
			}
		}if(warning==='true'){
			el.style.background='yellow';
		}
	}else{
		el.style.position='static';
		el.style.background='#6cf';
	}
})

Vue.filter('meter',function(val,unit){
	val = val || 0;
	unit=unit||"m";
	return (val/1000).toFixed(4)+unit;
});
Vue.filter('currency',function(val,unit){
	val=val||0;
	unit=unit||'元';
	return val +unit;
});

var Event = new Vue();

Vue.component('huahua',{
	template:`<div>我说:<input @keyup="on_change"v-model="i_said"/>{{i_said}}</div>`,
	methods:{
		on_change:function(){
			Event.$emit('huahua-said-something',this.i_said);
		}
	},
	data:function(){
		return{
			i_said:'123',
		}
	}
});
Vue.component('bubu',{
	template:`<div>花花说:{{huahua_said}}</div>`,
	data:function(){
		return{
			huahua_said:'322',
		};
	},
	mounted:function(){
		var me =this;
		Event.$on('huahua-said-something',function(data){
			me.huahua_said=data;
		});
	}
});

var base = {
	methods:{
		show:function(){
			this.visible=true;
		},
		hide:function(){
			this.visible=false;
		},
		toggle:function(){
			this.visible=!this.visible;
		},
	},
	data:function(){
		return {
			visible:false
		};
	},

};
Vue.component("tooltip",{
	template:`
		<div>
			<span @mouseenter="show" @mouseleave="hide">鼠标划过显示/划出隐藏</span>
			<div v-if="visible">
				白岩松
			</div>
		</div>
	`,
	mixins:[base],
})

Vue.component("popup",{
	template:`
		<div>
			<button @click="toggle">popup</button>
			<div v-if="visible">
				<span @click="hide">XXXXXX</span>
				<h4>title</h4>
				QAQibasuduasbduyo gogogoaps dpuubwquy ops
			</div>
		</div>
	`,
	mixins:[base],
})


new Vue({
	el:"#app",
	data:{
		price:10,
		length:10,
		card1:{
			pinned:false,
		},
		card2:{
			pinned:false,
		},
	}
});