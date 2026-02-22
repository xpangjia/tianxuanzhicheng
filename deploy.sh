#!/bin/bash
set -e

# 读取 .env 配置
ENV_FILE="$(dirname "$0")/.env"
if [ ! -f "$ENV_FILE" ]; then
  echo "错误：未找到 .env 文件，请在项目根目录创建 .env 并配置 CLOUDFLARE_API_TOKEN"
  exit 1
fi
export $(grep -v '^#' "$ENV_FILE" | xargs)

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "错误：.env 中未配置 CLOUDFLARE_API_TOKEN"
  exit 1
fi

echo "🔨 构建项目..."
npx vite build

echo "🚀 部署到 Cloudflare Pages..."
npx wrangler pages deploy dist --project-name tianxuanzhicheng --commit-message "${1:-update}"

echo "✅ 部署完成！访问 https://tianxuanzhicheng.pages.dev"
