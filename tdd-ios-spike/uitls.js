import { useEffect } from 'react';

export default function useScripts(url) {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://use.typekit.net/foobar.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
}
