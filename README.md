# `djvill.github.io`: Dan Villarreal's personal website

*Dan Villarreal*

This repository powers my personal website, <https://djvill.github.io/>.
The website is hosted by GitHub Pages and built using Jekyll.
It is based on Dean Attali's [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) theme.
Most of the code that powers this website is from Beautiful Jekyll; 
I've tweaked around the edges to make it work for me.

This document mostly exists as a how-to for my own reference.

## How to edit website

| If you want to | Then    |
|----------------|---------|
| Edit page content | Edit the corresponding `.md` file in the root directory |
| Add a page | Add a new `.md` file in the root directory, include a [YAML header](https://github.com/daattali/beautiful-jekyll#supported-parameters), and add to top-bar navigation |
| Change styling | Edit [`assets/css/more-css.css`](assets/css/more-css.css) |
| Add JS | Edit [`assets/js/more-js.js`](assets/js/more-js.js) |
| Serve the page locally (view it without pushing to GitHub) | Open `docs/` in Bash, `bundle exec jekyll serve` (or shortcut `jek` on work laptop), in browser `localhost:4000`. FYI, this requires having Ruby installed locally; the needed Ruby gems can be installed with `bundle install` in Bash (only needs to happen once per Beautiful Jekyll update) |
| Change top-bar navigation | Edit `navbar-links:` in [`_config.yml`](_config.yml) |
| Update to latest Beautiful Jekyll | Commit changes, `git pull upstream main`, fix merge conflicts (probably in `_config.yml`), delete `Gemfile.lock`, in Bash `bundle install`, add any additional gems to `Gemfile` if needed |
| Add new local CSS/JS file | Add file(s) to relevant [`assets/`](assets/) subfolder(s), then edit `site-css:` and/or `site-js:` in [`_config.yml`](_config.yml). (If that doesn't work, add to [`_layouts/base.html`](_layouts/base.html) YAML header.) |


FYI, the HTML files are written as [Liquid](https://shopify.github.io/liquid/) templates.
That's where you get things like `{% include nav.html %}`, `{{ content }}`, and even control flow like `{% if page.before-content %}`...`{% endif %}`.



## Other notes 

I've also looked into [`academicpages.github.io`](https://github.com/academicpages/academicpages.github.io), which is more geared toward academic websites (e.g., it can turn data about your papers into pages and do other fun things).
But the upstream hasn't been updated in 3+ years, which required an [extensive process](https://github.com/djvill/academicpages.github.io/commit/7e05ef7473dbdc28a211eae755279d22947070d8) of updating the underlying [Minimal Mistakes Jekyll theme](https://mmistakes.github.io/minimal-mistakes/) and a bunch of JS plugins; 
I even installed Node.js just to [build the JS dependencies](https://mmistakes.github.io/minimal-mistakes/docs/javascript/#build-process).
I also found Minimal Mistakes really hard to use;
it's built on a lot of [SCSS stylesheets](https://mmistakes.github.io/minimal-mistakes/docs/stylesheets/), so for example you can't even edit the CSS directly, you have to look at the CSS compiled from SCSS.
And weirdly, it doesn't have things like [navigation sublinks](https://github.com/mmistakes/minimal-mistakes/issues/1960#issuecomment-440358390).

I want a data-fied version of this site, but `academicpages.github.io` is not the way to do it.
Maybe I can borrow some of its code to make the Beautiful Jekyll-based site better suited to an academic page.
