# Wild News

Use this api to show a list of News:
https://newsapi.org/docs/get-started

## TODO

1. click `Load News` to fetch articles from the API

2. show article details in <Post />
i.e: `title`, `description`, etc
Check what the api `response` gives you

3. click `Show/Hide` to show the content of the article
Maybe post needs `state: { isOpen: ... }`?

4. optional: show only `Today`'s news

5. optional: load the news articles without using the `Load News` button
i.e: use the `componentDidMount()` lifecycle method


## Scripts

Start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

Lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

Build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```
