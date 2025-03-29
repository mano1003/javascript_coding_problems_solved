/*
Imagine there is an unknown latin-based language that has reordered the alphabet.
Given an array of words in order and k which is the total unique characters,
determine the order of character for this language. If no valid ordering is possible, return empty.

Input:  arr = [“caa”, “aaa”, “aab”], k = 3
Output: "cab"


"abcdefgh..."

"ant", "bat"


1.) Create a graph. Directed graph. Each node represents one character, and the edges represent the orderings of characters

    c  ->  a  ->  b
    
    Adjacency list
    
2.) Check if there are cycles

	DFS

3.) We perform topological sorting to the graph

Input:
     a -> e -> f ----v
           \-> g   -> s

    1.) Has to be directed
    2.) Can't have cycles
    
Output:
	Nodes of the graph in order based off of the edges

  a,e,f,g,s

[
'c' -> ['a']
'a' -> ['b']

]

*/


function orderedAlpha(arr, k) {
    adj = []
    
    // Loop through all words up to arr.length - 1
    for (let i = 0; i < arr.length - 1; i++) {
      let word1 = arr[i]
      let word2 = arr[i + 1]
      
      let j = 0
      // Loop through each char and check if they are different
      while (j < word1.length && j < word2.length) {
        if (word1[j] !== word2[j]) {
          if (!adj[word1[j].contains(word2[j])])
            // If different add first char points to 2nd char
              adj[word1[j]].push(word2[j])
          break
        }
        
        j++
      }
    }
    
    // Check cycle
    let visited = []
    for (let index of Object.keys(adj)) {
        if (checkCycle(adj, visited, index)) {
        return ""
      }
    }
    
    visited = []
    let stack = []
    // Topological Sort
    for (let index of Object.keys(adj)) {
        topologicalSort(adj,visited, index, stack)
    }
    
    // Create string from stack
  }
  
  function checkCycle(adj, visited, index) {
    visited[index] = true
    
    // Loop through each char in current index
    for (let char of adj[index]) {
      if (!visited[char]) {
        //Continue our DFS search
        checkCycle(adj, visited, char)
      }
      else {
        // Cycle detected
        return true
      }
    }
    
    return false
  }
  
  function topologicalSort(adj, visited, index, stack) {
    // TODO
    // Returns string in order
    // Also a recursive algorithm
  }