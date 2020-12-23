## Teste de automação

####Ferramentas Utilizadas
- [Appium](appium.io): Biblioteca de automação mobile
- [WebdriverIO](webdriver.io): framework de automação de testes
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): linguagem de programação
- [Mocha](mochajs.org): biblioteca de BDD
- [Chai](chaijs.com): biblioteca de assertion

###Estrutura do Projeto


    |__bugs --> Contém o registro de bugs encontrados durante o processo.
    |__configs --> Contém os arquivos de configuração do framework de teste.
    |__core
        |__helpers --> Contém algumas classes com métodos de suporte ao projeto e constantes de massa de dados utilizadas nos testes.
    |__report --> Contém os reports dos testes realizados.
    |__screen --> Contém os os arquivos com os mapeamentos de tela.
        |__screen_name --> Nome da tela.
    |__test --> Contém as classes de teste do projeto.
        |__feature_name --> Nome da feature.


### Instalação

1. Clone o repositório - `git clone https://github.com/camillarizzo/ifood-automation-test.git`
2. Abra o terminal na pasta do projeto e execute o comando `npm install`

### Configuração
O WebdriverIO gera um arquivo de configuração com todas as informações necessárias. Os arquivos se encontram na pasta `configs`.
> As Capabilities se encontram nesse arquivo.
Existe um arquivo de configuração para cada tipo de execução:
- local Android: `wdio.android.conf.js`
- browserstack Android: `wdio.bs.android.conf.js`
- local iOS: `wdio.ios.conf.js`

## Executando os testes
**Testes locais**
> Para executar os testes locais o emulador deve estar executando.
- Para executar os testes, atualize (sem comitar) as capabilities de "deviceName" e "platformName" no arquivo de configuração de acordo com a plataforma:
    - Testes Android: atualizar capabilities do arquivo `wdio.android.conf.js` e executar o comando `npm run android`
    - Testes iOS: atualizar capabilities do arquivo `wdio.ios.conf.js` e executar o comando `npm run ios`

**Testes no BrowserStack**
- Para executar os testes, atualize (sem comitar) as capabilities de "deviceName" e "platformName" no arquivo de configuração do browserstack de acordo com a plataforma:
    - Testes Android: atualizar capabilities do arquivo `wdio.bs.android.conf.js` e executar o comando `npm run bs_android`

### Exibindo o relatório
- Para abrir o relatório do Alllure você deverá rodar os seguintes comandos:
  - Relatório Android: `allure generate --clean report/allure-results/android && allure open`
  - Reltório iOS: `allure generate --clean report/allure-results/ios && allure open`