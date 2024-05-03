// ====================== Бургер меню
const meniBtn = document.querySelector('.menu__btn')
const meniClose = document.querySelector('.menu__close')
const meniList = document.querySelector('.menu__list')

meniBtn.addEventListener('click', ()=>{
    meniList.classList.add('menu__list-open');
})

meniClose.addEventListener('click', ()=>{
    meniList.classList.remove('menu__list-open');
})

// ====================== Модальне вікно
var modal = document.getElementById("myModal");
var btn = document.getElementById("modalButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var form = document.getElementById("subscriptionForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var privacyCheck = document.getElementById("privacyCheck").checked;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === "") {
        alert("Будь ласка, введіть ім'я.");
        return;
    } else if (email.trim() === "") {
        alert("Будь ласка, введіть електронну пошту.");
        return;
    } else if (!emailRegex.test(email)) {
        alert("Будь ласка, введіть коректну електронну пошту.");
        return;
    // } else if (message.trim() === "") {
    //     alert("Будь ласка, введіть повідомлення.");
    //     return;
    } else if (!privacyCheck) {
        alert("Будь ласка, підтвердіть згоду на обробку персональних даних.");
        return;
    }

    var formData = {
        name: name,
        email: email,
        message: message
    };

    console.log("Дані з форми:", formData);

    form.reset();

    modal.style.display = "none";
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});

// ====================== Додаткова інформація
function showAdditionalInfo() {
    var additionalInfo = document.getElementById("additional-info");
    if (additionalInfo.style.display === "none") {
        additionalInfo.style.display = "block";
    } else {
        additionalInfo.style.display = "none";
    }
}


// ====================== E-mail
function validateForm(event) {
    var emailInput = document.getElementById("emailInput");
    var privacyCheckbox = document.getElementById("privacyCheckbox");

    // Перевірка наявності введеної електронної пошти
    if (emailInput.value.trim() === "") {
        alert("Please enter your email address.");
        event.preventDefault(); // Зупинити подачу форми
        return false;
    }

    // Валідація електронної пошти
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Зупинити подачу форми
        return false;
    }

    // Валідація чекбокса
    if (!privacyCheckbox.checked) {
        alert("Please agree to our privacy policy by checking the box.");
        event.preventDefault(); // Зупинити подачу форми
        return false;
    }

    return true;
}

// Очистити поля форми після успішної подачі
document.querySelector('.mailing-list__form').addEventListener('submit', function() {
    this.reset();
});

// ====================== Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        860: {
            slidesPerView: 3,
        },
        660: {
            slidesPerView: 2,
        },
    },
});







