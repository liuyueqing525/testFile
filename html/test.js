	window.console.log("b");
	Object.defineProperty(window,"PI2",{
		value:3.1415926,
		writable:false,
	})
	console.log(window.PI2);
	const pi=3.1415926;
	console.log(pi);
	{
		var come=[1,2,3,4,5,6];
		var odds=come.map(function(v){
			return v+1;
		})
		console.table(odds,come);
	}
	{
		var factory = function(){
			this.a="a";
			this.b="b";
			this.c={
				a:"a+",
				b:function(){
					return this.a
				}
			}
		}
		console.log(new factory().c.b());
	};
	{
		var factory1=function(){
			this.a="a";
			this.b="b";
			this.c={
				a:"a+",
				b:()=>{
					return this.a
				}
			}
		}
		console.log(new factory1().c.b())
	}
	{
		//es5默认参数写法
		function f(x,y,z){
			if(y===undefined){
				y=7
			}
			if(z===undefined){
				z=42
			}
			return x+y+z;
		}
		console.log(f(1,2))
	}{
		//es6默认参数
		function f(x=1,y=7,z=42){
			return x+y+z;
		}
		console.log(f());
	}
	{
		function checkNaN(){
			throw new Error("x can't be empty");
		}
		function f(x=checkNaN(),y=7,z=42){
			return x+y+z;
		}
		console.log(f(3));
		try{
			f();
		}catch(e){
			console.log(e);
		}finally{

		}
	}
	{
		//es3
		function f(){
			//console.log(x);
			var a = Array.prototype.slice.call(arguments);
			var sum = 0;
			a.forEach(function(items){
				sum+=items*1;
			})
			return sum;
		}
		console.log(f(1,2,3,4));
	}
	{
		//es6可变参数
		function f(...a){
			var sum = 0;
			a.forEach(items=>{
				sum+=items*1;
			});
			return sum
		}
		console.log(f(1,2,3,4,5));
	}
	{
		//es3,es5写法
		var items = ["hello",true,7];
		var others = [1,2].concat(items);
		console.log(others);
	}
	{
		//es6写法
		var items =["hello",true,7];
		var other = [1,2,...items];
		console.log(other);
	}
	{
		//对象代理进行数据保护
		var people =function(){
			let data={
				age:"18",
				sex:"male",
				name:"LYQ"
			}
			this.get=function(key){
				return data[key];
			}
			this.set=function(key,value){
				if(key!=="sex"){
					data[key]=value;
				}
				
			}
		}
		var people=new people();

		console.table({name:people.get("name"),sex:people.get("sex"),age:people.get("age")});
		//修改
		people.set("name","QAQ");
		console.table({name:people.get("name"),sex:people.get("sex"),age:people.get("age")});
		people.set("sex","qqqq");
		console.table({name:people.get("name"),sex:people.get("sex"),age:people.get("age")});

	}
	{
		//es5中数据保护
		var person={
			name:"LYQ",
			age:15
		};
		Object.defineProperty(person,"sex",{
			writable:false,
			value:"male"
		});
		console.table(person);
		person.name="ssqwqe";
		person.sex="female";
		console.log(person.sex);
	}
	{
		//es6
		let Person={
			name:"LYQQ",
			age:"18",
			sex:"male"
		};
		let person =new Proxy(Person,{
			get(target,key){
				return target[key];
			},
			set(target,key,value){
				if(key!=="sex"){
					target[key]=value;
				}else{
					e="sex is not writable!!"
					console.log(e);
				}
			}
		});
		person.sex="female";
		console.table({
			name:person.name,
			age:person.age,
			sex:person.sex
		});
		try{
			person.sex="female";
		}catch(e){
			console.log(e);
		}finally{

		}
	}
	{
		let [a,b,c]=[4,5,(function(a,b){
			return a+b;
		})(4,5)];
		console.log(a,b,c);
		let	[x,...y]=[1,2,3];
		console.log(x,y);
	}