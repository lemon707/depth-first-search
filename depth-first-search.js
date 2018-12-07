function Node(value) {
  this.value = value
  this.children = []
  this.addChild = function(c) {
    this.children.push(c)
  }
  this.visited = false
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)
var node6 = new Node(6)

node1.addChild(node2)
node1.addChild(node3)
node2.addChild(node4)
node2.addChild(node5)
node3.addChild(node6)

//dfs with recursion
function dfs(root, search){
  if(root) {
    if(root.value === search) return true
    else {
      for(var i = 0; i < root.children.length; i++) {
        var result = dfs(root.children[i], search)
        if(result) {
          return true
        }
      }
    }
  }
  return false
}
console.log('dfs recursion', dfs(node1, 3))


//dfs with stack
function dfs2(root, search) {
  var stack = []
  stack.push(root)
  while(stack.length) {
    var node = stack.pop()
    if(!node.visited) {
      node.visited = true
    }
    if(node.value === search) return true
    for(var i = 0; i < node.children.length; i++) {
      if(!node.children[i].visited) {
        stack.push(node.children[i])
      }
    }
  }
  return false
}
console.log('dfs', dfs2(node1, 3))
