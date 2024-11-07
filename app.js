function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `
    <div class="cartao__conteudo">
                    <h3>GITHUB</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é GITHUB?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>O GitHub é uma plataforma de desenvolvimento colaborativo que aloja projetos na nuvem.</p>
                    </div>
                </div>
    `
}
