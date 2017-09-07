# Roadmap

- Overview
  + O que é um *module bundler*?
  + Pra quê serve um *módule bundler*?
  + Projeto
    * index.html: inclui lodash e src/index.js
    * src/index.js: "component" usando lodash global

# master

Preparando webpack

- Servir o projeto com http-server
- Instalar webpack
- Compilar src/index.js com webpack
- Watch mode
- Production mode
- Ajustar o index.html para usar o bundle.js
- webpack.config.js
  + Entry
  + Output
- Remover lodash global
- Referenciar lodash no src/index.js
- Instalar webpack-dev-server e html-webpack-plugin
- Remover referência de script do index.html
- webpack.config.js
  + Plugins
- NPM scripts

# 01-webpack

Incluindo estilos

- Adicionar src/styles.css
- Referenciar no src/index.js
- Instalar css-loader e style-loader
- webpack.config.js
  + Loaders (regra pra css)
  + Plugins (extract-text-webpack-plugin)

# 02-styles

Preparando assets

- Adicionar imagem e fonts
- Referenciar no styles.css (@font-face)
- Instalar url-loader e file-loader
- webpack-config.js
  + Loaders (regra para fonts)
  + Limit de inline
  + Nome do arquivo
- Referenciar no index.html (img)
- Instalar html-loader
- webpack-config.js
  + Loaders (regra para imagens)

# 03-assets

Preparando doge

- Adicionar um novo módulo (src/doge.js)
- Modificar component no src/index.js para usar o src/doge.js
- webpack.config.js
  + named chunks no entry
  + [name] no output.filename
  + CommonsChunkPlugin

# 04-doge

Projeto finalizado
