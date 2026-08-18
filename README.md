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
