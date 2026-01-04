# Wimi - Frontend Engineer Technical Test

Welcome to the technical test for the **Frontend Engineer React** position at Wimi! 🚀

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository

```bash
git clone https://github.com/TimotheGauquelin/wimi_front
cd wimi-frontend
```

2. Install dependencies

```bash
npm install
```

3. Start the mock API server

```bash
docker-compose -f docker/docker-compose.yml up -d --build
```

### Test Credentials

Use these credentials to log in:

| Email                  | Password    | Name       |
| ---------------------- | ----------- | ---------- |
| john.doe@example.com   | password123 | John Doe   |
| jane.smith@example.com | password123 | Jane Smith |
| bob.wilson@example.com | password123 | Bob Wilson |

## 📝 Expected Features

### 1. Login Page ✅

**Required:**

- Form with email and password ✅
- Basic validation ✅
- Error handling ✅
- Redirect after successful login ✅

**Bonus points:**

- Request loading state ✅
- Session persistence ✅
- Clear error messages and polished UX ✅

### 2. Main View - Todo Lists & Todos ✅

**Required:**

- Display todo lists for the logged-in user ✅
- Display todos for each list ✅
- Ability to mark a task as completed ✅
- **Main feature: Create a new task** ✅

**Bonus points:**

- Filters (all/completed/in progress) ✅
- Task search ✅
- Task sorting (by date, priority) ✅
- Edit/delete tasks
- Smooth animations and transitions ✅
- List virtualization for performance optimization

### 3. Sidebar - User Information ✅

**Required:**

- User avatar ✅

**Bonus points:**

- Profile menu (name, role) ✅
- Statistics (number of tasks, completion rate)
- Logout button ✅
- Dark/light theme

If you have questions during the test, feel free to:

- Document your assumptions in the `IMPLEMENTATION.md`
- Leave comments in your code
- Contact us at pierre-nicolas.morzy@wimi-teamwork.com

## 🎉 Good luck!

We look forward to seeing your creativity and technical expertise in action!

**The Wimi Tech Team** 🚀
