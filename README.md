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
cd backend
npm install
-configure the env file
npm run dev
```

### Frontend

```bash
cd frontend
npm i
-configure the env file
npm run dev
```

---

## 📦 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do **backend** com as seguintes variáveis:

```bash
MONGODB_URI=**********
PORT=**********
JWT_SECRET=**********
NODE_ENV=**********
CLOUDINARY_CLOUD_NAME=**********
CLOUDINARY_API_KEY=**********
CLOUDINARY_API_SECRET=**********
---

## 📜 Licença

Este projeto está sob a licença MIT.  
