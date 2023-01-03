import { WebviewWindow } from "@tauri-apps/api/window";

export const duplicateWindow = () => {
  const id = (Math.random() + 1).toString(36).substring(7);
  return new WebviewWindow(id, {
    fullscreen: false,
    resizable: false,
    decorations: false,
    transparent: true,
    alwaysOnTop: true,
    visible: false,
    skipTaskbar: true,
  });
};
