/*

This graph should implement an adjacency list

*/

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(v) {
        if (this.adjList[v]) {
            throw new Error('Vertex already exists');
        }

        this.adjList[v] = [];
    }

    addEdge(v, w) {
        this.adjList[v].push(w);
    }

    // implements breadth first search
    bfs(node) {
        //add your code here
        const visited = [node]
        const queue = [node]

        while(queue.length) {
            const currentVertex = queue.shift()

            if(!visited.includes(currentVertex)) {
                visited.push(currentVertex)
            }
            for(let e of this.adjList[currentVertex]) {
                queue.push(e)
            }
        }

        return visited;
    }

    // implements depth first search
    dfs(node, visited = []) {
        //add your code here
        if(!visited.includes(node)) visited.push(node)

        for(let e of this.adjList[node]) {
            this.dfs(e, visited)
        }

        return visited;
    }

    print() {
        console.log(this.adjList);
    }
}

module.exports = { Graph };

/**
* @example Graph 
    A
 /  |  \
B   D    E
|  /
 C  

*/
