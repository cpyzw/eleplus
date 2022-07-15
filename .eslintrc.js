module.exports = {
  extends: [require.resolve("zw-standard/eslint-config/vue"), "prettier", "plugin:vue/vue3-recommended"],
  rules: {
    "no-console": ["off"],
    "vue/v-on-style": ["off"],
    "vue/no-duplicate-attributes": ["off"],
  },
}
