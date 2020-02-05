# CKEditor 5 LaTeX

> Inserts `\(\)` and `\[\]` surrounding the cursor for the client to insert LaTeX

## Installation

### 1.

```bash
npm i ckeditor5-latex
```

### 2.

In `ckeditor.js`:

```javascript
import Latex from 'ckeditor5-latex'
```

### 3.

Add `Latex` to `Editor.builtinPlugins`

### 4.

Add `'inlineLatex', 'centeredLatex'` to `toolbar.items`
