import postcssNested from "postcss-nested";
import postcssNesting from "postcss-nesting";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    // Handle Sass-style `&` nesting from libraries like Swiper
    postcssNested(),
    // Support the CSS Nesting spec
    postcssNesting(),
    // Tailwind must run after nesting plugins
    tailwindcss(),
    autoprefixer(),
  ],
};