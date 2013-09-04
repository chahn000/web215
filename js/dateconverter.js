// *************************************************************************
// FUNCTION "gregorianconv" IS THE DRIVER FOR CALCULATING THE GREGORIAN DATE
// *************************************************************************

function gregorianconv (form)
{
var strAlert = "Julian date entered must be 7 digits with valid ranges for format CCYYDDD.";
var strJulian = form.juliantextbox.value;

if (strJulian===null||strJulian===""||strJulian.length!=7)   
	{                                          
	alert (strAlert);
	}
else if (IsJulian(strJulian)===false)                
	  {                                       
	  alert (strAlert);
	  }
     else
	    {
	    form.juliantextbox.value = strJulian + " Gregorian date is " + DetermineGregorian(strJulian);	 
	    }                                                     
}

// *************************************************************************
// FUNCTION "julianconv" IS THE DRIVER FOR CALCULATING THE JULIAN DATE
// *************************************************************************

function julianconv (form)
{
 var strAlert = "Gregorian date entered must be 8 digits with valid ranges for format CCYYMMDD.";
 var strGregorian = form.juliantextbox.value;

 if (strGregorian===null||strGregorian===""||strGregorian.length!=8)   
	{                                          
	 alert (strAlert);
	}
 else if (IsGregorian(strGregorian)===false)                
	  {                                       
	   alert (strAlert);
	  }
      else
	    {
	     form.juliantextbox.value = strGregorian + " Julian date is " + DetermineJulian(strGregorian);	 
	    }                                                     
}

// *************************************************************************
// FUNCTION "IsGregorian" CHECKS EACH CHARACTER FOR A NUMBER AND VALIDATES CCYYMMDD format
// *************************************************************************

function IsGregorian(strString)
{
 var strValidChars = "0123456789";
 var strChar;
 var intMonth;
 var intPiece;
 var blnResult = true;
 var blnLeapYear = false;

 for (i=0;i<strString.length&&blnResult===true;i++)   
	{                                            
	 strChar=strString.charAt(i);
	 if (strValidChars.indexOf(strChar)===-1)
	    {
           blnResult=false;
	    }
	}
 
 if (blnResult===true)
    {
     strChar = strString.substr(2,2);    // extract YY to determine leap year
     intPiece = Number(strChar);
     if ((intPiece%4)===0)
        {
         blnLeapYear=true;
        }
     strChar = strString.substr(4,2);     // extract MM to validate DD
     intPiece = Number(strChar);
     if (intPiece<1||intPiece>12)
        {
         blnResult=false;
        }
     else
        {
         intMonth = intPiece;
         strChar = strString.substr(6,2);    // extract DD
         intPiece = Number(strChar);
         switch(intMonth)              
           {                         
	      case 4:     // 30 day months             
            case 6:
            case 9:
            case 11:
	         if (intPiece<1||intPiece>30)
                  {
                   blnResult=false;
                   alert("out of bounds");
                  }
               break;
	      case 2:               // february
		   if (blnLeapYear&&(intPiece<1||intPiece>29))
                  {
                   blnResult=false;
                  }
               if (!(blnLeapYear)&&(intPiece<1||intPiece>28))
                  {
                   blnResult=false;
                  }                   
               break;
            default:              // 31 day months
		   if (intPiece<1||intPiece>31)
                  {
                   blnResult=false;
                  }
               break;
	     }
        }
    }
 return blnResult;
}

// *************************************************************************
// FUNCTION "DetermineGregorian" CONVERTS JULIAN TO GREGORIAN
// *************************************************************************

