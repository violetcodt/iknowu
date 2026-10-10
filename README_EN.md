README_EN.md`

```markdown
#  Word Trainer · 

**English** | [简体中文](README.md)

> A single-file, dependency-free vocabulary web app for the English section of the
> professional subject exam for the **National Financial Regulatory Administration (NFRA / 金管局)**
> computer-related civil service positions in China's national exam (国考).

🔗 **Live demo**: https://violetcodt.github.io/word-trainer/

---

## ✨ Features

| Module | Description |
| --- | --- |
| 📖 Learn | 0-35 new words per day, tap a card to reveal the meaning |
| ✅ Quiz | English → Chinese multiple choice (4 options) with instant feedback |
| ⌨️ Spelling | Chinese → English typing test |
| 🔥 Red List | Wrong answers are collected automatically and can be re-drilled |
| 📊 Stats | Per-group progress bars, learned / mastered / red-list counts |
| 🧠 Spaced Repetition | Priority = wrong × 3 − right + days since last review |
| 🔊 Pronunciation | Powered by the browser's Web Speech API (no audio files needed) |
| 💾 Backup | Progress is stored locally; export / import JSON backups |
| 📱 Mobile-first | Responsive layout, can be added to the home screen |

## 🚀 Getting Started

### On mobile
Open the live URL, then:
- **iOS (Safari)**: Share → *Add to Home Screen*
- **Android (Chrome)**: ⋮ → *Add to Home Screen*

### On desktop
Just open `index.html` in any modern browser. No build step, no dependencies.

### Run locally
```bash
git clone https://github.com/your-username/word-trainer.git
cd word-trainer
