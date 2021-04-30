import Layout from '../components/Layout'
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <div className="ml-5">
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp
