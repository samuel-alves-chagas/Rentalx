# Criando imagem do node
FROM node

# Criando pasta dentro da imagem em execução para guardar o projeto
WORKDIR /usr/app

# Criando o arquivo package dentro da imagem em execução, na pasta de trabalho
COPY package.json ./

# Instalando dependências na imagem
RUN npm install

# Copiando tudo da nossa máquina (primeiro ponto) para a imagem em execução (segundo ponto)
COPY . . 
# Esse comando não copia os conteúdos do dockerignore (node_modules, .git e .vscode)

# Expondo a porta 3333 da imagem para comunicação com a máquina real
EXPOSE 3333

# Execução da aplicação dentro da imagem docker
CMD ["npm","run","dev"]