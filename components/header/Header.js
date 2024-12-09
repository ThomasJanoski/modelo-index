class Header extends Component {
   links;

   constructor(parent_selector, position, ...links) {
      super(parent_selector, position);
      this.links = links;
   }

   to_node() {
      let node = document.createElement('header');

      let html_links = "";

      node.innerHTML = `
         <h1 class="header__pageTitle">Title</h1>
         <nav class="header__navigation">
            <ul class="header__navigation__list">
               ${html_links}
            </ul>
         </nav>
      `
      return node;
   }
}