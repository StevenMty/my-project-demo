<template>
	<div class="mty-index">
		<div class="mty-index-top">
			<div class="mty-index-top-left">
				<label>我在这喧嚣里把你寻找</label>
			</div>
		  	<Menu mode="horizontal" :theme="theme1" >
				<Menu-item v-for="(child, index) in menus" :name="child.value" @click.native="changeMenu(index, child.url)">{{child.label}}</Menu-item>
		  	</Menu>
		</div>
		<div class="mty-index-content">
			<div class="mty-index-content-left">
				<Menu mode="vertical" :theme="theme2">
					<Menu-item v-for="(childs, index) in menu" :name="childs.value" :active-name="current" v-show="!checkMenu">{{childs.label}}</Menu-item>
					<Menu-item v-for="(childs, index) in menua" :name="childs.value" :active-name="current" v-show="checkMenu">{{childs.label}}</Menu-item>
			  	</Menu>
			</div>
			<div class="mty-index-content-right">
				<router-view  class="view" transition="expand" transition-mode="out-in"></router-view>
			</div>
		</div>
	</div>
</template>
<script>
	import './../../static/css/index.scss';

	export default{
		name:'hello',
		data(){
			return{
				theme1:'dark',
				theme2:'dark',
				menus:[
					{ label:'名家作品', value:'1', url:'/index/demo' },
					{ label:'中国文学', value:'2', url:'/index/China' },
				],
				menu:[
					{ label:'三毛', value:'1' },
					{ label:'张爱玲', value:'2' },
					{ label:'王小波', value:'3' },
					{ label:'陈厚实', value:'4' },
					{ label:'路遥', value:'5' },
					{ label:'韩寒', value:'6' },
				],
				menua:[
					{ label:'历史文献', value:'1' },
					{ label:'经典著作', value:'2' },
					{ label:'小学文教', value:'3' },
					{ label:'娱乐时尚', value:'4' },
					{ label:'网络小说', value:'5' },
				],
				loading:false,
				current:'1',
				checkMenu:false,
			};
		},
		methods:{
			changeMenu(i, url){
				this.$router.push(url);
				if (i === 0) {
					this.checkMenu = false;
				}else{
					this.checkMenu = true;
				}
			},
		},
	};
</script>