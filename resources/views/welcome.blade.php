<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/js/app.js')
    <title>Document</title>

</head>

<body>
    <p><b>Real Time Data</b> <span id="test-data"></span></p>

    <script type="module">

        Echo.channel('test').listen('TestSocket',(data)=>{
            console.log(data);
            document.getElementById('test-data').innerHTML = data.data;
        });
    </script>
</body>

</html>
