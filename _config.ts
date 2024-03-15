import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import base_path from "lume/plugins/base_path.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import feed from "lume/plugins/feed.ts";


import jsx from "lume/plugins/jsx.ts";

// i18n
import multilanguage from "lume/plugins/multilanguage.ts";

/// styles
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";


import { config as tailwindConfig } from "./tailwind.plain.js"
console.log(tailwindConfig)

const site = lume(
    { src: "src" }
);

site.use(attributes());
site.use(base_path());

// JSX handling
site.use(jsx(/* Options */));


// MULTILANG handling
site.use(multilanguage({
    languages: ["en", "de"], // Available languages
    defaultLanguage: "en", // The default language
}));
site.use(code_highlight());
site.use(date());
site.use(esbuild());
site.use(nunjucks(/* Options */));
site.use(feed());


// styles
site.use(tailwindcss(
    {
        extensions: [".html", ".vto", ".md", ".js"],
        options: tailwindConfig,

    }
));
site.use(postcss());



// extra care for cash.js
site.copy("assets/cash.min.js");

// site.addEventListener("afterBuild", (event) => {
//     console.log("The build is finished");
//     console.log(event.pages); // The pages that have been build
//     console.log(event.staticFiles); // The files that have been copied
// });

export default site;
