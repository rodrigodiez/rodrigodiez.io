---
layout: post
title: phpspec costs

published: false
---


## Cost

Introducing a new testing tool might seem like an almost costless action but is not. As soon as we started thinking about it, we identified several

### Tests migration
Upfront migration of `PHPUnit` tests to `phpspec` was instantly discarded. Not only it'd take plenty of time but it'd be risky to cover all existing code with new tests in a single batch of work as we could introduce false positives and missing tests that would manifest far in the future.

Lack of value in migrating tests for code that probably won't be modified in the mid term was another argument against a full migration.

We agreed that any modification to a class covered by `PHPUnit` tests would mean migrating all tests of that class to `phpspec`. That way we'd migrate tests bit by bit when needed, _Just in time_. We'd also prevent developers from going back and forth between two test suites when coding a new feature that integrates with existing code. Context switching is definitely something we are against.

### Suites co-existance
After we accepted the fact that `PHPUnit` and `phpspec` would co-exist in the project for an unknown period of time we agreed the convenience of bundling the execution of both suites in development environments. Not doing so would mask issues during development time.

Imagine two classes `Foo` and `Bar` covered with `PHPUnit` tests. `Bar` is a collaborator of `Foo`.

{% highlight php %}
<?php
class Foo
{
    // ... //

    public function speak()
    {
        return $this->bar->greet();
    }
}

class Bar
{
    public function greet()
    {
        return "Hello everybody!";
    }
}

{% endhighlight %}

Imagine we need to modify `Bar`. We'd migrate it's tests to `phpspec` and start refactoring

{% highlight php %}
<?php
class Bar
{
    //public function greet()
    public function talk()
    {
        return "Hello everybody!";
    }
}
{% endhighlight %}

At this point `Foo` is broken. It's tests won't pass and since we were refactoring `Bar` we could easily forget to run `PHPUnit` before pushing the code.

Again, our appetite for context switching is zero so we'd need to find a way to enforce both suites to run in dev and CI environments.


## Value

### Code generation

### Readability

### Better mocks
