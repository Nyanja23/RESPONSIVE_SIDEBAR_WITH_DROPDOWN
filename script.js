
const body = document.querySelector('body'),
      modeSwitch = body.querySelector('.toggle-switch'),
      modeText = body.querySelector('.mode-text'),
      searchBtn = body.querySelector('.search-box'),
      toggle = body.querySelector('.toggle');

      toggle.addEventListener('click',() =>{
        sidebar.classList.toggle('open');
      });

      searchBtn.addEventListener('click',()=>{
        sidebar.classList.remove('open');
      })

      modeSwitch.addEventListener("click",()=>{
        body.classList.toggle('dark');

        if(body.classList.contains('dark')){
          modeText.innerText = 'Light Mode'
        }else{
          modeText.innerText = 'Dark Mode'
        }
      });
