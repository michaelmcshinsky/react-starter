# Style Guide

The following import structure in the main `index.scss` is to properly override styling as we go from general styling down to unique instances. A page or view and it's namespaced ID can be considered more specific than the component styling, hence the reason we import it later.

## Sections

1. Constants
2. Typography
3. Vendors <sup>1</sup>
4. Components
5. Layouts
6. Partials
7. Views

<hr/>

<small>[1] - Vendors are external libraries that we want to conform to our styling standards before releasing them to other subsequent styling standards that are imported next.</small>

### References

[https://google.github.io/styleguide/htmlcssguide.html](https://google.github.io/styleguide/htmlcssguide.html)
[https://primer.style/](https://primer.style/)
[https://learnui.design/blog/mobile-desktop-website-font-size-guidelines.html](https://learnui.design/blog/mobile-desktop-website-font-size-guidelines.html)
[https://type-scale.com/](https://type-scale.com/)
