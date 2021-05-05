
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }) {

  return (
    <>

        <div className="mx-5">
          <Component {...pageProps} />
        </div>

    </>
  )
}

export default MyApp

