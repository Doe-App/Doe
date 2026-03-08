import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '../themed-text';
import { ThemedView } from '../themed-view';

type ButtonProps = {
  onPress: () => void;
  title: string;
};

export function Button({ onPress, title }: ButtonProps) {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <ThemedView style={[styles.button, pressed && styles.pressed]}>
          <ThemedText type="link">{title}</ThemedText>
        </ThemedView>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF', // A standard blue for buttons
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
