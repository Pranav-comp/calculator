
   function dis(val){
      document.getElementById('result').value+= val;

   }
 /* Displaying result*/
   function result(){
      let x = document.getElementById('result').value
      let y = eval(x)
      document.getElementById('result').value = y
   }
/* clear*/
   function clr(){
      document.getElementById('result').value=" ";
   }
/*square function*/
   function square(){
      document.getElementById('result').value=Math.pow(document.getElementById('result').value,2);
   }
/*sin Radian function*/
   function sin(){
      
      document.getElementById('result').value=Math.sin(document.getElementById('result').value);
   }

   /*cos function*/
   function cos(){
      document.getElementById('result').value=Math.cos(document.getElementById('result').value);
   }
   /*tan function*/
   function tan(){
      document.getElementById('result').value=Math.tan(document.getElementById('result').value);
   }
   /*cuberoot function*/
   function cuberoot(){
      document.getElementById('result').value=Math.pow(document.getElementById('result').value,1/3)
   }
/*squareroot function*/

function squareroot(){
      document.getElementById('result').value=Math.pow(document.getElementById('result').value,1/2)
   }

   

   /*log10*/
    function log10(){
      document.getElementById('result').value=Math.log10(document.getElementById('result').value)
   }

   /*ln*/
    function ln(){
      document.getElementById('result').value=Math.Log(document.getElementById('result').value)
   }
   
   /*Celcius to Farenheit conversion*/
   function CtoF(){
      var temp = document.getElementById('result').value;
      var ans = (1.8)*(temp) + 32
      document.getElementById('result').value = ans;

   }
   /*Farenheit to Celcius conversion*/

   function FtoC(){
      var temp = document.getElementById('result').value;
      var ans = (0.55555555556)*(temp - 32)
      document.getElementById('result').value = ans;

   }

   /*Celcius to Kelvin  conversion*/
   function CtoK(){
      var temp = document.getElementById('result').value;
      var ans = (273 + temp)
      document.getElementById('result').value = ans;
   }

   /*Kelvin to Farenheit conversion*/
   function KtoF(){
      var temp = document.getElementById('result').value;
      var ans = (1.8)*(temp - 273) + 32
      document.getElementById('result').value = ans;
   }

   


/*cube */
   function cube(){
      document.getElementById('result').value=Math.pow(document.getElementById('result').value,3);
   }
/*backspc*/
   function backspc(){
      var a=document.getElementById('result').value;
      document.getElementById('result').value = a.substr(0,a.length-1);
   }

  function scicalc(){
   document.getElementById('normalcalc').style.width="0";
   document.getElementById('normalcalc').style.height="0";
  }

   function close(){
      document.getElementById('sci').style.width="0";
      document.getElementById('sci').style.height="0";
   }

   function opennav(){
         
            document.getElementById('mySidenav').style.width="340px";
             document.getElementById('mySidenav').style.height="100%";
      }

   function closenav(){
         document.getElementById('mySidenav').style.width="0";
         document.getElementById('mySidenav').style.height="0";
      }