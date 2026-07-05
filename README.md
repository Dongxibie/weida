# Weida Blog

基于 GitHub App 管理的无服务端博客，一键部署，前端直接管理内容。

## 目录

- [快速开始](#1-快速开始)
- [环境变量配置](#2-环境变量配置)
- [部署](#3-部署)
- [配置 GitHub App](#4-配置-github-app)
- [使用指南](#5-使用指南)
- [常见问题](#6-常见问题)

---

## 1. 快速开始

### 本地开发

```bash
pnpm i
pnpm dev
```

### 直接部署

也可以跳过本地开发，直接部署到 Vercel 等平台，再配置环境变量即可。

---

## 2. 环境变量配置

项目需要以下环境变量（或直接修改 `src/consts.ts`）：

| 变量名 | 说明 | 当前值 |
|-------|------|--------|
| `NEXT_PUBLIC_GITHUB_OWNER` | GitHub 用户名 | `Dongxibie` |
| `NEXT_PUBLIC_GITHUB_REPO` | 仓库名 | `weida` |
| `NEXT_PUBLIC_GITHUB_BRANCH` | 分支 | `main` |
| `NEXT_PUBLIC_GITHUB_APP_ID` | GitHub App ID | `4220832` |

> **提示：** 一般只需设置 `OWNER` 和 `APP_ID`，其他使用默认值即可。

### 配置方式

**方式一：** 在部署平台（如 Vercel）的 Environment Variables 中设置（推荐）

**方式二：** 直接修改 `src/consts.ts` 文件（简单粗暴）

> ⚠️ 修改配置后需要**重新部署**才能生效（push 一次代码或手动触发部署）。

---

## 3. 部署

以 Vercel 为例：

1. 进入 [Vercel](https://vercel.com)，点击 **Add New → Project**
2. Import 本仓库
3. 无需额外配置，直接点 Deploy
4. 等待 ~60 秒部署完成，获得一个 `*.vercel.app` 域名

> 也可部署到 EdgeOne 等其他平台。

---

## 4. 配置 GitHub App

### 4.1 创建 GitHub App

1. 进入 GitHub **Settings → Developer settings → GitHub Apps**
2. 点击 **New GitHub App**
3. **GitHub App name** 和 **Homepage URL** 随便填，**Webhook** 关闭
4. 设置仓库 **Write** 权限（Repository permissions → Contents: Read and Write）
5. 点击创建

### 4.2 创建私钥

创建成功后：

1. 生成 **Private Key**（.pem 文件），会自动下载到本地
2. 复制页面上显示的 **App ID**
3. 进入 **Install App** 页面，安装到本仓库
4. 安装时**只授权当前项目**

### 4.3 配置关键信息

上一步获取到的三个关键信息：

- **APP_ID** → 填入环境变量或 `src/consts.ts`
- **Private Key (.pem)** → 在博客网页端上传配置（首页 → 配置 → 上传私钥）

> ⚠️ **Private Key 务必保管好！不要上传到 GitHub！** `.gitignore` 已配置忽略 `.pem` 文件。

### 4.4 重新部署

配置完成后，手动重新部署一次让环境变量生效：
- push 一次代码自动触发部署
- 或在 Vercel 手动触发部署

---

## 5. 使用指南

### 5.1 写博客

1. 进入博客页面，点击编辑按钮
2. 上传 **Private Key** 完成认证
3. 点击 **+ 号** 上传图片（推荐宽度不超过 1200px，先压缩）
4. 拖入图片到编辑区，编写内容
5. 预览效果后发布

> 发布后需要等待后台部署完成，刷新页面才能看到更新。

### 5.2 配置网站首页

首页配置在 `src/app/(home)` 目录：
- 各卡片内容在对应文件中修改（如 `hi-card.tsx`）
- 全局导航卡片在 `src/components` 目录

### 5.3 移除 Liquid Grass 动效

编辑 `src/layout/index.tsx`，删除以下两行：

```tsx
const LiquidGrass = dynamic(() => import('@/components/liquid-grass'), { ssr: false })
// ...
<LiquidGrass />
```

---

## 6. 常见问题

### 删除示例内容

首次使用需要删除仓库中自带的示例博客内容（支持逐个或批量删除）。

### 如何合并代码？

如果你需要同步上游更新但不会处理代码合并，可以加群求助。

---

## 互助群

- **QQ 群：** [点击加入](https://qm.qq.com/q/spdpenr4k2)
- **微信群：** 见下方二维码
- **TG 群：** [t.me/public_blog_2025](https://t.me/public_blog_2025)

---

> 游戏资产不一定属于你，你只有使用权。但这个博客 **网站、内容、仓库一定是属于你的**。
