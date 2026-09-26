This is the scoreUI Expo/React Native component library and native Storybook for Tablescore. Prioritize mobile-first patterns, performance, accessibility, and cross-platform compatibility. Use pnpm for every package and project command.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

```bash
pnpm expo install <package>  # resolves SDK-compatible native versions
pnpm storybook               # native Storybook, separate entry point
pnpm lint                    # lint
pnpm typecheck               # typecheck
pnpm expo install --check    # check Expo-compatible versions
pnpm expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Library structure

- Reusable components, tokens, and providers belong in `src/` and are exported from `src/index.ts`.
- Every public component should have representative states in `.rnstorybook/stories/`.
- Storybook runs through entry-point swapping and should stay separate from the normal app bundle.
- Keep the dark Tablescore visual language and semantic success/warning colors consistent with Figma.

## Rules

- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md
