/*

create a custom object for rectangle and circle. Individual Rectangle objects should be able to store dimensions, and have
methods to print area and perimeter. Individual circle objects should be able to store radius, and have methods to print
area and circumference. Display dimensions, area and perimeter of rectangle and circle objects. Make use of math predefined object


*/


<html>

<head>

    <title>Custom Object</title>

</head>

<body>



    <script>

        var rect= 
        {
            l:10,
            b:20,

            

            areaofRec:function(){
               

                return this.l*this.b;

            },

            paraofRec:function(){
               

               return 2*this.l*this.b;

           }




        };

        document.write(rect.areaofRec());
        document.write(rect.paraofRec());
        




    </script>





</body>


</html>
