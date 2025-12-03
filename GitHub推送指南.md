# GitHub 推送指南

## 步骤 1：在 GitHub 上创建新仓库

1. 登录 GitHub
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `translation-react`（或你喜欢的名字）
   - **Description**: "网页语种切换技术方案 Demo - React + TypeScript + Ant Design"
   - **Visibility**: 选择 Public 或 Private
   - **不要**勾选 "Initialize this repository with a README"（因为本地已有项目）
4. 点击 "Create repository"

## 步骤 2：准备本地项目

### 2.1 添加所有更改

```bash
# 添加所有新文件和修改
git add .

# 或者分步添加
git add src/
git add dotnet-backend/
git add *.md
git add *.json
git add *.ts
git add *.tsx
```

### 2.2 提交更改

```bash
git commit -m "feat: 完成语种切换功能，集成 React Router 和 Ant Design

- 添加 TypeScript 支持
- 集成 React Router 多页面路由
- 集成 Ant Design UI 组件库
- 创建 3 个演示页面（Overview, DataReport, Campaign）
- 添加 .NET 后端 API 支持
- 更新文档"
```

## 步骤 3：连接到新的 GitHub 仓库

### 3.1 移除旧的远程仓库（如果存在）

```bash
# 查看当前远程仓库
git remote -v

# 如果已有 origin，先移除
git remote remove origin
```

### 3.2 添加新的远程仓库

```bash
# 替换 YOUR_USERNAME 和 YOUR_REPO_NAME 为你的实际信息
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 例如：
# git remote add origin https://github.com/zhuanz/translation-react.git
```

### 3.3 推送到 GitHub

```bash
# 首次推送
git push -u origin master

# 或者如果你的默认分支是 main
git push -u origin master:main
```

## 步骤 4：验证

1. 访问你的 GitHub 仓库页面
2. 确认所有文件都已上传
3. 检查 README.md 是否正确显示

## 常见问题

### 如果推送失败（认证问题）

**使用 Personal Access Token：**

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 生成新 token，勾选 `repo` 权限
3. 使用 token 作为密码：

```bash
git push -u origin master
# Username: 你的 GitHub 用户名
# Password: 你的 Personal Access Token（不是 GitHub 密码）
```

**或者使用 SSH：**

```bash
# 1. 生成 SSH key（如果还没有）
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. 复制公钥
cat ~/.ssh/id_ed25519.pub

# 3. 在 GitHub → Settings → SSH and GPG keys 中添加公钥

# 4. 使用 SSH URL 添加远程仓库
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git

# 5. 推送
git push -u origin master
```

### 如果分支名称不匹配

如果 GitHub 默认分支是 `main`，而本地是 `master`：

```bash
# 方法 1：推送时重命名
git push -u origin master:main

# 方法 2：重命名本地分支
git branch -M main
git push -u origin main
```

## 完整命令序列（快速参考）

```bash
# 1. 添加所有文件
git add .

# 2. 提交
git commit -m "feat: 完成语种切换功能"

# 3. 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 4. 推送
git push -u origin master
```

## 后续更新

以后只需要：

```bash
git add .
git commit -m "你的提交信息"
git push
```

