#!/bin/bash
    npm i &&
    rm -rf dist &&
    rm -rf .cache &&
    ./node_modules/.bin/parcel build _index.html --no-minify &&
    find ./dist -name '*.js' -exec bash -c 'mv $0 ./dist/entry.8850c411.js' {} + &&
    find ./dist -name '*.map' -exec bash -c 'mv $0 ./dist/entry.8850c411.map' {} + &&
    rm -rf js &&
    ./node_modules/.bin/tsc &&
    node js/server/importAssetsCardList.js &&
    echo "セットアップ完了" &&
    node js/server/index.js