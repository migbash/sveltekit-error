
# ❌ Error Reproduction

1. Clone Repository & `npm install`
2. Do `npm run build` & `npm run preview`
3. Navigate to `localhost` deployment and open `devTools` console, you will see the error.

---

**✔ To prevent the error**

4. Comment out the use of: `import { goto } from '$app/navigation';` inside `src/+page.svlete` & repate step `2. & 3.`

**OR**

4. Remove the use of the `plugin: [chunkSplitPlugin()]` from the `vite.config.js` file & repate step `2. & 3.`

The error lies in the entire `$app/navigation` module compatability with the `vite-plugin-chunk-split` plugin usage.
