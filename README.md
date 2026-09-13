# Formulário de Inscrição - Mostra de Tecnologia e Inovação

**Aluno:** Bruno Couto Ramos de Araújo Mattos  
**Repositório:** [https://github.com/Bcramattos/formulario-bootstrap](https://github.com/Bcramattos/formulario-bootstrap)  
**Página Publicada:** [https://bcramattos.github.io/formulario-bootstrap/](https://bcramattos.github.io/formulario-bootstrap/)  

---

## 🎯 Objetivo do Projeto
Este projeto foi desenvolvido como uma atividade prática com o objetivo de investigar e dominar a utilização de formulários HTML5 integrados ao framework CSS **Bootstrap 5**. A aplicação simula a página de inscrição e submissão de projetos para uma Mostra de Tecnologia e Inovação, garantindo responsividade, máscaras de entrada em tempo real e validações nativas.

---

## 📁 Estrutura do Projeto
```text
formulario-bootstrap/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── script.js

---

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica e validações nativas.
* **CSS3 & Bootstrap 5.3:** Estilização, componentes e sistema de Grid responsivo.
* **JavaScript (ES6):** Manipulação pontual de eventos DOM.
* **Git & GitHub Pages:** Versionamento e hospedagem estática do projeto.

---

## 📑 Explicação dos Tipos de Input Utilizados

Abaixo está a relação dos 22 tipos de `input` implementados conforme os requisitos:

* `text`: Utilizado para o nome completo do participante.
* `email`: Garante a validação nativa de formato de e-mail.
* `password`: Oculta os caracteres digitados (com aviso de segurança anexado).
* `number`: Permite entrada numérica restrita a limites mínimo e máximo (idade).
* `tel`: Recebe telefone estilizado com máscara visual de exemplo e `pattern` Regex.
* `url`: Valida o formato de link externo (ex.: LinkedIn/Portfólio).
* `search`: Campo de busca configurado com sugestões via `<datalist>`.
* `date`: Seletor de data para o dia da presença.
* `month`: Seletor de mês/ano para disponibilidade.
* `week`: Seletor de semana do ano para o agendamento de pitch.
* `time`: Seletor de horário exato para chegada.
* `datetime-local`: Seletor combinado de data e hora para retirada de credencial.
* `color`: Seletor gráfico de cor para personalização do estande.
* `range`: Controle deslizante de escala numérica para o nível de automação.
* `file`: Upload de arquivos restrito às extensões `.pdf` e `.docx`.
* `checkbox`: Seleção múltipla para áreas de interesse profissional.
* `radio`: Seleção única exclusiva para definição de gênero.
* `hidden`: Envio de metadados ocultos do formulário (`form_id`).
* `submit`: Botão padrão para disparar a validação e envio do formulário.
* `reset`: Botão para limpar todos os campos preenchidos.
* `button`: Botão genérico sem comportamento padrão de envio, atrelado a evento JS.
* `image`: Botão gráfico funcional utilizando uma imagem personalizada.

---

## 🔍 Respostas da Investigação

### 1. Como funcionam os tipos de input no HTML5 e qual a importância de escolher o tipo correto?
Os tipos de `input` instruem o navegador sobre qual tipo de dado é esperado em cada campo. A escolha correta melhora significativamente a experiência do usuário (UX), pois aciona teclados otimizados em dispositivos móveis (como teclado numérico para `tel` ou teclado com `@` para `email`) e provê validações nativas prévias ao envio do formulário.

### 2. De que forma o Bootstrap facilita a criação de formulários responsivos?
O Bootstrap oferece classes utilitárias pré-estilizadas (como `form-control`, `form-select` e `form-check`) e um poderoso sistema de **Grid de 12 colunas** (`row`, `col-12`, `col-md-6`). Isso permite adaptar automaticamente a disposição dos elementos de uma tela larga de computador para uma exibição verticalizada e legível em telas pequenas de smartphones.

### 3. Como funcionam as validações nativas do HTML e quais suas vantagens?
Atributos como `required`, `min`, `max`, `pattern` e `minlength` acionam mecanismos de validação executados diretamente pelo navegador antes que o formulário seja submetido. A vantagem é que essas validações ocorrem no lado do cliente sem exigir scripts complexos ou chamadas de servidor, garantindo alta performance e feedback imediato ao usuário.