

var fun = function () {
    $.get("http://localhost:8080", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
        document.getElementById("getExample").innerHTML = data;
    });
};

var refr = function () {
    location.reload();
};


var postNumber = function () {
    $.post("http://localhost:8080",
        document.getElementById("rpiNumber").value,
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
            document.getElementById("postExample").innerHTML = data;

        });

};