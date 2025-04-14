<script>
    document.getElementById("btn-category").addEventListener("click", function() {
        var menu = document.getElementById("menu");
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function(event) {
        var menu = document.getElementById("menu");
        var button = document.getElementById("btn-category");
        if (!menu.contains(event.target) && event.target !== button) {
            menu.style.display = "none";
        }
    });
</script>
