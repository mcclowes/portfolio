const createHtmlPages = (markdown, image) => {
  return markdown
    .split("\\page")
    .map((page, pageCount) => {
      return pageCount === 0
        ? `
        <div class="page" id="p${pageCount + 1}">
          <img src="${image}"/>
          
          <div class="page-content">
            ${page}
          </div>
        </div>`
        : `
        <div class="page" id="p${pageCount + 1}">
          <div class="page-content">
            ${page}
          </div>
        </div>`;
    })
    .join(" ");
};

export default createHtmlPages;
