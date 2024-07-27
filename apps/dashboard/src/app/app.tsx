// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@nx-monorepo/design-system';
// TODO: not sure why I need to use `/index.js` here, NX is doing something weird
import { css } from '../styled-system/css/css';
import { VStack, Box } from '../styled-system/jsx';

export function App() {
  return (
    <VStack minH="100vh" justifyContent="center">
      <Box
        animationDuration="2000ms"
        animationName="fade-in"
        animationTimingFunction="ease-in"
        backgroundColor="nice-yellow"
        borderRadius="50%"
        height="44"
        width="44"
      />
      <Box className={css({ bg: 'red.300' })}>
        <Button>Primary</Button>
      </Box>
    </VStack>
  );
}

export default App;
