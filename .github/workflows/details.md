
---

### 1️⃣ Trigger

```yaml
on: 
  push:
    branches:
      - main
      - master
```

* Runs deployment when you push to **main** or **master**. 

---

### 2️⃣ Permissions

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

* Required for GitHub Pages deployment. ✅

---

### 3️⃣ Jobs & Runner

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
```

* Ubuntu VM. ✅

---

### 4️⃣ Checkout

```yaml
- name: Checkout
  uses: actions/checkout@v4
```

* Pulls the repo. ✅

---

### 5️⃣ Setup Node

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
```

* Matches Vite + SWC setup. ✅

---

### 6️⃣ Install Dependencies

```yaml
- name: Install Dependencies
  run: npm install
```

* Installs dependencies. ✅

---

### 7️⃣ Run Tests

```yaml
- name: Run Tests
  run: npm test
```

* Optional — Ensures nothing breaks before deploy. ✅

---

### 8️⃣ Cache Node Modules

```yaml
- name: Cache Node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

* Caches Node mdoeuls and speeds up subsequent installs. ✅

---

### 9️⃣ Build

```yaml
- name: Build
  run: npm run build
```

* Vite builds your project into `dist/`. ✅

---

### 10️⃣ Deploy

```yaml
- name: Deploy
  uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```

* Pushes `dist/` to `gh-pages` branch. ✅

---

### ✅ Summary

* Workflow is **ready to deploy**
* Compatible with **Vite + React + HashRouter + GitHub Pages**
* Optional steps (`npm test`, caching) are good practice

---
