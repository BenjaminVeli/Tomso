module.exports = {
    siteUrl: 'https://tomso.vercel.app',
    generateRobotsTxt: true,
    exclude: [], // No excluir ninguna ruta
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }, // Permitir todas las rutas para todos los agentes de usuario
      ],
    },
    additionalPaths: async (config) => [
      await config.transform(config, '/#hero'),
      await config.transform(config, '/#services'),
      await config.transform(config, '/#process'),
    ],
  };