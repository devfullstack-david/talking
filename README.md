# 🗨️ Talking

**Talking** é um aplicativo de chat em tempo real desenvolvido com **TypeScript**, **Socket.IO**, **React (Vite)** e **Express**, com suporte a envio de mensagens de texto e imagens.  
As imagens são armazenadas no **Cloudinary** e os dados persistidos no **MongoDB**.  

---

## 🚀 Tecnologias

- **Frontend**: React + Vite + DaisyUI  
- **Backend**: Node.js + Express + Socket.IO  
- **Banco de Dados**: MongoDB + Mongoose  
- **Upload de Imagens**: Cloudinary  
- **Linguagem**: TypeScript  
- **Padrões**: ESLint configurado  

---

## ⚙️ Funcionalidades

- 💬 Chat em tempo real  
- 👤 Autenticação de usuários  
- 📸 Envio de imagens (armazenadas no Cloudinary)  
- 📡 Comunicação via WebSocket (Socket.IO)  
- 🗄️ Armazenamento persistente de mensagens no MongoDB  

---

## 🛠️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/talking.git
cd talking
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## 📦 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do **backend** com as seguintes variáveis:

```bash
PORT=4000
MONGO_URI=sua_string_de_conexao_mongodb
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=sua_api_secret
```

---

## 📸 Preview

_(adicione um print da aplicação aqui)_  

---

## 📜 Licença

Este projeto está sob a licença MIT.  
