import Header from './Header'

const Index = (props) => {
  return (
    <div className="main-layout">
      <Header />
      {/* <Loading loading={loading} /> */}
      <div className="wp-main">{props.children}</div>
    </div>
  )
}

export default Index
