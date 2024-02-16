import { type ReactElement } from 'react'
import Layout_Root from 'components/Layout_Root'
/** Add your relevant code here for the issue to reproduce */
const Page_Home = () => {
  return (
    <div className='mx-auto w-full h-screen flex flex-col justify-center'>
      <div className='self-center text-center mb-6'>
        <h1>Hello, Yes, I'm an H1</h1>
        <h2>But I'm not Gilroy like I should be</h2>
      </div>
      <div className='self-center'>
        <p>
          In the vast expanse of the digital typography landscape, there lies a font named Gilroy,
          whose elegance and versatility captivate the hearts of designers and typographers alike.
          "Oh, to be Gilroy," muses a stray letterform, adrift in the sea of Arial and Times New
          Roman, yearning for the distinction and grace that Gilroy embodies. Gilroy, with its
          geometric precision and modern flair, speaks in whispers of sophistication and bold
          declarations of style.
        </p>

        <p>
          As the sun casts its golden hues over the valley of vector paths and bezier curves, our
          humble glyph dreams of transformation. It imagines itself.
        </p>
        <p>
          "To be Gilroy," it sighs, "is to be more than a font. It is to be an experience, a journey
          through space and weight, from the thinnest hairline to the boldest black." In this dream,
          it is not just seen but felt, evoking emotions and capturing imaginations, a timeless
          beauty in a world of fleeting trends.
        </p>
      </div>
    </div>
  )
}

//Set page layout
Page_Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Root>{page}</Layout_Root>
}

export default Page_Home
