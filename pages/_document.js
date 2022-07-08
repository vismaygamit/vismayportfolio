// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html>
      <Head>
      <link href="img/favicon.png" rel="icon" />
        <link href="img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="vendor/glightbox/js/glightbox.min.js"></script>
        <script src="vendor/php-email-form/validate.js"></script>
        <script src="vendor/purecounter/purecounter.js"></script>
        <script src="vendor/swiper/swiper-bundle.min.js"></script>
        <script src="vendor/typed.js/typed.min.js"></script>

        <script src="js/main.js"></script>
      </body>
    </Html>
  )
}
