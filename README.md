# Data Lovers
Projeto data lovers, realizado em dupla, na Laboratoria.

## Índice

* [Print da Tela](#print-da-tela)
* [Definição do produto](#definição-do-produto)
* [Organização](#organização)
* [Tema escolhido](#tema-escolhido)
* [Perfil dos usuários](#perfil-dos-usuários)
* [Fluxograma](#fluxograma)
* [Protótipo](#protótipo)
* [Testes de usabilidade](#testes-de-usabilidade)
* [Implementação da Interface de Usuário](#implementação-da-interface-de-usuário)

### Print da Tela
![Exemplo](src/img/example-data-lovers.png)

### Definição do produto

O data-lovers é uma interface de pesquisa de dados sobre mercado de trabalho e gênero de alguns países da Ámerica (Brasil, Chile,Perú e México). Dados foram retirados do worldbank!

Os usuários podem pesquisar dados exatos do país,ano e indicador desejado e filtrarem informações através dos gráficos de dados dos últimos 10 anos.

### Organização
Utilizamos metodologia ágil no projeto, através de organização em Sprints com datas limites de conclusão de cada elemento a se fazer, dentre eles: delimitação do tema, o perfil do usuário, o fluxograma, o prótotipo e o teste de usabilidade do protótipo. Depois dessas etapas concluídas, começamos a implementar a interface e a implementação do código.

[Trello](https://trello.com/invite/b/Tdum0bgj/bddbb37c49114b3d5656c6d1e916a41a/data-lovers) 

As dicas das nas perguntas abaixo ao iniciar o projeto ajudaram bastante:
* Quem são os principais usuários de seu produto?
* Quais são os objetivos de seu usuário com relação ao seu produto?
* Quais os dados mais importantes que eles querem ver em sua interface?
* Quando utilizam ou utilizariam seu produto?

### Tema escolhido

[Indicadores de desenvolvimento](src/data/worldbank/worldbank.json):
Indicadores de desenvolvimento do Banco Mundial de alguns países (Brasil, Chile, México e Peru). Estes dados incluim indicadores demográficos, econômicos e comerciais.

### Perfil dos usuários
Karina:
* Profissão: CEO de uma Empresa Multinacional;
* Idade: 35 anos;
* Mora na Argetina;
* Características: Focada, busca informações online diversas, nível intermediário em computação, gosta de ler;
* Necessidades: Informações de dados sobre emprego e educação na América Latina, principalmente no Brasil, Chile, Perú e México;

Nestor:
* Profissão: Investidor;
* Idade: 42 anos;
* Mora na Itália;
* Características: Engraçado, objetivo, estratégico, nível intermediário em computação; 
* Necessidades: de sites com informações específicas de quatro países (Brasil, Chile, Perú e México) em que possa acessar dados de emprego e educação para investimento em empresas com cunho social;

#### Fluxograma

[Fluxograma](/Fluxograma%20Data-Lovers.pdf)

#### Protótipo

[Marvel](http://marvelapp.com/5b6gfd8)

#### Testes de usabilidade

Com o protótipo feito no Marvel, compartilhamos com pessoas próximas, através do WhatsApp, o link para teste. No qual recebemos um feedback positivo, pois ele estava desenhado bem simples. A partir das alterações feitas na interface, fomos testando com pessoas próximas. As quais opinaram em relação ao possíveis dados interessantes a se mostrar. Sendo assim, a partir dos encontros da dupla presencialmente e as informações trocadas online, fomos delineado novamente nossa interface.

## Implementação da Interface de Usuário

Começamos a delinear o html e o css, de acordo com o protótico inicial, porém ao decorrer do projeto mudamos a ideia da interface e usamos o projeto Freelancer como inspiração para melhor se adequar ao perfil dos nossos usuários. Aliado a isso, criamos dados com o chart.js, criamos mais 3 files.js para melhor divisão das funções, entendimento e organização. Por último foi feito o filtro que traz o dado em porcetagem puro, através do cruzamento de ano, país e indicador. 
A interface final permite:
1. através do header escolher a parte do site que deseja acessar;
2. Exibe uma breve explicação dos países e indicadores encontrados;
3. Permite pesquisar por ano, país e indicador o dado filtrado desse cruzamento;
4. Exibe gráfico por país em que é possível filtrar as informações e comparar graficamente.