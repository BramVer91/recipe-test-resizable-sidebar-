document.addEventListener("DOMContentLoaded", function() {
    var dragHandle = document.getElementById("drag-handle");
    var sidebar = document.getElementById("sidebar");
    console.log(dragHandle);
    console.log(sidebar);
  
    dragHandle.addEventListener("mousedown", function(e) {
      e.preventDefault();
      document.addEventListener("mousemove", resizeSidebar);
      document.addEventListener("mouseup", stopResizeSidebar);
    });
  
    function resizeSidebar(e) {
      console.log("Mouse position: " + e.clientX);
      console.log("Sidebar offset: " + sidebar.offsetLeft);
    //   sidebar.style.width = (e.clientX - sidebar.offsetLeft) + "px";
      sidebar.style.width = e.clientX + "px";
      dragHandle.style.left = e.clientX + "px";
    }
  
    function stopResizeSidebar(e) {
      document.removeEventListener("mousemove", resizeSidebar);
      document.removeEventListener("mouseup", stopResizeSidebar);
    }
});
