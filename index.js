window.onload = function() {
    window.addEventListener("resize", function() {
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (windowWidth <= 500) {
            var messageDiv = document.getElementById("message");
            if (messageDiv) {
                document.body.removeChild(messageDiv);
            }
        } else {
            var messageDiv = document.getElementById("message");
            if (!messageDiv) {
                messageDiv = document.createElement("div");
                messageDiv.id = "message";
                messageDiv.textContent = "화면 너비를 줄여주세요";
                messageDiv.style.position = "fixed";
                messageDiv.style.top = "0";
                messageDiv.style.left = "0";
                messageDiv.style.width = "100%";
                messageDiv.style.height = "100%";
                messageDiv.style.display = "flex";
                messageDiv.style.alignItems = "center";
                messageDiv.style.justifyContent = "center";
                messageDiv.style.backgroundColor = "blue";
                messageDiv.style.color = "white";
                messageDiv.style.fontSize = "24px";

                document.body.appendChild(messageDiv);
            }
        }
    });
};
