<script>
    function BMT(id){
        var BMT;
        var set= new Date();
        isSummerTime=60; // Перевод на летнее время +60 мин., в противном случае нужно указать +0 мин.
        TimeZone=set.getTimezoneOffset()/60;
        Hours = set.getUTCHours()+3+TimeZone;
        Min = set.getUTCMinutes();
        Seconds = set.getUTCSeconds();
        BMT=Math.floor(((Hours*3600)+((Min-isSummerTime)*60)+Seconds)*1000/86400); //Вычисляем BMT
        Hours=null;
        TimeZone=null;
        Min=null;
        Seconds=null;
        set=null;
        window.setTimeout("BMT('bmt')",1000);
        document.getElementById(id).innerHTML="@"+BMT.toString(); //Вставляем время в элемент с идентификатором bmt на страницу
    }
</script>
<body onload="BMT('bmt')">
<span id="bmt" style="font-size:20px"></span>