function DetermineGregorian(strString)
{
 var strChar;
 var intPiece;
 var intDay;
 var blnLeapYear = false;

 strChar = strString.substr(2,2);    // extract YY to determine leap year
 intPiece = Number(strChar);
 if ((intPiece%4)===0)
    {
     blnLeapYear=true;
    }
 strChar = strString.substr(4,3);     
 intPiece = Number(strChar);
 if (blnLeapYear)
    {
     if (intPiece<32)
        {
         strMonth = '01';
         intDay = intPiece;
        }
     else if (intPiece<61)
             {
              strMonth = '02';
              intDay = intPiece - 31;
             }
     else if (intPiece<92)
             {
              strMonth = '03';
              intDay = intPiece - 60;
             }
     else if (intPiece<122)
             {
              strMonth = '04';
              intDay = intPiece - 91;
             }
     else if (intPiece<153)
             {
              strMonth = '05';
              intDay = intPiece - 121;
             }
     else if (intPiece<183)
             {
              strMonth = '06';
              intDay = intPiece - 152;
             }
     else if (intPiece<214)
             {
              strMonth = '07';
              intDay = intPiece - 182;
             }
     else if (intPiece<245)
             {
              strMonth = '08';
              intDay = intPiece - 213;
             }
     else if (intPiece<275)
             {
              strMonth = '09';
              intDay = intPiece - 244;
             }
     else if (intPiece<306)
             {
              strMonth = '10';
              intDay = intPiece - 274;
             }
     else if (intPiece<336)
             {
              strMonth = '11';
              intDay = intPiece - 305;
             }
     else if (intPiece<367)
             {
              strMonth = '12';
              intDay = intPiece - 335;
             }
    }          
if (!(blnLeapYear))
    {
     if (intPiece<32)
        {
         strMonth = '01';
         intDay = intPiece;
        }
     else if (intPiece<60)
             {
              strMonth = '02';
              intDay = intPiece - 31;
             }
     else if (intPiece<91)
             {
              strMonth = '03';
              intDay = intPiece - 59;
             }
     else if (intPiece<121)
             {
              strMonth = '04';
              intDay = intPiece - 90;
             }
     else if (intPiece<152)
             {
              strMonth = '05';
              intDay = intPiece - 120;
             }
     else if (intPiece<182)
             {
              strMonth = '06';
              intDay = intPiece - 151;
             }
     else if (intPiece<213)
             {
              strMonth = '07';
              intDay = intPiece - 181;
             }
     else if (intPiece<244)
             {
              strMonth = '08';
              intDay = intPiece - 212;
             }
     else if (intPiece<274)
             {
              strMonth = '09';
              intDay = intPiece - 243;
             }
     else if (intPiece<305)
             {
              strMonth = '10';
              intDay = intPiece - 273;
             }
     else if (intPiece<335)
             {
              strMonth = '11';
              intDay = intPiece - 304;
             }
     else if (intPiece<366)
             {
              strMonth = '12';
              intDay = intPiece - 334;
             }
    }  
 if (intDay < 10)
    {
     strDay = "0" + String(intDay);
    }
 else
    {
     strDay = String(intDay);
    }         
 return((strMonth + "/" + strDay + "/" + strString.substr(0,4)));

}


// *************************************************************************
// FUNCTION "IsJulian" CHECKS EACH CHARACTER FOR A NUMBER AND VALIDATES CCYYDDD format
// *************************************************************************

function IsJulian(strString)
{
 var strValidChars = "0123456789";
 var strChar;
 var intMonth;
 var intPiece;
 var blnResult = true;
 var blnLeapYear = false;

 for (i=0;i<strString.length&&blnResult===true;i++)   
	{                                            
	 strChar=strString.charAt(i);
	 if (strValidChars.indexOf(strChar)===-1)
	    {
	     blnResult=false;
	    }
	}

 if (blnResult===true)
    {
     strChar = strString.substr(2,2);    // extract YY to determine leap year
     intPiece = Number(strChar);
     if ((intPiece%4)===0)
        {
         blnLeapYear=true;
        }
     strChar = strString.substr(4,3);     // extract DDD
     intPiece = Number(strChar);
     if (blnLeapYear&&(intPiece<1||intPiece>366))
        {
         blnResult=false;
        }
     if (!(blnLeapYear)&&(intPiece<1||intPiece>365))
        {
         blnResult=false;
        }                   
    }
 return blnResult;
}


// *************************************************************************
// FUNCTION "DetermineJulian" CONVERTS GREGORIAN TO JULIAN
// *************************************************************************

function DetermineJulian(strString)
{
 var strChar;
 var intPiece;
 var intMonth;
 var intDay;
 var intTotal = 0;
 var strTotal;
 var blnLeapYear = false;

 strChar = strString.substr(2,2);    // extract YY to determine leap year
 intPiece = Number(strChar);
 if ((intPiece%4)===0)
    {
     blnLeapYear=true;
    }
 strChar = strString.substr(4,2);     
 intMonth = Number(strChar);
 strChar = strString.substr(6,2);
 intDay = Number(strChar);
 
 if (intMonth>11)
    {
     intTotal = intTotal + 30; 
    }
 if (intMonth>10)
    {
     intTotal = intTotal + 31; 
    }
 if (intMonth>9)
    {
     intTotal = intTotal + 30; 
    }
 if (intMonth>8)
    {
     intTotal = intTotal + 31; 
    }
 if (intMonth>7)
    {
     intTotal = intTotal + 31; 
    }
 if (intMonth>6)
    {
     intTotal = intTotal + 30; 
    }
 if (intMonth>5)
    {
     intTotal = intTotal + 31; 
    }
 if (intMonth>4)
    {
     intTotal = intTotal + 30; 
    }
 if (intMonth>3)
    {
     intTotal = intTotal + 31; 
    }
 if (intMonth>2)
    {
     if (blnLeapYear)
        {         
         intTotal = intTotal + 29; 
        }
     else
        {
         intTotal = intTotal + 28;
        }
    }
 if (intMonth>1)
    {
     intTotal = intTotal + 31; 
    }

 intTotal = intTotal + intDay;
 if (intTotal<10)
    {
     strTotal = "00" + String(intTotal);
    }
 else if (intTotal<100)
         {
          strTotal = "0" + String(intTotal);
         }
      else
         {
          strTotal = String(intTotal);
         }
 return((strString.substr(0,4) + "/" + strTotal));
}

