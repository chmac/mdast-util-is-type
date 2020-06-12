# mdast-util-is-type

Simple helpers to resolve MDAST types. Includes typescript types.

These functions are incredibly simple, for example:

```typescript
export const isHeading = (node: any): node is Heading => {
  return node.type === 'heading';
};
```

They can be used as type predicates. They're all single exports and so should
play nicely with tree shaking tools.
