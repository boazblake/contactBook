export const log = msg => x => {
  console.log(msg, x)
  return x
}

export const fold = x => {
  return x.reduce( (flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten)? fold(toFlatten) : toFlatten)
  }, [])
}
