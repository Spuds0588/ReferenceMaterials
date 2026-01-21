### Official Documentation

* **Main Docs:** [https://docs.sheetjs.com/](https://docs.sheetjs.com/)
* **CSV Conversion Specifics:** [SheetJS Utility Functions (CSV)](https://docs.sheetjs.com/docs/api/utilities/csv)
* **Browser Usage:** [SheetJS Browser Demo](https://docs.sheetjs.com/docs/demos/frontend/)


# Technical Specification: Implementing SheetJS (xlsx) for XLSX-to-CSV Conversion

### Context

We are adding XLSX file support to an application that currently only processes CSV files. The goal is to intercept an uploaded `.xlsx` file, convert it to a CSV string (or JSON array), and pass it to the existing parsing logic.

### Library Requirements

* **Library:** `xlsx` (SheetJS)
* **Installation:** `npm install xlsx` or via CDN `https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js`

### Core Workflow

To convert an Excel file to a format compatible with our current CSV parser, follow these steps:

#### 1. Read the File (Browser)

When a user uploads a file via `<input type="file">`, read it as an `ArrayBuffer`.

```javascript
const data = await file.arrayBuffer();
const workbook = XLSX.read(data, { type: 'array' });

```

#### 2. Access the Worksheet

SheetJS uses a `Workbook` object which contains `SheetNames` and `Sheets`.

```javascript
// Get the first sheet name
const firstSheetName = workbook.SheetNames[0];

// Get the actual worksheet object
const worksheet = workbook.Sheets[firstSheetName];

```

#### 3. Conversion Methods

Choose the method that fits our existing pipeline:

**Method A: Convert to CSV String (Best for legacy CSV parsers)**
Use this if you want to pass the result directly into your existing `Papa.parse()` or custom CSV logic.

```javascript
const csvString = XLSX.utils.sheet_to_csv(worksheet);

```

**Method B: Convert to JSON Array (Best for modernizing the pipeline)**
Use this to skip CSV parsing entirely and get a clean JavaScript array of objects.

```javascript
const jsonData = XLSX.utils.sheet_to_json(worksheet, {
  header: 1, // 1 returns an array of arrays (rows); default returns objects based on header row
  defval: "" // Ensures empty cells are returned as empty strings rather than undefined
});

```

### Essential Implementation Details for LLM

1. **Date Handling:** Excel stores dates as numbers. To get formatted date strings, use the `cellDates: true` option in the `read` function:
* `XLSX.read(data, {type: 'array', cellDates: true})`


2. **Memory Management:** For large files, SheetJS can be memory-intensive. Ensure the file object is cleared after the CSV string is generated.
3. **Multiple Sheets:** If the uploaded XLSX has multiple tabs, `workbook.SheetNames` contains the list. By default, we should process `SheetNames[0]`, but the system should ideally alert the user if more than one sheet exists.

### Example Integration Script

```javascript
import * as XLSX from 'xlsx';

async function handleFile(file) {
  const extension = file.name.split('.').pop().toLowerCase();
  
  if (extension === 'xlsx') {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data, { cellDates: true });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    
    // Convert to CSV to reuse existing logic
    const convertedCsv = XLSX.utils.sheet_to_csv(sheet);
    return runExistingCsvParser(convertedCsv);
  } 
  
  // Fallback for standard CSV
  const reader = new FileReader();
  // ... standard reader logic
}

```

---

### Why this guide helps the LLM:

* It specifies the **`cellDates: true`** flag, which is the #1 mistake LLMs make with SheetJS (leading to dates appearing as random numbers like `45231`).
* It clarifies the **`type: 'array'`** requirement for modern `file.arrayBuffer()` usage, preventing the LLM from using deprecated `binary` or `string` read methods.
* It provides a bridge between your **new Excel requirement** and your **old CSV logic**.