import { useState } from 'react';
import { StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

type Props = {
  onSelect: (image: ImageSource) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSource[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);

  return (
    <FlatList
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 40,
    height: 40,
  },
});
