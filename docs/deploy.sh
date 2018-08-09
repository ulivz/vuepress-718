#!/usr/bin/env sh

set -e
yarn docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/ULIVZ/vuepress-718.git master:gh-pages

cd -
