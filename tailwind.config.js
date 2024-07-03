/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xl": "1440px",
      "md": "1300px",
      "s": "600px"
    },
    extend: {
      colors: {
        "success": "#2E7D32",
        "accent": "#0047BB",
        "error": "#D32F2F",
        "primary-bg": "#141414",
        "secondary-bg": "#232324",
        "tertiary-bg": "#202021",
        "modal-bg": "rgba(48, 48, 48, 0.88)",
        "primary-text": "#E1E3E6",
        "secondary-text": "#B0B1B6",
        "tertiary-text": "#76787A",
        "another-text": "#D77556",
        "primary-border": "#363738",
        "accent-disabled": "#424242",
        "blue-hover": "#003182",
        "blue-focused": "#4C7ECF",
        "blue-hover-transparent": "#0047BB",
        "blue-focused-transparent": "#0047BB",
        "error-hover": "#C62828",
        "error-focused": "#E06D6D",
        "error-hover-transparent": "#D32F2F",
        "error-focused-transparent": "#D32F2F",
        "success-hover": "#1B5E20",
        "success-focused": "#6CA46F",
        "success-hover-transparent": "#2E7D32",
        "success-focused-transparent": "#2E7D32",
        "blue": "#0047BB",
        "blue-dark": "#001A72",
        "orange": "#FA4616",
        "white": "#FFFFFF",
        "black": "#101820",
        "green": " #25824F",
        "yellow" : "#FFB649",
        "red": "#DB4546"
       
      }
    },
  },
  plugins: [],
}

