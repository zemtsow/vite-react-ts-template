import { useTranslation } from "react-i18next"

const NotFound = () => {
  const { t } = useTranslation()
  // const head: Application.MetaTag = {
  //   title: 'ArtiLoops - 404',
  //   meta: {
  //     keywords: 'notfound',
  //     descripton: 'Artists portal',
  //     ogTitle: 'ArtiLoops',
  //     ogDescription: 'Artists portal',
  //     ogImage: './logo.png',
  //     ogUrl: 'artiloops.com'
  //   }
  // }

  return (
    // <MetaTags {...head}>
    <div className='w-full flex flex-col justify-center items-center my-[10%]'>
      <div className="mx-auto flex flex-col items-center select-none pointer-events-none">
      <h1 className='text-black text-6xl font-bold'>404</h1>
      <h2 className='text-gray-200 text-xl'>{t("notFound")}</h2>
      </div>
    </div>
    // </MetaTags>
  )
}

export default NotFound