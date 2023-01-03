<script setup lang="ts">
import { currentMonitor } from "@tauri-apps/api/window";
import { Position } from "~/composables/animations";

// Configuration.
const config = useAppConfig();

const monitor = (await currentMonitor()) as { size: { width: number; height: number } };
const screen: Position = [monitor.size.width - config.window[0], monitor.size.height - config.window[1]];

onMounted(async () => {
  const saver = new Screensaver(
    [config.panel as Position, screen],
    config.window as Position,
    config.speed,
    config.random
  );
  await saver.start();
});

const onClick = () => {
  if (config.duplicate) duplicateWindow();
};
</script>

<template>
  <div class="flex items-center justify-center" @click="onClick">
    <main :style="`width: ${config.window[0]}px; height: ${config.window[1]}px`">
      <Screensaver :random="config.random" />
    </main>
  </div>
</template>
