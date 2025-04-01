Here's your complete **GitHub README** in Markdown format, with enhanced formatting and emojis for a polished look:  

---

# 🚀 API Gateway Template with NestJS  

This project is a **robust, scalable, and configurable API Gateway** built with [NestJS](https://nestjs.com/) and [TypeScript](https://www.typescriptlang.org/). It's designed as a **template** for modern microservices architectures.  

> 🧩 The gateway dynamically routes requests to microservices using a centralized configuration, applies standardized responses, structured logging, and request tracing via unique request IDs.  

---

## 📌 Features  

- ✅ **Dynamic route forwarding** via configuration (`routes.config.ts`)  
- 🛡️ **Standardized API responses** (`GoodResponse`, `BadResponse`)  
- 🔒 **JWT-ready architecture** for authentication  
- 📄 **Logging with request tracing** using `requestId`  
- 📦 **Dotenv support** for easy environment management  
- 🔍 **Debugging-ready** with VS Code  
- 🧰 **Middleware-based extensibility**  
- 🧪 Can work as a **standalone service** or within a **microservices ecosystem**  

---

## 🗂️ Project Structure  

```
api-gateway/
├── src/
│   ├── app.controller.ts            # Entry controller handling dynamic routes
│   ├── app.module.ts                # Root module
│   ├── app.service.ts               # Service responsible for forwarding requests
│   ├── main.ts                      # Bootstrap file, loads the application
│   ├── config/
│   │   └── routes.config.ts         # Central route configuration
│   ├── common/
│   │   ├── constants/
│   │   │   ├── bad-response.constant.ts    # Predefined bad responses
│   │   │   └── good-response.constant.ts   # Predefined good responses
│   │   ├── factories/
│   │   │   └── response.factory.ts         # Core logic for creating responses
│   │   ├── interfaces/
│   │   │   └── iresponse.factory.ts        # Response type interfaces
│   │   ├── helpers/
│   │   │   └── logger.helper.ts            # Handles writing logs to files
│   │   └── middleware/
│   │       └── request-logger.middleware.ts  # Logs every incoming request
├── logs/                           # Directory where daily logs are saved
├── .env                            # Environment variables (e.g., PORT=3000)
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
```

---

## ⚙️ Getting Started  

### 1️⃣ Clone this project  

```sh
git clone https://github.com/your-org/api-gateway-template.git
cd api-gateway-template
```

### 2️⃣ Install dependencies  

```sh
yarn install
```

### 3️⃣ Create an `.env` file  

```sh
PORT=3000
```

### 4️⃣ Run in development mode  

```sh
yarn start:dev
```

Or with debugging:  

```sh
yarn start:debug
```

Then attach a debugger in VS Code.

---

## 🔀 Routing Configuration  

Routes can be configured in `src/config/routes.config.ts`. Example:  

```ts
export const routes = [
  {
    path: '/users',
    methods: ['GET'],
    target: 'http://user-service:3001/users',
    auth: true,
    rateLimit: false,
  },
];
```

---

## 📜 Example Log Output  

Every request is logged in the `/logs` folder with the following structure:  

```json
{
  "requestId": "ad5e423f-30bb-49b6-911d-7a542f63b1a6",
  "ms": "AG",
  "timestamp": "2025-04-01T20:12:22.123Z",
  "method": "POST",
  "path": "/users",
  "statusCode": 200,
  "responseTimeMs": 42,
  "ip": "::1",
  "headers": {
    "authorization": "Bearer xyz",
    "userAgent": "PostmanRuntime/7.32.3"
  },
  "body": {
    "email": "test@example.com"
  }
}
```

---

## 🧪 Testing API Gateway  

Once a microservice (e.g., `user-service`) is running and its route is defined in `routes.config.ts`, test it using:  

```sh
curl http://localhost:3000/users
```

The gateway will forward the request and return the **standardized response**.

---

## 🌿 Tags  

`nestjs` · `typescript` · `api-gateway` · `microservices` · `backend` · `template` · `logging` · `middleware` · `debugging` · `http-proxy` · `nodejs`  

---

## 🧑‍💻 Author  

Developed by **Edavi11**  
📧 Contact: [erickdavila11@gmail.com](mailto:erickdavila11@gmail.com)  

---

## 💡 Contributing  

Want to contribute? 🎉 Feel free to submit a pull request or open an issue! 🚀  

---

## 📜 License  

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) for details.

---

Let me know if you need any modifications! 🚀🔥