# vite-lib-app

Vue 3コンポーネントライブラリのテンプレートプロジェクト。Tailwind CSS 4のカラーパレットを表示するサンプルコンポーネントを含みます。

## Overview

このプロジェクトは、Viteを使用したVue 3コンポーネントライブラリの構築テンプレートです。開発環境からビルド、パッケージング、リリースまでのワークフローが整備されています。

主な機能：
- Viteによる高速なビルドとHMR
- TypeScriptによる型安全な開発
- Tailwind CSS 4のスタイリング
- yalcによるローカルパッケージテスト
- semantic-releaseによる自動バージョニングとリリース

## Tech Stack

- **Vue 3.5+** - コンポーネントフレームワーク
- **TypeScript 5.7** - 型安全性
- **Vite 6** - ビルドツール
- **Tailwind CSS 4** - ユーティリティファーストCSS
- **Biome 1.9** - リンター・フォーマッター
- **semantic-release** - 自動リリース
- **yalc** - ローカルパッケージテスト

## Setup

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルド（watch モード）
npm run build:watch

# プレビュー
npm run preview
```

## Usage

### ライブラリとしての利用

```bash
npm install @co6tter/vite-lib-app
```

```vue
<script setup lang="ts">
import { AmberColors, RedColors, OrangeColors, YellowColors } from '@co6tter/vite-lib-app'
import '@co6tter/vite-lib-app/style.css'
</script>

<template>
  <div>
    <AmberColors />
    <RedColors />
    <OrangeColors />
    <YellowColors />
  </div>
</template>
```

### ローカル開発（yalc）

```bash
# このプロジェクトで
npm run build:watch

# 利用側のプロジェクトで
yalc add @co6tter/vite-lib-app
```

## Directory Structure

```
vite-lib-app/
├── lib/              # ライブラリのソースコード（エントリーポイント）
│   └── main.ts       # エクスポート定義
├── src/              # デモ・開発用コンポーネント
│   ├── components/   # Vueコンポーネント
│   │   ├── AmberColors.vue
│   │   ├── RedColors.vue
│   │   ├── OrangeColors.vue
│   │   └── YellowColors.vue
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── dist/             # ビルド成果物
├── public/           # 静的アセット
├── .github/          # GitHub Actions設定
│   └── workflows/
├── vite.config.ts    # Vite設定
├── tsconfig.json     # TypeScript設定
├── biome.json        # Biome設定
├── lefthook.yml      # Gitフック設定
└── release.config.js # semantic-release設定
```

## License

This repository is for personal/private use only.
