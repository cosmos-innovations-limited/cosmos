
Routing:
  - Parsing the path / part after the domain and showing the appropriate component/ JSX code for that path. ( It's an illusion)
  - Router Package
    - Read Path -> Read config -> Load JSX / components
    - react-router , react-router-dom, react-router-native
  - BrowserRouter / Router (blog/Index2)
    - Wrap the Routing area in BrowserRouter

 (blog/index2)  
  - Route (blog/index2) (switch between pages)
    - (4)[Route path exact JSX] (render ({<h1>home</h1>})) or Component <SomeComponent />
    - <Route path="/" render() {<h1>Rendered via Route</h1>} />
    - exact
      - < Route path="/" exactrender() {<h1>Rendered via Route</h1>} />

 (header2)   
  - Link ( to switch pages without reload)
    - Use <Link> instead of <a> Nth Dimension uses <a> for demo
    - instead of reload it re-renders the parts of the DOM
    - React-router will create the anchor <a> tag and handle the click to prevent defaults.
    - to
      - String ->
        <Link to="/blog">Blog</Link>
      - object ->
        <Link to={pathName:"/blog", hash:"#submit", search:"?qiock-submit=true" }>Blog</Link>

  - Routing related props
    - add console.log to componentDidMount(this.props) in blog/index.js
    - history, location, match
      - match -> gives info about matched router, params
      -location -> search params, hash etc.
      - history -> forward, back , push new routs programmatically

  - withRouter ( Passing router related props down to children) (post1.js & post2.js)
    - {...this.props} or withRouter

  - NavLink (header3.js)
    - used to style the active path
    - use exact so that no two routes are active at same time
    - use activeClassName to override default active class added by NavLink
    - activeStyle={{color: '#fff'}}

Passing Route Parameters: (header4 & posts2)
  - using /:id
  - this.props.match.params.id can retrieve it
  - Wrap the clickable component in to <Link> or Use this.props.histroy.push('/path')

switch
  - tells router that only load one route by wrapping the routes with switch
  - can mix and match

nestedRoutes
  - uses this,props,match.url + :id

Redirect
  - changes the route parameters to automatically load specific route
  - conditional redirect in newpost component
  - can also use history prop to redirect using history.push
  - use Redirect to define Guard for conditionaly redirecting in case of authentication.

404 cases
  - Route without path property will redirect to supplied JSX/component

Loading Routes Lazily
  - only load component when you need it
  - need HOC asyncComponent by passing component path to HOC and then making a request only when navigating to path.

Lazy laoding with react suspense
  - const posts = React.lazy)'../../posts'
  - <Route path="/posts" render(() => <suspense fallback={<div>Loading....</div>}><posts /></suspense>)

baseName="/myapp"
  - BrowserRouter Property for specifying baseURL. 

Lifecycle hooks:  (blog/Index1)
  Creation
    1. Constructor()
    2. (unsafe) componentWillMount() ||
        getDerivedStateFromProps(props, state)
    3. render()
    4. componentDidMount()

  update
    5. (unsafe) componentWillReceiveProps(nextProps) ||
        getDerivedStateFromProps(props, state)
    6. shouldComponentUpdate(nextProps, nextState)
    7. (unsafe) componentWillUpdate(nextProps, nextState)  ||
        getSnapshotBeforeUpdate(prevProps, prevState)
    8. render()
    update all child components
    9. componenetDidUpdate()

  Destroy
    10. componentWillUnMount()
      - generally used where conditional redinering of a component is implemented.
