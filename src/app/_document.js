import { html, head, body, main, nextScript } from 'next/document'

export default function Document() {
  return html(
    { lang: 'en' },
    head(
      // You can include tags like meta, link for CSS files, etc.
    ),
    body(
      main(),      // This is where your app's content will be injected.
      nextScript() // Scripts injected by Next.js for SPA functionality.
    )
  )
}
