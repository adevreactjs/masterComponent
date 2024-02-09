import type { Config } from 'tailwindcss'

const config: Config = {
<<<<<<< Updated upstream
=======
  mode: 'jit',
>>>>>>> Stashed changes
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
<<<<<<< Updated upstream
  ],
=======
  ],  
>>>>>>> Stashed changes
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        grey: '#4E4E4E',
      },
    },
<<<<<<< Updated upstream
=======
    // screens: {
    //   '2xl': {'max': '1535px'},
    //   'xl': {'max': '1378px'},
    //   'lg': {'max': '1023px'},
    //   'md': {'max': '767px'},
    //   'sm': {'max': '639px'},
    // }
>>>>>>> Stashed changes
  },
  plugins: [],
};
export default config
