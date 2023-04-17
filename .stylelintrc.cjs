module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    // 用于排序
    "stylelint-config-hudochenkov/full",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "value-list-comma-space-after": "always",
  },
};
