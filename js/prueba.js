window.addEventListener("load",init, false);



function init ()
{

    var l1= new Label ("numero 1");
    var i1= new Input ();
    var l2= new Label ("numero 2");
    var i2= new Input ();
    var b1= new Button ("sumar");
    var b2= new Button("Resta");
    var l3= new Label ("resultado");
    var i3= new Input ();
    
    l1.SetMargin("auto");
    l2.SetMargin("auto");
    l3.SetMargin("auto");
    i1.SetMargin("auto");
    i2.SetMargin("auto");
    i3.SetMargin("auto");
    b1.SetMargin("auto");
    b2.SetMargin("auto");
    
    l1.SetPosition("relative");
    i1.SetPosition("relative");
    l2.SetPosition("relative");
    i2.SetPosition("relative");
    b1.SetPosition("relative");
    b2.SetPosition("relative");
    l3.SetPosition("relative");
    i3.SetPosition("relative");
    
    l1.SetDisplay("inherit");
    i1.SetDisplay("inherit");
    l2.SetDisplay("inherit");
    i2.SetDisplay("inherit");
    b1.SetDisplay("inherit");
    b2.SetDisplay("inherit");
    l3.SetDisplay("inherit");
    i3.SetDisplay("inherit");
    
    l1.SetTextAlign("center");
    l2.SetTextAlign("center");
    l3.SetTextAlign("center");
    
    var pipi = new Div();
    pipi.SetBorder(1);
    pipi.SetSize(100, 230);
    pipi.Add(l1);
    pipi.Add(i1);
    pipi.Add(l2);
    pipi.Add(i2);
    pipi.Add(b1);
    pipi.Add(b2);
    pipi.Add(l3);
    pipi.Add(i3);
    pipi.SetOverFlow("hidden");
    AddBody(pipi);
    b1.AddEvent("click", function(){Suma(i1.GetText(),i2.GetText(), i3);});
    b2.AddEvent("click", function(){Resta(i1.GetText(),i2.GetText(), i3);});
}
function Suma (b1, b2, elemento)
{
    elemento.SetText(Number(b1) + Number(b2));
}
function Resta (b1, b2, elemento)
{
    elemento.SetText(Number(b1) - Number(b2));
}



function Input ()
{
    this.Html = document.createElement("input");
    this.Html.setAttribute("type", "text");
}
Input.prototype.GetText = function ()
{
    return this.Html.value;
}
Input.prototype.SetText = function (text)
{
    this.Html.setAttribute("value", text);
}
Input.prototype.SetMargin = function (x)
{
    this.Html.style.margin = x;
}
Input.prototype.SetPosition = function (x)
{
    this.Html.style.position = x;
}
Input.prototype.SetDisplay = function (x)
{
    this.Html.style.display = x;
}
function Label (text)
{
    this.Html = document.createElement("p");
    this.Html.innerText= text;
}
Label.prototype.SetMargin= function(x)
{
    this.Html.style.margin = x;
}
Label.prototype.SetPosition= function(x)
{
    this.Html.style.position = x;
}
Label.prototype.SetDisplay= function(x)
{
    this.Html.style.display = x;
}
Label.prototype.SetTextAlign = function(x)
{
    this.Html.style.textAlign = x;
}
function AddBody (element)
{
    document.body.appendChild(element.Html);
}




function Button (text)
{
    this.Html = document.createElement("input");
    this.Html.setAttribute("type", "button");
    this.Html.setAttribute("value", text);
}
Button.prototype.AddEvent= function(evento, funcion)
{
    this.Html.addEventListener(evento, funcion, false);
}
Button.prototype.SetMargin= function(x)
{
    this.Html.style.margin = x;
}
Button.prototype.SetPosition= function(x)
{
    this.Html.style.position = x;
}
Button.prototype.SetDisplay= function(x)
{
    this.Html.style.display = x;
}


function Div ()
{
    this.Html = document.createElement("div");
}
Div.prototype.Add = function ( elemento)
{
    this.Html.appendChild(elemento.Html);
}
Div.prototype.SetSize = function (W, H)
{
    this.Html.style.width= W+"%";
    this.Html.style.height= H+"px";
}
Div.prototype.SetBorder = function(border)
{
    this.Html.style.border = border+"px solid black";
}
Div.prototype.SetOverFlow = function(x)
{
    this.Html.style.overflow = x;
}
