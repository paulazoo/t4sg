function desc(a, b, orderBy) {
  if (orderBy != null) {
    if (orderBy.includes('.') === true) {
      // nested property
      const allOrderBys = orderBy.split('.');

      if (
        b[allOrderBys[0]][allOrderBys[1]] < a[allOrderBys[0]][allOrderBys[1]]
      ) {
        return -1;
      }
      if (
        b[allOrderBys[0]][allOrderBys[1]] > a[allOrderBys[0]][allOrderBys[1]]
      ) {
        return 1;
      }
      return 0;
    }
    // flattened property
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}
export default getSorting;
