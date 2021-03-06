const getRangeToRender = ({
    viewportHeight, 
    itemHeight, 
    scrollTop,
    bufferSize = 4
}) => {

  const noItemsToRender = Math.ceil(viewportHeight / itemHeight) + bufferSize
  
  const itemsBeforeScrollTop = parseInt(scrollTop / itemHeight, 10);
  /**
   * buffer is spread before and after the visible area
   * e.g if the buffer is 4, two extra items will be rendered
   * before and after the visible area
   **/ 
  const halfBufferSize = Math.ceil(bufferSize / 2);

  let from = itemsBeforeScrollTop - halfBufferSize
  if (from <= 0) {
    from = 0;
  }

  const to = from + noItemsToRender;
  
  return { from, to }
}

const getRelativeRangeToRender = ({}) => {}


export default getRangeToRender