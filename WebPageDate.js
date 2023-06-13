/*

12. Create a web page that displays the current date in the format specified 
Today is Monday, 24 April 2000, welcome, and Good Afternoon to you.
*/


<html>


<head>
    <script>
        function da(){
            var d1=new Date();
            var dayofweek=d1.getDay();
                if(dayofweek===1){
                    return "Monday"
                }
                if(dayofweek===2){
                    return "Tuesday"
                }
                if(dayofweek===3){
                    return "Wednesday"
                }
                if(dayofweek===4){
                    return "Thursday"
                }
                if(dayofweek===5){
                    return "Friday"
                }
                if(dayofweek===6){
                    return "Saturday"
                }
            }
        function mydate(){
            var d1=new Date();
            
            //document.write("Today is "+da()+" "+d1.getDate()+" "+"June"+ " "+d1.getFullYear()+Good())

            

        }

        function Good(){
            var d2=new Date()
            var a=d2.getHours();
            document.write(a);
        }

        
    </script>
</head>

<body>

    <script>
        mydate();
    </script>

</body>

</html>
