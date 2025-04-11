/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * Tạo animation
       */
      animation: {
        /** Định nghĩa animation shake */
        shake: "shake 0.5s ease-in-out",
      },
      /**
       * Tạo keyframes
       */
      keyframes: {
        /** Định nghĩa keyframes shake */
        shake: {
          /** Bắt đầu và kết thúc không rung */
          "0%, 100%": { transform: "translateY(0)" },
          /** Rung lên trên */
          "20%, 60%": { transform: "translateY(-5px)" },
          /** Rung xuống dưới */
          "40%, 80%": { transform: "translateY(5px)" },
        },
      },
      /**
       * Tạo màu sắc cho theme
       */
      backgroundImage: {
        /**
         * Tạo màu sắc cho theme
         */
        "bg-gradient":
          "linear-gradient(to right,  #EEEDF3 0%, #EFEEF4 7%,   #EFECF3 14%,   #F0EDF4 21%,   #F2ECF4 29%,   #EFECF3 36%,   #EEEBF6 43%,   #EBEAF9 50%,   #E8E8F8 57%,   #E6E7F8 64%,   #E4E5F9 71%,   #E3E4F8 79%,   #E2E3F8 86%,   #E0E0FC 93%,   #DCDFFC 100%);",
      },
      /**
       * Tạo màu sắc cho theme
       */
      colors: {
        /**
         * Tạo màu sắc cho theme
         */
        "color-bg-primary": "#18181B",
        "color-bg-strong": "#E4E4E7",
        "color-text-placeholder": "#71717A",
        "color-inverse": "#18181B",
        "color-border": "#E4E4E7",
        "color-bg-elevated": "#F4F4F5",
        "color-text": "#09090B",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        /**
         *  Tạo màu sắc cho border
         */
        border: "hsl(var(--border))",
        /**
         * Tạo màu sắc cho input
         */
        input: "hsl(var(--input))",
        /**
         * Tạo màu sắc cho ring
         */
        ring: "hsl(var(--ring))",
        /**
         * Tạo màu sắc cho chart
         */
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      /**
       * Tạo font-size cho theme
       */
      height: {
        15: "60px",
        144: "572px",
        155: "620px",
        172: "658px",
      },
      /**
       * Tạo font-size cho theme
       */
      fontFamily: {
        /**
         * Tạo font-size cho theme
         */
        robotoSerif: ["Roboto Serif", "serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      /**
       * Tạo các utilities mới
       */
      const NEW_UTILITIES = {
        /** Thiết lập thanh cuộn mỏng cho Firefox */
        ".scrollbar-thin": {
          /** Chỉ Firefox hỗ trợ */
          scrollbarWidth: "thin",
          /** Màu thanh cuộn cho Firefox */
          scrollbarColor: "#7217bd3f transparent",
        },
        /** Tùy chỉnh thanh cuộn cho Chrome, Safari, Edge (Webkit browsers) */
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            /** Độ dày của thanh cuộn */
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            /** Nền của track thanh cuộn */
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            /** Màu của thanh cuộn */
            backgroundColor: "#7217bd3f",
            /** Bo góc thanh cuộn */
            borderRadius: "4px",
          },
        },
        /** Giữ không gian cho scrollbar khi nó xuất hiện */
        ".scrollbar-gutter": {
          /** Tạo không gian cho thanh cuộn */
          scrollbarGutter: "stable",
        },
        ".mask-rounded-oval": {
          /** Đặt vị trí mask */
          "mask-position": "center",
          /** Không lặp lại */
          "mask-repeat": "no-repeat",
          /** Mask có kích thước vừa khít */
          "mask-size": "contain",
          "mask-image":
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' fill='none'%3E%3Cpath fill='%23000' d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0z'/%3E%3C/svg%3E\")",
        },
      };
      addUtilities(NEW_UTILITIES, ["responsive", "hover"]);
    },
    require("tailwindcss-animate"),
  ],
};
