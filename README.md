<p align="center">
  <img src=".github/logo-carol-gonzaga.svg" alt="Minha Logo" width="200"/>
</p>

</br>

<p align="center">Formulário digital desenvolvido como desafio do curso POSTECH Fullstack. O projeto segue o mockup do Figma e permite o envio de informações de equipes via requisição POST em JSON.</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-objetivo">Objetivo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://carolgonzaga.github.io/fiap-Tech-Challenge-Inaugural/" target="_blank">Acesse o Projeto</a>
</p>

</br>
</br>

<p align="center">
  <img src=".github/preview.jpg" alt="Preview do Projeto Formulário" width="600"/>
</p>

</br>
</br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML5
- CSS3
- JavaScript

</br>
</br>

## 🎯 Objetivo

O objetivo deste projeto é praticar **interação com formulários, manipulação de DOM e envio de dados via POST** seguindo as especificações do mockup do Figma:

- Estruturação semântica em HTML5
- Formulário responsivo
- Captura de dados do usuário e validação mínima
- Envio dos dados via Fetch API para endpoint externo
- Tratamento de respostas de sucesso e erro
- Limpeza dos campos após envio sem recarregar a página

</br>
</br>

## 🛠️ Funcionalidades

O formulário permite ao usuário:

- Inserir **até 5 nomes de integrantes do grupo**
- Inserir a **história do grupo**
- Enviar os dados via **requisição POST em JSON**
- Receber alert de sucesso ou erro
- Campos são limpos automaticamente após envio bem-sucedido
- Design fiel ao mockup do [Figma](https://www.figma.com/file/scLVh5Mov1SJlwMv0wQ2bW/POSTECH---FULLSTACK?type=design&node-id=0%3A1&mode=design&t=5tNVEAykHd8GeMof-1) e adaptado para todos os tamanhos de tela

</br>
</br>

## 📄 Exemplo de JSON enviado

```json
{
    "names": [
        "Carol",
        "Ana",
        "Catarina",
        "Marina"
    ],
    "message": "Oi pessoal, sou a Carol, e sou uma das integrantes do grupo! …"
}
