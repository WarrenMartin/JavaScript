<html>


<Head>
    <title>
        Mix of HTML && JS
    </title>
</Head>


<body>

    <script>

 var persons = [
  { pid: 1001, pname: "Warren" },
  { pid: 1002, pname: "Martin" },
  { pid: 1003, pname: "LL" },
  { pid: 1004, pname: "LL" }
]


var str="<table border='1'>";
    for(person of persons){
        str+="<tr><td>"+person.pid+"</td><td>"+person.pname+"</td></tr>"
       
    }
    str+="</table>"
        
    document.write(str)

    </script>

</body>


</html>
