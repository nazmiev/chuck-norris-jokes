import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={518}
    height={212}
    viewBox="0 0 518 212"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="9" ry="9" width="518" height="212" />
  </ContentLoader>
)

export default Skeleton