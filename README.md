**Getting Started**

Run the following commands to install dependencies and start developing

```
yarn install
yarn dev
```

**Scripts**

- `yarn dev` - run `webpack` in `watch` mode
- `yarn storybook` - runs the Storybook server
- `yarn build` - builds the production-ready unpacked extension
- `yarn test -u` - runs Jest + updates test snapshots
- `yarn lint` - runs EsLint

<details>
  <summary>Loading the extension in Google Chrome</summary>

In [Google Chrome](https://www.google.com/chrome/), open up [chrome://extensions](chrome://extensions) in a new tab. Make sure the `Developer Mode` checkbox in the upper-right corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Google Chrome](https://i.imgur.com/ORuHbDR.png 'Installed Extension in Google Chrome')

</details>

<details>
  <summary>Loading the extension in Brave</summary>

In [Brave](https://brave.com/), open up [brave://extensions](brave://extensions) in a new tab. Make sure the `Developer Mode` checkbox in the upper-right corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Brave](https://i.imgur.com/z8lW02m.png 'Installed Extension in Brave')

</details>

<details>
  <summary>Loading the extension in Mozilla Firefox</summary>

In [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/), open up the [about:debugging](about:debugging) page in a new tab. Click the `Load Temporary Add-on...` button and select the `manfiest.json` from the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Mozilla Firefox](https://i.imgur.com/gO2Lrb5.png 'Installed Extension in Mozilla Firefox')

</details>

**Notes**

- Includes ESLint configured to work with TypeScript and Prettier.

- Includes tests with Jest - note that the `babel.config.js` and associated dependencies are only necessary for Jest to work with TypeScript.

- Recommended to use `Visual Studio Code` with the `Format on Save` setting turned on.

- Example icons courtesy of [FontAwesome](https://fontawesome.com).

- [Microsoft Edge]() is not currently supported.

- Includes Storybook configured to work with React + TypeScript. Note that it maintains its own `webpack.config.js` and `tsconfig.json` files. See example story in `src/components/hello/__tests__/hello.stories.tsx`

- Includes a custom mock for the [webextension-polyfill-ts](https://github.com/Lusito/webextension-polyfill-ts) package in `src/__mocks__`. This allows you to mock any browser APIs used by your extension so you can develop your components inside Storybook.

**Built with**

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Chakra-ui](https://chakra-ui.com/)
- [webextension-polyfill-ts](https://github.com/Lusito/webextension-polyfill-ts)

**Misc. References**

- [Chrome Extension Developer Guide](https://developer.chrome.com/extensions/devguide)
- [Firefox Extension Developer Guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [Eslint + Prettier + Typescript Guide](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

**Design inspiration**
https://www.videoask.com/product

## notes

https://github.com/chakra-ui/chakra-ui/blob/75edcf41e7ff4acc2569f2169949063c164d8f6e/website/pages/docs/form/input.mdx
https://github.com/chakra-ui/chakra-ui/blob/98efb69699b5cfc47158947ed82ea534b67555c1/packages/input/stories/input.stories.tsx
https://javascript.plainenglish.io/making-an-animated-html5-canvas-gradient-effect-62e7f84d7c2f
https://codepen.io/smpnjn/pen/pobGMKp
https://codepen.io/ray7551/pen/EbVmZd
https://codepen.io/jasesmith/pen/pbXKPg
https://codepen.io/zmeeey5/pen/grEadL
https://codepen.io/ray7551/pen/EbVmZd ---- very very

## buttons

https://dribbble.com/shots/11139240-Thumbs-up-button -- button
https://dribbble.com/shots/9000058-Upload-buttons -- button
https://dribbble.com/shots/13985244-Colorful-Buttons - button
https://codepen.io/aaroniker/full/WNwbKqz - gradients
https://dribbble.com/shots/11139240-Thumbs-up-button -- use the border
