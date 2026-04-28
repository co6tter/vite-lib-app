# vite-lib-app

Vue 3コンポーネントライブラリのテンプレートプロジェクト。Tailwind CSS 4のカラーパレットを表示するサンプルコンポーネントを含みます。

## Overview

このプロジェクトは、Viteを使用したVue 3コンポーネントライブラリの構築テンプレートです。開発環境からビルド、パッケージング、リリースまでのワークフローが整備されており、GitHub Packages への自動リリースにも対応しています。Tailwind CSS 4のカラーパレットを表示するサンプルコンポーネント（AmberColors / RedColors / OrangeColors / YellowColors）が含まれており、ライブラリ開発のスターターとして利用できます。

## Tech Stack

- **Vue 3** — コンポーネントフレームワーク
- **TypeScript 6** — 型安全性
- **Vite 8** — ビルドツール
- **Tailwind CSS 4** — ユーティリティファースト CSS
- **Biome 2** — リンター・フォーマッター
- **lefthook** — Git フック管理
- **semantic-release** — 自動バージョニング・リリース
- **yalc** — ローカルパッケージテスト

## Prerequisites

- **Node.js 22.x**（[mise](https://mise.jdx.dev/) 経由での管理を推奨）
- **pnpm 10.x**（`npm install -g pnpm` でインストール）
- **yalc**（ローカルパッケージテストを使用する場合）— `pnpm add -g yalc`

## Setup

1. リポジトリをクローンする

   ```bash
   git clone https://github.com/co6tter/vite-lib-app.git
   cd vite-lib-app
   ```

2. 依存関係をインストールする

   ```bash
   pnpm install
   ```

3. 開発サーバーを起動する

   ```bash
   pnpm dev
   ```

## Usage

### 開発・ビルド

```bash
# 開発サーバーの起動（デモアプリ）
pnpm dev

# ライブラリのビルド（dist/ に出力）
pnpm build

# ビルド（watch モード）
pnpm build:watch

# プレビュー
pnpm preview
```

### ライブラリとしての利用

```bash
pnpm add @co6tter/vite-lib-app
```

```vue
<script setup lang="ts">
import { AmberColors, RedColors, OrangeColors, YellowColors } from '@co6tter/vite-lib-app'
import '@co6tter/vite-lib-app/style.css'
</script>

<template>
  <AmberColors />
  <RedColors />
  <OrangeColors />
  <YellowColors />
</template>
```

### ローカル開発（yalc）

利用側のプロジェクトに公開前のビルドをリンクして動作確認できます。

```bash
# このプロジェクト（watch ビルドで変更のたびに yalc push が自動実行される）
pnpm build:watch

# 利用側のプロジェクトで
yalc add @co6tter/vite-lib-app
```

## Directory Structure

```
vite-lib-app/
├── lib/               # ライブラリエントリーポイント
│   └── main.ts        # コンポーネントのエクスポート定義
├── src/               # デモ・開発用アプリ
│   ├── components/    # サンプル Vue コンポーネント
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── public/            # 静的アセット
├── .github/
│   └── workflows/     # GitHub Actions（自動リリース）
├── vite.config.ts     # Vite 設定
├── tsconfig.json      # TypeScript 設定
├── biome.json         # Biome（リント・フォーマット）設定
├── lefthook.yml       # Git フック設定
└── release.config.js  # semantic-release 設定
```

## License

MIT
