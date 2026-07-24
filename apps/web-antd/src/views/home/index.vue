<script setup lang="ts">
import { usePreferences } from '@vben/preferences';

import { Button, Card, Col, Row, Space, Statistic, Tag, Typography } from 'ant-design-vue';

const { isDark } = usePreferences();

const features = [
  {
    description: '基于 Vue 3、Vite 8、TypeScript 6 构建，采用最新的前端技术栈',
    icon: '🚀',
    title: '最新技术栈',
  },
  {
    description: '内置 Ant Design Vue 4 组件库，提供丰富的 UI 组件',
    icon: '🎨',
    title: 'Ant Design Vue',
  },
  {
    description: '支持国际化、主题切换、权限管理等功能',
    icon: '⚡',
    title: '开箱即用',
  },
  {
    description: '使用 pnpm monorepo 架构，代码结构清晰，易于维护',
    icon: '📦',
    title: 'Monorepo 架构',
  },
];

const stats = [
  { label: '页面数量', value: 12 },
  { label: '组件库', value: 1 },
  { label: '共享包', value: 12 },
  { label: '构建时间', value: '< 7s' },
];
</script>

<template>
  <div class="home-page">
    <!-- Hero 区域 -->
    <div class="hero-section mb-8 text-center">
      <Typography.Title :level="2" class="mb-2">
        Vben Admin
      </Typography.Title>
      <Typography.Paragraph class="text-lg text-muted-foreground mb-6">
        基于 Vue 3 的企业级中后台管理系统框架
      </Typography.Paragraph>
      <Space size="middle">
        <Button type="primary" size="large" href="https://doc.vben.pro" target="_blank">
          查看文档
        </Button>
        <Button size="large" href="https://github.com/vbenjs/vue-vben-admin" target="_blank">
          GitHub
        </Button>
      </Space>
    </div>

    <!-- 统计区域 -->
    <Row :gutter="[16, 16]" class="mb-8">
      <Col v-for="item in stats" :key="item.label" :xs="12" :sm="6">
        <Card class="text-center">
          <Statistic :title="item.label" :value="item.value" />
        </Card>
      </Col>
    </Row>

    <!-- 特性区域 -->
    <Typography.Title :level="3" class="mb-4">
      项目特性
    </Typography.Title>
    <Row :gutter="[16, 16]">
      <Col v-for="feature in features" :key="feature.title" :xs="24" :sm="12" :lg="6">
        <Card class="h-full">
          <div class="text-center">
            <div class="text-4xl mb-3">{{ feature.icon }}</div>
            <Typography.Title :level="4" class="mb-2">
              {{ feature.title }}
            </Typography.Title>
            <Typography.Paragraph class="text-muted-foreground">
              {{ feature.description }}
            </Typography.Paragraph>
          </div>
        </Card>
      </Col>
    </Row>

    <!-- 技术栈标签 -->
    <div class="mt-8">
      <Typography.Title :level="3" class="mb-4">
        技术栈
      </Typography.Title>
      <div class="flex flex-wrap gap-2">
        <Tag color="blue">Vue 3</Tag>
        <Tag color="cyan">Vite 8</Tag>
        <Tag color="green">TypeScript 6</Tag>
        <Tag color="orange">Ant Design Vue 4</Tag>
        <Tag color="purple">Pinia</Tag>
        <Tag color="red">Vue Router</Tag>
        <Tag color="geekblue">Tailwind CSS</Tag>
        <Tag color="lime">pnpm</Tag>
        <Tag color="gold">Turbo</Tag>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.hero-section {
  padding: 48px 0;
}
</style>
