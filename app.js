
//smooth scroll functionality
const sections = Array.from(document.querySelectorAll('a[href^="#"]'))
const sectionView = Array.from(document.querySelectorAll("section"))
let menuActive = false;
let menuIcon = document.querySelector(".menu-icon");
let cancelIcon = document.querySelector(".cancel-icon");
let menu = document.querySelector(".menu-list");
const menuContent = document.querySelector(".main-menu");

menu.onclick = (e) => {
    
        if (e.target.closest(".main-menu")) {
            return;
        }
    menuActive = !menuActive;
    !menuActive && menu.classList.remove("active")

    
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry.target.getAttribute("id"))
        if (entry.isIntersecting) {
            entry.target.classList.add("animate")
            
        } else {
            entry.target.classList.remove("animate")
        }
    })
    
})
observer.observe(document.querySelector(".skill-section"))


sectionView.forEach((page) => {
        // console.log(page.getAttribute("id"))
    observer.observe(document.querySelector(`.${page.getAttribute("class")}`))
})
    

sections.forEach((element) => {
    // console.log(element.getAttribute("href"))
    sectionView.forEach((page) => {
        if (element.getAttribute("href") == `#${page.getAttribute("id")}`) {
            // console.log(`#${page.getAttribute("id")}`);
            // observer.observe(document.querySelector(`#${page.getAttribute("id")}`))
        }
    })
    
    element.onclick =(eventObj) => {
        eventObj.preventDefault();
        menuActive = !menuActive;
        menu.classList.toggle("active");
        
        const moveTo = document.querySelector(eventObj.target.getAttribute('href'));
            
        moveTo.scrollIntoView(
        {
            behavior: "smooth"
        } )
         
         
    }
})


menuIcon.onclick = () => {
    menuActive = !menuActive;
    menuActive && menu.classList.add("active") 
}
cancelIcon.onclick = () => {
    menuActive = !menuActive;
    !menuActive && menu.classList.remove("active")
}

//extra features
const projectButtons = Array.from(document.querySelectorAll("#e-store, #linkedIn"));
console.log(projectButtons)
projectButtons.forEach((each) => {
    // if(document)
    each.onclick = (e) => {
        e.preventDefault();
        console.log(e.target.id)
        if (e.target.id == "e-store") {
            window.location.href= "https://e-store-7d144.web.app/"
        }
        if (e.target.id == "linkedIn") {
            window.location.href= "https://linkedin-clone-27139.web.app/"
        }
        
    }
})

//sending email fuction section
const sendEmail = document.querySelector("#email");
const sendName = document.querySelector("#name");
const sendSubject = document.querySelector("#subject");
const sendMessage = document.querySelector("#message");
const submitForm = document.querySelector(".contact-form");
function sendToEmail(email, subject, name, message) {
    console.log(email, message, Email)
    Email.send({
        Host: "smtp.gmail.com",
        Username: "habeebawolumate@gmail.com",
        password: "Habeeb123",
        To: "habeebawolumate@gmail.com",
        From: email,
        Subject: `From: ${name} <br/> ${subject}`,
        Body: message,

    }).then((message)=> alert("mail succeeded"))
}
submitForm.onsubmit = (e) => {
    e.preventDefault();
    sendToEmail(sendEmail.value, sendSubject.value, sendName.value, sendMessage.value);
}
// yjmkzrcfnyjvxazc








// // console.log(menuIcon.innerHTML)

// let mainMenu = document.querySelector(".main-menu")
// //menu icon works fine
// menuIcon.onclick = () => {
//     // cancelIcon.removeAttribute('id')
//     // menuIcon.setAttribute('id', 'hide-menu-icon')
//     // cancelIcon.setAttribute('id', 'show-menu-icon')
//     // mainMenu.setAttribute('id', 'show-menu-list')

    
//         menuIcon.classList.replace("show-menu-icon", "hide-menu-icon")
//         cancelIcon.classList.replace("hide-menu-icon","show-menu-icon")


    

// }
// // cancel caller works fin
// cancelIcon.onclick = () => {
//     // menuIcon.removeAttribute('id')
//     // cancelIcon.setAttribute('id', 'hide-menu-icon')
//     // mainMenu.removeAttribute('id')
    
//     cancelIcon.classList.replace("show-menu-icon", "hide-menu-icon")
//     menuIcon.classList.replace("hide-menu-icon", "show-menu-icon")
//     menuIcon.classList.add("show-menu-icon")
    

// }
