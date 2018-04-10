# Pyxel Lab

## Introduction

Our team was inspired by the vision of [Bret Victor](http://worrydream.com), that we need a new [humane dynamic medium](https://vimeo.com/115154289) to unlock the full potential of computing for enhancing our capabilities of thinking, learning and communicating. With [Dynamicland](https://dynamicland.org) they've created a compelling prototype to explore how this new medium could look. The goal of Pyxels is to recreate a similar smaller scale setup at the [Media University Stuttgart](https://www.hdm-stuttgart.de/english). We will use the open source library [paper programs](https://paperprograms.org/) as the basis of our installation. Paper programs implements a limited version of the interaction model of Dynamicland running inside of a web browser.

##  Dynamicland

Dynamicland is currently still in the research phase, and we can only get glimpses into their design from their [website](https://dynamicland.org) and demos they post on [Twitter](https://twitter.com/dynamicland1). We believe none the less that it's valuable to start this project. We don't want to wait a few years until they have a version they the think it's stable enough to release. We want to play with this idea of a new medium right now when there are not a lot of things established yet, and there is a lot of room to experiment. The implementation we are developing is only a means to explore new modes of computing. Once Dynamicland is publicly available, we can switch over to their system, and the things we've learned will be still valuable. The long-term scope of Dynamicland is also extremely vast. There is space for a lot of different people working on a similar vision independently trying out different approaches.

## Humane dynamic medium

We haven't specified yet what we understand by the term "humane dynamic medium". Defining it is very important to set the scope and nature of our project. We want to use the mission statement on the website of Dynamicland to break down the idea and specify how each aspect will be reflected in Pyxel Lab. The following is only our understanding from what we can gather online about Dynamicland and the team behind it might have intended things differently.

> Dynamicland is a **communal computer,** <br>
> designed for **agency, not apps,** <br>
> where people can **think like whole humans.** <br>
> It's the next step in our mission to <br>
> incubate a **humane dynamic medium** <br>
> whose full power is accessible to all people.

### communal computer

The goal is to create a space for people that enables them to collaborate and learn from each other in an environment where every physical object has the added abilities of a fully functional computer. The physical world naturally enables people to work together. It's not about building a product it's about creating a social space that serves its community.

**Actions**

- After every two sprints, we want to invite people to play with Pyxel
Lab
- We should work on the project together "pair programming" style. If this doesn't feel natural, that's a sign that we need to improve the tooling to make our environment better.

### agency, not apps

Dynamicland has a low barrier to entry and feels very approachable. Everything is build up of everyday objects like paper, clay or marbles. Pens, scissors, and staplers are genuinely powerful tools there.  People can learn gradually, the environment leads people down a path from playing, to crafting, to remixing, to programming.
The whole system is transparent people can touch everything and look at what's going on. There is no black box; curiosity is rewarded with a deeper understanding of the system. There is no separation between users and authors. People are empowered to build their own tools or remix existing programs to fit their needs.

**Actions**

- Build an interactive tutorial that explains Pyxel Lab in itself
- Experiment with different programming models, which allow simple composition of independent programs without the need for programming
- Document user tests to learn how people interact with the system

### think like whole humans

A humane dynamic medium embraces the countless ways in which human beings use their minds and bodies,
instead of cramming people into a tiny box of pixels.

**Actions**

- Extend paper programms to allow to use papers to sense objects with the camera
- Add recognition for markers
- Implement new input devices: game pads, keyboards, laser pointer ...

## References
- [The Humane Representation of Thought (Talk)](https://vimeo.com/115154289)
- [Seeing spaces (Comic)](http://worrydream.com/SeeingSpaces/SeeingSpaces.jpg)
