const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const ENVS = [["local"], ["development", "dev"], ["staging", "stage", "stg"], ["production", "prod"]];

const augmentEnv = (env) => {
  if (!env) {
    env = {};
  }
  let matchingEnv = ENVS.find((nodeEnv) => nodeEnv.some((name) => env.NODE_ENV === name || env[name]));
  if (!matchingEnv) matchingEnv = ENVS[0];
  env.NODE_ENV = matchingEnv[0];
  env[matchingEnv[matchingEnv.length - 1]] = true;
  env.mode = env.local ? "development" : "production";
  return env;
};

const rootDir = path.resolve(__dirname);
const publicDir = path.resolve(rootDir, "public");
const srcDir = path.resolve(rootDir, "src");
const distDir = path.resolve(rootDir, "dist");

const extensions = [".tsx", ".ts", ".js"];
const mainFields = ["module", "jsnext:main", "webpack", "browser", "main"];

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(publicDir, "index.html"),
    inject: "body",
    favicon: path.resolve(publicDir, "favicon.ico"),
  }),
  new NodePolyfillPlugin(),
];

const stylesHandler = "style-loader";

const babelLoader = (env) => ({
  test: /\.[tj]sx?$/,
  include: [path.resolve(rootDir, "public"), path.resolve(rootDir, "src")],
  use: [
    {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        cacheIdentifier: env.mode,
        envName: env.mode,
        retainLines: !!env.local,
        configFile: path.resolve(rootDir, "babel.config.js"),
      },
    },
  ],
});

const cssLoader = {
  test: /\.css$/i,
  use: [stylesHandler, "css-loader"],
};

const imageLoader = {
  test: /\.(?:ico|gif|png|jpe?g)$/i,
  type: "asset/resource",
};

const fontLoader = {
  test: /\.(woff2?|eot|[ot]tf)$/,
  type: "asset/inline",
};

const svgLoader = {
  test: /\.svg$/,
  use: ["@svgr/webpack", "url-loader"],
};

const devTools = {
  devtool: "cheap-module-source-map",
  devServer: {
    static: {
      directory: publicDir,
    },
    compress: true,
    port: 3000,
    allowedHosts: "all",
    client: {
      logging: "warn",
      overlay: false,
    },
    historyApiFallback: true,
    https: true,
  },
};

const prodOptimization = {
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
  },
};

module.exports = (env) => {
  env = augmentEnv(env);
  return [
    {
      mode: env.mode,
      target: "web",
      context: srcDir,
      entry: {
        app: [require.resolve("regenerator-runtime/runtime"), path.resolve(srcDir, "index")],
      },
      output: {
        path: distDir,
        publicPath: "",
        filename: env.local ? "public/js/[name].js" : "public/js/[name].[chunkhash:8].js",
        assetModuleFilename: "public/assets/[hash][ext][query]",
      },
      resolve: {
        extensions,
        mainFields,
        // TODO: [Check if this works for older browsers]
        fallback: {
          fs: false,
          path: false,
          url: false,
          module: false,
        },
      },
      plugins: [
        env.local && new ReactRefreshPlugin(),
        new webpack.DefinePlugin({
          "process.platform": JSON.stringify(process.platform),
          "process.env": JSON.stringify({
            MAINTENANCE: false,
            NODE_ENV: env.NODE_ENV,
            BASE_URL: env.NODE_ENV === "production" ? "http://127.0.0.1:8000" : "http://127.0.0.1:8000",
          }),
        }),
        ...plugins,
      ].filter(Boolean),
      module: {
        rules: [babelLoader(env), cssLoader, imageLoader, fontLoader, svgLoader],
      },
      ...(env.local ? devTools : prodOptimization),
    },
  ];
};
