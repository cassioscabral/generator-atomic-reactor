# generator-atomic-reactor

A Yeoman generator for React components under a similar Atomic design principle

Since this is for SPAs and React components, I believe that only the *atom*, *molecule* and *organism* are enough to build the App. You can find more about this on my post [here](http://cassioscabral.github.io/writing/yeoman-generator-just-like-rails-scaffold/)

To match the folder organization from this great generator [react-webpack](https://github.com/newtriks/generator-react-webpack) I made that the files were generated inside the `src/components` folder so it will be fewer steps to integrate.
# Installation

```
$ npm install -g generator-atomic-reactor
```

# Setup

```
$ yo atomic-reactor
```

# Run generators

```
$ yo atomic-reactor:atom my_component`

$ yo atomic-reactor:molecule my_component

$ yo atomic-reactor:organism my_component
```

```

$ yo atomic-reactor:organism my_component

create src/components/organisms/my_component/MyComponent.js

create src/components/organisms/my_component/stylesheets/my_component.scss

create src/components/organisms/my_component/tests/my_component.js
```
