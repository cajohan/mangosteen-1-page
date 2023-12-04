# 我的 Vue 3 + TSX 项目

## 编码规范

### ref 默认值

推荐使用

```tsx
const div = ref<HTMLDivElement>();
```

不推荐使用

```tsx
const div = ref<HTMLDivElement | null>(null);
```

## 如何开发

```bash
 pnpm run dev
```

## 如何打包

```bash
 pnpm run build
```
