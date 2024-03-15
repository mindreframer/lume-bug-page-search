// how can we make plugins work for VSCode and Deno (Lumi)?
// import typography from "npm:@tailwindcss/typography";

const config = {
    content: [
        './src/*.{html,js,vto,md}',
        './src/**/*.{html,js,vto,md}',

    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
export { config }