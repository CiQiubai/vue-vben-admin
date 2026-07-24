<script lang="ts" setup>
import { preferences } from '@vben/preferences';

import { Fallback } from '@vben/common-ui';

defineOptions({ name: 'Fallback404Demo' });
</script>

<template>
  <Fallback :home-path="preferences.app.defaultHomePath" status="404" />
</template>
