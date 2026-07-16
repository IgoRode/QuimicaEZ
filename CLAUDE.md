# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Idioma:** responda e escreva em **português (pt-BR)**.

## O que é

QuimicaEZ é um **site educacional estático de Química Orgânica** (trabalho de conclusão de curso — TCC do IFMS). HTML/CSS/JS puro, **sem build, sem framework, sem dependências instaláveis**. É publicado via GitHub Pages: https://igorode.github.io/QuimicaEZ/

## Como rodar

Não há toolchain. Basta abrir os arquivos no navegador ou servir a pasta:

```bash
python -m http.server 8080   # depois acesse http://localhost:8080
```

Não existe build, lint, testes nem `package.json`. O `.gitignore` só ignora `.DS_Store`.

## Arquitetura

O site é um conjunto de páginas HTML independentes, sem SPA nem roteamento. A navegação acontece por `<a href="...html">` entre páginas. Cada página repete inline o **mesmo `<header class="nav">` e `<footer class="footer">`** (sem componentização/build), então **alterações no header/footer precisam ser replicadas em cada arquivo** — só muda a classe `nav__link--active`/`aria-current` do link da página atual. Sem Bootstrap/jQuery: tudo é CSS próprio + JS vanilla.

**Três seções, três fluxos paralelos.** Cada tema (Introdução, Funções Orgânicas, Biocombustíveis) tem sua própria trinca de páginas:

| Tema | Conteúdo (texto) | Vídeo-aula | Quiz |
|---|---|---|---|
| Introdução | `conteudo_Introducao.html` | `video_intro.html` | `quiz_introd.html` |
| Funções Orgânicas | `conteudo_funcoes.html` | `video_funcao1/2/3.html` | `quiz_funcoes.html` |
| Biocombustíveis | `conteudo_biocombustivel.html` | `video_bio.html` | `quiz_biocom.html` |

Páginas âncora: `index.html` (landing com hero molecular animado), `menu.html` (índice de conteúdos), `menu_video_aula.html` (índice de vídeos). Vídeos são `<iframe>` do YouTube num wrapper 16:9 (`.video-frame`).

**JS compartilhado:** `js/site.js` (menu mobile, sombra da navbar ao rolar, scroll-reveal via `IntersectionObserver` em `[data-reveal]`) roda em todas as páginas; `js/quiz.js` só nas de quiz.

**Padrão dos quizzes (importante).** Um único motor **data-driven** em `js/quiz.js` opera todos os quizzes — não há mais um JS por quiz. Cada quiz é um `<section data-quiz>` com 5 `<li class="question" data-question>`; a resposta certa é o `<button class="option" data-option data-correct>` (o **único** lugar que marca a resposta — o HTML é a fonte de verdade, sem valor espelhado em JS). O motor mostra uma questão por vez (classe `is-active`), no clique trava as opções e pinta correto/errado (`is-correct`/`is-wrong`), revela o `[data-feedback]`, avança pelo botão `[data-quiz-next]`, atualiza a barra `[data-quiz-fill]` + contador e, ao fim, mostra `[data-quiz-result]` com a pontuação. Para editar uma questão, mexa **só no HTML**.

## CSS / Design system

Um único arquivo `estilo/theme.css` ("Laboratório escuro / molecular") concentra tudo: tokens em `:root` (cores, fontes, raios), base/reset e componentes por classe com baixa especificidade (padrão BEM-ish: `.nav`, `.btn`, `.card`, `.article`, `.quiz`, `.option`, `.figure--light`…). Fundo escuro `#0A0E14`, acento neon `#35F0A0` (assinatura), erro `#FF6B7A`. Tipografia via Google Fonts (`<link>` em cada `<head>`): **Sora** (display), **Inter** (corpo), **JetBrains Mono** (rótulos `.eyebrow`, contadores e **fórmulas** `.formula`). Respeita `prefers-reduced-motion` e `:focus-visible`.

**Diagramas de química ficam em card claro** (`.figure--light`, fundo `#F6FAFC`): as imagens são linhas escuras que sumiriam no tema escuro, então o card claro as mantém legíveis — sempre use esse padrão ao inserir uma figura de estrutura.

> Arquivos CSS/JS antigos (`estilo/incio.css`, `js/app*.js` etc.) ficaram **órfãos** após o redesign (nenhuma página os referencia). Podem ser removidos do git com segurança quando quiser.

## Convenções observadas

- Caminhos relativos com `./` (ex.: `./img/...`, `./estilo/...`); alguns arquivos omitem o `./` — mantenha o padrão do arquivo que estiver editando.
- Textos em português; há erros de ortografia/acentuação preexistentes no conteúdo — só corrija se for o objetivo da tarefa.
- Nomes de arquivo/pasta em português e com grafia irregular (`estilo/incio.css`, `questios-icon.png`) — não renomeie sem atualizar todas as referências.
