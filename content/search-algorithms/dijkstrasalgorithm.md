---
title: "Dijkstra's Algorithm"
metaTitle: "Dijkstra's Algorithm"
metaDescription: "Dijkstra's Algorithm"
---

# WHAT: The problem

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

# HOW does Dijkstra's Algorithm Work?

Dijkstra's algorithm will find the **shortest path** from a **Single Source** in an **Edge Weighted digraph** with **non-negative weighs**.

### What do we need to implement Dijkstra's Algorithm?

- Adjacency List/Matrix
- `dist[n]`
- `parent[n]`
- PriorityQueue
- `visited[n]`

### DEMO

[![visual](/visual.png)](https://www.cs.usfca.edu/~galles/visualization/Dijkstra.html)

`youtube:https://www.youtube.com/embed/GazC3A4OQTE`

### What is the Big(O) runtime?

- `𝑂(𝑉^2)`
- `𝑂(𝐸+𝑉)`
- `𝑂(𝐸∗log⁡(𝐸))`
- `𝑂((𝐸∗log⁡(𝐸))+𝑉)`
- `𝑂(𝐸∗𝑉)`

# Real Life Applications

- NoSQL databases - graph databases
- Routing - choose the optimal way of exchanging currencies
- Social Networks - find the degrees of separation between people
- GPS / Maps / SatNav - directions between two points
![applications](/applications.PNG)

# Other solutions to the Shortest Path problem

- Prim’s Algorithms
  - Minimum Spanning Tree (MST)
- Bellman ford
  - Negative weights

## Prim’s Algorithm

Prims algorithm gets you the minimum spanning tree (MST) for a given graph. A tree that connects all nodes while the sum of all costs is the minimum possible.

## Bellman-Ford Algorithm

Unlike Dijkstra's algorithm, Bellman-Ford's algorithm works with **negative weights** too! It also detects a *negative cycle* if any exist, and if none exists, it finds the shortest simple path.
If `graph 𝐺 = (𝑉,𝐸)` contains negative-weight cycle, then some shortest paths may not exist.

# Examples

## Problem A: Shortest Reach

Given an undirected graph and a starting node, determine the lengths of the shortest paths from the starting node to all other nodes in the graph. If a node is unreachable, its distance is -1. Nodes will be numbered consecutively from  to , and edges will have varying distances or lengths.[^1]

![problemA](/problemA.png)

```java
static int[] shortestReach(int n, HashMap<Integer, Integer>[] graph, final int s) {

        boolean[] visited = new boolean[n];

        //initialize distances with infinity
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);

        //initialize priority queue, compare by length
        PriorityQueue<Node> pq = new PriorityQueue<>(Comparator.comparingInt(o -> o.length));

        //initialize source to 0
        pq.add(new Node(s, 0));
        dist[s] = 0;

        while (!pq.isEmpty()) {
            //get the node with shortest distance
            Node v = pq.poll();
            visited[v.id] = true;

            //visit all nodes connected to the current that have not been visited
            HashMap<Integer, Integer> neighbors = graph[v.id];

            neighbors.forEach((w, l) ->
            {
                if (!visited[w]) {
                    //update pq with shortest distance to w
                    if (dist[w] == Integer.MAX_VALUE || v.length + l < dist[w]) {
                        if (dist[w] != Integer.MAX_VALUE) pq.remove(w); //O(n)
                        dist[w] = v.length + l;
                        pq.add(new Node(w, dist[w])); //O(log(n))
                    }
                }
            });
        }
        return dist;
    }
```

[*view full source*](https://bitbucket.org/mimibar/challenges/src/master/HackerRank/Domains/algorithms/graphTheory/accepted/DijkstraShortestReach2.java)

## Problem B: Network Delay Time

There are `N` network nodes, labelled 1 to N.

Given times, a list of travel times as directed edges `times[i] = (u, v, w)`, where `u` is the source node, `v` is the target node, and `w` is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node `K`. How long will it take for all nodes to receive the signal? If it is impossible, return `-1`.[^2]

## Problem C: Cheapest Flights Within K Stops

There are `n` cities connected by `m` flights. Each fight starts from city `u` and arrives at `v` with a price `w`.

Now given all the cities and flights, together with starting city `src` and the destination `dst`, your task is to find the cheapest price from `src` to `dst` with up to `k` stops. If there is no such route, output `-1`. [^3]

![problemC](/problemC.png)

# WHO was Edsger Wybe Dijkstra?

## About Dijkstra

E. W. Dijkstra was a Dutch systems scientist, programmer, software engineer, science essayist, a pioneer in computing science. He was born in 1930 and died in 2002 in the Netherlands. In 1972 he won the ACM's Turing Award acknowledging "Dijkstra's style: his approach to programming as a high, intellectual challenge".
>Simplicity is a prerequisite for reliability

![dijkstra](https://cacm.acm.org/system/assets/0000/3432/072010_CACMpg41_An-Interview.large.jpg?1476779421&1279552189)

## How did he come up with the algorithm?

Dijkstra was relaxing on a café terrace in Netherlands with his fiancée, Maria (Ria) C. Debets, and after a moment of revelation he came up with the solution for the shortest paths problem:

*given a network of roads connecting cities, what is the shortest route between two designated cities?*

in 20 minutes. That's right 20 minutes!! [^4]

[^1]: [Dijkstra: Shortest Reach 2 | HackerRank](https://www.hackerrank.com/challenges/dijkstrashortreach/problem)
[^2]: [Network Delay Time | LeetCode](https://leetcode.com/problems/network-delay-time/)
[^3]: [Cheapest Flights Within K Stops - LeetCode](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
[^4]: [Edsger W. Dijkstra - A.M. Turing Award Laureate](http://amturing.acm.org/award_winners/dijkstra_1053701.cfm)
