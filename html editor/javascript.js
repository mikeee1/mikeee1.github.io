function Button(){
    editor.value = "<!DOCTYPE html>"+"\n<html>"+"\n    <body>"+"\n        <button onclick='myFunction()'>Click me</button>"+"\n        <p id='demo'></p>"+"\n        <script>"+"\n            function myFunction() {"+"\n                document.getElementById('demo').innerHTML = 'Hello World';"+"\n            }"+"\n        </script>"+"\n    </body>"+"\n</html>"
    iframe.srcdoc = editor.value;
}

function HtmlEditor(){
    editor.value = '<!DOCTYPE html>\n<html>\n    <body>\n        <textarea id="Editor" class ="Editor" name="Editor" rows="10" cols="20" onchange="Run()"><!DOCTYPE html>\n<html>\n    <body>\n        \n    </body>\n</html></textarea><button onclick="Run()" class="Run" id="Run">Run</button><iframe id="Output" class="Output" width="200" height="159"></iframe><script>var iframe = document.getElementById("Output");var editor = document.getElementById("Editor");function Run() {iframe.srcdoc = editor.value;}</script>\n    </body>\n</html>'
    
    iframe.srcdoc = editor.value;
}