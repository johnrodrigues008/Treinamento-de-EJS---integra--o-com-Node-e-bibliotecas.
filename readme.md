### 1° Passo, criação do template. 

### 2° Passo, passar para EJS:
```
      Instalar o EJS => npm install ejs
      Criar um servidor => npm install express
      Criar o arquivo server ou app
```
### 3° Criar a Pasta chamada views:


### 4° Passo, utilizando a separação de arquivos e compartilhando partes do codigo.
```
      Criado o arquivos head, header, footer.
      Chamando arquivos no template com a sintaxe do ejs <%- include('nome do arquivo'); %>
      instalar a extensão de formatação "EJS language support", caso optem por facilitar na hora de digitar os comandos.
```
 * *Todas as alterações que serão feitas em EJS não tem a necesario parar o servidor, apenas em arquivos JS, podendo ser contornado com a instalação de outras bibliotecas como por exemplo o "nodemon"*

### 5° Passando objetos por arquivos:

      Os objetos são basicamente pequenos trechos de codigo ou informações que podem ser disponibilizadas em outras partes da sua estrutura. Com o EJS é possivel reaproveitar esses pequenos codigos passando eles por parametros no "include". 
      
      Para incluir utiliza se o seguinte comando:
```
      <%- include('nome do arquivo', {nome_do_objeto = "Valor do objeto"}) %>
```
      O exemplo que utilizamos neste projeto consiste em adicionar um breadcrum, ou seja eu adicionei no arquivo head o codigo que quero chamar:
```
      <p class="breadcrumb">Página: <%= typeof pagina != 'undefined' ? pagina %> </p>
```
      Nas paginas eu igualei a variavel pagina a um valor:
```
      <%- include('../components/header', {pagina: 'Home'} ); %>
```
      Quando o arquivo que contem o header é chamado, ele identifica o valor do objeto e faz a atribuição. 


*É possível utilizar tambem condicionais para efetuar a renderização do objeto podendo fazer validações e testes para identificação do que deve ou não ser apresentado ao usuario, por exempo:* 

```
      <p class="breadcrumb">Página: <%= typeof pagina != 'undefined' ? pagina %> </p>
```

Com esse condicional ele irá verificar se a pagina é diferente de indefinida e caso seja, ele irá atribuir o objeto pagina, que definimos como home.

### 6° Passando objetos por rotas:

É possível passar arquivos por rotas utilizando a metodologia de objetos, assim como passamos no header e chamamos nas paginas o breadcrum, é possivel passar ele na rota e exibir ele na tela em formato html.

Para isso criamos uma nova rota no arquivo server.js:

```
      app.get("/usuarios", function (req, res) {
            res.render("pages/usuarios", {usuarios: ['Pedro', 'Paulo', 'kratos', 'Atreus']});
      });
```
é no arquivo usuarios, chamaremos o objeto que foi criado na resposta da requisição. 

```
      <% for(usuarios of usuarios){ %> 
            <li>
                  <%- usuarios %> 
            </li>
      <% } %>
```
Utilizei um for para poder renderizar os usuarios na ordem em formato de listagem, um por um. Mas caso queira utilizar so objeto, utilize o exemplo abaixo:

```
      <%- usuarios %> 
```
