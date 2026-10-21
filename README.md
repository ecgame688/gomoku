# Gomoku · Caro — install pages + privacy policy

Static GitHub Pages site, no build step. Published from the public repo `ecgame688/gomoku`
(branch `main`, root): copy this folder's contents (with `assets/`) to that repo.

| File | Published URL |
|---|---|
| `index.html` | https://ecgame688.github.io/gomoku/ — redirects to `install_<lang>.html` by browser language (en, vi, ko, ja; any `zh-*` → `install_zh.html`, Traditional Chinese); fallback English. Without JavaScript it shows a link per language. |
| `install_en.html` `install_vi.html` `install_ko.html` `install_ja.html` `install_zh.html` | https://ecgame688.github.io/gomoku/install_<lang>.html — the app's share text links here (`client/lib/services/share.dart`, lang = en/vi/ko/ja/zh). |
| `privacy.html` | https://ecgame688.github.io/gomoku/privacy.html — Privacy Policy, 5 languages on one page (switcher; `#en` `#vi` `#ko` `#ja` `#zh` selects a language). Linked from the app's About screen; use it as the privacy policy URL in Play Console and App Store Connect. |

## Do not edit the HTML by hand

- Install pages, `index.html`, `assets/install.css`, `assets/install.js`: `python3 store/gen_pages.py`
  (texts for all 5 languages in one dict; store links as constants at the top).
- Privacy policy (`privacy.html` + `store/PRIVACY-POLICY.md`): `python3 store/gen_privacy.py`.

## Store behaviour

- Android visitors are sent to Google Play automatically
  (`https://play.google.com/store/apps/details?id=com.egame.gomoku`).
- App Store: **not published yet** — `APP_STORE_ID = ""` in `store/gen_pages.py`. While empty, iPhone/iPad
  visitors are **not** redirected; the App Store button is a disabled "Coming soon on the App Store" label
  (localized) and the status line points to Google Play.
  When the app is live: set `APP_STORE_ID = "<numeric id>"`, run `python3 store/gen_pages.py` and republish —
  iPhone/iPad then open the App Store automatically, like checkers.
- Desktop visitors stay on the page. Store links work without JavaScript and stay tappable if an in-app
  browser blocks the automatic redirect.

## Icon — placeholder

`assets/icon.png` (512×512) is a **placeholder** copied from `design/icon/out/A-full.png`; the final icon is
not chosen yet. When it is, replace it with:

```sh
python3 store/gen_pages.py --icon path/to/final-icon-1024.png
```

Content of the pages reflects only what the app really has: vs Computer (3 levels) and 2 players on one
device, both offline; Gomoku (five or more / exactly five) and Caro rules; 9×9, 13×13, 15×15 boards; hints,
undo, replay; Classic and Casual looks; leaderboards. There is no online play.
