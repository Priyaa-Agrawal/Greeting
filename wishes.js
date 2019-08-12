function wishes(){
        var wisher = document.getElementById("name").value;
        var event =  document.getElementById("occasion").value;
     window.location.href = "./wish.html?name="+wisher+"&event="+event;
}

function display(){

        // split() method
        // document.getElementById("message").innerHTML = window.location.search.split("=")[1];
       
        //URLSearchParams APi
        var parameters = new URLSearchParams(window.location.search);
         document.getElementById("message").innerHTML = parameters.get('name') ;
         document.getElementById("occasion").innerHTML = parameters.get('event') ;


        // //localstorage in browser
        // if (typeof(Storage) !== "undefined") {
        // localStorage.setItem("name", "Priya");
        // document.getElementById("message").innerHTML = localStorage.getItem("name");
        // } else {
        // document.getElementById("message").innerHTML = "Sorry, your browser does not support Web Storage...";
        // }


}
