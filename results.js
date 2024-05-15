//collapse


function toggleCollapse() {
    var content = document.getElementById("content");
    const alwaysVisible = document.querySelectorAll(".always-visible");
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      content.classList.add("show-content");
    } else {
        content.classList.remove("show-content");
        content.classList.add("hidden");
    }
        updateAlwaysVisiblePosition();
    }
  


  function toggleCollapse1() {
    var content = document.getElementById("content1");
    const alwaysVisible = document.querySelectorAll(".always-visible");
    if (content.classList.contains("hidden1")) {
      content.classList.remove("hidden1");
    } else {
        content.classList.remove("show-content1");
        content.classList.add("hidden1");
    }
        updateAlwaysVisiblePosition();
    }



    function updateAlwaysVisiblePosition() {
        const content = document.getElementById('content');
        const content1 = document.getElementById('content1');
        const alwaysVisible = document.getElementById('alwaysVisible');
    
        if (!content.classList.contains('hidden') && !content1.classList.contains('hidden1')) {
            alwaysVisible.style.marginTop = '20px';
        } else if (!content.classList.contains('hidden')) {
            alwaysVisible.style.marginTop = '20px';
        } else if (!content1.classList.contains('hidden1')) {
            alwaysVisible.style.marginTop = '20px';
        } else {
            alwaysVisible.style.marginTop = '0';
        }
    }