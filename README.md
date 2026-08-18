# FPS Overlay — Chrome Extension

Shows a live FPS counter in the top-right corner of every tab. Color-coded by performance: green (55+ FPS), yellow (30–54 FPS), red (below 30 FPS).

---

## Installation

### 1. Download & unzip

Download `fps-extension.zip` and unzip it to a folder you won't move or delete — Chrome loads the extension directly from this folder.

### 2. Open Chrome Extensions

Navigate to `chrome://extensions` in your address bar, or go to:

> **Menu (⋮) → Extensions → Manage Extensions**

### 3. Enable Developer Mode

Toggle **Developer mode** on in the top-right corner of the Extensions page.

### 4. Load the extension

Click **Load unpacked**, then select the `fps-extension` folder (the one containing `manifest.json`).

### 5. Done

The FPS counter will appear immediately on all open tabs. No restart needed.

---

## Usage

| Color  | FPS Range | Meaning     |
|--------|-----------|-------------|
| 🟢 Green  | 55+       | Smooth      |
| 🟡 Yellow | 30–54     | Acceptable  |
| 🔴 Red    | < 30      | Struggling  |

The counter updates every 500ms and sits above all page content without blocking clicks or interactions.

---

## Uninstalling

Go to `chrome://extensions`, find **FPS Overlay**, and click **Remove**.

---

## Troubleshooting

### "Manifest file is missing or unreadable" on install

Unzipping creates a nested folder. You need to select the *inner* folder — the one that directly contains `manifest.json`. In the Load unpacked dialog, keep navigating into the folder until you see these files listed:

```
manifest.json
fps.js
popup.html
README.md
```

Then click **Select Folder**.

---

### Counter doesn't appear after installing

The extension only injects into tabs opened *after* it's loaded. For already-open tabs:

1. Hard refresh with `Ctrl + Shift + R`
2. Or close and reopen the tab
3. Or go to `chrome://extensions` → find FPS Overlay → click the **↺ refresh icon**, then reload the tab

---

### Counter doesn't appear on certain pages

Chrome blocks content scripts on some pages by design — this is a Chrome restriction, not a bug:

- `chrome://` pages (e.g. chrome://extensions, chrome://settings)
- The Chrome Web Store (`chromewebstore.google.com`)
- Chrome's New Tab page

The counter will work on all normal websites.

---

### Counter disappeared after moving the folder

Chrome loads the extension directly from the folder on disk. If you move, rename, or delete the folder after installing, the extension will break. To fix it:

1. Go to `chrome://extensions`
2. Remove the broken FPS Overlay entry
3. Move the folder to its final location
4. Click **Load unpacked** again and reselect the folder

---

### Extension shows as enabled but counter is invisible

The counter sits in the top-right corner. It may be hidden if a page's own UI covers that area. Try scrolling to the top of the page, or zoom out with `Ctrl + -` to check if it's obscured.

---

### Counter was working, now it's gone after a Chrome update

Chrome occasionally disables unpacked extensions after major updates as a security measure. Go to `chrome://extensions` and check if FPS Overlay has a warning or is toggled off — just re-enable it or click **Repair** if prompted.
