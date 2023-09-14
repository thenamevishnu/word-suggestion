A typeahead component for inputs

[![npm version](https://img.shields.io/npm/v/word-suggestions)](https://npmjs.org/package/word-suggestions)

## Install

```
$ npm i word-suggestions

```

### Usage

#### Quick start

```js

import {prefix} from "word-suggestions"

const wordsArray = ["hello","hey","how are you","do you have a pen?","coding","codes"]

prefix.UploadArray(wordsArray)

const output = prefix.searchResponse("Co")

console.log(output) // ["coding","codes"]

```
