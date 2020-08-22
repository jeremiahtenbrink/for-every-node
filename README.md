<h1 align="center">Welcome to @jeremiah_tenbrink/for-every-node 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@jeremiah_tenbrink/for-every-node" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@jeremiah_tenbrink/for-every-node.svg">
  </a>
  <a href="https://jeremiahtenbrink.github.io/for-every-node/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jeremiahtenbrink/for-every-node/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/jeremiahtenbrink/for-every-node/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/jeremiahtenbrink/for-every-node" />
  </a>
<a href="https://codeclimate.com/github/jeremiahtenbrink/for-every-node/maintainability"><img src="https://api.codeclimate.com/v1/badges/ceb1303dc87248c10ab0/maintainability" /></a>
<a href="https://codeclimate.com/github/jeremiahtenbrink/for-every-node/test_coverage"><img src="https://api.codeclimate.com/v1/badges/ceb1303dc87248c10ab0/test_coverage" /></a>

</p>


Function that will call a callback for every child node. Uses a <a href="https://github.com/jeremiahtenbrink/queue">queue</a>
, not recursion.

## Install

### With Npm
```shell script
npm install @jeremiah_tenbrink/for-every-node
```

### With Yarn
```shell script
yarn add @jeremiah_tenbrink/for-every-node
```

## Usage

```javascript
import {callForEveryNode} from "@jeremiah_tenbrink/for-every-node";

callForEveryNode(htmlElementWithChildNodes, (el => {
console.log(el)
}))
```

## Author

<a href="https://www.youracclaim.com/badges/f767c1ec-2b50-4901-a250-49b6d9467d37">
<img src="https://github-badge.vercel.app/api/badges/author/JeremiahTenbrink" alt="Full-Stack Web Development + Technical Interviewing" height="300" />
</a>

<a href="https://www.linkedin.com/in/jeremiahtenbrink/">
<img src="https://github-badge.vercel.app/api/badges/portfolio/tenbrink.dev" height="25"/>
</a>
<a href="https://www.linkedin.com/in/jeremiahtenbrink/">
<img src="https://github-badge.vercel.app/api/badges/linkedin/@JeremiahTenbrink" height="25"/>
</a>
<a href="https://github.com/jeremiahtenbrink">
<img src="https://github-badge.vercel.app/api/badges/github/@JeremiahTenbrink" height="25"/>
</a>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jeremiahtenbrink/for-every-node/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Jeremiah Tenbrink](https://github.com/jeremiahtenbrink).<br />
This project is [MIT](https://github.com/jeremiahtenbrink/for-every-node/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
