import {
  Blockquote,
  Break,
  Code,
  Definition,
  Delete,
  Emphasis,
  Footnote,
  FootnoteDefinition,
  FootnoteReference,
  Heading,
  HTML,
  Image,
  ImageReference,
  InlineCode,
  Link,
  LinkReference,
  List,
  ListItem,
  Paragraph,
  Root,
  Strong,
  Table,
  TableCell,
  TableRow,
  Text,
  ThematicBreak,
  YAML,
} from 'mdast';

export const isRoot = (node: any): node is Root => {
  return node.type === 'root';
};

export const isParagraph = (node: any): node is Paragraph => {
  return node.type === 'paragraph';
};

export const isHeading = (node: any): node is Heading => {
  return node.type === 'heading';
};

export const isThematicBreak = (node: any): node is ThematicBreak => {
  return node.type === 'thematicBreak';
};

export const isBlockquote = (node: any): node is Blockquote => {
  return node.type === 'blockquote';
};

export const isList = (node: any): node is List => {
  return node.type === 'list';
};

export const isListItem = (node: any): node is ListItem => {
  return node.type === 'listItem';
};

export const isTable = (node: any): node is Table => {
  return node.type === 'table';
};

export const isTableRow = (node: any): node is TableRow => {
  return node.type === 'tableRow';
};

export const isTableCell = (node: any): node is TableCell => {
  return node.type === 'tableCell';
};

export const isHtml = (node: any): node is HTML => {
  return node.type === 'html';
};

export const isCode = (node: any): node is Code => {
  return node.type === 'code';
};

export const isYAML = (node: any): node is YAML => {
  return node.type === 'yaml';
};

export const isDefinition = (node: any): node is Definition => {
  return node.type === 'definition';
};

export const isFootnoteDefinition = (node: any): node is FootnoteDefinition => {
  return node.type === 'footnoteDefinition';
};

export const isText = (node: any): node is Text => {
  return node.type === 'text';
};

export const isEmphasis = (node: any): node is Emphasis => {
  return node.type === 'emphasis';
};

export const isStrong = (node: any): node is Strong => {
  return node.type === 'strong';
};

export const isDelete = (node: any): node is Delete => {
  return node.type === 'delete';
};

export const isInlineCode = (node: any): node is InlineCode => {
  return node.type === 'inlineCode';
};

export const isBreak = (node: any): node is Break => {
  return node.type === 'break';
};

export const isLink = (node: any): node is Link => {
  return node.type === 'link';
};

export const isImage = (node: any): node is Image => {
  return node.type === '';
};

export const isLinkReference = (node: any): node is LinkReference => {
  return node.type === 'linkReference';
};

export const isImageReference = (node: any): node is ImageReference => {
  return node.type === 'imageReference';
};

export const isFootnote = (node: any): node is Footnote => {
  return node.type === 'footnote';
};

export const isFootnoteReference = (node: any): node is FootnoteReference => {
  return node.type === '';
};
