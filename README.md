# Projeto de Prática DOM em Formulário

Este é um projeto simples para praticar o uso do DOM (Document Object Model) em JavaScript, focado em manipulação de elementos de formulário HTML.

## Descrição

O objetivo deste projeto é criar um formulário básico com validações simples em JavaScript. O formulário contém campos para o nome, email, senha, estado, sexo e uma descrição opcional.

## Funcionalidades

- Captura dos valores dos campos do formulário através do DOM.
- Verificação se os campos obrigatórios foram preenchidos.
- Exibição de alertas para campos não preenchidos.
- Prevenção do envio do formulário se os campos obrigatórios não foram preenchidos.

## Estrutura do Código

```javascript
function onSubmit(){
    // Captura dos valores dos campos do formulário
    var nome = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var senha = document.getElementsByName('password')[0].value;
    var estado = document.getElementsByName('state')[0].value;
    var sexo = document.getElementsByName('sexo')[0].checked;
    var descricao = document.getElementsByName('description')[0].value;

    // Verificação dos campos obrigatórios
    if (email == '') {
        alert('Preencher email');
    } 
    else if (estado == '') {
        alert('Preencher o Estado');
    } 
    else if (sexo === false) {
        alert('Preencher sexo');
    }
    else {
        // Envio do formulário ou execução de outras ações
        // Aqui você pode adicionar lógica adicional, como enviar os dados do formulário para um servidor ou realizar outras operações.
        console.log("Formulário enviado com sucesso!");
    }
    
    // Impede o envio do formulário
    return false;
}
```

## Uso

1. Abra o arquivo HTML que contém o formulário.
2. Preencha os campos obrigatórios.
3. Tente enviar o formulário.
4. Caso algum campo obrigatório não tenha sido preenchido, serão exibidos alertas indicando os campos que devem ser preenchidos.

## Recomendações

- Adicione mais validações conforme necessário para garantir a integridade dos dados enviados pelo formulário.
- Personalize o comportamento do formulário de acordo com os requisitos do seu projeto.

Este projeto serve como uma introdução simples ao uso do DOM em JavaScript para manipulação de formulários HTML. Experimente expandir e aprimorar este projeto conforme você avança em seus estudos!
