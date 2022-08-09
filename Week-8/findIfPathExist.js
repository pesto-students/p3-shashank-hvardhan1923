let validPath = (_, edges, source, destination) => {
  if (source === destination) return true;

  const findPathObj = {};
  for (const [u, v] of edges) {
    if (findPathObj[u] == undefined) findPathObj[u] = new Set();
    if (findPathObj[v] == undefined) findPathObj[v] = new Set();

    findPathObj[u].add(v);
    findPathObj[v].add(u);
  }

  const visited = new Set();

  const dfs = (x, target) => {
    if (visited.has(x) || !(x in findPathObj)) return false;
    visited.add(x);
    const neighbours = findPathObj[x];
    if (neighbours.has(target)) return true;
    return Array.from(neighbours).some((neighbour) => dfs(neighbour, target));
  };

  return dfs(source, destination);
};
