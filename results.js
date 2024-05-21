//collapse


function toggleCollapse() {
    const content = document.getElementById('content');
    const fom = document.getElementById('fom');
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      content.classList.add('show-content');
      fom.classList.contains('hidden') 
        fom.classList.remove('hidden');
        fom.classList.add('show-content');

    } else {
      content.classList.remove('show-content');
      content.classList.add('hidden');
      fom.classList.remove('show-content');
      fom.classList.add('hidden');
    }
  }
  
  function toggleCollapse1() {
    const content1 = document.getElementById('content1');
    if (content1.classList.contains('hidden1')) {
      content1.classList.remove('hidden1');
      content1.classList.add('show-content1');
    } else {
      content1.classList.remove('show-content1');
      content1.classList.add('hidden1');
    }
  }
  


  function updateAlwaysVisiblePosition() {
    const content = document.getElementById('content');
    const content1 = document.getElementById('content1');
    const alwaysVisible = document.querySelector('.always-visible');

    const isVisible = (element) => !element.classList.contains('hidden');

    if (isVisible(content) || isVisible(content1)) {
        alwaysVisible.style.marginTop = '20px';
    } else {
        alwaysVisible.style.marginTop = '0';
    }
}