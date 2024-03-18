const body = document.body;

// user button
const userBtn = document.getElementById("user-btn");
const headerProfile = document.querySelector('header .profile'); 
document.getElementById("user-btn").addEventListener('click',()=>{
    headerProfile.classList.toggle('active')
})

// search buttons
const searchButton = document.querySelector('.search-form')
document.getElementById('search-btn').addEventListener('click', () => {
    searchButton.classList.toggle('active');
});

// menu button
const sidebar =document.getElementById('sidebar');
document.getElementById('menu-btn').addEventListener('click',()=>{
    body.classList.toggle('active');
    sidebar.classList.toggle('active')
})


// close sidebar
document.getElementById('close-sidebar').addEventListener('click',()=>{
    sidebar.classList.add('active');
    body.classList.add('active')
})

// mobile close sidebar
document.getElementById('mobile-close-sidebar').addEventListener('click',()=>{
    sidebar.classList.remove('active')
})


// dark light mode
const darkLightBtn = document.getElementById('dark-light-btn');
const darkLightBtnIcon = darkLightBtn.querySelector('i')
const darkMode = localStorage.getItem('dark-mode')

const onDarkMode = ()=>{
    body.classList.add('dark');
    localStorage.setItem('dark-mode','on')
}
const offDarkMode = ()=>{
    body.classList.remove('dark');
    localStorage.setItem('dark-mode','off')
    
    const footer = document.querySelector('footer');
    footer.style.color='white'
    const footerA = document.querySelectorAll('.footer-area a');
    const titleClass = document.querySelectorAll('.footer-area .title');
    

    footerA.forEach(element => {
        element.style.color = 'white';
    });
    titleClass.forEach(each=>{
        each.style.color='white'
    })
}

if(darkMode === 'off'){
    offDarkMode()
}

darkLightBtn.addEventListener('click',()=>{
    let darkMode = localStorage.getItem('dark-mode');
    darkLightBtnIcon.classList.toggle('ri-sun-line')
    if(darkMode === 'off'){
        onDarkMode()
    }
    else{
        offDarkMode()
    }
})


window.onscroll = ()=>{
    headerProfile.classList.remove('active');
    searchButton.classList.remove('active')
}

// document.addEventListener('click', (event) => {
//     const target = event.target;
//     if (target !== userBtn && !headerProfile.contains(target)) {
//         headerProfile.classList.remove('active');
//     }
// });