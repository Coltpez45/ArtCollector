import React from 'react';

/**
 * Create/export a component called Title which uses this static HTML as the template:
 * 
 * <div id="title">
 *   <h1>
 *     The Art Collector
 *   </h1>
 *   <h5>
 *     Search the Harvard Art Museums' Private Collections
 *   </h5>
 * </div>
 */
const Title = () => {
  return(
    <div id="title">
        <h1>The Harvard Art Collector</h1>
        <h5>Search The Harvard Art Museums' Private Collections</h5>
    </div>
  )
}
export default Title;