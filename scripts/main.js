var myHeading = document.querySelector('h1');		/*querySelector()函数 抓取元素 h1 存放在变量myHeading*/
var myButton = document.querySelector('button');		/*querySelector()函数 抓取元素 button 存放在变量myButton*/
myHeading.innerHTML = 'Hello world!';		/*innerHTML 意思是给myHeading代表的属性 赋值 'Hello world!'*/

alert('My name is Ryen Toretto!');		/*alert()函数 在浏览器窗口内弹出一个警告框*/

function setUserName() {
/**
 * prompt() 函数， 会弹出一个对话框， 
		有一点像 alert() 只不过 prompt() 需要用户输入数据,而且在用户点击 OK 后将数据存储在变量里。
		在这里，我们要求用户输入姓名。
		
		接下来，我们调用一个叫 localStorage 的API， 它允许我们将数据存储在浏览器里以供后续调用
		
		localStorage 的 setItem() 函数来创建并将数据存储在 'name'参数里，然后将其值设置为包含用户输入的姓名的 userName 变量。 
		最后，我们将标题的 innerHTML 属性设置成加上用户姓名的字符串。
		
		//因为 name 是存放在 localStorage 里的，它会持续到网站关闭，所以这段个性化的信息在你重新打开浏览器时将仍然在这！
 **/
  var userName = prompt('Login UserName: ');
  localStorage.setItem('name', userName);		
  myHeading.innerHTML = 'Welcome , ' + userName;
}

if(!localStorage.getItem('name'))
{/*检查 name 数据 , 如果不存在*/
  setUserName();
} 
else 
{/*如果存在*/
  var userName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome back , ' + userName;
}