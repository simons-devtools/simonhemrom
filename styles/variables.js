import { css } from "styled-components";

const variables = css`
  :root {
    --white: #e6f1ff;
    --green: #64ffda;
    --navy: #0a192f;
    --dark-navy: #020c1b;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --slate: #8892b0;
    --dark-slate: #495670;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --green-tint: rgba(100, 255, 218, 0.1);
    --font-sans: "Poppins", "Roboto", sans-serif;
    --font-robo: "Roboto", sans-serif;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 24px;
    --nav-height: 100px;
    --border-radius: 4px;
    --nav-scroll-height: 70px;
    --translateX: translateX(-5px);
    --translateY: translateY(-5px);
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export default variables;
