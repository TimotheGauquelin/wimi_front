# Implementation Documentation

> **Note:** This file is where you should document your implementation of the technical test.

## 🚀 Installation & Setup

### Prerequisites
Download Docker daemon to be able launch an instance of the project

### How to Run
On root folder, to launch the project, do the following script
```bash
 docker-compose -f docker/docker-compose.yml up -d --build 
```

## 🏗️ Technical Choices

### Architecture

This project comprises 3 main folders : docker / public / src 
- a docker folder to store all docker file
- a public folder to store all assets (images/fonts) 
- a src folder to store all files that will run a service from api, an render (components/pages) on browser
And many configuration files that allow the app to run corretly

### State Management

<!-- Document which state management solution you chose and why -->

### Styling

I use tailwind because that allows me to have few css files and styling directly on tsx files

### Testing

I use Vitest for many reasons :
- it's an native integration with Vite
- in watch mode, vitest launch just updated tests
- it's typescript compatible

## ✨ Implemented Features

### Core Features

- [ ] Login page with authentication
- [ ] Todo lists display
- [ ] Todos display within lists
- [ ] Mark todos as completed
- [ ] Create new todos
- [ ] User sidebar with information

### Bonus Features

<!-- List any bonus features you implemented -->

- [ ]
- [ ]

## 📚 Libraries & Dependencies

<!-- List main libraries you used and justify your choices -->

| Library                 | Purpose      | Why?     |
| ----------              | ------------ | -------- |
| React                   | UI Framework | Required |
| TypeScript              | Type safety  | Required |
| ReactRouterDom          | Create Routes| Required |
| Vite                    | Build        | Required |
| Vitest                  | Testing      | Required |
| Tailwind                | Styling      |          |

## ⏱️ Time Spent

**Total time:** ~X hours

**Breakdown:**

- Setup & configuration: 3 hours
- Core features: X hours
- Styling: X hours
- Testing: X hours
- Refactoring & polish: X hours

## 🚧 Future Improvements

<!-- What would you add or improve with more time? -->

1.
2.
3.

## 🤔 Challenges & Learnings

Dockerize a mock api. I usually create a front-end and an API separately and create a Docker container for this two apps

## 📝 Notes

<!-- Any additional notes or assumptions you made -->
