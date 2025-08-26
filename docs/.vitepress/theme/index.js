// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import FeatureCards from "../components/FeatureCards.vue";
import Card from "../components/Card.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('FeatureCards', FeatureCards);
    app.component('Card', Card);
  }
};
