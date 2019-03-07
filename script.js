var myanchor=document.getElementById("a1");
var div1 = document.getElementById("div1");
var div2=document.getElementById("div2");
var div3 = document.getElementById("div3");
var submit=document.getElementById("submit");
var clear =document.getElementById("clear");
var form =document.getElementById("form");
var div3search = document.getElementById("search");
var count=0;
var suboredit=0;
var x=-1;
var productsarr=[];
function getprevdata()
{
    productsarr=getStoredProducts();
    count = productsarr.length;
}
function display(temp)
{
 div2.style.visibility="hidden";
 div1.style.visibility="visible";
 div3.style.visibility="visible";
 div3search.style.visibility="visible";
    var div31 = document.createElement("div");
    div3.appendChild(div31);
            var ul = document.createElement("ul");
            div31.appendChild(ul);
        var div32 = document.createElement("div");
         var li = document.createElement("li");
        var dd1 = document.createElement("span");
        var dd2 = document.createElement("span");
        var dd3 = document.createElement("span");
        var dd4 = document.createElement("a");
        var dd5 = document.createElement("a");
       ul.appendChild(div32);
       div32.appendChild(li);
      div32.appendChild(dd1);
      div32.appendChild(dd2);
     div32.appendChild(dd3);
     div32.appendChild(dd4);
     div32.appendChild(dd5);
    li.innerHTML=temp.proname+" ";
    dd1.innerHTML=temp.proprice+"   ";
    dd2.innerHTML=temp.proquantity+"    ";
    dd3.innerHTML=temp.prodes+"     ";
    dd4.innerHTML="Delete"+"    ";
    dd5.innerHTML="Edit"+"    ";
    dd4.setAttribute("id",temp.pid);
    dd5.setAttribute("id",temp.pid);
                                                        dd1.style.fontFamily="Forte";
                                                       dd1.style.fontSize="20px";
                                                       dd1.style.color="#FF00FF";
                                                        dd2.style.fontFamily="Forte";
                                                       dd2.style.fontSize="20px";
                                                       dd2.style.color="#FF00FF";
                                                        dd3.style.fontFamily="Forte";
                                                       dd3.style.fontSize="20px";
                                                       dd3.style.color="#FF00FF";
                                                        li.style.fontFamily="Forte";
                                                       li.style.fontSize="20px";
                                                       li.style.color="#FF00FF";
    dd4.addEventListener("click",function()
    {
      var delid =dd4.getAttribute("id");
       productdelete(delid); 
    })
    dd5.addEventListener("click",function()
     {
        var editid = dd5.getAttribute("id");
        console.log("dd5 editid="+editid);
        productedit(editid);
    })
    
}
function productdelete(delid)
{
    for(var j=0;j<productsarr.length;j++)
        {
            if(productsarr[j].pid==delid)
                productsarr.splice(j,1);
        }
     console.log(delid);
    div3.innerHTML="";
    var div33=document.createElement("div");
    var p=document.createElement("p");
    div3.appendChild(div33);
    div33.appendChild(p);
                                                            p.innerHTML="Your Ordered List:";
                                                            p.style.fontFamily="Comic Sans MS";
                                                           p.style.fontSize="40px";
                                                           p.style.color="#2F4F4F";
      for(var j=0;j<productsarr.length;j++)
        {
                display(productsarr[j]);   
        }
    storeProducts(productsarr);
}
myanchor.addEventListener("click",function()
 {
    console.log("start");
  div1.style.visibility="hidden";
 div3.style.visibility="hidden";
 div2.style.visibility="visible";
 div3search.style.visibility="hidden";
})
function productedit(eid)
{
    suboredit=1;
    for(var j=0;j<productsarr.length;j++)
        {
            if(productsarr[j].pid==eid)
                {
                    x=j;
                    break;
                }
        }
    console.log("x="+x);
    if(x!=-1)
        {
            div1.style.visibility="hidden";
            div2.style.visibility="visible";
            div3.style.visibility="hidden";
            div3search.style.visibility="hidden";
            document.getElementById("fname").value=productsarr[x].proname;
            document.getElementById("price").value=productsarr[x].proprice;
            document.getElementById("quantity").value=productsarr[x].proquantity;
            document.getElementById("desc").value=productsarr[x].prodes;
            document.form.button.value = "update";
            document.form.button.innerHTML = "update";
        }
}
submit.addEventListener("click",function()
 {
    if(suboredit==0){
    var pname = document.getElementById("fname").value;
    var pprice=document.getElementById("price").value;
    var pquantity=document.getElementById("quantity").value;
    var pdesc=document.getElementById("desc").value;
    var product={
        pid:count,
        proname: pname,
        proprice:pprice,
        proquantity:pquantity,
        prodes:pdesc
       }
    productsarr.push(product);
    if(count==0)
   { var div33=document.createElement("div");
    var p=document.createElement("p");
    div3.appendChild(div33);
    div33.appendChild(p);
                                                    p.innerHTML="Your Ordered List:";
                                                    p.style.fontFamily="Comic Sans MS";
                                                   p.style.fontSize="40px";
                                                   p.style.color="#2F4F4F";
   }
    for(var j=0;j<productsarr.length;j++)
        {
          display(productsarr[j]);  
        }
        count++;
    }
    else
        {
             document.form.button.value = "submit";
             document.form.button.innerHTML = "submit";
             productsarr[x].proname=document.getElementById("fname").value;
             productsarr[x].proprice=document.getElementById("price").value;
             productsarr[x].proquantity=document.getElementById("quantity").value;
             productsarr[x].prodes= document.getElementById("desc").value;
             suboredit=0;
               x=-1;
                editing();  
        }
    storeProducts(productsarr)
})
clear.addEventListener("click",function()
 {
       if(suboredit==0){
  div1.style.visibility="visible";
 div3.style.visibility="hidden";
 div2.style.visibility="hidden";
 div3search.style.visibility="hidden";
       }
    else
        {
          document.getElementById("fname").value=" ";
           document.getElementById("price").value=" ";
           document.getElementById("quantity").value=" ";
        document.getElementById("desc").value=" ";
            suboredit=1;
        }
})
function editing()
{
    div3.innerHTML="";
    var div33=document.createElement("div");
    var p=document.createElement("p");
    div3.appendChild(div33);
    div33.appendChild(p);
                                                                p.innerHTML="Your Ordered List:";
                                                                p.style.fontFamily="Comic Sans MS";
                                                               p.style.fontSize="40px";
                                                               p.style.color="#2F4F4F";
      div2.style.visibility="hidden";
     div1.style.visibility="visible";
    div3.style.visibility="visible";
    div3search.style.visibility="visible";
     for(var j=0;j<productsarr.length;j++)
        {
                display(productsarr[j]);   
        }
    
}
function keydownFunction()
 {
    var searchedval = document.getElementById("sname").value;
    var demo,f=0;
     div3.innerHTML="";
     var div33=document.createElement("div");
    var p=document.createElement("p");
    div3.appendChild(div33);
    div33.appendChild(p);
                                                    p.innerHTML="Your Ordered List:";
                                                    p.style.fontFamily="Comic Sans MS";
                                                   p.style.fontSize="40px";
                                                   p.style.color="#2F4F4F";
    for(var j=0;j<productsarr.length;j++)
        {
            demo = productsarr[j].proname;
            f=0;
            for(var k=0;k<demo.length && k<searchedval.length;k++)
                {
                  if(searchedval.charAt(k)!=demo.charAt(k))
                    {
                     f=1;
                     break;
                    }
                }
            if(f==0)
                display(productsarr[j]);
        }
}
function storeProducts(productsarr)
{
    localStorage.productsarr=JSON.stringify(productsarr);
}
function getStoredProducts(){
	if(!localStorage.productsarr){
		localStorage.productsarr=JSON.stringify([]);
	}
	return JSON.parse(localStorage.productsarr);
}