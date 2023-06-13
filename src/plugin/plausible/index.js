const path = require("path");

module.exports = async function Plausible(context, options) {


    const isProd = process.env.NODE_ENV === "production";
    // ...
    return {
        name: 'plausible',
        getClientModules() {
            return isProd ? [path.resolve(__dirname, "./analytics")] : [];
        },
        injectHtmlTags({content}) {
            const scriptProps = {
                async: true,
                defer: true,
                "data-domain": 'docs.billabear.com',
                src: `https://stats.ha-infra.xyz/info.js`,
              };

            return {
                headTags: [
                    {
                        tagName: "link",
                        attributes: {
                            key: "docusaurus-plugin-plausible-preconnect",
                            rel: "preconnect",
                            href: `https://stats.ha-infra.xyz`,
                        },
                    },
                    {
                        tagName: "script",
                        attributes: {
                            key: "docusaurus-plugin-plausible-script",
                            ...scriptProps,
                        },
                    },
                    {
                        tagName: "script",
                        attributes: {
                            key: "docusaurus-plugin-plausible-custom-events",
                        },
                        innerHTML: `
              window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };
`,
                    },
                ],
            };
        }
    };
};