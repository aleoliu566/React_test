export const getData = (payload: {}) => {
  return { type: 'GET_DATA', payload }
}

export const changelistOfColor = (payload: {size: string, datas: Array}) => {
  return { type: 'FILTER_COLOR_FOR_SIZE', payload }
}

export const changelistOfSize = (payload: {color: string}) => {
  return { type: 'FILTER_SIZE_FOR_COLOR', payload }
}

export const initializeColor = (payload: {color: string, datas: Array}) => {
  return { type: 'INITIALIZE_COLOR', payload }
}

export const initializeSize = (payload: {color: string}) => {
  return { type: 'INITIALIZE_SIZE', payload }
}

export const setStock = (payload: {color: string, size: string, datas: Array}) => {
  return { type: 'SET_STOCK', payload }
}

export const setSize = (payload: {size: string}) => {
  return { type: 'SET_SIZE', payload }
}

export const setColor = (payload: { color: string }) => {
  return { type: 'SET_COLOR', payload }
}

export const setPurchaseQuantity = (payload: {quantity: number}) => {
  return { type: 'SET_QUANTITY', payload }
}