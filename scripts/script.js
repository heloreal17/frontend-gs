const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

// VALOR E CUPOM DE DESCONTO
let total = 0;

function aplicarDesconto() {
    quantidade =  document.getElementById('quantity').value
    if (quantidade == 0) {
        alert("Coloque a quantidade de dispositivos que deseja!")
    }
    valor_total = quantidade * 200 
    document.getElementById('total').textContent = `${valor_total.toFixed(2)}`;

    const cupom = document.getElementById('cupom').value;
    if (cupom === 'turtlesea123') {
        valor_total *= 0.5; // Aplica desconto de 50%
        document.getElementById('total').textContent = `${valor_total.toFixed(2)}`;
        alert('Desconto de 50% aplicado com sucesso!');
        cupomUtilizado = true; // Marca o cupom como utilizado
    }
}
function cancelar() {
    total = 0;
    document.getElementById('total').textContent = 'R$ 0';
    document.getElementById('cupom').value = '';
    limparMensagens();
    cupomUtilizado = false; // Reinicia o status do cupom
}


// FUNÇÃO DE FORMULÁRIO
function enviar() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var quantity = document.getElementById('quantity').value;

    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;

    if (name == "" || email == "" || quantity == "") {
        alert('Preencha os campos em branco, por favor!');
        return
    } else {
        alert(`Sua compra de R$${valor_total} foi realizada com sucesso!`);
    }
}

