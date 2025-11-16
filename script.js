const toggleMenu = document.getElementById("toggleMenu");
const sidebar = document.getElementById("sidebar");

toggleMenu.addEventListener("click", () => {
    sidebar.classList.toggle("ativo");
});

document.querySelectorAll(".notificacao").forEach(n => {
    n.addEventListener("click", () => {
        n.style.opacity = "0";
        n.style.transform = "translateX(20px)";
        setTimeout(() => n.remove(), 300);
    });
});

window.addEventListener("load", () => {
    document.querySelectorAll(".progress").forEach(barra => {
        const largura = barra.style.width;
        barra.style.width = "0";
        setTimeout(() => {
            barra.style.width = largura;
        }, 200);
    });

    document.querySelectorAll(".barra-preenchida").forEach(b => {
        const w = b.style.width;
        b.style.width = "0";
        setTimeout(() => {
            b.style.width = w;
        }, 300);
    });
});

document.querySelectorAll(".botao").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.textContent = "Adicionado ✔";
        btn.style.background = "#1abc9c";
        btn.style.color = "#fff";
        btn.style.transform = "scale(1.1)";
        setTimeout(() => btn.style.transform = "scale(1)", 150);
    });
});

const darkBtn = document.getElementById("darkModeBtn");
const body = document.body;

darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

const cartList = document.getElementById("cartList");
const addButtons = document.querySelectorAll(".add-to-cart");

let carrinho = [];

addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const title = btn.getAttribute("data-title");
        carrinho.push(title);
        atualizarCarrinho();
    });
});

function atualizarCarrinho() {
    cartList.innerHTML = "";
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}