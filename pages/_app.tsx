import { useDarkMode } from '@limwa/react-hooks';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  const controller = useDarkMode();

  return (
    <div className={controller.activeTheme}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
