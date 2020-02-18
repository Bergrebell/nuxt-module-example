const { resolve, join } = require("path");

export default function(moduleOptions) {
  // uses both ways of adding options in nuxt.config
  const options = {
    ...moduleOptions,
    ...this.options.customCounter
  };

  // expose namespace and set a default
  if (!options.namespace) options.namespace = "customCounter";
  const { namespace } = options;

  // allows the module to add new plugins to nuxt
  this.addPlugin({
    src: resolve(__dirname, "debug.js"),
    // namespace from options is used
    fileName: join(namespace, "debug.js"),
    options
  });
}

module.exports.meta = require("./package.json");
