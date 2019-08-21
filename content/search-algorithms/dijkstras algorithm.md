---
title: "Dijkstra's Algorithm"
metaTitle: "Dijkstra's Algorithm"
metaDescription: "Dijkstra's Algorithm"
---

How to find the shortest path

## WHAT: The problem

Imagine how to get from old &lt;epam&gt; Mexico to the new building

![route](/route1.jpg)

The problem is that there might be many different combinations of paths and subpaths one might take.

In graph theory,
> the shortest path problem is the problem of finding a path between two vertices (or nodes) in a graph such that the sum of the weights of its constituent edges is minimized.

## Graph Theory Concepts

To be able to tackle shortest path problem, there are some things we need to know before going any further.

Graphs are made up of **edges** and **vertices** as seen below.

![graph](/graph.png)

Graphs can be classified in the following depending on their characteristics:

- Direction
  - (un)Directed (digraph)
- Cycles
  - Acyclic
  - Negative cycles
- Weight
  - (un)Weighted
  - (non-)Negative negative weights

The way we visit or process each vertex in the graph is defined by the traversal or search algorithm:

- Breadth-First Search (BFS)
- Depth-First Search (DFS)

## HOW does Dijkstra's Algorithm Work?

Dijksra's algorithm will find the **shortest path** from a **Single Source** in an **Edge Weighted digraph** with **non-negative weighs**.

### What do we need to implement Dijkstra's Algorithm?

- Adjacency List/Matrix
- `dist[n]`
- `parent[n]`
- PriorityQueue
- `visited[n]`

### DEMO

[![visual](/visual.png)](https://www.cs.usfca.edu/~galles/visualization/Dijkstra.html)

# About Dijkstra

## WHO was Edsger Wybe Dijkstra?

E. W. Dijkstra was a Dutch systems scientist, programmer, software engineer, science essayist, a pioneer in computing science. He was born in 1930 and died in 2002 in the Netherlands. In 1972 he won the ACM's Turing Award acknowledging "Dijkstra's style: his approach to programming as a high, intellectual challenge".
>Simplicity is a prerequisite for reliability

![dijkstra](https://cacm.acm.org/system/assets/0000/3432/072010_CACMpg41_An-Interview.large.jpg?1476779421&1279552189)

## How did he come up with the algorithm?

Dijkstra was relaxing on a café terrace in Netherlands with his fiancée, Maria (Ria) C. Debets, and after a moment of revelation he came up with the solution for the shortest paths problem:

*given a network of roads connecting cities, what is the shortest route between two designated cities?* 

in 20 minutes. That's right 20 minutes!! [^acm]

[^acm]: [Edsger W. Dijkstra - A.M. Turing Award Laureate](http://amturing.acm.org/award_winners/dijkstra_1053701.cfm)
