import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={320}
    height={320}
    viewBox="0 0 320 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="160" cy="160" r="160" />
  </ContentLoader>
)

export default Skeleton