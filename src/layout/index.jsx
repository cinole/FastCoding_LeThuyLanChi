import Header from './Header'

const index = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {/* <Loading loading={loading} /> */}
      <div className="wp-main">{children}</div>
    </div>
  )
}

export default index
