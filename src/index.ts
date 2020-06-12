import { List, ListItem, Heading } from 'mdast';

export const isListItem = (node: any): node is ListItem => {
  return node.type === 'listItem';
};

export const isList = (node: any): node is List => {
  return node.type === 'list';
};

export const isHeading = (node: any): node is Heading => {
  return node.type === 'heading';
};
