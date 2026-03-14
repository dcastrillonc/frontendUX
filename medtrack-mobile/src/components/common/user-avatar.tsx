import { StyleSheet, View } from "react-native";

import ProfileIcon from "../../assets/profile.svg";

type UserAvatarProps = {
  initials?: string;
};

export function UserAvatar({ initials: _initials }: UserAvatarProps) {
  return (
    <View style={styles.avatar}>
      <ProfileIcon width={54} height={54} />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 40,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#444B57",
  },
});
