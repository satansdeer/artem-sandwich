export const LayoutWithHeader = ({children}) => {
  <>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Articles</a>
    </nav>
    {children}
  </>
}