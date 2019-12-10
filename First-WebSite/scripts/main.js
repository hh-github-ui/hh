/*
JavaScript学习：
    1. 声明变量使用：let / var
    2. JavaScript区分大小写
    3. 变量的数据类型：String / Number / Boolean / Array / Object
    4. 特殊运算符：等等于(===) / 不等于(!==) / 取非(!)
*/
let myHeading=document.querySelector('h3');  //获取图片标题'h3'对象，并赋给myHeading变量
myHeading.textContent='Hello! My First WebSite!';  //更改标题'h3'的内容

//根据Id获取元素，并执行点击事件
document.getElementById('button-click').onclick=function(){
    alert('别点我，我怕疼');  //网页提示弹窗
}

//添加一个图片切换器
let myImage=document.querySelector('img');
myImage.onclick=function()
{
    let src=myImage.getAttribute('src');
    if(src==='images/image-1.jpg')
    {
        myImage.setAttribute('src','images/image-2.jpg');
    }
    else{
        myImage.setAttribute('src','images/image-1.jpg');
    }
}

//初始化setUserName()
if(!localStorage.getItem('name'))
{
    setUserName();
}else{
    let storageName=localStorage.getItem('name');
    myHeading.textContent=storageName+'的第一个网页';
}

//添加个性化欢迎信息
let myButton=document.getElementById('change-users');
myButton.onclick=function()
{
    setUserName();
}


function setUserName()
{
    let myName=prompt('请输入你的名字：');  //该函数与alert函数类似，也是弹出一个对话框
    if(!myName||myName===null)
    {
        setUserName();
    }else{
    localStorage.setItem('name',myName);   //调用localStorage API，保存输入的数据，供后续浏览器读取,即使网页关闭，localStrage中的数据也不会丢失
    myHeading.textContent=myName+'的第一个网页';
    }

}

//定义函数：
function multiply(num1,num2)
{
    let result=num1*num2;
    return result;
}