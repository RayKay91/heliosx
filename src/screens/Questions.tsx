import { Button } from '../components/Button/Button';
import { Text } from '../components/Text/Text';
import { SelectionBox } from '../components/SelectionBox/SelectionBox';
import { Screen } from '../components/Screen/Screen';

export const Questions = () => {
  return (
    <Screen>
      <Button onPress={() => console.log('lol')}>Hello there</Button>
      <Text>I am some text how are you?</Text>
      <SelectionBox
        options={[
          { id: 1, text: 'Option 1' },
          { id: 2, text: 'Option 2' },
        ]}
      />
    </Screen>
  );
};
