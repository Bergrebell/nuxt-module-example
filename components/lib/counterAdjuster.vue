<template lang="html">
  <div class="custom-counter">
    <h1>Count is: {{ count }}</h1>
    <button class="custom-counter--button" @click="adjust(-1)">Minus</button>
    <button class="custom-counter--button" @click="adjust(+1)">Add</button>
  </div>
</template>

<script>
export default {
    computed: {
        pluginOptions() {
            // customCounterOptions will be added as a prop
            return this._customCounterOptions || {}
        },

        // get plugin name via namspace option
        injectedPluginName() {
            const { pluginOptions } = this
            return pluginOptions.namespace ? '$' + pluginOptions.namespace : undefined
        },

        count() {
            const { injectedPluginName } = this
            return injectedPluginName ? this[injectedPluginName].value() : undefined
        }
    },

    methods: {
        adjust(adjustment) {
            const { injectedPluginName } = this
            this[injectedPluginName].adjust(adjustment)
        }
    }
}
</script>

<style lang="scss" scoped></style>