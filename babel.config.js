module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'], // 👈 si usas Expo
        plugins: [
            'react-native-reanimated/plugin', // 👈 siempre al final
        ],
    };
};
