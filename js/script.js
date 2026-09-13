/**
 * Arquivo: js/script.js
 * Descrição: Script de automação e validação personalizada do formulário Bootstrap.
 */

// Aguarda o carregamento completo da árvore DOM antes de executar os scripts
document.addEventListener('DOMContentLoaded', () => {

    /**
     * FUNÇÃO 1: Validação de Formulários do Bootstrap (substitui os balões nativos em inglês)
     * O que faz: Intercepta o envio do formulário, valida os campos obrigatórios em Português
     * e aplica as classes visuais do Bootstrap (.was-validated, .is-invalid, .is-valid).
     */
    const inicializarValidacaoBootstrap = () => {
        // Seleciona todos os formulários que possuem a classe 'needs-validation'
        const forms = document.querySelectorAll('.needs-validation');

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                // Se algum campo obrigatório não estiver preenchido corretamente:
                if (!form.checkValidity()) {
                    event.preventDefault();  // Impede o envio do formulário
                    event.stopPropagation(); // Interrompe a propagação do evento
                } else {
                    alert('Formulário validado com sucesso!');
                }

                // Adiciona a classe que ativa as mensagens vermelhas/verdes do Bootstrap
                form.classList.add('was-validated');
            }, false);
        });
    };

    /**
     * FUNÇÃO 2: Evento para o campo do tipo "button" (input type="button")
     * O que faz: Demonstra a captura de cliques em um botão sem função nativa de submit/reset.
     */
    const inicializarBotaoCustomizado = () => {
        const btnCustom = document.getElementById('btn-custom');
        
        if (btnCustom) {
            btnCustom.addEventListener('click', () => {
                alert('Ação disparada pelo input do tipo "button" via JavaScript!');
            });
        }
    };

    /**
     * FUNÇÃO 3: Limpeza visual de validações ao resetar o formulário
     * O que faz: Remove as bordas vermelhas/verdes de validação quando o usuário clica em "Limpar Formulário".
     */
    const inicializarLimpezaFormulario = () => {
        const form = document.querySelector('.needs-validation');
        
        if (form) {
            form.addEventListener('reset', () => {
                // Remove a classe do Bootstrap que exibe os estados de validação
                form.classList.remove('was-validated');
            });
        }
    };

    // Chamada de execução das funções
    inicializarValidacaoBootstrap();
    inicializarBotaoCustomizado();
    inicializarLimpezaFormulario();

});