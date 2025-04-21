// Função de busca
function buscar() {
    const termo = document.getElementById("search-input").value.trim();
    const resultado = document.getElementById("result");
    const content = document.getElementById("sessao");

    if (termo === "") {
        resultado.textContent = "Por favor, digite algo para buscar.";
        resultado.classList.remove("hidden");
        return;
    }

    content.classList.add("hidden");

    resultado.textContent = `Você buscou por: '${termo}'`;
    resultado.classList.remove("hidden");

    document.getElementById("search-input").value = "";
}

// Funções de exibição

function showMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = "flex"
}

function showCategory() {
    const category = document.getElementById("category");
    category.style.display = "flex"
}

function showAccordionMenu(content, title, idSeta) {
    const seta = document.getElementById(idSeta)

    content.style.maxHeight = content.scrollHeight + "px"
    title.style.height = "auto";
    seta.classList.add("rotate-btn")
}

function hideMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = "none"
}

function hideCategory() {
    const category = document.getElementById("category");
    category.style.display = "none"
}

function hideAccordionMenu(content, title, idSeta) {
    const seta = document.getElementById(idSeta)

    content.style.maxHeight = null;
    title.style.height = 0;
    seta.classList.remove("rotate-btn")
}


function toggleAccordionMenu(content, title, idSeta) {
    const footer = document.getElementById("footer2")

    if (content.style.maxHeight) {
        footer.style.height = "211px"
        hideAccordionMenu(content, title, idSeta)
    } else {
        footer.style.height = 0;

        const titles = ['institucional', 'central-ajuda','atendimento']
        for (let i = 0; i < titles.length; i++) {
            let contentToHide = document.getElementsByClassName("content")[i]
            let titleToHide = document.getElementsByClassName(titles[i])[0];
            hideAccordionMenu(contentToHide, titleToHide, 'icon-arrow-' + (i + 1))
        }
        showAccordionMenu(content, title, idSeta)
    }
}

function toggleInstitucional() {
    const content = document.getElementsByClassName("content")[0]
    const title = document.getElementsByClassName("institucional")[0];
    console.log(title)
    toggleAccordionMenu(content, title, "icon-arrow-1")
}

function toggleAjuda() {
    const content = document.getElementsByClassName("content")[1]
    const title = document.getElementsByClassName("central-ajuda")[0];
    toggleAccordionMenu(content, title, "icon-arrow-2")
}

function toggleAtendimento() {
    const content = document.getElementsByClassName("content")[2]
    const title = document.getElementsByClassName("atendimento")[0];
    toggleAccordionMenu(content, title, "icon-arrow-3")
}

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, 
    spaceBetween: 17,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        }
    }
});