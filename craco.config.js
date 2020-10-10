module.exports = {
  babel: {
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          style: "css", // or 'css'
        },
      ],
    ],
  },
};
