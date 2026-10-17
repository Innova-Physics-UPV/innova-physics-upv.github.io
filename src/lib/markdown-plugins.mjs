// Plugins for Sätteri, Astro 7's Markdown pipeline, used by the research
// pages. Plain objects in Sätteri's plugin shape, so no extra package.
import katex from 'katex';

/**
 * Math, rendered when the site builds: `$…$` inline and `$$…$$` as a block
 * become KaTeX's HTML (with MathML for screen readers). No client JavaScript;
 * the page loads KaTeX's stylesheet and fonts from the package. The HTML goes
 * back in as raw text with MDX expressions off, so its braces are never read
 * as JSX: the same form works in .md and .mdx.
 */
export const katexMath = {
  name: 'innova-katex',
  inlineMath(node, ctx) {
    ctx.replaceNode(node, { raw: katex.renderToString(node.value, { throwOnError: false }), mdxExpressions: false });
  },
  math(node, ctx) {
    ctx.replaceNode(node, {
      raw: `<div class="math-display">${katex.renderToString(node.value, { displayMode: true, throwOnError: false })}</div>`,
      mdxExpressions: false,
    });
  },
};

/**
 * A picture with a title becomes a figure with a CERN Courier caption:
 * `![alt](./plot.webp "Beam envelope. Simulated in RF-Track.")` gives the
 * first sentence in bold, then the rest. A picture without a title stays a
 * plain image.
 */
export const captionedFigures = {
  name: 'innova-figures',
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const children = node.children.filter((c) => !(c.type === 'text' && !c.value.trim()));
      if (children.length !== 1) return;
      const img = children[0];
      if (img.type !== 'element' || img.tagName !== 'img' || !img.properties?.title) return;
      const title = String(img.properties.title);
      const cut = title.indexOf('. ');
      const lead = cut === -1 ? title : title.slice(0, cut + 1);
      const rest = cut === -1 ? '' : title.slice(cut + 2);
      const { title: _drop, ...properties } = img.properties;
      ctx.replaceNode(node, {
        type: 'element',
        tagName: 'figure',
        properties: { className: ['prose-figure'] },
        children: [
          { ...img, properties },
          {
            type: 'element',
            tagName: 'figcaption',
            properties: { className: ['caption', 'prose-caption'] },
            children: [
              { type: 'element', tagName: 'strong', properties: {}, children: [{ type: 'text', value: lead }] },
              ...(rest ? [{ type: 'text', value: ` ${rest}` }] : []),
            ],
          },
        ],
      });
    },
  },
};

/**
 * A table in prose scrolls sideways in its own frame on a narrow screen,
 * instead of widening the page. The frame is a named region a keyboard can
 * reach, so its hidden columns can be scrolled into view.
 */
export const scrollingTables = {
  name: 'innova-tables',
  element: {
    filter: ['table'],
    visit(node, ctx) {
      ctx.wrapNode(node, {
        type: 'element',
        tagName: 'div',
        properties: { className: ['prose-table'], tabIndex: 0, role: 'region', ariaLabel: 'Table' },
        children: [],
      });
    },
  },
};
