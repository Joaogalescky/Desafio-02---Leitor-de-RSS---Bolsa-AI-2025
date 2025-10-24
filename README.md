
# 📰 Leitor de RSS com Node.js, Docker e AWS (Grupo 4)

Este projeto tem como objetivo desenvolver uma API em Node.js que consome dados de um feed RSS, armazena as informações em um arquivo `.json` em um bucket AWS S3 e permite a consulta dos dados por meio de uma página HTML simples.

---

## 👥 Equipe - Grupo 4

* Maria Eduarda da Nóbrega – 
* Vinícius França de Oliveira Sousa – 
* João Vitor Campõe Galescky – 
* Gabriel Medeiros Nóbrega – 

---

## 📌 Site Utilizado para o Feed RSS

**Fonte escolhida**: [G1 - RSS](https://g1.globo.com/rss/g1/brasil/)

---

## 🚀 Tecnologias Utilizadas

### Frameworks:
- Node.js;
- Express.js;
- Bootstrap.

### Linguagens:
- JavaScript;
- HTML (de marcação);
- CSS (estilização).

### Conteinerização:
- Docker
---

## 🛠 Como Executar o Projeto
1. Em máquina local:
1.1 Clonar ou baixar o .zip do repositório
Para clonar o repositório por comando, digite:
```bash
git clone https://github.com/Compass-pb-aws-2025-MAIO/sprints-2-3-pb-aws-maio.git
```
Para baixar o arquivo.zip do projeto, clique em **_Code_** e em seguida **_Download_ ZIP**

1.2 Instalar dependências do Node
Entre na pasta raiz do projeto, **SPRINT-2-3-PB-AWS-MAIO**, e digite o comando:
```bash
npm install
#ou npm i
```

1.3 Executar o projeto
Na pasta raiz, **SPRINT-2-3-PB-AWS-MAIO**, digite o comando:
```bash
npm start
# após executar esse comando, aparecerá a URL para acesso, http:localhost:3000
```

2. Em Docker:
2.1 Para clonar o repositório por comando, digite:
```bash
git clone https://github.com/Compass-pb-aws-2025-MAIO/sprints-2-3-pb-aws-maio.git
```
Para baixar o arquivo.zip do projeto, clique em **_Code_** e em seguida **_Download_ ZIP**

1.2 Instalar dependências do Node
Entre na pasta raiz do projeto, **SPRINT-2-3-PB-AWS-MAIO**, e digite o comando:
```bash
npm install
#ou npm i
```

1.3 Construir a imagem:
Na pasta raiz do projeto, **SPRINT-2-3-PB-AWS-MAIO**, contendo o arquivo Dockerfile, digite o comando:
```bash
docker build -t <nome_da_imagem> .
```

1.4 Executar a imagem em um container: 
```bash
docker run -dp 127.0.0.1:3000:3000 <nome_da_imagem>
# Após esse comando, abra o navegador e acesse pela barra de endereço: 127.0.0.1:3000
```
---

## 🧱 Estrutura de Pastas

```bash
/
├── node_modules/
├── public/
│   ├── index.css/        
│   ├── index.html/        
│   └── index.js/          
├── src/
│   ├── routes/        # Endpoints API
│   ├── services/      # RSS Parser
│   └── docs/          # Documentação da API
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── README.md
```

## ❗ Dificuldades Encontradas
* Entendimento do funcionamento e implementação de uma API de extração de RSS;
* Entendimento e uso do Node.js;
* Entendimento e uso do Docker.
---

## ✅ Como Utilizar
Requisitos necessários para utilização:
* IDE (Visual Studio Code ou outro);
* Docker;
* Node;
* Git.

    [ATENÇÃO]: o projeto foi desenvolvido e testado com esses itens.
---

## 🌐 Acesso Online

* Página HTML: [localhost:3000]()
* Endpoint da API:
`localhost:3000\docs` via Swagger
`localhost:3000\redocs` via Redoc
---

## Autores

- [Aniel Melo](https://github.com/anielmelo)
- [Maria Eduarda da Nóbrega](https://github.com/eduardanb)
- [Vinícius França de Oliveira Sousa](https://github.com/marditin)
- [João Vitor Campõe Galescky](https://github.com/Joaogalescky) 
- [Gabriel Medeiros Nóbrega](https://github.com/Prozis-dev)
