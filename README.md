# bs-binding-template

Attempting to use opam/ocaml projects in bucklescript based on [kogai/bs-cmdliner](https://github.com/kogai/bs-cmdliner)

Also see [ELLIOTTCABLE/bs-cmdliner](https://github.com/ELLIOTTCABLE/bs-cmdliner)

# gitsubmodules
1. add target via `.gitsubmodules` with:
```bash
git submodule add <remote_url> <destination_folder>
git submodule add https://github.com/dbuenzli/cmdliner.git cmdliner
```

If you get, `please make sure that the .gitmodules file is in the working tree`, `rm -rf .git` and starting over solves it. If there was a `.gitmodules` that you deleted, it might still be showing in the git cache.

# bsconfig.json

Expose the target ocaml files you want by adding them to `bsconfig.json`

```json
// bsconfig.json
  "sources": [
    "cmdliner/src",
    "result"
  ],

```

# building

In your `package.json` add a script which copies the files you want into the your target folder you have set up in `bsconfig.json`. Normally that is `src` so the script would be:

```json
    "build": "bsb -make-world && cp -r cmdliner/src/ ./dist",
```

- not working because of `NativeInt` being taken out of rescript
