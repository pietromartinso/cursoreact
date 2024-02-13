# Fundamentos of React (https://www.youtube.com/watch?v=SqcY0GlETPk)

HTML: permite que criemos uma estrutura baseada em árvore de objetos renderizáveis, é o Document Object Model (DOM).

- Permite a utilização de Javascript para manipular o HTML. Por exemplo, utilizando um querySelector para esconder um botão da dela, dependendo da ocorrência, ou não de um evento específico

- Aplicações podem crescer demais e dificultar o uso de DOM

  -> Nesse caso, a possibilidade de utilizar componentes React auxiliam em depender menos dos querySelectors

- Componentes são padronizados, reutilizáveis, modulares, com alta manutenibilidade. Por exemplo, componentes comuns são a Barra de Navegação (navbar, geralmente fica no topo), Painel Lateral (menú), grid de cards, tabelas, botões, forms, etc.

- Uma aplicação React é organizada como uma árvore, na qual sua raiz é o componente "App". Todo o resto deriva dele.

## React Library (not a framework)

Ferramentas como:

- User Interface
- Routing
- HTTP messages
- Managing app state
- Internationalization
- Form validation
- Animations

Coisas importantes para saber sobre React:

- Construir components
- Renderizar markup com JSX
- Gerenciamento de estado
- Passar parâmetros de entrada via propriedades
- Depurar (debug) aplicações React

---

### Dependências:

- node acima da versão 16
- recomendável VS Code com Prettier (settings: format on save... ctrl+shift+p: Format Document > Prettier)
- VS Code extension ES7+ React/Redux/React-Native snipets

---

### Formas de criar uma aplicação React

1. Create React APP (CRA): ferramenta oficial
2. Vite (`npm create vite@4.1.0` ou `npm create vite@latest`): vite v4.1.0 é a versão utilizada no tutorial

   2.1. `npm i` (para instalar tudo o que o vite trouxe)
   2.2. `npm run dev`

---

### Como criar componentes

1. Classe javascript (forma mais antiga)
2. Component (forma mais nova)
   2.1. Arquivos .tsx (deve ser compilado para javascript+html: ex.: usando Babel)

-> React cria o Virtual DOM (esse cara fica em memória): react-dom atualizar apenas os componentes que mudam ao longo do processo de desenvolvimento

---

### Bibliotecas CSS úteis para trabalhar com react:

- Bootstrap
- Tailwind

---

# VS Code shortcuts

- `ctrl + p`: permite buscar por arquivos/nome de arquivos

- `ctrl + d`: permite selecionar múltiplas palavras iguais dentro da IDE, uma após a outra

- `ctrl + d + double-click`: permite selecionar múltiplas palavras iguais dentro da IDE, todas de uma vez

- `ctrl + shift + p: Wrap With Abbreviation`: para englobar elementos por um elemento "pai"

- `rafce + tab`: permite criar toda a estrutura básica do componente

---

### Detalhes sintáticos do React

- React não permite que uma função retorne mais de um elemento HTML. Por isso, caso sejam necessários mais de 1 componente, pode-se fazer de várias formas:

  -> deve-se circunda-los com uma div, ou;

  -> um fragment `<Fragment> ... <Fragment/>` (necessário dar um `import { Fragment }  from "react";`), ou;

  -> um fragment sem import `<> ... </>` (Exemplo do ListGroup.tsx)

- TSX não possui laços... Por isso, dependemos da função .map()

- TSX só permite componentes "no meio dos markups"... Caso seja necessário adicionar código Javascript dentro do markup, então deve-se circundar tudo por chaves.. não colocar ponto-e-vírgula (;)

- Quando trabalhando com certos tipos de elementos/componentes, o react vai exigir que cada item tenha sua própria KEY (por exemplo, listas)... geralmente, itens que foram puxados de uma API, por exemplo, têm uma propriedade "id" (item.id) que é utilizado como chave única dentro desse tipo de relação chave-valor

- Em Javascript, uma expressão lógico-relacional retorna o um dos valores literais presentes na expressão, caso o outro valor lógico seja true. Ou seja, true é idempotente (ele apenas confirma o valor literal presente). Caso contrário, se houver um operando false, então o resultado de toda a expressão será false. Por exemplo:

-> `true && 'teste'` resulta em `'teste'`

-> `false && 'teste'` resulta em `false`

- map() function possui o parâmetro item, que pega o item da lista. Também é possível pegar o parâmetro index, que pega a posição do item na lista

- eventos de um elemento (por exemplo onClick) permitem a definição de uma função e essa função pode receber o próprio objeto "event" como parâmetro. Esse "event" tem uma série de propriedades que podemos utilizar (no caso do onClick, por exemplo, podemos capturar as coordenadas X e Y do momento do clique)

- No typescript, é importante tipar o parâmetro formal, para evitar erro de compilação/execução e facilitar o auto-complete

- Cuidado com a definição de STATES (estados)... Tentei criar uma variável local para controlar o índice do `<li>` selecionado, todavia, não prestou. É preciso definir um hook `useState`

- `useState` sintax:

-> `const [<variável_de_estado>, <função_de_atualização>] = useState(<valor_inicial>);`

-> `<variável_de_estado>` mantém o estado em si;

-> `<função_de_atualização>` modifica o estado: sempre que modificado, o react re-renderiza o componente com base no novo estado automaticamente;

-> Cada componente da árvore de elementos terá seu próprio estado.

- Hook: é uma função que permite utilizarmos funcionalidades prontas do react... existem diversos hooks, um dos mais comuns é o `useState`

- Componentes são funções e, por isso, podem receber parâmetros (geralmente, o conteúdo de tais componentes vêm por parâmetro),

-> Muito útil é, geralmente, DESESTRUTURAR (destructure) os parâmetros formais para deixar a sua invocação na função mais "clean"

- Quando queremos que o conteúdo de um elemento HTML FILHO (producer) seja passado como parâmetro para o pai (consumer), é preciso definir o parâmetro formal children, no componente, e tipar ele como ReactNode (importando, é claro, esse cara lá no topo do .tsx)

---

### Debug com React Developer Tools (extensão browser)

- Aba "Components" mostra a árvore de componentes, suas respectivas propriedades, o código-fonte que está invocando sua renderização (existe um ctrl + F para encontrar componentes em caso de projetos extensos)

-> ao selecionar um componente, podemos clicar no ícone de olho e inspecionar o DOM desse component; ao clicar no ícone de parênteses angulares, ele te leva ao código-fonte do component
