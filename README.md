# Nuxt Module Example
Example on how to use modules in NuxtJS

# Install
`npm install path/to/module`

# Usage
Add it to nuxt.config.js and provide the necessary options:

```
 modules: [
    ['custom-counter', { namespace: 'counter' }]
  ],

  customCounter: { initialValue: 6, debug: true },

  router: {
    middleware: ['counter']
  },
```

Use it in component (does not need to be imported):

```
<counterAdjuster></counterAdjuster>
```

# Source
https://medium.com/carepenny/creating-a-nuxt-module-1c6e3cdf1037