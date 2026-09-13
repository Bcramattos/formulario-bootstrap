document.addEventListener('DOMContentLoaded', () => {

    // 1. Máscara Automática de Telefone: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    const inputTelefone = document.getElementById('telefone');

    if (inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
            
            // Limita a 11 dígitos
            value = value.substring(0, 11);

            // Aplica a formatação progressiva
            if (value.length > 10) {
                // Formato Celular: (11) 99999-9999
                value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
            } else if (value.length > 6) {
                // Formato Fixo/Parcial: (11) 9999-9999
                value = value.replace(/^(\d{2})(\d{4})(\d{0addItem})/, '($1) $2-$3');
            } else if (value.length > 2) {
                // Formato DDD: (11) 999...
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                // Apenas abre parênteses: (11...
                value = value.replace(/^(\d*)/, '($1');
            }

            e.target.value = value;
        });
    }

    // 2. Validação Bootstrap
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // 3. Botão Genérico
    const btnCustom = document.getElementById('btn-custom');
    if (btnCustom) {
        btnCustom.addEventListener('click', () => {
            alert('Ação disparada pelo botão genérico!');
        });
    }

    // 4. Limpeza do formulário
    const form = document.querySelector('.needs-validation');
    if (form) {
        form.addEventListener('reset', () => {
            form.classList.remove('was-validated');
        });
    }
});