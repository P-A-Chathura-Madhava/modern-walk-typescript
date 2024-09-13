# <- Tanstack Implementation ->

- Add tanstack query

## Metadata

| Query                                        | Value                                                                                      |
| -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Destination Branch                           | `feature/tanstack-query`                                                                            |
| Design spec                                  |                                                                                  |
| Change type                                  | `New Feature`  |
| Should reviewers manually test your changes? | `No`                                                                        |

## Visual Aid

## Additional Information <Delete unnecessary points>

### How Has This Been Tested?

I tested this manually

### Does similar functionality already exist in the codebase? If so, why isn’t this functionality reused?

Yes, Redux is exists in this codebase. I implement this because it's good for fast fetching and sending API requests.

### Files with major changes / what is worth paying more attention to?

- index.tsx
- Home.tsx
- MensProducts.tsx
- WormensProducts-tsx
- useGetMensProducts.ts
- useGetWomensProducts.ts
- useGetMixedProducts.ts
- store.ts

## Checklist:

- [ ] My code follows the style guidelines of this project.
- [ ] I have performed a self-review of my code.
- [ ] I unit tested new methods.
- [ ] I have commented my code, particularly in hard-to-understand areas.
- [ ] My changes require changes in documentation and I have made the corresponding changes.