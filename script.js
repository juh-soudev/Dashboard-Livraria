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
        setTimeout(() => barra.style.width = largura, 200);
    });

    document.querySelectorAll(".barra-preenchida").forEach(b => {
        const w = b.style.width;
        b.style.width = "0";
        setTimeout(() => b.style.width = w, 300);
    });
});

const darkBtn = document.getElementById("darkModeBtn");
const body = document.body;

darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

const pedidos = [];
const listaPedidos = document.getElementById("listaPedidos");
const botaoPedidos = document.getElementById("btnPedidos");

document.querySelectorAll(".add-to-cart").forEach(botao => {
    botao.addEventListener("click", () => {
        const titulo = botao.getAttribute("data-title");

        pedidos.push(titulo);
        atualizarPedidos();

        botao.textContent = "Adicionado ✔";
        botao.style.background = "#1abc9c";
        botao.style.color = "white";
    });
});

function atualizarPedidos() {
    listaPedidos.innerHTML = "";

    pedidos.forEach(titulo => {
        const li = document.createElement("li");
        li.textContent = titulo;
        listaPedidos.appendChild(li);
    });
}

botaoPedidos.addEventListener("click", () => {
    const secao = document.getElementById("meus-pedidos");
    secao.style.display = "block";
    window.scrollTo({
        top: secao.offsetTop,
        behavior: "smooth"
    });
});
