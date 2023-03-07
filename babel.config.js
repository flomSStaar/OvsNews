module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@store': './src/store',
        },
      },
    ],
    'babel-plugin-styled-components',
  ],
};
