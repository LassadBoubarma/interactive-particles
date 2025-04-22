### English
# Interactive Particles with Three.js

A tutorial demonstrating how to draw a large number of particles with Three.js and an efficient way to make them react to mouse and touch input using an off-screen texture.

![cover](https://user-images.githubusercontent.com/880280/51060802-de702c00-15e8-11e9-9bff-58b02dc284a3.jpg)

[Article on Codrops](https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/)

[Demo](https://tympanus.net/Tutorials/InteractiveParticles/)


## Run
- Install `npm install`
- Run `npm start`
- Build `npm run build`

## Libraries
- [ControlKit](https://github.com/brunoimbrizi/controlkit.js) - GUI
- [gsap](https://www.npmjs.com/package/gsap) - animation platform
- [glslify](https://github.com/glslify/glslify) - module system for GLSL
- [stats.js](https://github.com/mrdoob/stats.js/) - performance monitor
- [Three.js](https://github.com/mrdoob/three.js/) - WebGL library

## How to Add a New Language
1.Add Translations in GUIView.js
Open src/scripts/gui/GUIView.js.
In the initControlKit method, add your new language translations to the translations object.
2.Update the Language Dropdown in index.html
Open index.html.
Add an option for your new language in the <select> dropdown inside the .language-switch div.
3.Ensure Language Switch Works
When the user selects the new language, it will automatically switch the labels and UI components to the new language based on the translations in GUIView.js.
4.Test the New Language
Run the project.
Select your new language from the dropdown
5.Update the README
Mention your new language option in the README under the "How to Add a New Language" section.

## License
This resource can be used freely if integrated or built upon in personal or commercial projects such as websites, web apps, and web templates intended for sale. It is not allowed to take the resource "as-is" and sell it, redistribute, re-publish it, or sell "pluginized" versions of it. Free plugins built using this resource should have a visible mention and link to the original work. Always consider the licenses of all included libraries, scripts, and images used.

## Misc
Follow Bruno Imbrizi: [Twitter](https://twitter.com/brunoimbrizi/), [Codepen](https://codepen.io/brunoimbrizi/), [GitHub](https://github.com/brunoimbrizi)

Follow Codrops: [Twitter](http://www.twitter.com/codrops), [Facebook](http://www.facebook.com/codrops), [Google+](https://plus.google.com/101095823814290637419), [GitHub](https://github.com/codrops), [Pinterest](http://www.pinterest.com/codrops/), [Instagram](https://www.instagram.com/codropsss/)

[© Codrops 2018](http://www.codrops.com)



### Português Brasileiro

# Partículas Interativas com Three.js

Um tutorial que demonstra como desenhar uma grande quantidade de partículas com Three.js e uma maneira eficiente de fazê-las reagir ao mouse e ao toque, usando uma textura fora da tela.

![cover](https://user-images.githubusercontent.com/880280/51060802-de702c00-15e8-11e9-9bff-58b02dc284a3.jpg)

[Artigo no Codrops](https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/)

[Demo](https://tympanus.net/Tutorials/InteractiveParticles/)


## Executando
- Instale as dependências com `npm install`
- Execute com `npm start`
- Para gerar a build, use `npm run build`

## Bibliotecas
- [ControlKit](https://github.com/brunoimbrizi/controlkit.js) - GUI
- [gsap](https://www.npmjs.com/package/gsap) - plataforma de animação
- [glslify](https://github.com/glslify/glslify) - sistema de módulos para GLSL
- [stats.js](https://github.com/mrdoob/stats.js/) - monitor de performance
- [Three.js](https://github.com/mrdoob/three.js/) - biblioteca WebGL

## Como Adicionar um Novo Idioma
1.Adicione as Traduções no GUIView.js
Abra o arquivo src/scripts/gui/GUIView.js.
No método initControlKit, adicione as traduções do seu novo idioma no objeto translations.
2.Atualize o Dropdown de Idiomas no index.html
Abra o arquivo index.html.
Adicione uma opção para o seu novo idioma no <select> dentro da div .language-switch.
3.Garanta que a Troca de Idioma Funcione
Quando o usuário selecionar o novo idioma, as labels e componentes da interface serão automaticamente atualizados para o novo idioma com base nas traduções em GUIView.js.
4.Teste o Novo Idioma
Execute o projeto.
Selecione o novo idioma no dropdown.
5.Atualize o README
Mencione a opção do novo idioma no README na seção "How to Add a New Language".

## Licença
Este recurso pode ser usado livremente, se integrado ou utilizado em projetos pessoais ou comerciais, como websites, web apps e templates para web destinados à venda. Não é permitido pegar o recurso "como está" e vendê-lo, redistribuí-lo, republicá-lo ou vendê-lo em versões "pluginizadas". Plugins gratuitos criados com este recurso devem ter uma menção visível e um link para o trabalho original. Sempre considere as licenças de todas as bibliotecas, scripts e imagens inclusos.

## Misc
Siga Bruno Imbrizi: [Twitter](https://twitter.com/brunoimbrizi/), [Codepen](https://codepen.io/brunoimbrizi/), [GitHub](https://github.com/brunoimbrizi) 

Siga Codrops: [Twitter](http://www.twitter.com/codrops), [Facebook](http://www.facebook.com/codrops), [Google+](https://plus.google.com/101095823814290637419), [GitHub](https://github.com/codrops), [Pinterest](http://www.pinterest.com/codrops/), [Instagram](https://www.instagram.com/codropsss/)

[© Codrops 2018](http://www.codrops.com)
