# Dalronik Vision Lab

Статический frontend-сайт для GitHub Pages: скрининг цветового зрения на основе публично-доменного полного издания Ishihara 1937 года.

## Что внутри

- `index.html` — разметка приложения
- `styles.css` — весь UI, анимации, темы, responsive layout
- `script.js` — логика теста, таймер, анализ ответов, темы, звук
- `assets/images/plates/` — локальные plate-изображения
- `assets/images/source/` — исходные страницы публично-доменного скана

## Как запустить локально

1. Откройте `index.html` напрямую в браузере.
2. Либо поднимите любой статический сервер.

Пример с Python:

```bash
python -m http.server 8080
```

После этого откройте `http://localhost:8080`.

## Как выложить на GitHub Pages

1. Создайте новый репозиторий и загрузите содержимое папки `D:\dalronik`.
2. В GitHub откройте `Settings` → `Pages`.
3. В `Build and deployment` выберите `Deploy from a branch`.
4. Выберите ветку `main` и папку `/ (root)`.
5. Сохраните настройки и дождитесь публикации.

## Источник изображений

Сайт использует локально сохранённые plate-изображения, извлечённые из публично-доменного скана:

- Shinobu Ishihara, `The series of plates designed as tests for colour-blindness`, 7th ed., complete edition, 1937.
- Source: National Diet Library / Wikimedia Commons
- Commons file: `File:NDL1679359 The series of plates designed as tests for colour-blindness, by Dr. Shinobu Ishihara .. Complete edition.pdf`
- License note on Commons: public domain / PD-Japan / PD-scan

## Важные ограничения

- В текущий scoring-набор включены `24` локальные числовые plates из открытого скана. Остальные страницы полного открытого издания сохранены в `assets/images/source/`, но трассировочные plates пока не включены в интерактивный сценарий.
- Ishihara подходит прежде всего для red-green deficiency и не является полноценным тестом на tritanopia. Поэтому в UI tritan-профиль помечен как `не оценивался`.
- Требование `100+` локальных официальных clinical images не было реализовано, потому что открытого публично-доменного набора такого масштаба для безопасного бандла в проекте не нашлось. Архитектура сайта при этом готова к расширению, если будут добавлены лицензированные plate-наборы.

## Как расширять датасет

1. Добавьте новые изображения в `assets/images/plates/`.
2. Расширьте массив `PLATES` в `script.js`.
3. Обновите `MODE_META.full.ids`, если хотите включить новые plates в полный режим.

## Disclaimer

Этот проект предназначен для демонстрации, self-check и frontend-публикации. Для медицинского заключения нужен очный осмотр у офтальмолога.

