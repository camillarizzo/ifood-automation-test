## Bugs encontrados

### 1- App só exibe mensagem de cadastro duplicado para o último cadastrado

#### Descrição
Quando realizamos um cadastro de aluno com dados de uma pré-existente, o app não exibe mansagem de erro.

A mensagem de erro somente é exibida quando tentamos fazer o cadastro com os mesmos dados do último cadastrado.

#### Etapas
1 - Realizar login no app

2 - Preencher os dados igual de outro aluno já cadastrado

3 - Clicar no botão de "Salvar"

#### Comportamento atual
O app apresenta mensagem de cadastro duplicado somente quando é inserido um código igual ao último da lista.

#### Comportamento esperado
O app não deve aceitar nenhum cadastro duplicado.

#### Dispositivo
iPhone 8 - iOS 14.2

Pixel 4 - Android 10

-----------------------------------

### 2- App aceita cadastrar um usuário vazio

#### Descrição
Quando preenchemos dados de cadastro de aluno, e posteriormente apagamos, e clicamos no botão "Salvar", o app grava os dados vazios.

#### Etapas
1 - Realizar login no app

2 - Preencher os dados de código e nome

3 - Apagar os dados

4 - Clicar no botão de "Salvar"

#### Comportamento atual
O app aceita cadastro com dados vazios

#### Comportamento esperado
O app deve aceitar cadastro somente com os campos preenchidos e com caracteres válidos

#### Dispositivo
iPhone 8 - iOS 14.2

Pixel 4 - Android 10

-----------------------------------

### 3- App aceita cadastrar um usuário com caracters especiais no campo código

#### Descrição
Quando preenchemos dados de cadastro de aluno, e no campo código preenchemos
com caracters especiais e posteriormente clicamos em salvar, o app grava essas informações normalmente.

#### Etapas
1 - Realizar login no app

2 - Preencher os dados de código com caracters especiais e o nome do aluno

3 - Clicar no botão de "Salvar"

#### Comportamento atual
O app aceita cadastro com dados inválidos

#### Comportamento esperado
O app deve aceitar somente caracters válidos no campo código.

#### Dispositivo
iPhone 8 - iOS 14.2

Pixel 4 - Android 10

-----------------------------------

### 4- App não diferencia letras maiúsculas e minúsculas ao salvar um aluno

#### Descrição
Quando preenchemos dados de cadastro de aluno, e no campo código preenchemos com letra maiúscula e salvamos,
e posteriormente preenchemos com os mesmos dados porém com letra minúscula, o app salva em duplicidade.

#### Etapas
1 - Realizar login no app

2 - Preencher os dados de código com letra maiúscula e o nome do aluno

3 - Clicar no botão de "Salvar"

4 - Preencher os dados de código com letra minúscula e o nome do aluno

5 - Clicar no botão de "Salvar"

#### Comportamento atual
O app aceita cadastro mesmo com dados duplicados

#### Comportamento esperado
O app deve aceitar somente um cadastro com os mesmos valores no campo código.

#### Dispositivo
iPhone 8 - iOS 14.2

Pixel 4 - Android 10

-----------------------------------

### 5- Botão "OK" em mensagem de erro é clicado sem ação externa

#### Descrição
Quando preenchemos dados de cadastro de aluno vazio e clicamos em "Salvar", o app apresenta uma mensagem de erro, porém 
o botão "OK" é clicado sem nenhuma ação.

#### Etapas
1 - Realizar login no app

2 - Deixar os campos em branco

3 - Clicar no botão de "Salvar"

#### Comportamento atual
A mensagem de erro é aceita sem nenhuma ação externa

#### Comportamento esperado
A mensagem de erro deverá ficar na tela até o usuário clicar no botão "OK".

#### Dispositivo
iPhone 8 - iOS 14.2
