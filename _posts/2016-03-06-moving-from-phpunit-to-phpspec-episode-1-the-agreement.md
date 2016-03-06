---
layout: post
title: "Moving from PHPUnit to phpspec. Episode 1: The agreement"
---

I've been using [phpspec] in my personal projects for couple of years now. Back then I wasn't test-driving my code yet (:ashamed:) so it was an easy choice. I just picked the tool that everybody was referencing in their blogs and talks<!--more-->.

In the team where I currently work we use [PHPUnit] spiced with [Mockery]. The project that we maintain more often was started a couple of years before the current team members joined and, back then, somebody chose `PHPUnit`. It was probably the right decision to make at that point.

Comes without saying that these test are a valuable resource for us. They allow us to TDD on a daily basis with no major issue and, over the years, they have become an outstanding regression suite.

We really **like** our `PHPUnit` / `Mockery` test suite.

However, as we gained more experience with `phpspec` (and its mocking framework [prophecy]) in our personal life, we started to miss some things on Mondays when we came back to our classic setup. Specially from a TDD and _tests_as_documentation_ perspective (more of this on further posts).

We wanted to give `phpspec` a try, but introducing a new dependency in a business project is different than doing it in short lived, personal ones. A justification in terms of cost and value would be required.

On the other hand one not simply shields a project against evolution and expects that project to succeed in a fast paced changing environment as internet.

A team of professional developers committed with the success of their business must keep the balance between the two worlds.

After discussing for a while we agreed we'd use `phpspec` in the next planned feature, from dev environment to CI, so we could better evaluate pros and cons.

Thankfully, because of our agile process, our releases are quite small. So we accepted we'd refactor that feature's tests using `PHPUnit` if we decided it that moving to `phpspec` wasn't worth it.

That release is already out. In the next two posts I'm going to write about our conclusions regarding value and cost.

[phpspec]: http://phpspec.readthedocs.org/en/latest/
[prophecy]: https://github.com/phpspec/prophecy
[PHPUnit]: https://phpunit.de/
[Mockery]: https://github.com/padraic/mockery

*[JIT]: Just In Time
*[CI]: Continous Integration
*[TDD]: Test Driven Development
