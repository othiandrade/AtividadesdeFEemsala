PROMPT OFICIAL:

# PAPEL 

Você é um desenvolvedor front-end sênior e designer de interfaces, especialista em Tailwind CSS e em landing pages com identidade visual forte, animações sutis e código limpo e acessível. 

# CONTEXTO

Estou criando uma landing page NÃO OFICIAL (projeto de fã/estudo) sobre a banda Tame Impala, projeto psicodélico de Kevin Parker. A estética é "sunset terroso": anos 70, papel envelhecido, tons de argila e terracota, formas orgânicas e textura granulada, com toque psicodélico nos gradientes. O objetivo da página é apresentar a banda, mostrar a discografia e convidar o visitante a ouvir as músicas. 

# TAREFA

Crie a landing page completa com as seções abaixo, nesta ordem: 1. Navbar: logo em texto + links âncora para as seções + botão "Ouvir agora" + menu hambúrguer no mobile. 2. Hero: título grande, subtítulo curto, botão CTA, imagem de destaque e blobs animados com gradiente no fundo. 3. Sobre: texto curto sobre a banda e Kevin Parker + imagem. 4. Discografia: grid de cards (capa, nome do álbum, ano, botão "Ouvir"). Álbuns: Innerspeaker (2010), Lonerism (2012), Currents (2015), The Slow Rush (2020), Deadbeat (2025). 5. Turnê/Shows: lista de datas fictícias, cada uma com cidade, local e botão de ingresso. 6. Galeria: grid de imagens com efeito de hover. 7. Footer: links de redes sociais, aviso "projeto de fã, não oficial" e créditos. Componentes-base reutilizáveis (padronize as mesmas classes em todas as ocorrências): Botão (primário/secundário), Tag, Título de seção, Card. 

# IDENTIDADE VISUAL

Formas: blobs orgânicos, círculos e ondas; evitar cantos duros. - Bordas: rounded-card nos cards, rounded-full (pílula) nos botões. - Espaçamento: ritmo de 8px usando a escala padrão do Tailwind (2, 4, 6, 8, 12, 16, 24 → 8px a 96px), com bastante respiro entre seções. - Efeitos: gradientes quentes (ex.: bg-linear-to-br from-terracotta via-crimson to-earth), granulação (grain) leve via SVG, glow suave. - Animações: lentas e fluidas (hover, entrada no scroll); usar motion-reduce: para respeitar prefers-reduced-motion. - Tipografia: usar Fraunces em toda a página. Títulos com peso alto (font-bold a font-black) e optical size grande; corpo em font-normal. Explorar o eixo variável "SOFT" nos títulos (ex.: [font-variation-settings:"SOFT"_100]) para um ar retrô. - Ritmo: alternar seções claras (bg-light text-earth) e escuras (bg-earth text-light). - Botões primários: bg-crimson text-light. - Usar terracotta e muted apenas em textos grandes, ícones e detalhes (por contraste/acessibilidade).

 # TEMA 
 
 (use SEMPRE estes tokens; nunca cores hex soltas ou valores arbitrários de cor) Configurar no <head> do index.html: <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> <style type="text/tailwindcss"> @theme { /* Cores */ --color-light: #F3EFE9; /* fundo principal */ --color-card: #C8B6A1; /* superfície dos cards */ --color-muted: #8F8477; /* textos secundários, bordas, detalhes */ --color-earth: #3D170D; /* texto principal e seções escuras */ --color-terracotta: #D74D2E; /* destaque, hover, títulos grandes */ --color-crimson: #922211; /* botões e CTAs */ /* Tipografia */ --font-display: 'Fraunces', serif; --font-body: 'Fraunces', serif; /* Bordas */ --radius-card: 24px; /* Animações customizadas (defina aqui os @keyframes, ex.: blob flutuando) */ } </style>

# FORMATO DE SAÍDA 
 
Tailwind CSS v4 via CDN (@tailwindcss/browser), sem etapa de build. NO SEU CSS E MOVA O BLOCO @theme PARA LÁ] - Arquivos: index.html (com o tema no <head>) e script.js (JavaScript puro para menu mobile e animações de scroll). - HTML semântico (header, nav, main, section, footer). - Mobile-first e responsivo usando os breakpoints md: e lg:. - Estilos customizados que o Tailwind não cobre (grain, keyframes) ficam dentro do ``<style type="text/tailwindcss">, usando @theme ou @layer. - Use COMENTÁRIOS no código marcando as ações que eu preciso fazer, neste padrão: Exemplos: onde colar o <link> do Google Fonts, onde trocar cada imagem (com o tamanho/proporção recomendado), onde editar textos e links. 
``
# RESTRIÇÕES

NÃO inserir imagens reais: use placeholders com src vazio ou "#" e alt descritivo; as imagens eu coloco depois. - NÃO reproduzir letras de músicas nem logos oficiais da banda. - NÃO usar outros frameworks ou bibliotecas além do Tailwind (sem Bootstrap, jQuery ou React). - NÃO usar cores fora dos tokens do @theme (nada de text-[#xxxxxx] ou cores padrão do Tailwind). - NÃO criar arquivo CSS separado com estilos soltos; tudo via classes do Tailwind ou dentro do bloco do tema. - Deixar o <link> da Fraunces (Google Fonts) como comentário de ação no <head>, antes do script do Tailwind. - Garantir acessibilidade: contraste adequado, alt nas imagens, foco visível (focus-visible:) e aria-labels nos botões. - Textos em português do Brasil. referências em anexo

# AJUSTES

Ajuste “Tame Impala” abaixo do nav para não ficar sendo sobreposto pela seção seguinte.

Faça com que os links dos sites no código abram em outra página.

Faça com que todos os botões de “ingressos” levem a: https://www.tameimpala.com/