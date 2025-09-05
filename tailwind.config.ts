import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: colors.blue[950],
                    secondary: colors.teal[600],
                    textPrimary: colors.teal[600],
                    textSecondary: colors.teal[300],
                },
            },
        },
    },
    plugins: [
        function ({ addUtilities, theme }) {
            const newUtilities = {
                '.link-style': {
                    'color': theme('colors.brand.textPrimary'),
                    'padding-left': theme('spacing.4'),
                    'padding-right': theme('spacing.4'),
                    '&:hover': {
                        'color': theme('colors.brand.textSecondary'),
                    },
                },
            };

            // enable hover usage
            addUtilities(newUtilities, ["responsive", "hover"])
        },
    ],
};

export default config;
