# generator-atomic-reactor
A Yeoman generator for React components under a similar Atomic design principle

Since this is for SPAs and React components, I believe that only the *atom*, *molecule* and *organism* are enough to build the App. You can find more about this on my post [here](http://cassioscabral.github.io/writing/yeoman-generator-just-like-rails-scaffold/)

# Run

`yo atomic-reactor:atom my_component`

`yo atomic-reactor:molecule my_component`

`yo atomic-reactor:organism my_component`

```
create src/app/organisms/my_component/MyComponent.jsx

create src/app/organisms/my_component/stylesheets/my_component.scss

create src/app/organisms/my_component/tests/my_component.js
```
