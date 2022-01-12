# Reproduction

## Bug

When setting `build.cssCodeSplit: false` then the CSS is missing in the `dist/manifest.json` (`dist/manifest.json` if using vite-plugin-ssr).

## Reproduction Steps

1. ```
   yarn install
   yarn dev
   ```

   Go to https://localhost:3000 and observe the layout.

2. ```
   yarn prod
   ```

   Go to https://localhost:3000 and observe the layout is broken; the CSS is missing.

   Also observe that `dist/client/manifest.json` doesn't include any CSS.


3. Remove `build.cssCodeSplit: false` then run the following again.
   ```
   yarn prod
   ```

   Observe how `dist/client/manifest.json` includes the CSS.

   Also go to https://localhost:3000 and observe the layout is working again; the CSS is included.
