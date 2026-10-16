# Self-Disciplined English Vocabulary · I Know u 

**English** | [简体中文](README.md)

> A vocabulary trainer web app built for my own word learning.

🔗 **Live demo**: https://violetcodt.github.io/iknowu/

---

## 📸 Preview

<img src="screenshot.png" alt="Learn / Flashcard / My Words" width="780">

---

## ✨ Features

| Module | Description |
| --- | --- |
| 📖 Learn | 0-35 new words per day; tap a card to reveal the meaning; auto pronunciation |
| ✅ Quiz | English → Chinese, 4 choices, instant grading with the correct answer highlighted |
| ⌨️ Spelling | Chinese → English dictation, to check whether you can really write it |
| 🔥 Red List | Automatically collects the words you got wrong; one-tap re-drill; export as `txt` |
| 📥 My Words | Add your own vocabulary by hand, bulk paste or file upload — fully integrated |
| 📊 Stats | Per-group progress bars: learned / mastered / red list / new today |
| 🧠 Spaced Repetition | Priority = wrong × 3 − right + days since last review |
| 🔊 Pronunciation | System speech (Web Speech API) first, switchable to online audio, auto fallback |
| 💾 Backup | Progress and custom words stored locally; export / import `json` backups |
| 📱 Mobile First | Responsive layout, installable to home screen (PWA-style) |

## 🚀 Quick Start

### On mobile
Open the live URL, then:
- **iPhone (Safari)**: Share → Add to Home Screen
- **Android (Chrome)**: ⋮ → Add to Home Screen

### On desktop
Just open `index.html` in a browser — nothing to install.

### Run locally
```bash
git clone https://github.com/violetcodt/iknowu.git
cd iknowu
# Open index.html directly, or start a static server:
python -m http.server 8000
```

> If the entry file is not named `index.html` (e.g. you renamed it to `index_v2.html`), the URL must include the file name: `https://violetcodt.github.io/iknowu/index_v2.html`.

## 📥 Add Your Own Words

The built-in deck holds 191 words in 5 semantic groups. Custom words go into **group Z "My Words"** and are automatically wired into Learn, Quiz, Spelling, Red List and Stats — no extra setup.

| Group | Content |
| --- | --- |
| **A** | Macroeconomics & Finance (inflation, monetary policy, FX, leverage…) |
| **B** | Banking · Regulation · Insurance (prudential rules, provisions, AML…) |
| **C** | Technology (AI, blockchain, cybersecurity…) |
| **D** | Business & Corporate (M&A, antitrust, governance, core verbs) |
| **E** | Logical connectors & question stems (however, infer, tone…) |
| **Z** | My Words (your own entries) |

### 1. Add manually
In the **📥 My Words** tab, fill in English / Chinese / example (optional) / group, then tap **Add**. The default group is Z, and you may assign the word to any of A–E instead.

### 2. Bulk paste
One word per line, fields separated by a **comma, pipe `|`, Tab or semicolon**:

```text
english, chinese, group (optional), example (optional)

liquid assets, 流动资产
write-off | 核销 | D
haircut, 折扣, A, debt haircut 债务减记
```

- A **single letter A–E** in the 3rd field is treated as the group; anything else counts as an example.
- Lines starting with `#` are ignored and can be used as comments.
- After importing you get a summary: `✅ Added 5 · Updated 1 · Skipped 2 (duplicate or incomplete)`. Words already present in the **built-in deck** are skipped automatically.

### 3. Upload a file
Supported: `.txt` / `.csv` / `.json`, saved as **UTF-8**. Two accepted JSON shapes:

```json
[{ "en": "spread", "zh": "价差", "g": "A", "p": "bid-ask spread" }]
```

```json
[["yield curve", "收益率曲线", "A"]]
```

## ❓ FAQ

**No sound?**
① Check the silent switch; ② open in a real browser (not an in-app WeChat/QQ browser); ③ on the Stats page set Pronunciation mode to *Online audio only*; ④ tap **Test pronunciation** to verify.

**Chinese text is garbled after upload?**
The file isn't UTF-8. Re-save it as UTF-8, or paste the content straight into the bulk-paste box.

**Will I lose my progress? Can I sync across devices?**
Everything lives in the current browser's `localStorage` (key `jmj_words_v1`) and is never uploaded. To move devices: export the backup on the old device (`word_progress_<date>.json`) and import it on the new one — **the backup includes your custom words**.

**Can I delete my custom words?**
Yes — delete them one by one in the list, or use **Clear My Words** (with confirmation). Note that **Reset all progress** only clears learning progress; it does *not* delete your custom words.

## 🕒 Changelog

| Version | Changes |
| --- | --- |
| **v2.2** | Added **My Words**: manual entry, bulk paste, file upload — integrated into every module |
| v2.1 | Switchable pronunciation (auto / system only / online only); better iOS voice unlock and debounce |
| v2.0 | Added spelling test, red list, stats page, backup export/import |
| v1.0 | Initial Learn + Quiz version |

## 📄 License

[MIT License](LICENSE) — free to modify and use personally.
